import React, { useState } from 'react';
import './Navbar.css';
import { BsArrowDown } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Navbar() {
  // State to track whether the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Rise<RxDotFilled style={ {alignSelf:"flex-start", marginLeft:"-9px"}}/></a>
      </div>

      {/* Hamburger menu button - only visible on mobile */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? (
          <span className="close-icon">X</span>
        ) : (
          <span className="hamburger-icon">☰</span>
        )}
      </div>

      {/* Links */}
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products <BsArrowDown /></a></li>
        <li><a href="#investment-club">Investment Club</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#about-us">About Us</a></li>
        <li><a href="#faqs">FAQs</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
