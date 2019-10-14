import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import cartReducer from '../../cart/reducers';
import Header from './Header';

describe('App', () => {
  it('renders without crashing', () => {
    const initialState = {
      cart: {
        cartCount: 1,
      },
    };

    const store = createStore(cartReducer, initialState);
    const wrapper = mount(
      <Router>
        <Provider store={store}>
          <Header />
        </Provider>
      </Router>
    );

    expect(wrapper.find(Header).length).toEqual(1);
    expect(wrapper.exists('.header')).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
