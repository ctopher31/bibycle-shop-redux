import React from 'react';

const Cart = ({ cartCount, children }) => (
  <main className="content cart">
    <h1 className="page--heading">
      {cartCount > 0
        ? `Your Cart has ${cartCount} Item${cartCount > 1 ? 's' : ''}`
        : 'Your Cart is Empty'
      }
    </h1>
    <section className="cart--section">
      {children}
    </section>
  </main>
);

export default Cart;
