import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from './logo.png';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="reddit timer logo" />
        </Link>
      </div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/search" className="nav__link">
              Search
            </Link>
          </li>
          <li className="nav__item">
            <HashLink to="/#how-it-works" className="nav__link">
              How it works
            </HashLink>
          </li>
          <li className="nav__item">
            <HashLink to="/#about" className="nav__link">
              About
            </HashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
