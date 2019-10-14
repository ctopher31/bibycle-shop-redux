import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import App from './App';
import HeaderContainer from './HeaderContainer';
import Footer from './Footer';

describe('App', () => {
  it('renders without crashing', () => {
    const store = createStore((state = {}) => state, {
      cart: {
        cartCount: 0,
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const container = wrapper.find(App);

    expect(wrapper.find(App).length).toEqual(1);
    expect(container.find(HeaderContainer).length).toEqual(1);
    expect(container.find(Router).length).toEqual(1);
    expect(container.find(Footer).length).toEqual(1);
    expect(store.getState().content).toMatchSnapshot();
  });
});
