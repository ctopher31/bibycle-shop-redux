import { put, call, select, takeLatest } from 'redux-saga/effects';
import {
  addItemRequest,
  addItemSuccess,
  addItemFailure,
  removeItemRequest,
  removeItemSuccess,
  removeItemFailure,
  clearCartRequest,
  clearCart,
} from './actions';
import { getShipping } from './services';

export const cartAddItem = (cart, products, key) => {
  if (cart.items.some(item => item.number === key)) {
    return cart.items.map(item => {
      if (item.number === key) {
        item.qty += 1;
      }
      return item;
    });
  } else {
    return [
      ...cart.items,
      { ...products.items.filter(product => product.number === key)[0], qty: 1 },
    ];
  }
};

export const cartRemoveItem = (cart, key) => {
  return cart.items.reduce((accum, item) => {
    if (item.number === key) {
      if (item.qty > 1) {
        item.qty -= 1;
        return [...accum, item];
      }
      return [...accum];
    }
    return [...accum, item];
  }, []);
};

const calculateCartCount = items =>
  items.length > 0 ? items.reduce((accum, item) => (accum += item.qty), 0) : 0;

const calculateSubtotal = items =>
  items.reduce(
    (accum, item) => (accum += item.qty * (item.onSale === true ? item.salePrice : item.price)),
    0
  );

const calculateShipping = async subtotal => {
  const shipping = await getShipping();
  return subtotal > 0 ? shipping : 0;
};

const getTotal = (subtotal, shipping) => (subtotal > 0 ? subtotal + shipping : 0);

export function* addItemSaga(action) {
  try {
    //const state = yield select();
    //console.log(state);
    const cart = {}; //yield select(state => state.cart);
    const products = {}; //yield select(state => state.products);
    const newCart = yield call(cartAddItem, [cart, products, action.key]);
    const cartCount = yield call(calculateCartCount, newCart);
    const subtotal = yield call(calculateSubtotal, newCart);
    const shipping = yield call(calculateShipping, subtotal);
    const total = yield call(getTotal, [subtotal, shipping]);
    yield put(
      addItemSuccess({
        items: newCart,
        cartCount,
        subtotal,
        shipping,
        total,
      })
    );
  } catch (error) {
    yield put(addItemFailure(error));
  }
}

export function* watchAddItemSaga() {
  yield takeLatest(addItemRequest, addItemSaga);
}

export function* removeItemSaga(action) {
  try {
    const cart = {}; //yield select(state => state.cart);
    const newCart = yield call(cartRemoveItem, [cart, action.key]);
    const cartCount = yield call(calculateCartCount, newCart);
    const subtotal = yield call(calculateSubtotal, newCart);
    const shipping = yield call(calculateShipping, subtotal);
    const total = yield call(getTotal, [subtotal, shipping]);
    yield put(
      removeItemSuccess({
        items: newCart,
        cartCount,
        subtotal,
        shipping,
        total,
      })
    );
  } catch (error) {
    yield put(removeItemFailure(error));
  }
}

export function* watchRemoveItemSaga() {
  yield takeLatest(removeItemRequest, removeItemSaga);
}

export function* clearCartSaga() {
  yield put(clearCart());
}

export function* watchClearCartSaga() {
  yield takeLatest(clearCartRequest, clearCartSaga);
}
