import React from 'react';

const CartSummary = ({ shipping, subtotal, total }) => (
  <div className="cart--summary">
    <h2>Summary</h2>
    <div>Subtotal: ${subtotal.toFixed(2)}</div>
    <div>Shipping: ${shipping.toFixed(2)}</div>
    <hr />
    <div>Total: ${total.toFixed(2)}</div>
  </div>
);

export default CartSummary;
