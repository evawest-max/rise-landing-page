import React from 'react';
import './Footer.css';
import { RxDotFilled } from "react-icons/rx";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
      <div className="navbar-logo">
        <a href="/" style={{color:"black"}}>Rise<RxDotFilled style={ {alignSelf:"flex-start", marginLeft:"-9px"}}/></a>
      </div>
        <ul>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#faqs">FAQs</a></li>
          <li><a href="#contact-info">Contact Info</a></li>
          <li><a href="#press">Press</a></li>
          <li><a href="#rise-impact">Rise Impact</a></li>
        </ul>
      </div>
      
      <div className="footer-column">
        <h3>Explore</h3>
        <ul>
          <li><a href="#investment-club">Investment Club ↗</a></li>
          <li><a href="#blog">Blog ↗</a></li>
        </ul>
      </div>
      
      <div className="footer-column">
        <h3>Products</h3>
        <ul>
          <li><a href="#rise-app">Rise App</a></li>
          <li><a href="#wallets">Wallets</a></li>
          <li><a href="#asset-classes">Asset Classes</a></li>
        </ul>
      </div>
      
      <div className="footer-column">
        <h3>Contact Us</h3>
        <ul>
          <li><a href="tel:08187147405">0818 714 7405 ↗</a></li>
          <li><a href="mailto:hello@rise.capital">hello@rise.capital ↗</a></li>
          <li><a href="#newsletter">Newsletter ↗</a></li>
          <li><a href="#instagram">Instagram ↗</a></li>
          <li><a href="#twitter">Twitter ↗</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
