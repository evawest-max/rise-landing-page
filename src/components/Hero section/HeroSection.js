import React from 'react';
import { FaApple } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";
// import hero-image from './Hero-image.png'
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="herosection1">
      <div className="herosection1-content">
        <h1>Dollar investments that help you grow</h1>
        <p>We put your money in high quality assets that help you build wealth and achieve your financial goals.</p>
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
        <img src='https://s3-alpha-sig.figma.com/img/a29d/a92b/1f4879f766b94e8aa2f150ab248fe6fc?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mtVuWzMmRvXio--7IDNsQyY6OT3~Z0LjvE-WECVOGfaor93RPlFBfuAywTb5VlVVEN9UkfXfuF27MiZoE1JAmOO-1DhaoIhR2c7Vu663LbDCLSiw7CPSMlcP4kHLAZkAfim7CA1K12k4VC9UCHO49pxrrl3zlOlIVvEdtWq7adOe8Mgxtru7z-f~yOJsGZIJtlaEvjtBStmW6mIBiB7leRVBYYJ4cr76lXjBsD~rbO2pm4jFiS2haHCt6RxQYLX~lunImnhXeB3JHeXydrnYkaYdzGWGzu8llaMmWBGFJtR3xedT~5FDnWACZG1KrTs7kt05o46sPUSS6bLQJ87eSQ__' alt='hero image' />
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
