import { Link } from "react-router-dom"
import React, { useState } from 'react';

export default function DesktopNavbar() {  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar" dir='rtl'>
      <div className="navbar-container">
      
        <div className={`navbar-links`}>
          <ul>
          <a className="navbar-logo" href='/'>
          <img src="logo.webp" width={'150px'} height={'40px'} alt='logo' ></img>
        </a>
        <li>
        <Link to="/">דף הבית</Link>
        </li>
        <li>
        <Link to="/about-me">עליי</Link>
        </li>
        <li>
              <Link to="/testimonials" onClick={toggleMenu}>
                המלצות
              </Link>
            </li>
        <li>
        <Link to="/about-legs">על הרגל</Link>
        </li>
        
        <li>
          <Link to="/contact">צרו קשר</Link>
          </li>

          </ul>
        </div>
        
      </div>
    </nav>
  );
};

