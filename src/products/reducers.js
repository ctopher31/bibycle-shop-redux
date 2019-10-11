import { ADD_ITEM } from './action-types';

export const addItem = (state = {}, key, shipping) => {
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
    ...state,
    cart,
    cartCount,
    subtotal,
    total: subtotal > 0 ? subtotal + shipping : 0,
    shipping: subtotal > 0 ? shipping : 0,
  };
};

const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return addItem(state, action.key, action.shipping);

    default:
      return state;
  }
};

export default productsReducer;
