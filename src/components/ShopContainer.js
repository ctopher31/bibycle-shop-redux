import React from 'react';
import { connect } from 'react-redux';
import { addItem as addItemAction } from '../actions/actions';
import Shop from './Shop';
import Listing from './Listing';

const ShopContainer = ({ products, addItem }) => (
  <Shop>
    {products.map(item => <Listing key={item.number} {...{ ...item, addItem }} />)}
  </Shop>
);

const mapStateToProps = state => ({ products: state.products, });

const mapDispatchToProps = dispatch => ({ addItem: number => dispatch(addItemAction(number)), });

export default connect(mapStateToProps, mapDispatchToProps)(ShopContainer);
