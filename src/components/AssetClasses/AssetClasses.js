import React from 'react';
import './AssetClasses.css';
import { BsArrowRightShort } from "react-icons/bs";
import asset1 from "./asset-image1.png"
import asset2 from "./asset-image2.png"
import asset3 from "./asset-image3.png"

function AssetClasses() {
  return (
    <section className="asset-classes">
      <h2>Asset Classes</h2>
      <p>It’s your money, choose where you invest it</p>
      <div className="asset-cards">
        <div className="asset-card">
          <div>
            <section style={{backgroundColor:"#fff4f0"}}></section>
            <img src={asset1} alt='Asset image1'/>
          </div>
          <h3>Stocks</h3>
          <div >
            <p>
              We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.<br /><br />
              <span><span style={{ color: "#919fb5" }}>Historical returns: </span>14% per annum</span><br />
              <span><span style={{ color: "#919fb5" }}>Risk Level: </span>Medium</span>
            </p>
          </div>
          <a href="#">Learn how Stocks work <BsArrowRightShort /></a>
        </div>
        <div className="asset-card">
          <div>
            <section style={{backgroundColor:"#f6f2ff"}}></section>
            <img src={asset2} alt='Asset image2'/>
          </div>
          <h3>Real Estate</h3>
          <div>
            <p>
              Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.<br /><br />
              <span><span style={{ color: "#919fb5" }}>Historical returns: </span>14% per annum</span><br />
              <span><span style={{ color: "#919fb5" }}>Risk Level: </span>Medium</span>
            </p>
          </div>
          <a href="#">Learn how Real Estate works <BsArrowRightShort /></a>
        </div>
        <div className="asset-card">
          <div>
            <section style={{backgroundColor:"#ecfefe"}}></section>
            <img src={asset3} alt='Asset image3' />
          </div>
          <h3>Fixed Income</h3>
          <div>
            <p>
              A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money from inflation while earning steady returns.<br /><br />
              <span><span style={{ color: "#919fb5" }}>Historical returns: </span>14% per annum</span><br />
              <span><span style={{ color: "#919fb5" }}>Risk Level: </span>Medium</span>
            </p>
          </div>
          <a href="#">Learn how Fixed Income works <BsArrowRightShort /></a>
        </div>
      </div>
    </section>
  );
}

export default AssetClasses;
