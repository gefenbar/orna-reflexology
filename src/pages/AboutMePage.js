import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <section className="about-page">

      <div className="about-container">
        <div className="about-header">
          <h1>שלום, שמי ארנה קליין</h1>
          <h2>מטפלת מוסמכת ברפלקסולוגיה ודמיון מודרך, בוגרת מכללת רידמן</h2>
        </div>
        <div className="about-content">
          <div className="about-image-container">
            <img src="orna.webp" alt="ארנה קליין" loading="lazy"  width="348px" height="480px" />
          </div>
          <div className="about-text-container">
            <p>בחרתי ברפלקסולוגיה מתוך אמונה עמוקה ביכולתה לתת מענה נכון למגוון מצבים ותופעות. בגישתי הטיפולית אני משלבת הקשבה לצורכי המטופלת והתאמת מענה טיפולי מדוייק תוך הבנה שריפוי אמיתי מגיע מתוך איזון של הגוף עצמו.</p>
            <p>אני מאמינה שהקשבה לגוף היא המפתח להבנת צרכיו ולתמיכה בתהליך הריפוי הטבעי. עבורי, כל אדם הוא מכלול של גוף, נפש ורוח, ואני רואה חשיבות רבה בטיפול הוליסטי המשלב את כל היבטי האדם.</p>
            <p>אני רואה את המטופלת כשותפה פעילה בתהליך הריפוי, ואנו עובדות יחד כדי ליצור תנאים מיטביים להחלמה.</p>
            <p>אני מאמינה שכל אישה מחזיקה בכוחות ריפוי פנימיים, ותפקידי כרפלקסולוגית הוא לסייע לה לגלות ולממש את כוחותייה.</p>
            <p>אני מזמינה אתכן לחוות איתי טיפול רפלקסולוגי מותאם אישית, שיאפשר לכן להתחבר לכוחות הריפוי הטבעיים שלכן ולמצוא איזון והרמוניה בגופכן.</p>
            <p>אשמח לפגוש אתכן ולצעוד איתכן במסע הריפוי שלכן.</p>
            <button className="general-button">
              <Link className="contact-link" to="/contact">
                דברו איתי
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
