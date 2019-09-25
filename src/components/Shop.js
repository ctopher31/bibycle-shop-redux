import React from 'react';
import { connect } from 'react-redux';
import Listing from './Listing';

const Shop = ({ products }) => (
  <main className="content shop">
    <h1 className="page--heading">Shop our Products</h1>
    <section className="product--section">
      {products.map(item => <Listing key={item.number} {...item} />)}
    </section>
  </main>
);

const mapStateToProps = state => ({ products: state.products, });

export default connect(mapStateToProps, null)(Shop);
