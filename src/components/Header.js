import React from 'react';
import { Link } from "react-router-dom";

const Header = ({ cartCount }) => (
  <header className="header">
    <div className="brand--container">
      <img className="brand--logo" src="bicycle.jpg" alt="Brand Logo" />
      <Link className="brand--link" to="/">Bicycle Shop</Link>
    </div>
    <nav className="nav primary-nav">
      <ul className="nav--list primary-nav--list">
        <li>
          <Link className="nav--link" to="/">Products</Link>
        </li>
      </ul>
    </nav>
    <nav className="nav secondary-nav">
      <ul className="nav--list secondary-nav--list">
        <li className="cart--link">
          <Link className="nav--link" to="/cart">Cart (<span className="cart--count">{cartCount}</span>)</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
