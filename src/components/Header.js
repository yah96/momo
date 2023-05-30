import React from 'react';
import './css/header.css';
import smallLogo from '../images/small-logo.png';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={smallLogo} alt="Logo" className="small-logo" />
        <div className="logo-text">MoMo's Coffee Shop</div>
      </div>
      <nav className="navigation">
        <ul>
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('menu')}>Menu</li>
          <li onClick={() => scrollToSection('about')}>About Us</li>
          <li onClick={() => scrollToSection('contact')}>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
