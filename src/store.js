import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import monitorReducersEnhancer from './enhancers/monitor-reducers';
import loggerMiddleware from './middleware/logger';
import productsReducer from './products/reducers';
import cartReducer from './cart/reducers';
import appReducer from './app/reducers';

const rootReducer = combineReducers({
  appReducer,
  productsReducer,
  cartReducer,
});

export const configureStore = (preloadedState = {}) => {
  const middlewares = [loggerMiddleware, thunkMiddleware];
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

const store = configureStore();

export default store;
