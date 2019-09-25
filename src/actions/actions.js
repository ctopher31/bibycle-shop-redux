import { ADD_ITEM, REMOVE_ITEM } from './action-types';

export const addItem = key => ({
  type: ADD_ITEM,
  key,
});

export const removeItem = key => ({
  type: REMOVE_ITEM,
  key,
});
