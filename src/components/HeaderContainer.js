import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = state => ({ cartCount: state.cartCount, });

export default connect(mapStateToProps, null)(Header);
