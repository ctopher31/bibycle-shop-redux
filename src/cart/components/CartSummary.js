import React from 'react';

const CartSummary = ({ shipping, subtotal, total }) => (
  <div className="cart--summary">
    <h2>Summary</h2>
    <div>Subtotal: ${subtotal !== undefined ? subtotal.toFixed(2) : 0}</div>
    <div>Shipping: ${shipping !== undefined ? shipping.toFixed(2) : 0}</div>
    <hr />
    <div>Total: ${total !== undefined ? total.toFixed(2) : 0}</div>
  </div>
);

export default CartSummary;
