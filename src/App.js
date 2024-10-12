import React, { useState } from 'react';
import './App.css';
import HeroSection from './components/Hero section/HeroSection';
import Features from './components/Features/Features';
import Navbar from './components/Navbar/Navbar';
import AssetClasses from './components/AssetClasses/AssetClasses';
import WealthSection from './components/Wealth section/WealthSection';
import InfoSection from './components/InfoSection/InfoSection';
import TestimonialSection from './components/TestimonialSection/TestimonialSection';
import CommunitySection from './components/CommunitySection/CommunitySection';
import AppPromotionSection from './components/AppPromotionSection/AppPromotionSection';
import Footer from './components/Footer/Footer';
import image from './second.PNG'
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import Features from './components/Features';
// import AssetClasses from './components/AssetClasses';

function App() {
  // const [menu, setMenu]=useState()
  
  return (
    <div className="Apps" >
      <Navbar />
      <HeroSection />
      <h2 className='support-text '>We are supported by</h2>
      <img className='Apps-img' src={image} style={{ width: "100%" }} alt='second' />

      <Features />
      <AssetClasses />

      <WealthSection />
      <InfoSection />
      <TestimonialSection />
      <CommunitySection />
      <AppPromotionSection />

      <Footer/>
    </div>
  );
}

export default App;
