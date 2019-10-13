import { removeItem } from './actions';
import store from '../store';

export const cartRemoveItem = (state = {}, key, shipping) => {
  const cart = state.cart.reduce((accum, item) => {
    if (item.number === key) {
      if (item.qty > 1) {
        item.qty -= 1;
        return [...accum, item];
      }
      return [...accum];
    }
    return [...accum, item];
  }, []);

  const subtotal = cart.reduce(
    (accum, item) => (accum += item.qty * (item.onSale === true ? item.salePrice : item.price)),
    0
  );

  const cartCount = cart.length > 0 ? cart.reduce((accum, item) => (accum += item.qty), 0) : 0;

  return {
    cart,
    cartCount,
    subtotal,
    total: subtotal > 0 ? subtotal + shipping : 0,
    shipping: subtotal > 0 ? shipping : 0,
  };
};

export const removeItemAction = key => async dispatch => {
  // Re-calculate Shipping
  const state = store.getState();
  const response = await fetch(`${window.location.origin}/data.json`);
  const { shipping } = await response.json();
  dispatch(removeItem(cartRemoveItem(state, key, shipping)));
};
