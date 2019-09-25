import React from 'react';
import { connect } from 'react-redux';
import CartItems from './CartItems';
import CartSummary from './CartSummary';
import LineItem from './LineItem';

const Cart = ({ cart, cartCount }) => (
  <main className="content cart">
    <h1 className="page--heading">
      {cartCount > 0
        ? `Your Cart has ${cartCount} Item${cartCount > 1 ? 's' : ''}`
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

const mapStateToProps = state => ({
  cart: state.cart,
  cartCount: state.cartCount,
});

export default connect(mapStateToProps, null)(Cart);
