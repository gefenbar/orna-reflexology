import React, { useState } from 'react';

const EnvelopeAndGiftCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="gift-card-section">
      <div
        className="envelope-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`envelope ${isHovered ? 'open' : ''}`}>
          <div className="envelope-flap"></div>
          <div className="envelope-content">
            <img className="logo" src="logo.webp" alt="Logo" />
            <p>Click for sending gift card</p>
          </div>
          <div className={`gift-card ${isHovered ? 'revealed' : ''}`}>
            <h2>Happy Birthday!</h2>
            <p>
              Wishing you a wonderful day filled with joy and happiness. Please
              enjoy this gift card as a token of our appreciation.
            </p>
            <img className="logo2" src="logo.webp" alt="Logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvelopeAndGiftCard;