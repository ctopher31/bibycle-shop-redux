import React from 'react';

const Listing = ({
  number,
  name,
  price,
  salePrice,
  onSale,
  addItem,
}) => (
  <div className="listing--container">
    <ul>
      <li>Number: {number}</li>
      <li>Name: {name}</li>
      <li>Price: ${price.toFixed(2)}</li>
      <li className={onSale === false ? 'hide' : 'on-sale'}>{onSale === false ? '' : 'On Sale'}</li>
      <li className={onSale === false ? 'hide' : 'on-sale'}>Sale Price: ${salePrice.toFixed(2)}</li>
      {/* <li>Quantity: {qty}</li> */}
    </ul>
    <button onClick={() => addItem(number)}>Add to Cart</button>
  </div>
);

export default Listing;
