import React from 'react';
import { connect } from 'react-redux';

const CartSummary = ({ shipping, subtotal, total }) => (
  <div className="cart--summary">
    <h2>Summary</h2>
    <div>Subtotal: ${subtotal.toFixed(2)}</div>
    <div>Shipping: ${(subtotal !== 0 ? shipping.toFixed(2): 0.00.toFixed(2))}</div>
    <hr />
    <div>Total: ${total.toFixed(2)}</div>
  </div>
);

const mapStateToProps = state => ({
  shipping: state.shipping,
  subtotal: state.subtotal,
  total: state.total,
});

export default connect(mapStateToProps, null)(CartSummary);
