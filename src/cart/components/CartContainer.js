import { connect } from 'react-redux';
import { clearCartAction, removeItemAction } from '../sagas';
import Cart from './Cart';

const mapStateToProps = state => ({
  items: state.cart.items,
  cartCount: state.cart.cartCount,
  shipping: state.cart.shipping,
  subtotal: state.cart.subtotal,
  total: state.cart.total,
});

const mapDispatchToProps = dispatch => ({
  removeItem: key => dispatch(removeItemAction(key)),
  clearCart: () => dispatch(clearCartAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
