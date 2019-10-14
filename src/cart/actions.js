import { ADD_ITEM, REMOVE_ITEM, CLEAR_CART } from './actionTypes';

export const addItem = payload => ({
  type: ADD_ITEM,
  payload,
});

export const removeItem = payload => ({
  type: REMOVE_ITEM,
  payload,
});

export const clearCart = payload => ({
  type: CLEAR_CART,
  payload,
});
