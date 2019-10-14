import React from 'react';

const CartItems = ({ children, clearCart }) => (
  <div className="cart--items">
    <h2>Items</h2>
    {children}
    <button onClick={() => clearCart()}>Clear Cart</button>
  </div>
);

export default CartItems;
