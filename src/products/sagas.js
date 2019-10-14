import { loadProducts } from './actions';
import { addItem } from '../cart/actions';
import { addItemAction as cartAddItemAction, cartAddItem } from '../cart/sagas';
import store from '../store';

// export const addItemAction = key => {
//   cartAddItemAction(key);
// };

export const addItemAction = key => async dispatch => {
  // Re-calculate Shipping
  const state = store.getState();
  const response = await fetch(`${window.location.origin}/data.json`);
  const { shipping } = await response.json();
  dispatch(addItem(cartAddItem(state, key, shipping)));
};

export const loadProductsAction = () => async dispatch => {
  // Load Products
  const response = await fetch(`${window.location.origin}/data.json`);
  const { products } = await response.json();
  dispatch(
    loadProducts({
      items: [...products],
    })
  );
};
