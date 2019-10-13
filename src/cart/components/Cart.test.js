import React from 'react';
import { mount } from 'enzyme';
import Cart from './Cart';

describe('Cart component', () => {
  it('renders correctly', () => {
    const subtotal = 32.95;
    const shipping = 15;
    const props = {
      cart: [
        {
          number: '51001',
          name: 'widget',
          price: 35.57,
          salePrice: 32.95,
          onSale: true,
        },
      ],
      cartCount: 1,
      subtotal,
      total: subtotal > 0 ? subtotal + shipping : 0,
      shipping: subtotal > 0 ? shipping : 0,
      removeItem: () => 1,
    };
    const wrapper = mount(<Cart {...props} />);

    expect(wrapper.exists('.content')).toBe(true);
    expect(wrapper.contains(<h1 className="page--heading">Your Cart has 1 Item</h1>)).toBe(true);
    expect(wrapper.exists('.cart--section')).toBe(true);
    expect(wrapper.props().cart).toHaveLength(1);
    expect(wrapper.props().removeItem()).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });
});
