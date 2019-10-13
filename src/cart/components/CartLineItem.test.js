import React from 'react';
import { mount } from 'enzyme';
import CartLineItem from './CartLineItem';

describe('CartLineItem component', () => {
  it('renders correctly', () => {
    const cartItem = {
      number: '51001',
      name: 'widget',
      price: 35.57,
      salePrice: 32.95,
      onSale: true,
      qty: 1,
    };
    const removeItem = () => 1;
    const wrapper = mount(<CartLineItem {...{ ...cartItem, removeItem }} />);

    expect(wrapper.exists('.cart-lineitem--container')).toBe(true);
    expect(wrapper.props().number).toEqual('51001');
    expect(wrapper.props().name).toEqual('widget');
    expect(wrapper.props().price).toEqual(35.57);
    expect(wrapper.props().salePrice).toEqual(32.95);
    expect(wrapper.props().onSale).toEqual(true);
    expect(wrapper.props().qty).toEqual(1);
    expect(wrapper.props().removeItem()).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });
});
