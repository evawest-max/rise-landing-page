import React from 'react';

import animation1 from './animation1.PNG'
import animation2 from './animation2.PNG'
import animation3 from './animation3.PNG'
import animation4 from './animation4.PNG'
import './Features.css';

function Features() {
  return (
    <div className="features">
      <div className='feature-desktop'>
        <div className='feature-container1'>
          <img src={animation1} alt='second' />
          <div className="feature-block">
            <h2>Invest your money in dollars</h2>
            <p>By holding your investments in a stable currency, your money grows over time and retains its value better.</p>
            <a href="#" className="cta-btn">Start Investing Now</a>
          </div>
        </div>

        <div className='feature-container2'>
          <img src={animation2} alt='second' />
          <div className="feature-block">
            <h2>Choose what's best for you</h2>
            <p>Unlike other platforms, Rise lets you pick between stocks, US real estate and fixed income, according to your risk appetite. That way you can spread your risk and tap into different investments all in one place. </p>
            <a href="#" className="cta-btn">Start Investing Now</a>
          </div>
        </div>

        <div className='feature-container1'>
          <img src={animation3} alt='second' />
          <div className="feature-block">
            <h2>Set goals and reach them</h2>
            <p>You can invest towards a goal on Rise--retirement, higher education, save for your home or travel budgets. Or create a goal of your own and invest periodically to achieve them. </p>
            <a href="#" className="cta-btn">Start Investing Now</a>
          </div>
        </div>

        <div className='feature-container2' style={{marginBottom: "0px"}}>
          <img src={animation4} alt='second' />
          <div className="feature-block">
            <h2>We remember so you dont have to</h2>
            <p>Our Auto-invest feature makes it easy to stay consistent, even when you forget. Set a funding amount, frequency and payment method and Rise will automatically fund your investment, on schedule. </p>
            <a href="#" className="cta-btn">Start Investing Now</a>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Features;
