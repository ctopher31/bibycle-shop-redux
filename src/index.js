import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import data from './store/data';
import configureStore from './store/configure-store';

const store = configureStore({
  cart: [],
  cartCount: 0,
  subtotal: 0,
  total: 0,
  products: data.products,
  shipping: data.shipping,
});

const renderApp = () => 
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', renderApp)
}

renderApp();
