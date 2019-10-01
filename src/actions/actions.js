import { ADD_ITEM, REMOVE_ITEM, PRELOAD_STATE } from './action-types';

export const addItem = (key, shipping) => ({
  type: ADD_ITEM,
  key,
  shipping,
});

export const removeItem = (key, shipping) => ({
  type: REMOVE_ITEM,
  key,
  shipping,
});

export const preloadState = products => ({
  type: PRELOAD_STATE,
  products,
});

export const addItemAction = key => async dispatch => {
  // Re-calculate Shipping
  const response = await fetch(`${window.location.origin}/data.json`);
  const { shipping } = await response.json();
  dispatch(addItem(key, shipping));
};

export const removeItemAction = key => async dispatch => {
  // Re-calculate Shipping
  const response = await fetch(`${window.location.origin}/data.json`);
  const { shipping } = await response.json();
  dispatch(removeItem(key, shipping));
};

export const preloadStateAction = () => async dispatch => {
  // Fetch products
  const response = await fetch(`${window.location.origin}/data.json`);
  const { products } = await response.json();
  dispatch(preloadState(products));
};
