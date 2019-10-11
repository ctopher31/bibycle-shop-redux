import { ADD_ITEM, REMOVE_ITEM, PRELOAD_STATE } from '../actions/action-types';

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
    cart = [...state.cart, { ...state.products.filter(product => product.number === key)[0], qty: 1 }]
  }

  const subtotal = cart.reduce((accum, item) => (accum += item.qty * (item.onSale === true ? item.salePrice : item.price)), 0);

  const cartCount = cart.reduce((accum, item) => (accum +=  item.qty), 0);

  return {
    ...state,
    cart,
    cartCount,
    subtotal,
    total: (subtotal > 0 ? subtotal + shipping : 0),
    shipping: (subtotal > 0 ? shipping : 0),
  };
}

export const removeItem = (state = {}, key, shipping) => {
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

  const subtotal = cart.reduce((accum, item) => (accum += item.qty * (item.onSale === true ? item.salePrice : item.price)), 0);

  const cartCount = (cart.length > 0 ? cart.reduce((accum, item) => (accum += item.qty), 0) : 0);

  return {
    ...state,
    cart,
    cartCount,
    subtotal,
    total: (subtotal > 0 ? subtotal + shipping : 0),
    shipping: (subtotal > 0 ? shipping : 0),
  };
};

export const preloadState = products => ({
  products,
  shipping: 0,
  cart: [],
  cartCount: 0,
  subtotal: 0,
  total: 0,
});

const rootReducer = (state = {}, action) => {
  switch(action.type) {
    case ADD_ITEM:
      return addItem(state, action.key, action.shipping);

    case REMOVE_ITEM:
      return removeItem(state, action.key, action.shipping);

    case PRELOAD_STATE:
      return preloadState(action.products);

    default:
      return state;
  }
};

export default rootReducer;
