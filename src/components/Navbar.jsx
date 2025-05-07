import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './components.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src="./images/resume-photo.png" alt="Logo" className="logo-img" />
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={menuOpen ? 'bar change' : 'bar'}></div>
          <div className={menuOpen ? 'bar change' : 'bar'}></div>
          <div className={menuOpen ? 'bar change' : 'bar'}></div>
        </div>
        <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/works" className="nav-links" onClick={closeMenu}>
              Works
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


