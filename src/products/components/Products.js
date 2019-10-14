import React, { Component } from 'react';
import ProductListing from './ProductListing';

class Products extends Component {
  componentDidMount() {
    this.props.loadProducts();
  }

  render() {
    const { items, addItem } = this.props;

    return (
      <main className="content shop">
        <h1 className="page--heading">Shop our Products</h1>
        <section className="product--section">
          {items.length < 1 ? (
            <div>Loading...</div>
          ) : (
            items.map(item => <ProductListing key={item.number} {...{ ...item, addItem }} />)
          )}
        </section>
      </main>
    );
  }
}

export default Products;
