import React from 'react';
import ProductListing from './ProductListing';

const Products = ({ products, addItem }) => (
  <main className="content shop">
    <h1 className="page--heading">Shop our Products</h1>
    <section className="product--section">
      {products.length < 1 ? (
        <div>Loading...</div>
      ) : (
        products.map(item => <ProductListing key={item.number} {...{ ...item, addItem }} />)
      )}
    </section>
  </main>
);

export default Products;
