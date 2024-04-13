import React, { useEffect } from "react";
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

export default function ContactPage() {
  useEffect(() => {
    ReactGA.pageview('/contact');
  }, []);

  const handlePhoneClick = () => {
    ReactGA.event({
      category: 'Interaction',
      action: 'Click',
      label: 'Phone Number'
    });
  };

  const handleEmailClick = () => {
    ReactGA.event({
      category: 'Interaction',
      action: 'Click',
      label: 'Email'
    });
  };

  const handleFacebookClick = () => {
    ReactGA.event({
      category: 'Interaction',
      action: 'Click',
      label: 'Facebook'
    });
  };

  return (
    <main className="contact-page">
      <Helmet>
  <title>צור קשר | הרגליים - ארנה קליין | רפלקסולוגיה ודמיון מודרך</title>
  <meta name="description" content="צרו קשר עם ארנה קליין, מטפלת מוסמכת ברפלקסולוגיה ודמיון מודרך, לתיאום טיפול או לכל שאלה. ניתן ליצור קשר דרך הטלפון, המייל או דרך הפייסבוק. הקליניקה ממוקמת בכפר תבור, מורן 9 ב'." />

  <meta property="og:title" content="צור קשר | הרגליים - ארנה קליין | רפלקסולוגיה ודמיון מודרך" />
  <meta property="og:description" content="צרו קשר עם ארנה קליין, מטפלת מוסמכת ברפלקסולוגיה ודמיון מודרך, לתיאום טיפול או לכל שאלה. ניתן ליצור קשר דרך הטלפון, המייל או דרך הפייסבוק. הקליניקה ממוקמת בכפר תבור, מורן 9 ב'." />
  <meta property="og:url" content="https://hergelaim.co.il/contact" />
  <meta property="og:image" content="https://hergelaim.co.il/logo-full.webp" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="צור קשר | הרגליים - ארנה קליין | רפלקסולוגיה ודמיון מודרך" />
  <meta name="twitter:description" content="צרו קשר עם ארנה קליין, מטפלת מוסמכת ברפלקסולוגיה ודמיון מודרך, לתיאום טיפול או לכל שאלה. ניתן ליצור קשר דרך הטלפון, המייל או דרך הפייסבוק. הקליניקה ממוקמת בכפר תבור, מורן 9 ב'." />
  <meta name="twitter:image" content="https://hergelaim.co.il/logo-full.webp" />
</Helmet>
      <h1>יצירת קשר</h1>
      <p className="some-text"> לתיאום טיפול ולכל שאלה, אנא פנו אליי באמצעות: </p>
      <p className="contact-page-social">
        <a href="tel:0549794777" onClick={handlePhoneClick}>
          <img src="phone.webp" alt="Phone Number" width="28px" height="28px" /> 054-9794-777
        </a>
        <br /> <br />
        <a href="mailto:orenkl162@gmail.com" onClick={handleEmailClick}>
          <img src="email.webp" alt="Email Icon" width="28px" height="28px" /> Orna Klein
        </a>
        <br /> <br />
        <a href="https://www.facebook.com/profile.php?id=100010434510829&mibextid=ZbWKwL" onClick={handleFacebookClick}>
          <img src="facebook.webp" alt="Facebook Icon" width="28px" height="28px" /> ארנה קליין - רפלקסולוגית
        </a>
      </p>
      <br />
      <h2>שעות פעילות</h2>
      <p className="contact-page-social"> א'-ו': בתיאום מראש </p>
      <br />
      <h2>מיקום</h2>
      <p className="contact-page-social"> הקליניקה ממוקמת בכפר תבור, מורן 9 ב' </p>
      <Map />
    </main>
  );
}
// Map component to display location
const Map = () => (
  <iframe className="map" title="map" loading="async" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.7517858995943!2d35.41062754811086!3d32.69264540609096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c45dccce75575%3A0x6e925a518af69244!2sMoran%20St%209%2C%20Kfar%20Tavor!5e0!3m2!1sen!2sil!4v1711199100102!5m2!1sen!2sil" />
);