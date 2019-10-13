import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../App.css';
import HeaderContainer from './HeaderContainer';
import Footer from './Footer';

const ProductsContainer = lazy(() => import('../../products/components/ProductsContainer'));
const CartContainer = lazy(() => import('../../cart/components/CartContainer'));

const App = () => (
  <Router>
    <HeaderContainer />
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={ProductsContainer} />
        <Route path="/cart/" component={CartContainer} />
      </Switch>
    </Suspense>
    <Footer />
  </Router>
);

export default App;
