import { connect } from 'react-redux';
import { clearCartRequest, removeItemRequest } from '../actions';
import Cart from './Cart';

const mapStateToProps = state => ({
  items: state.cart.items,
  cartCount: state.cart.cartCount,
  shipping: state.cart.shipping,
  subtotal: state.cart.subtotal,
  total: state.cart.total,
});

const mapDispatchToProps = dispatch => ({
  removeItem: key => dispatch(removeItemRequest(key)),
  clearCart: () => dispatch(clearCartRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
