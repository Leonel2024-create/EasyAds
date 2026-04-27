import React from 'react';
import './styles.css';

const LandingPage = () => {
  return (
    <div className='container'>
      <header className='hero'>
        <h1>Welcome to EasyAds</h1>
        <p>Your marketplace for easy advertising solutions</p>
        <a href='#pricing' className='cta-button'>Get Started</a>
      </header>
      <section className='features'>
        <h2>Features</h2>
        <div className='feature-list'>
          <div className='feature'>
            <h3>Easy to Use</h3>
            <p>Our interface is designed for simplicity and efficiency.</p>
          </div>
          <div className='feature'>
            <h3>Affordable Pricing</h3>
            <p>Choose from various pricing plans that suit your needs.</p>
          </div>
          <div className='feature'>
            <h3>Excellent Support</h3>
            <p>Our support team is here to assist you at any time.</p>
          </div>
        </div>
      </section>
      <section className='pricing' id='pricing'>
        <h2>Pricing</h2>
        <div className='pricing-table'>
          <div className='pricing-plan'>
            <h3>Basic Plan</h3>
            <p>$10/mo</p>
            <button>Subscribe</button>
          </div>
          <div className='pricing-plan'>
            <h3>Pro Plan</h3>
            <p>$20/mo</p>
            <button>Subscribe</button>
          </div>
          <div className='pricing-plan'>
            <h3>Enterprise Plan</h3>
            <p>$50/mo</p>
            <button>Subscribe</button>
          </div>
        </div>
      </section>
      <footer className='footer'>
        <p>&copy; 2026 EasyAds. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;