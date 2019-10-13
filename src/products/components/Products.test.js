import React from 'react';
import { mount } from 'enzyme';
import Products from './Products';

describe('Products component', () => {
  it('renders correctly', () => {
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
    const wrapper = mount(<Products {...{ products, addItem }} />);

    expect(wrapper.exists('.content')).toBe(true);
    expect(wrapper.contains(<h1 className="page--heading">Shop our Products</h1>)).toBe(true);
    expect(wrapper.exists('.product--section')).toBe(true);
    expect(wrapper.props().products).toHaveLength(1);
    expect(wrapper.props().addItem()).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });
});
