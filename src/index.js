import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './app/components/App';
import store from './store';
import { preloadStateAction } from './app/sagas';

(async () => {
  await new Promise(resolve => resolve(store.dispatch(preloadStateAction())));

  const state = store.getState();
  console.log(state);

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
})();
