import React from 'react';
import { Provider } from 'react-redux';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductsContainer from './ProductsContainer';
import Products from './Products';
import { configureStore } from '../../store/store';

configure({ adapter: new Adapter() });

describe('ProductsContainer', () => {
  it('should render the container component', () => {
    const products = [
      {
        number: '51001',
        name: 'widget',
        price: 35.57,
        salePrice: 32.95,
        onSale: true,
      },
    ];
    const addItem = () => 1;

    const store = configureStore({
      products,
      addItem,
    });

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
