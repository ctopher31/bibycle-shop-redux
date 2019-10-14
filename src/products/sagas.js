import { loadProducts } from './actions';
import { addItemAction as cartAddItemAction } from '../cart/sagas';

export const addItemAction = key => dispatch => {
  dispatch(cartAddItemAction(key));
};

export const loadProductsAction = () => async dispatch => {
  // Load Products
  const response = await fetch(`${window.location.origin}/data.json`).catch(e => console.log(`Error: ${e}`));
  const { products } = await response.json().catch(e => console.log(`Error: ${e}`));
  dispatch(
    loadProducts({
      items: [...products],
    })
  );
};
