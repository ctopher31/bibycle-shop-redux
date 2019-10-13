import React from 'react';
import CartItems from './CartItems';
import CartSummary from './CartSummary';
import CartLineItem from './CartLineItem';

const Cart = ({ cart, cartCount, removeItem, shipping, subtotal, total }) => (
  <main className="content cart">
    <h1 className="page--heading">
      {cartCount > 0
        ? `Your Cart has ${cartCount} Item${cartCount > 1 ? 's' : ''}`
        : 'Your Cart is Empty'}
    </h1>
    <section className="cart--section">
      <CartItems>
        {cart.map(item => (
          <CartLineItem key={item.number} {...{ ...item, removeItem }} />
        ))}
      </CartItems>
      <CartSummary {...{ shipping, subtotal, total }} />
    </section>
  </main>
);

export default Cart;
