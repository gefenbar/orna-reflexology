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
            <p>לחצי כאן להזמנת כרטיס מתנה</p>
          </div>
          <div className={`gift-card ${isHovered ? 'revealed' : ''}`}>
            <p>            פנקי את עצמך או מישהי מיוחדת בחוויה מפנקת!
</p>
<button>הזמיני Gift Card</button>

            <img className="logo2" src="logo.webp" alt="Logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvelopeAndGiftCard;