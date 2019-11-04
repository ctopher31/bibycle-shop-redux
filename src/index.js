import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/components/App';
import { configureStore } from './store';

const store = configureStore({
  products: {
    items: [],
    loaded: false,
    error: false,
    message: '',
  },
  cart: {
    items: [],
    cartCount: 0,
    shipping: 0,
    subtotal: 0,
    total: 0,
    error: false,
    message: '',
  },
});

const renderApp = () =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./app/components/App', renderApp);
}

renderApp();
