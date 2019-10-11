import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configureStore } from '../../store/store';
import App from './App';
import HeaderContainer from './HeaderContainer';
import Header from './Header';
import Footer from './Footer';

configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders without crashing', () => {
    const store = configureStore({
      cartCount: 0,
    });

    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(wrapper.find(App).length).toEqual(1);
    const container = wrapper.find(App);
    expect(container.find(HeaderContainer).length).toEqual(1);
    expect(container.find(Router).length).toEqual(1);
    expect(container.find(Footer).length).toEqual(1);
    expect(store.getState().content).toMatchSnapshot();
  });
});
