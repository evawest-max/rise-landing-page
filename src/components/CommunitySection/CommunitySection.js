// components/CommunitySection.js
import React from 'react';
import './CommunitySection.css';
import communityimage1 from "./community-image1.jpeg"
import communityimage2 from "./community-image2.jpeg"
import communityimage3 from "./community-image3.jpeg"
import communityimage4 from "./community-image4.jpeg"

const CommunitySection = () => {
    return (
        <div className="community-section">
            <div>
                <h2>Join The Rise Community</h2>
                <p>If you want to go far, go together. Our Telegram community surrounds you with others who can help you along your financial journey with tips, support, advice, and learning. It's completely free and open to new and seasoned investors.</p>
                <button className="cta-button">Join our Community</button>
            </div>
            <div className="container">
                <div className="image-container top-image">
                    <img src={communityimage1} alt="top" />
                </div>
                <div className="image-container left-image">
                    <img src={communityimage2} alt="left" />
                </div>
                <div className="image-container right-image">
                    <img src={communityimage3} alt="right" />
                </div>
                <div className="image-container bottom-image">
                    <img src={communityimage4} alt="bottom" />
                </div>
                <div className="diamond"></div>
                <div className="diamond2"></div>
            </div>
        </div>
    );
}

export default CommunitySection;
