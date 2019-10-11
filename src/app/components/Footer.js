import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer">
    <nav>
      <ul className="nav--list footer-nav--list">
        <li>
          <Link className="nav--link footer-nav--link" to="/">Products</Link>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
