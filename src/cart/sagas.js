import { addItem, removeItem, clearCart } from './actions';
import store from '../store';

export const cartAddItem = (state = {}, key, shipping) => {
  let items;

  if (state.cart.items.some(item => item.number === key)) {
    items = state.cart.items.map(item => {
      if (item.number === key) {
        item.qty += 1;
      }
      return item;
    });
  } else {
    items = [
      ...state.cart.items,
      { ...state.products.items.filter(product => product.number === key)[0], qty: 1 },
    ];
  }

  const subtotal = items.reduce(
    (accum, item) => (accum += item.qty * (item.onSale === true ? item.salePrice : item.price)),
    0
  );

  const cartCount = items.reduce((accum, item) => (accum += item.qty), 0);

  return {
    items,
    cartCount,
    subtotal,
    total: subtotal > 0 ? subtotal + shipping : 0,
    shipping: subtotal > 0 ? shipping : 0,
  };
};

export const cartRemoveItem = (state = {}, key, shipping) => {
  const items = state.cart.items.reduce((accum, item) => {
    if (item.number === key) {
      if (item.qty > 1) {
        item.qty -= 1;
        return [...accum, item];
      }
      return [...accum];
    }
    return [...accum, item];
  }, []);

  const subtotal = items.reduce(
    (accum, item) => (accum += item.qty * (item.onSale === true ? item.salePrice : item.price)),
    0
  );

  const cartCount = items.length > 0 ? items.reduce((accum, item) => (accum += item.qty), 0) : 0;

  return {
    items,
    cartCount,
    subtotal,
    total: subtotal > 0 ? subtotal + shipping : 0,
    shipping: subtotal > 0 ? shipping : 0,
  };
};

export const addItemAction = key => async dispatch => {
  // Re-calculate Shipping
  const state = store.getState();
  const response = await fetch(`${window.location.origin}/data.json`);
  const { shipping } = await response.json();
  dispatch(addItem(cartAddItem(state, key, shipping)));
};

export const removeItemAction = key => async dispatch => {
  // Re-calculate Shipping
  const state = store.getState();
  const response = await fetch(`${window.location.origin}/data.json`);
  const { shipping } = await response.json();
  dispatch(removeItem(cartRemoveItem(state, key, shipping)));
};

export const clearCartAction = key => async dispatch => {
  // Re-calculate Shipping
  dispatch(
    clearCart({
      items: [],
      cartCount: 0,
      shipping: 0,
      subtotal: 0,
      total: 0,
    })
  );
};
