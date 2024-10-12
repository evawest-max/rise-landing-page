// components/wealthSection.js
import React from 'react';
import './WealthSection.css';
import wealth from './wealth.PNG'

const WealthSection = () => {
  return (
    <div className="wealth-section" >
      <div className="wealth-image">
        <img src={wealth} alt="App Preview" />
      </div>
      <div className="wealth-content">
        <h1>The Rise App</h1>
        <h2>Save for your <span className="highlight">future</span></h2>
        <p>With Rise, you achieve your financial goals faster. Save for school, your home, vacations, your children’s future and more.</p>
        <button className="cta-button">Start Saving</button>
      </div>
    </div>
  );
}

export default WealthSection;
