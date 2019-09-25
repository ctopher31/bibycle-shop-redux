import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/HeaderContainer';
import Footer from './components/Footer';
import ShopContainer from './components/ShopContainer';
import CartContainer from './components/CartContainer';

const App = () => (
  <Router>
    <HeaderContainer />

    <Route exact path="/" component={ShopContainer} />
    <Route path="/cart" component={CartContainer} />

    <Footer />
  </Router>
);

export default App;
