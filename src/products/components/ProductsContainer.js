import { connect } from 'react-redux';
import { loadProductsAction } from '../sagas';
import { addItemAction } from '../../cart/sagas';
import Products from './Products';

const mapStateToProps = state => ({
  items: state.products.items,
});

const mapDispatchToProps = dispatch => ({
  addItem: key => dispatch(addItemAction(key)),
  loadProducts: () => loadProductsAction(),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
