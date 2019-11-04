import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE } from './actionTypes';

export const getProductsSuccess = payload => ({
  type: GET_PRODUCTS_SUCCESS,
  payload,
});

export const getProductsFailure = payload => ({
  type: GET_PRODUCTS_FAILURE,
  payload,
});
