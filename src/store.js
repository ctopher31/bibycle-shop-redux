import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { fork, all } from 'redux-saga/effects'
import { composeWithDevTools } from 'redux-devtools-extension';
import monitorReducersEnhancer from './enhancers/monitor-reducers';
import loggerMiddleware from './middleware/logger';
import productsReducer from './products/reducers';
import cartReducer from './cart/reducers';
import { getProductsSaga, watchGetProducts } from './products/sagas';
import { addItemSaga, watchAddItem, removeItemSaga, watchRemoveItem, clearCartSaga, watchClearCart } from './cart/sagas';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

function* rootSaga() {
  yield all([
    fork(getProductsSaga),
    fork(watchGetProducts),
    fork(addItemSaga),
    fork(watchAddItem),
    fork(removeItemSaga),
    fork(watchRemoveItem),
    fork(clearCartSaga),
    fork(watchClearCart),
  ]);
}

const configureStore = (preloadedState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [loggerMiddleware, thunkMiddleware, sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);
  sagaMiddleware.run(rootSaga);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept(['./products/reducers', './cart/reducers'], () =>
      store.replaceReducer(rootReducer)
    );
  }

  return store;
};

const store = configureStore({
  products: {
    items: [],
  },
  cart: {
    items: [],
    cartCount: 0,
    shipping: 0,
    subtotal: 0,
    total: 0,
  },
});

export default store;
