import React from 'react';

const CartItems = ({ children }) => (
  <div className="cart--items">
    <h2>Items</h2>
    {children}
  </div>
);

export default CartItems;
