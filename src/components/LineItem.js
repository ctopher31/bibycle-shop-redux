import React from 'react';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from '../actions/actions';

const LineItem = ({
  number,
  name,
  price,
  onSale,
  salePrice,
  qty,
  removeItem,
}) => (
  <div className="lineitem--container">
    <ul>
      <li>Number: {number}</li>
      <li>Name: {name}</li>
      <li>Price: ${price.toFixed(2)}</li>
      <li className={onSale === false ? 'hide' : 'on-sale'}>{onSale === false ? '' : 'On Sale'}</li>
      <li className={onSale === false ? 'hide' : 'on-sale'}>Sale Price: ${salePrice.toFixed(2)}</li>
      <li>Quantity: {qty}</li>
    </ul>
    <button onClick={() => removeItem(number)}>Remove Item</button>
  </div>
);

const mapDispatchToProps = dispatch => ({ removeItem: number => dispatch(removeItemAction(number)), });

export default connect(null, mapDispatchToProps)(LineItem);
