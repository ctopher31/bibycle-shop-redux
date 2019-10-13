import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import Footer from './Footer';

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = mount(
      <Router>
        <Footer />
      </Router>
    );

    expect(wrapper.find(Footer).length).toEqual(1);
    expect(wrapper.exists('.footer')).toBe(true);
    expect(wrapper.exists('.footer-nav--link')).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
