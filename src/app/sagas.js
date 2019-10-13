import { preloadState } from './actions';

export const appPreloadState = products => ({
  products,
  shipping: 0,
  cart: [],
  cartCount: 0,
  subtotal: 0,
  total: 0,
});

export const preloadStateAction = () => async dispatch => {
  // Fetch products
  const response = await fetch(`${window.location.origin}/data.json`);
  const { products } = await response.json();
  dispatch(preloadState(appPreloadState(products)));
};
