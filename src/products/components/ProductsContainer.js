import { connect } from 'react-redux';
import { getProductsRequest } from '../actions';
import { addItemRequest } from '../../cart/actions';
import Products from './Products';

const mapStateToProps = state => ({
  items: state.products.items,
});

const mapDispatchToProps = dispatch => ({
  addItem: key => dispatch(addItemRequest(key)),
  loadProducts: () => dispatch(getProductsRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
