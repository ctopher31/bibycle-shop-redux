import React from 'react';
import { mount } from 'enzyme';
import CartSummary from './CartSummary';

describe('Cart component', () => {
  it('renders correctly', () => {
    const subtotal = 32.95;
    const shipping = 15;
    const props = {
      subtotal,
      total: subtotal + shipping,
      shipping: shipping,
    };
    const wrapper = mount(<CartSummary {...props} />);

    expect(wrapper.contains(<h2>Summary</h2>)).toBe(true);
    expect(wrapper.exists('.cart--summary')).toBe(true);
    expect(wrapper.props().subtotal).toEqual(subtotal);
    expect(wrapper.props().shipping).toEqual(shipping);
    expect(wrapper.props().total).toEqual(subtotal + shipping);
    expect(wrapper).toMatchSnapshot();
  });
});
