import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/HeaderContainer';
import Footer from './components/Footer';

const  ShopContainer = lazy(() => import('./components/ShopContainer'));
const  CartContainer = lazy(() => import('./components/CartContainer'));

const App = () => (
  <Router>
    <HeaderContainer />
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={ShopContainer} />
        <Route path="/cart/" component={CartContainer} />
      </Switch>
    </Suspense>
    <Footer />
  </Router>
);

export default App;
