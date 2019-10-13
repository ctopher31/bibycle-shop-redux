import React from 'react';
import { mount } from 'enzyme';
import ProductListing from './ProductListing';

describe('ProductListing component', () => {
  it('renders correctly', () => {
    const product = {
      number: '51001',
      name: 'widget',
      price: 35.57,
      salePrice: 32.95,
      onSale: true,
    };
    const addItem = () => 1;
    const wrapper = mount(<ProductListing {...{ ...product, addItem }} />);

    expect(wrapper.exists('.product--container')).toBe(true);
    expect(wrapper.props().number).toEqual('51001');
    expect(wrapper.props().name).toEqual('widget');
    expect(wrapper.props().price).toEqual(35.57);
    expect(wrapper.props().salePrice).toEqual(32.95);
    expect(wrapper.props().onSale).toEqual(true);
    expect(wrapper.props().addItem()).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });
});
