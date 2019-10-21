import { put, call, takeEvery } from 'redux-saga/effects';
import { getProducts } from './actions';
import { api } from './services';

export function* getProductsSaga() {
  const products = yield call(api.getProducts);
  yield put(getProducts(products));
}

export function* watchGetProducts() {
  /*
    takeEvery will fork a new `getAllProducts` task on each GET_ALL_PRODUCTS actions
    i.e. concurrent GET_ALL_PRODUCTS actions are allowed
  */
  yield takeEvery(getProducts, getProductsSaga);
}
