import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Reflexology() {
  return (
    <div className="post-page-container">
<Helmet>
  <title>רפלקסולוגיה | הרגליים - ארנה קליין | רפלקסולוגיה ודמיון מודרך</title>
  <meta name="description" content="למדו על טיפול הרפלקסולוגיה - טיפול מותאם אישית המשתמש בנקודות לחץ על כפות הרגליים כדי להקל על כאבים, לשפר את הבריאות הכללית ולעודד איזון גוף ונפש. ארנה קליין מטפלת מוסמכת בתחום זה."  />

  <meta property="og:type" content="website" />
  <meta property="og:title" content="רפלקסולוגיה | הרגליים - ארנה קליין | רפלקסולוגיה ודמיון מודרך" />
  <meta property="og:description" content="למדו על טיפול הרפלקסולוגיה - טיפול מותאם אישית המשתמש בנקודות לחץ על כפות הרגליים כדי להקל על כאבים, לשפר את הבריאות הכללית ולעודד איזון גוף ונפש. ארנה קליין מטפלת מוסמכת בתחום זה." />
  <meta property="og:url" content="https://hergelaim.co.il/reflexology" />
  <meta property="og:image" content="https://hergelaim.co.il/logo.jpeg" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="רפלקסולוגיה | הרגליים - ארנה קליין | רפלקסולוגיה ודמיון מודרך" />
  <meta name="twitter:description" content="למדו על טיפול הרפלקסולוגיה - טיפול מותאם אישית המשתמש בנקודות לחץ על כפות הרגליים כדי להקל על כאבים, לשפר את הבריאות הכללית ולעודד איזון גוף ונפש. ארנה קליין מטפלת מוסמכת בתחום זה." />
  <meta name="twitter:image" content="https://hergelaim.co.il/logo.jpeg" />
</Helmet>
      <div className="post-content-container">
        <h1 className="post-title">
          רפלקסולוגיה: טיפול מותאם אישית בידיים שלך - הרגליים
        </h1>
        <div className="post-section">
          <h2 className="post-question">
            <strong>מי מחליט עלי?</strong> ✋
          </h2>
          <p>
            הגוף מורכב משכבות שונות: עצם, שריר, עור ועוד... בטיפול רפלקסולוגי,
            כדי להגיע לכל שכבות האיברים והמערכות, נעבור יחד תהליך יסודי:
          </p>
          <ol className="post-list">
            <li>
              <strong>תשאול:</strong> אשאל אותך שאלות לגבי בריאותך, היסטוריה
              רפואית, תסמינים, הרגלים ועוד. ❓
            </li>
            <li>
              <strong>התבוננות:</strong> אבחן את כפות הרגליים שלך, אשים לב לצבע,
              טקסטורה, סימנים מיוחדים ועוד. 👀
            </li>
            <li>
              <strong>מגע:</strong> אגע בכפות הרגליים בנקודות ספציפיות הקשורות
              לאיברים ולמערכות בגוף. ✨
            </li>
          </ol>
        </div>
        <div className="post-section">
          <p>
            <strong>
              רק לאחר קריאה מעמיקה של כל המידע שאאסוף, אמליץ על סדרת טיפולים
              שתותאם אישית לצרכים הייחודיים שלך.
            </strong>{" "}
            ‍⚕️🩺
          </p>
          <p>
            <strong>גם אתן חלק מההחלטה!</strong> ‍♀️ <br /> זהו גופך, ולכן חשוב
            שתרגישי בנוח עם תוכנית הטיפול. אשמח לשמוע את דעתך, את תחושותיך ואת
            רצונותיך לאורך כל התהליך.
          </p>
          <p>
            <strong>לפרטים נוספים והזמנת טיפול:</strong> <br /> ארנה קליין,
            רפלקסולוגית
          </p>
          <p>
            <strong>
              בואי לחוות טיפול מותאם אישית שיעניק לך בריאות, רוגע והרמוניה.
            </strong>{" "}
            ✨
          </p>
        </div>
      </div>
      <div className="post-image-container">
        <img
          className="post-image"
          src="reflexology.webp"
          alt="טביעות רגליים בחול"
          loading="lazy"
        />
      </div>
      <button className="general-button">
        <Link to="/contact" className="post-book-treatment-button">
          הזמינו טיפול עכשיו!
        </Link>
      </button>
    </div>
  );
}
