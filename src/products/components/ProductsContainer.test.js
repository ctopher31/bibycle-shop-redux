import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import ProductsContainer from './ProductsContainer';
import Products from './Products';
import productsReducer from '../reducers';

describe('ProductsContainer', () => {
  it('should render the container component', () => {
    const initialState = {
      products: {
        items: [
          {
            number: '51001',
            name: 'widget',
            price: 35.57,
            salePrice: 32.95,
            onSale: true,
          },
        ],
      },
    };

    const store = createStore(productsReducer, initialState);

    const wrapper = mount(
      <Provider store={store}>
        <ProductsContainer />
      </Provider>
    );

    expect(wrapper.find(ProductsContainer).length).toEqual(1);
    const container = wrapper.find(ProductsContainer);
    expect(container.find(Products).length).toEqual(1);
    expect(store.getState().content).toMatchSnapshot();
  });
});
