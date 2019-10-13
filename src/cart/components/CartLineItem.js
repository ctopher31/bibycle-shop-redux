import React from 'react';

const CartLineItem = ({ number, name, price, onSale, salePrice, qty, removeItem }) => (
  <div className="cart-lineitem--container">
    <ul>
      <li>Number: {number}</li>
      <li>Name: {name}</li>
      <li>Price: ${price.toFixed(2)}</li>
      <li className={onSale === false ? 'hide' : 'on-sale'}>On Sale</li>
      <li className={onSale === false ? 'hide' : 'on-sale'}>Sale Price: ${salePrice.toFixed(2)}</li>
      <li>Quantity: {qty}</li>
    </ul>
    <button onClick={() => removeItem(number)}>Remove Item</button>
  </div>
);

export default CartLineItem;
