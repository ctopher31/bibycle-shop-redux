import { put, call, takeLatest } from 'redux-saga/effects';
import { getProductsRequest, getProductsSuccess, getProductsFailure } from './actions';
import { getProducts } from './services';

export function* getProductsSaga() {
  try {
    const products = yield call(getProducts);
    yield put(getProductsSuccess(products));
  } catch (error) {
    yield put(getProductsFailure(error));
  }
}

export function* watchGetProductsSaga() {
  yield takeLatest(getProductsRequest, getProductsSaga);
}
