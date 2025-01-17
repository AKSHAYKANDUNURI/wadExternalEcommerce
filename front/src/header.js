import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/catalogue">Catalogue</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        
      </ul>
    </nav>
  </header>
);

export default Header;
