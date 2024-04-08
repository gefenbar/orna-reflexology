import React, { useState, useEffect } from 'react';

const EnvelopeAndGiftCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showEnvelope, setShowEnvelope] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowEnvelope(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="gift-card-section">
      {showEnvelope && (
        <div
          className="envelope-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`envelope ${isHovered ? 'open' : ''}`}>
            <div className="envelope-flap-container">
              <div className="envelope-flap" />
            </div>
            <div className="envelope-content">
              <img className="logo" src="logo-full.webp" alt="Logo" />
              <p>לחצי כאן להזמנת כרטיס מתנה</p>
            </div>
            <div className={`gift-card ${isHovered ? 'revealed' : ''}`}>
              <p>פנקי את עצמך או מישהי מיוחדת בחוויה מפנקת!</p>
              <button>
  <a href="https://api.whatsapp.com/send?phone=+972549794777&text=שלום ארנה, ברצוני להזמין Gift Card"  rel="noreferrer" target="_blank">
    הזמיני Gift Card
  </a>
</button>
              <img className="logo2" src="logo.webp" alt="Logo" />
            </div>
          </div>
        </div>
      )}
      {!showEnvelope && (
        <div className={`gift-card revealed`}>
          <p>פנקי את עצמך או מישהי מיוחדת בחוויה מפנקת!</p>
          <button>
          <a href="https://api.whatsapp.com/send?phone=+972549794777&text=שלום ארנה, ברצוני להזמין Gift Card"  rel="noreferrer" target="_blank">
    הזמיני Gift Card
  </a>
          </button>
          <img className="logo2" src="logo.webp" alt="Logo" />
        </div>
      )}
    </section>
  );
};

export default EnvelopeAndGiftCard;