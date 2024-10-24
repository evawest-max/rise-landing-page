// components/AppPromotionSection.js
import React from 'react';
import './AppPromotionSection.css';
import { FaApple } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";
import appImage from "../Hero section/Hero-Image.png"

const AppPromotionSection = () => {
    return (
        <div className="app-promotion-section">
            <div>

                <h2>Download The Rise App</h2>
                <p className='text-2'>Join our 100,000 users investing and setting long-term goals! Dollar investments that help you grow.</p>
                <span className="app-promotion-section-span">Dollar investments that help you grow.</span>
                {/* <div className="download-buttons"> */}
                <div className="app-buttons2">

                    <a href="#" className="app-btn2">
                        <span className="app-btn2-span">
                            <FaApple />
                        </span>
                        <p><span>Download on the</span> <br /> App Store</p>
                    </a>
                    <a href="#" className="app-btn2">
                        <span className="app-btn2-span">
                            <FaGooglePlay />
                        </span>
                        <p><span>Download on</span> <br /> Google Play</p>
                    </a>

                </div>
            </div>
            <div className="app-preview">
                <img src={appImage} alt="Phone Preview" />
            </div>
        </div>
    );
}

export default AppPromotionSection;
