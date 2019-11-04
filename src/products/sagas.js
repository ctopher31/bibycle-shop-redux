import { put, call } from 'redux-saga/effects';
import { getProductsSuccess, getProductsFailure } from './actions';
import { getProducts } from './services';

export function* getProductsSaga() {
  try {
    const products = yield call(getProducts);
    yield put(getProductsSuccess(products));
  } catch (error) {
    yield put(getProductsFailure(error));
  }
}
