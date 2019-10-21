import { put, call, takeEvery } from 'redux-saga/effects';
import { addItem, removeItem, clearCart } from './actions';
import { api } from './services';
import store from '../store';
console.log(store);

export const cartAddItem = (state = {}, key, shipping) => {
  let items;

  if (state.cart.items.some(item => item.number === key)) {
    items = state.cart.items.map(item => {
      if (item.number === key) {
        item.qty += 1;
      }
      return item;
    });
  } else {
    items = [
      ...state.cart.items,
      { ...state.products.items.filter(product => product.number === key)[0], qty: 1 },
    ];
  }

  const subtotal = items.reduce(
    (accum, item) => (accum += item.qty * (item.onSale === true ? item.salePrice : item.price)),
    0
  );

  const cartCount = items.reduce((accum, item) => (accum += item.qty), 0);

  return {
    items,
    cartCount,
    subtotal,
    total: subtotal > 0 ? subtotal + shipping : 0,
    shipping: subtotal > 0 ? shipping : 0,
  };
};

export const cartRemoveItem = (state = {}, key, shipping) => {
  const items = state.cart.items.reduce((accum, item) => {
    if (item.number === key) {
      if (item.qty > 1) {
        item.qty -= 1;
        return [...accum, item];
      }
      return [...accum];
    }
    return [...accum, item];
  }, []);

  const subtotal = items.reduce(
    (accum, item) => (accum += item.qty * (item.onSale === true ? item.salePrice : item.price)),
    0
  );

  const cartCount = items.length > 0 ? items.reduce((accum, item) => (accum += item.qty), 0) : 0;

  return {
    items,
    cartCount,
    subtotal,
    total: subtotal > 0 ? subtotal + shipping : 0,
    shipping: subtotal > 0 ? shipping : 0,
  };
};

export function* addItemSaga(action) {
  const state = store.getState();
  const shipping = yield call(api.getShipping);
  const payload = yield call(cartAddItem, [state, action.key, shipping]);
  yield put(addItem(payload));
}

export function* watchAddItem() {
  /*
    takeEvery will fork a new `getAllProducts` task on each GET_ALL_PRODUCTS actions
    i.e. concurrent GET_ALL_PRODUCTS actions are allowed
  */
  yield takeEvery(addItem, addItemSaga);
}

export function* removeItemSaga(action) {
  const state = store.getState();
  const shipping = yield call(api.getShipping);
  const payload = yield call(cartRemoveItem, [state, action.key, shipping]);
  yield put(removeItem(payload));
}

export function* watchRemoveItem() {
  /*
    takeEvery will fork a new `getAllProducts` task on each GET_ALL_PRODUCTS actions
    i.e. concurrent GET_ALL_PRODUCTS actions are allowed
  */
  yield takeEvery(removeItem, removeItemSaga);
}

export function* clearCartSaga() {
  yield put(removeItem({
    items: [],
    cartCount: 0,
    shipping: 0,
    subtotal: 0,
    total: 0,
  }));
}

export function* watchClearCart() {
  /*
    takeEvery will fork a new `getAllProducts` task on each GET_ALL_PRODUCTS actions
    i.e. concurrent GET_ALL_PRODUCTS actions are allowed
  */
  yield takeEvery(clearCart, clearCartSaga);
}
