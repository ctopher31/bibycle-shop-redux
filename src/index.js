import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store/store';
import { preloadStateAction } from './actions/actions';

(async () => {
  await new Promise(resolve => resolve(store.dispatch(preloadStateAction())));

  const renderApp = () => ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./App', renderApp)
  }

  renderApp();
})();
