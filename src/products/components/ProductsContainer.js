import { connect } from 'react-redux';
import { getProducts } from '../actions';
import { addItem } from '../../cart/actions';
import Products from './Products';

const mapStateToProps = state => ({
  items: state.products.items,
});

const mapDispatchToProps = dispatch => ({
  addItem: key => dispatch(addItem(key)),
  loadProducts: () => dispatch(getProducts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
