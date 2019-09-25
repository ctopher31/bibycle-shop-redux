import data from './data';
import configureStore from './configure-store';

export const initialState = {
  cart: [],
  cartCount: 0,
  subtotal: 0,
  total: 0,
  products: data.products,
  shipping: 0,
};

const store = configureStore(initialState);

export default store;