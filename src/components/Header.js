import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from './logo.png';

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="reddit timer logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <HashLink to="/#how-it-works">How it works</HashLink>
          </li>
          <li>
            <HashLink to="/#about">About</HashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
