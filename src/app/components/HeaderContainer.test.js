import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import cartReducer from '../../cart/reducers';
import HeaderContainer from './HeaderContainer';
import Header from './Header';

describe('HeaderContainer', () => {
  it('renders the header', () => {
    const initialState = {
      cart: {
        cartCount: 1,
      },
    };

    const store = createStore(cartReducer, initialState);
    const wrapper = mount(
      <Router>
        <Provider store={store}>
          <HeaderContainer />
        </Provider>
      </Router>
    );

    expect(wrapper.find(HeaderContainer).length).toEqual(1);
    const container = wrapper.find(HeaderContainer);
    expect(container.find(Header).length).toEqual(1);
    expect(store.getState().content).toMatchSnapshot();
  });
});
