import { connect } from 'react-redux';
import { addItemAction, loadProductsAction } from '../sagas';
import Products from './Products';

const mapStateToProps = state => ({
  items: state.products.items,
});

const mapDispatchToProps = dispatch => ({
  addItem: key => dispatch(addItemAction(key)),
  loadProducts: () => dispatch(loadProductsAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
