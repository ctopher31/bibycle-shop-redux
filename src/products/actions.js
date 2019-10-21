import { GET_PRODUCTS } from './actionTypes';

export const getProducts = payload => ({
  type: GET_PRODUCTS,
  payload,
});
