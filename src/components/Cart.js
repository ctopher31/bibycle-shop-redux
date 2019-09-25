import React from 'react';
import { connect } from 'react-redux';
import CartItems from './CartItems';
import CartSummary from './CartSummary';
import LineItem from './LineItem';

const Cart = ({ cart }) => (
  <main className="content cart">
    <h1 className="page--heading">
      {cart.length > 0
        ? `Your Cart has ${cart.length} Item${cart.length > 1 ? 's' : ''}`
        : 'Your Cart is Empty'
      }
    </h1>
    <section className="cart--section">
      <CartItems>
        {cart.map((item) => <LineItem key={item.number} {...item} />)}
      </CartItems>
      <CartSummary />
    </section>
  </main>
);

const mapStateToProps = state => ({ cart: state.cart, });

export default connect(mapStateToProps, null)(Cart);
