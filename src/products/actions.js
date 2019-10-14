import { LOAD_PRODUCTS } from './actionTypes';

export const loadProducts = payload => ({
  type: LOAD_PRODUCTS,
  payload,
});
