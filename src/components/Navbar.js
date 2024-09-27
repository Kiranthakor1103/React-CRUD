import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar" >
      <ul className="navbar-list" >
        <li>
          <Link  to="/" className="navbar-link">Login</Link>
        </li>
        <li>
          <Link to="/products" className="navbar-link">Product List</Link>
        </li>
        <li>
          <Link to="/crud" className="navbar-link">CRUD Operations</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
