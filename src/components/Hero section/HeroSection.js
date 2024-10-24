import React from 'react';
import { FaApple } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";
import heroImage from "./Hero-Image.png"
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="herosection1">
      <div className="herosection1-content">
        <h1>Dollar investments that help you grow</h1>
        <p>We put your money in high quality assets that help you build wealth and achieve your financial goals..</p>
        <div className="app-buttons">
          <a href="#" className="app-btn">
            <span>
              <FaApple />
            </span>
            <p><span>Download on the</span> <br /> App Store</p>
          </a>
          <a href="#" className="app-btn">
            <span>
              <FaGooglePlay />
            </span>
            <p><span>Download on</span> <br /> Google Play</p>
          </a>
        </div>
      </div>

      <div className="herosection1-image">
        <img src={heroImage} alt='hero image' />
        {/* Add the mobile app image here */}
      </div>

      {/* Adding decorative circles */}
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>
      <div className="circle circle4"></div>
      <div className="circle circle5"></div>
    </section>

  );
}

export default HeroSection;
