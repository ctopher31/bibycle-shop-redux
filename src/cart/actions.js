import {
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  REMOVE_ITEM_REQUEST,
  REMOVE_ITEM_SUCCESS,
  REMOVE_ITEM_FAILURE,
  CLEAR_CART,
} from './actionTypes';

export const addItemRequest = key => ({
  type: ADD_ITEM_REQUEST,
  key,
});

export const addItemSuccess = payload => ({
  type: ADD_ITEM_SUCCESS,
  payload,
});

export const addItemFailure = payload => ({
  type: ADD_ITEM_FAILURE,
  payload,
});

export const removeItemRequest = key => ({
  type: REMOVE_ITEM_REQUEST,
  key,
});

export const removeItemSuccess = payload => ({
  type: REMOVE_ITEM_SUCCESS,
  payload,
});

export const removeItemFailure = payload => ({
  type: REMOVE_ITEM_FAILURE,
  payload,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
