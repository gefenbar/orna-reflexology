import React, { useState } from "react";

export default function DesktopNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return window.location.pathname === path;
  };

  return (
    <nav className="navbar" dir="rtl">
      <div className="navbar-container">
        <div className={`navbar-links`}>
          <ul>
            <li className={isActive("/") ? "active" : ""}>
              <a href="/">דף הבית</a>
            </li>
            <li className={isActive("/about-me") ? "active" : ""}>
              <a href="/about-me">עליי</a>
            </li>
            <li className={isActive("/testimonials") ? "active" : ""}>
              <a href="/testimonials" onClick={toggleMenu}>
                המלצות
              </a>
            </li>
            <li className={isActive("/about-legs") ? "active" : ""}>
              <a href="/about-legs">על הרגל</a>
            </li>
            <li className={isActive("/contact") ? "active" : ""}>
              <a href="/contact">צרו קשר</a>
            </li>
          </ul>
        </div>
      </div>
      <a className="navbar-logo" href="/">
        <img src="logo.webp" width={"150px"} height={"40px"} alt="logo" />
      </a>
    </nav>
  );
}
