import React from 'react';
import './AssetClasses.css';
import { BsArrowRightShort } from "react-icons/bs";

function AssetClasses() {
  return (
    <section className="asset-classes">
      <h2>Asset Classes</h2>
      <p>It’s your money, choose where you invest it</p>
      <div className="asset-cards">
        <div className="asset-card">
          <div>
            <section style={{backgroundColor:"#fff4f0"}}></section>
            <img src='https://s3-alpha-sig.figma.com/img/4d36/c0b3/be8e800c0a0733b7a1acc5827c9548d7?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bDRWwihuO65iOL9lp77L6BMUAouGxdEAVdgWTEEm4ae839ZQ9xmI~U1pf5~1X7mQxdNtsQSSJKzKi7S8ejnUHq-RmMIT87b2KuRV7TH4BDKvA1-uD7-Ogt7ff4Q0D9Lb23wTtawJ-8NjI~UaYhkgzP7gg7cOkwMd1PqXXajHSvw~pbdwRqa89mFd19qfKUsFvBhRnXsw6MBFiOBDnBFCwy5z8w8QlLOLNgdrOAKN9iP6pY2vbdcz6QfkW-2qDhsh7eWVuovuI7U5zLio0c5qOa6R2Q-RVQGbcYOoMT0D9EEzZB1aKnCpkCqE4jOzxXhWJ2BBLW6BB5ZJ7fo6UZq6-g__' alt='Asset image' />
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
            <img src='https://s3-alpha-sig.figma.com/img/dc3a/7a08/651d08989125046b2fa2479b6fbe2968?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kiLS4VuEToqJEW3~H0ie2T1yQoaRSaOBd291HMeULPCKERv8aO49nrs4OgsKPP3Lhkox3ZtmdvH-adYyl0yHnyeC0rSrpDm6DEETRS9RWU5QONdTHdnUxasp6GvAgtJUFiQxd8GRfryfpIrfDytVLbOiixG6tQJMKakRCqKrTQbWEPF5trpEBUcSl8Zk3KsZnfqeLC~6UdyDyXwisSp56mu7tcCkI6rLSAoWrgtK3uUv5SJ5Z9anyrVrwT3bONsBSJDCRhsfgeYJIkN3PEKl-p63DgU5LEnn3tfV8gW-Lihqwf7jUT56o96g98k9Wp6magNs4IRDlMPu4kJbaPOfjA__' alt='Asset image' />
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
            <img src='https://s3-alpha-sig.figma.com/img/2bb6/944c/a3abd2ab70d927ae9548a65b6e98337a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bjcKDHC7NscKlYvh5R031YoIW3UxOXOLu3EqvsvQN6a8cMck1uxNQOeJvlZBjcRgt1IQCRHYmwX5wvvKD26k~23wqfE8WBaWxbfSMln~FLollQNbNmalcLoDjdpYp3uuaWudMIiPrWzmX00WGc9hzdHJjufZ0lEmezQN2JDvJVJFDt9wneFRjfEuLRgVZttvJHgTQrWw~bzCFa3HOrQxlWTF8ult80sCyRCr4hb22b8pCmy1xWMX5r2Jr9NZ0T9ksNTHQJ8nyE6RSQ~3HDWrBpYLHi0INvevL6iIg9CKul-gZxEe9-3HihJT07x0ForucJISg41k9jhYKHEfUGngnw__' alt='Asset image' />
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
