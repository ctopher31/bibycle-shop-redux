import React from 'react';
import Listing from './Listing';

const Shop = ({ products, addItem }) => (
  <main className="content shop">
    <h1 className="page--heading">Shop our Products</h1>
    <section className="product--section">
      {products.map(item => <Listing key={item.number} {...{ ...item, addItem }} />)}
    </section>
  </main>
);

export default Shop;
