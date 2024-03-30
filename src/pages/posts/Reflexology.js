import React from 'react';
import { Link } from 'react-router-dom';

export default function Reflexology() {
  return (
    <div className="post-page-container">
      <div className="post-content-container">
        <h1 className="post-title">רפלקסולוגיה: טיפול מותאם אישית בידיים שלך</h1>
        <div className="post-section">
          <h2 className="post-question">
            <strong>מי מחליט עלי?</strong> ✋
          </h2>
          <p>
            הגוף מורכב משכבות שונות: עצם, שריר, עור ועוד... בטיפול רפלקסולוגיה, כדי להגיע לכל שכבות האיברים והמערכות, נעבור יחד תהליך יסודי:
          </p>
          <ol className="post-list">
            <li>
              <strong>תשאול:</strong> אשאל אותך שאלות לגבי בריאותך, היסטוריה רפואית, תסמינים, הרגלים ועוד. ❓
            </li>
            <li>
              <strong>התבוננות:</strong> אבחן את כפות הרגליים שלך, אשים לב לצבע, טקסטורה, סימנים מיוחדים ועוד. 👀
            </li>
            <li>
              <strong>מגע:</strong> אגע בכפות הרגליים בנקודות ספציפיות הקשורות לאיברים ולמערכות בגוף. ✨
            </li>
          </ol>
        </div>
        <div className="post-section">
          <p>
            <strong>רק לאחר קריאה מעמיקה של כל המידע שאסוף, אמליץ על סדרת טיפולים שתותאם אישית לצרכים הייחודיים שלך.</strong> ‍⚕️🩺
          </p>
          <p>
            <strong>גם אתן חלק מההחלטה!</strong> ‍♀️
            <br /> זהו גופך, ולכן חשוב שתרגישי בנוח עם תוכנית הטיפול. אשמח לשמוע את דעתך, את תחושותיך ואת רצונותיך לאורך כל התהליך.
          </p>
          <p>
            <strong>כמו כוס קפה מושלמת:</strong> ☕️
            <br /> בדומה להכנת קפה, שם את בוחרת את כל החומרים, הכמויות והסוגים, כך גם בטיפול רפלקסולוגיה. יחד נבנה תוכנית שתתאים לך כמו כפפה ליד, ותעניק לך את הטיפול הטוב ביותר.
          </p>
          <p>
            <strong>לפרטים נוספים והזמנת טיפול:</strong>
            <br /> ארנה קליין, רפלקסולוגית
          </p>
          <p>
            <strong>בואי לחוות טיפול מותאם אישית שיעניק לך בריאות, רוגע והרמוניה.</strong> ✨
          </p>
        </div>
      </div>
      <div className="post-image-container">
        <img className="post-image" src="coffee.webp" alt="רפלקסולוגיה" loading="lazy" />
      </div>
      <Link to="/contact" className="post-book-treatment-button">הזמינו טיפול עכשיו!</Link>
    </div>
  );
}
