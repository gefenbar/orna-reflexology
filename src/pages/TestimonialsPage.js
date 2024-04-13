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
    <p className="testimonial-quote">{quote}</p>
    <p className="testimonial-name">{name}</p>
  </div>
);

const TestimonialsPage = () => (
  <section className="testimonials" id="testimonials-page">
    <Helmet>
      <title>המלצות | הרגליים - ארנה קליין | רפלקסולוגיה ודמיון מודרך</title>
      <meta name="description" content="המלצות - קראו המלצות וחוויות של לקוחות מרוצות. צרו קשר לפרטים נוספים והזמנת טיפול הרגליים - ארנה קליין - מטפלת ברפלקסולוגיה ודמיון מודרך - כפר תבור מורן 9 ב'" />
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
