import React from 'react';
const testimonials = [
  {
    name: "אנה נקסדורף",
    quote:
      "אורנה מקסימה עם אנרגיות טובות. מטפלת קשובה ורגישה. ממליצה מאוד.",
  },
  {
    name: "ד\"ר מירה המאירי",
    quote:
      "מטפלת מעולה, מומלצת מאוד.",
  },
  {
    name: "מינה נלגבאץ",
    quote:
      "חיפשתי מקום קרוב לבית. מצאתי עולם ומלואו.. אישה נעימה חכמה ישרה ומיקצועית!!!  מצאתי בית. רפלקסולוגיה היא אחת הדרכים לאבחן לטפל וגם להתפנק. אין ספק שזה המקום. זכיתי.",
  },  
  {
    name: "קרן מעוז",
    quote:
      "רוצה לתת לעצמך מתנה? שעה של טיפול רפלוקסולוגי מפנק אצל אורן קליין Orna Nissani Klein.",
  },
  {
    name: "ליאת דהן",
    quote:
      "תענוג לעבור את הטיפול עם אורנה. הגעתי למרחב נעים, והרוחתי זמן איכות, רגע לעצמי ועם עצמי. ונהנתי מאוד מהטיפול המקצועי והנעים. מומלץ בחום!",
  },
  {
    name: "שירה לוי",
    quote:
      "ממליצה בחום, חוויה מדהימה. אורנה מקסימה, רגישה ומקצועית. תודה רבה!",
  },
  {
    name: "רוית כהן",
    quote:
      "טיפול מדהים, אווירה נעימה ומקצועית. ממליצה בחום!",
  },
];

  

const Testimonial = ({ name, location, quote, image }) => (
  <div className="testimonial">
    <p className="testimonial-quote">{quote}</p>
    <div className="testimonial-info">
      <p className="testimonial-name">{name}</p>
      <p className="testimonial-location">{location}</p>
    </div>
  </div>
);

const TestimonialsPage = () => (
  <section className="testimonials" id="testimonials-page">
    <h1 className="section-title">לקוחות ממליצים</h1>
    <div className="testimonial-container">
      {testimonials.map((testimonial) => (
        <Testimonial key={testimonial.name} {...testimonial} />
      ))}
    </div>
  </section>
);

export default TestimonialsPage;
