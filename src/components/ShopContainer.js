import { connect } from 'react-redux';
import { addItemAction } from '../actions/actions';
import Shop from './Shop';

const mapStateToProps = state => ({ products: state.products, });

const mapDispatchToProps = dispatch => ({ addItem: key => dispatch(addItemAction(key)), });

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
