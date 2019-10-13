import React from 'react';
import { mount } from 'enzyme';
import CartItems from './CartItems';

describe('Cart component', () => {
  it('renders correctly', () => {
    const Children = () => <div className="children">Children</div>;
    const wrapper = mount(
      <CartItems>
        <Children />
      </CartItems>
    );
    const container = wrapper.find(CartItems);
    const children = container.find(Children);

    expect(wrapper.contains(<h2>Items</h2>)).toBe(true);
    expect(wrapper.exists('.cart--items')).toBe(true);
    expect(container.find(Children).length).toEqual(1);
    expect(children.exists('.children')).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
