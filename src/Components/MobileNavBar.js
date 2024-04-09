import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="mobile-navbar">
      <div className="mobile-navbar-container">
   
        
        <div className={`mobile-navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <ul dir="rtl">
            <li>
              <Link to="/" onClick={toggleMenu}>
                דף הבית
              </Link>
            </li>
            <li>
              <Link to="/about-me" onClick={toggleMenu}>
                עליי
              </Link>
            </li>
            <li>
              <Link to="/testimonials" onClick={toggleMenu}>
                המלצות
              </Link>
            </li>
            <li>
              <Link to="/about-legs" onClick={toggleMenu}>
                על הרגל
              </Link>
            </li>            
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                צרו קשר
              </Link>
            </li>
            <li className='mobile-giftcard'>
            <div className="giftcard">
            <div className="gift-card revealed">
          <p>פנקי את עצמך או מישהי מיוחדת בחוויה מפנקת!</p>
          <button>
          <a href="https://api.whatsapp.com/send?phone=+972549794777&text=שלום ארנה, ברצוני להזמין Gift Card"  rel="noreferrer" target="_blank" onClick={toggleMenu}>
    הזמיני Gift Card
  </a>
          </button>
          <img className="logo2" src="logo.webp" alt="Logo" />
        </div>
        </div>
        </li>
          </ul>
          <div
          className={`mobile-navbar-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        </div>
        
        
      </div>
      <Link to="/" className="mobile-navbar-logo">
          <img src="logo.webp" width="150px" height="40px" alt="logo" />
        </Link>
    </nav>
    
  );
};

export default MobileNavbar;