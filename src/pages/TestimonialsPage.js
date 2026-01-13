import React from 'react';
import { Helmet } from 'react-helmet';

const testimonials = [
  { name: "אנה נקסדורף", quote: "אורנה מקסימה עם אנרגיות טובות. מטפלת קשובה ורגישה. ממליצה מאוד." },
  { name: "ד\"ר מירה המאירי", quote: "מטפלת מעולה, מומלצת מאוד." },
  { name: "מינה נלגבאץ", quote: "חיפשתי מקום קרוב לבית. מצאתי עולם ומלואו.. אישה נעימה חכמה ישרה ומיקצועית!!!  מצאתי בית. רפלקסולוגיה היא אחת הדרכים לאבחן לטפל וגם להתפנק. אין ספק שזה המקום. זכיתי." },
  { name: "קרן מעוז", quote: "רוצה לתת לעצמך מתנה? שעה של טיפול רפלוקסולוגי מפנק אצל אורן קליין Orna Nissani Klein." },
  { name: "ליאת דהן", quote: "תענוג לעבור את הטיפול עם אורנה. הגעתי למרחב נעים, והרוחתי זמן איכות, רגע לעצמי ועם עצמי. ונהנתי מאוד מהטיפול המקצועי והנעים. מומלץ בחום!" },
  { name: "שירה לוי", quote: "ממליצה בחום, חוויה מדהימה. אורנה מקסימה, רגישה ומקצועית. תודה רבה!" },
  { name: "רוית כהן", quote: "טיפול מדהים, אווירה נעימה ומקצועית. ממליצה בחום!" },
];

const Testimonial = ({ name, quote }) => (
  <div className="testimonial">
    <div className="quote-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z" fill="#e5eee3" />
      </svg>
    </div>
    <p className="testimonial-quote">{quote}</p>
    <div className="testimonial-footer">
      <div className="testimonial-avatar-placeholder">{name.charAt(0)}</div>
      <p className="testimonial-name">{name}</p>
    </div>
  </div>
);

const TestimonialsPage = () => (
  <section className="testimonials" id="testimonials-page">
    <Helmet>
      <title>המלצות | הרגליים - ארנה קליין | רפלקסולוגיה ודמיון מודרך</title>
      <meta name="description" content="קראו מה לקוחות מספרים על החוויה והטיפול אצל ארנה קליין, מטפלת מוסמכת ברפלקסולוגיה ודמיון מודרך בכפר תבור." />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="המלצות | הרגליים - ארנה קליין | רפלקסולוגיה ודמיון מודרך" />
      <meta property="og:description" content="קראו מה לקוחות מספרים על החוויה והטיפול אצל ארנה קליין, מטפלת מוסמכת ברפלקסולוגיה ודמיון מודרך בכפר תבור." />
      <meta property="og:url" content="https://hergelaim.co.il/testimonials" />
      <meta property="og:image" content="https://hergelaim.co.il/logo.jpeg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="המלצות | הרגליים - ארנה קליין | רפלקסולוגיה ודמיון מודרך" />
      <meta name="twitter:description" content="קראו מה לקוחות מספרים על החוויה והטיפול אצל ארנה קליין, מטפלת מוסמכת ברפלקסולוגיה ודמיון מודרך בכפר תבור." />
      <meta name="twitter:image" content="https://hergelaim.co.il/logo.jpeg" />
      <link rel="canonical" href="https://hergelaim.co.il/testimonials" />

    </Helmet>
    <h1 className="section-title">לקוחות ממליצות</h1>
    <div className="testimonial-container">
      {testimonials.map((testimonial, index) => (
        <Testimonial key={index} {...testimonial} />
      ))}
    </div>
  </section>
);

export default TestimonialsPage;
