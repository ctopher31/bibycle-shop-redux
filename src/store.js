import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { fork, all } from 'redux-saga/effects';
import { composeWithDevTools } from 'redux-devtools-extension';
import monitorReducersEnhancer from './enhancers/monitor-reducers';
import loggerMiddleware from './middleware/logger';
import productsReducer from './products/reducers';
import cartReducer from './cart/reducers';
import { getProductsSaga } from './products/sagas';
import { watchAddItemSaga, watchRemoveItemSaga } from './cart/sagas';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

function* rootSaga() {
  yield all([
    fork(getProductsSaga),
    fork(watchAddItemSaga),
    fork(watchRemoveItemSaga),
  ]);
}

export const configureStore = (preloadedState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = applyMiddleware(loggerMiddleware, thunkMiddleware, sagaMiddleware);
  const enhancers = composeWithDevTools(middleware, monitorReducersEnhancer);
  const store = createStore(rootReducer, preloadedState, enhancers);
  sagaMiddleware.run(rootSaga);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept(['./products/reducers', './cart/reducers'], () =>
      store.replaceReducer(rootReducer)
    );
  }

  return store;
};
