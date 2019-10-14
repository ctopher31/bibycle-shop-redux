import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import sagasMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import monitorReducersEnhancer from './enhancers/monitor-reducers';
import loggerMiddleware from './middleware/logger';
import productsReducer from './products/reducers';
import cartReducer from './cart/reducers';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const configureStore = (preloadedState = {}) => {
  const middlewares = [loggerMiddleware /*, sagasMiddleware*/, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

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
