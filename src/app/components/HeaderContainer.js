import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = state => ({ cartCount: state.cart.cartCount });

export default connect(
  mapStateToProps
)(Header);
