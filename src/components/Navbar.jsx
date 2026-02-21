import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img 
            src="/path-to-your-logo.png" 
            alt="Health Logo" 
            className="logo-image"
          />
          <span className="logo-text">HealthCare</span>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          <span className={isMenuOpen ? 'bar open' : 'bar'}></span>
          <span className={isMenuOpen ? 'bar open' : 'bar'}></span>
          <span className={isMenuOpen ? 'bar open' : 'bar'}></span>
        </div>

        {/* Navigation Menu */}
        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#bmi" className="nav-link">BMI</a>
          </li>
          <li className="nav-item">
            <a href="#news" className="nav-link">News</a>
          </li>
          <li className="nav-item">
            <a href="#medicine" className="nav-link">Medicine</a>
          </li>
          <li className="nav-item dropdown">
            <a href="#more" className="nav-link">
              More
              <span className="dropdown-arrow">▼</span>
            </a>
            <ul className="dropdown-menu">
              <li><a href="#services" className="dropdown-link">Services</a></li>
              <li><a href="#doctors" className="dropdown-link">Doctors</a></li>
              <li><a href="#appointments" className="dropdown-link">Appointments</a></li>
              <li><a href="#contact" className="dropdown-link">Contact</a></li>
            </ul>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="auth-buttons">
          <button className="btn-login">Login</button>
          <button className="btn-signup">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
