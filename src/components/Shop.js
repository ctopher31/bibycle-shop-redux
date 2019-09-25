import React from 'react';

const Shop = ({ children }) => (
  <main className="content shop">
    <h1 className="page--heading">Shop our Products</h1>
    <section className="product--section">
      {children}
    </section>
  </main>
);

export default Shop;
