import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Reflection() {
  return (
    <div className="post-page-container">
      <Helmet>
        <title>רפלקסולוגיה והשתקפויות | אורנה קליין רפלקסולוגית</title>
        <meta name="description" content="רפלקסולוגיה באה מהמילה REFLECTION שפירושה השתקפות. כל אזור בכף הרגל מייצג איבר או אזור מסוים בגוף. טיפול רפלקסולוגי יביא את האיבר שיצא מאיזון לתפקוד נכון ויעיל." />
      </Helmet>
      <div className="post-content-container">
        <h1 className="post-title">רפלקסולוגיה והשתקפויות</h1>
        <div className="post-section">
          <p>רפלקסולוגיה באה מהמילה REFLECTION שפירושה השתקפות. כל אזור בכף הרגל מייצג איבר או אזור מסוים בגוף. בטיפול רפלקסולוגי אתייחס לסימנים כמו חריצי יובש, בליטה, נפיחות, עור יבש, צבע טמפרטורה. כל מערכת/איבר בגוף משתקפים באזור מסויים בכף הרגל. אם נראה שינויי כלשהו הדבר יצביע על חוסר איזון באותו איבר. טיפול רפלקסולוגי יביא את האיבר שיצא מאיזון לתפקוד נכון ויעיל.</p>
        </div>
        <div className="post-section">
          <p>השבוע יצאתי לסיור צילום שהתמקד בהשתקפויות. למדתי שהשהייה, התבוננות בפרטים, שינויי זווית ועוד נותנים תוצאות מוצלחות ושונות. ואתן? מנסות דרכים חדשות? מוזמנות לשנות זווית ראייה להכיר אותי ואת דרכי לאיזון והרפייה</p>
          <p>ארנה קליין רפלקסולוגית 👣</p>
          <p>התקשרו עכשיו 0549794777</p>
        </div>
      </div>
      <div className="post-image-container">
        <img className="post-image" src="reflection.webp" alt="רפלקסולוגיה" loading="lazy" />
      </div>
      <button className='general-button'>
        <Link to="/contact" className="post-book-treatment-button"> הזמינו טיפול עכשיו! </Link>
      </button>
    </div>
  );
}
