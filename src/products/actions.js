import { ADD_ITEM } from './actionTypes';

export const addItem = (key, shipping) => ({
  type: ADD_ITEM,
  key,
  shipping,
});

export const addItemAction = key => async dispatch => {
  // Re-calculate Shipping
  const response = await fetch(`${window.location.origin}/data.json`);
  const { shipping } = await response.json();
  dispatch(addItem(key, shipping));
};
