import { connect } from 'react-redux';
import { removeItemAction } from '../sagas';
import Cart from './Cart';

const mapStateToProps = state => ({
  cart: state.cart,
  cartCount: state.cartCount,
  shipping: state.shipping,
  subtotal: state.subtotal,
  total: state.total,
});

const mapDispatchToProps = dispatch => ({ removeItem: key => dispatch(removeItemAction(key)) });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
