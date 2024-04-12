import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Balance() {
  return (
    <div className="post-page-container">
      <Helmet>
        <title>איזון ורפלקסולוגיה | ארנה קליין רפלקסולוגית</title>
        <meta name="description" content="טיפול רפלקסולוגי הוא טיפול אישי שמותאם לכל גוף עם התייחסות למאפיינים ולצרכים שלו. את תוכנית הטיפול האישית אני בונה לאחר תשאול והכרות המטופלת, כשכל התהליך נעשה עם שיתוף פעולה והסכמתה. השאיפה שלנו בטיפול, כמו בחיים, היא להגיע לאיזון." />
      </Helmet>
      <div className="post-content-container">
        <h1 className="post-title">איזון ורפלקסולוגיה</h1>
        <div className="post-section">
          <h2 className="post-question">
            <strong>ניסיתן פעם משהו כזה?! 😊</strong>
          </h2>
          <p>
            טיפול רפלקסולוגי הוא טיפול אישי שמותאם לכל גוף עם התייחסות למאפיינים ולצרכים שלו.
          </p>
          {/* תוכן נוסף */}
        </div>
        {/* תוכן נוסף */}
      </div>
      <div className="post-image-container">
        <img className="post-image" src="balance.webp" alt="אבנים מאוזנות" loading="lazy" />
      </div>
      <button className='general-button'>
        <Link to="/contact" className="post-book-treatment-button">הזמינו טיפול עכשיו!</Link>
      </button>
    </div>
  );
}
