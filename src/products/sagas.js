import { addItem } from './actions';
import store from '../store';

export const cartAddItem = (state = {}, key, shipping) => {
  let cart;

  if (state.cart.some(item => item.number === key)) {
    cart = state.cart.map(item => {
      if (item.number === key) {
        item.qty += 1;
      }
      return item;
    });
  } else {
    cart = [
      ...state.cart,
      { ...state.products.filter(product => product.number === key)[0], qty: 1 },
    ];
  }

  const subtotal = cart.reduce(
    (accum, item) => (accum += item.qty * (item.onSale === true ? item.salePrice : item.price)),
    0
  );

  const cartCount = cart.reduce((accum, item) => (accum += item.qty), 0);

  return {
    cart,
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
