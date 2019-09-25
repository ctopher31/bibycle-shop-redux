import React from 'react';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from '../actions/actions';
import Cart from './Cart';
import CartItems from './CartItems';
import CartSummary from './CartSummary';
import LineItem from './LineItem';

const CartContainer = ({
  cart,
  cartCount,
  removeItem,
  shipping,
  subtotal,
  total,
}) => (
  <Cart {...{ cartCount }}>
    <CartItems>
      {cart.map((item) => <LineItem key={item.number} {...{ ...item, removeItem }} />)}
    </CartItems>
    <CartSummary {...{ shipping, subtotal, total }} />
  </Cart>
);

const mapStateToProps = state => ({
  cart: state.cart,
  cartCount: state.cartCount,
  shipping: state.shipping,
  subtotal: state.subtotal,
  total: state.total,
});

const mapDispatchToProps = dispatch => ({ removeItem: number => dispatch(removeItemAction(number)), });

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
