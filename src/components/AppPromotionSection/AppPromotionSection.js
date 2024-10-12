// components/AppPromotionSection.js
import React from 'react';
import './AppPromotionSection.css';
import { FaApple } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";

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
                <img src="https://s3-alpha-sig.figma.com/img/a29d/a92b/1f4879f766b94e8aa2f150ab248fe6fc?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mtVuWzMmRvXio--7IDNsQyY6OT3~Z0LjvE-WECVOGfaor93RPlFBfuAywTb5VlVVEN9UkfXfuF27MiZoE1JAmOO-1DhaoIhR2c7Vu663LbDCLSiw7CPSMlcP4kHLAZkAfim7CA1K12k4VC9UCHO49pxrrl3zlOlIVvEdtWq7adOe8Mgxtru7z-f~yOJsGZIJtlaEvjtBStmW6mIBiB7leRVBYYJ4cr76lXjBsD~rbO2pm4jFiS2haHCt6RxQYLX~lunImnhXeB3JHeXydrnYkaYdzGWGzu8llaMmWBGFJtR3xedT~5FDnWACZG1KrTs7kt05o46sPUSS6bLQJ87eSQ__" alt="Phone Preview" />
            </div>
        </div>
    );
}

export default AppPromotionSection;
