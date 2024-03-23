import React from "react";

export default function ContactPage() {
  return (
    <main className="contact-page">
      <h1>יצירת קשר</h1>

      <p className="some-text">לתיאום טיפול או בכל שאלה, אנא פנו אליי באמצעות:</p>
      <p className="contact-page-social">
        <a className="phone-color" href="tel:0549794777">
          <img src="phone.webp"  alt="Phone Number" width="32px" height="32px" />
          054-9794-777
        </a>
        <br />
        <br />

        <a className="email-color" href="mailto:orenkl162@gmail.com">
          <img src="email.webp" alt="Email Icon"  width="32px" height="32px" />
          orenkl162@gmail.com
        </a>
        <br />
        <br />

        <a className="facebook-color" href="https://www.facebook.com/profile.php?id=100010434510829&mibextid=ZbWKwL">
          {" "}
          <img
            src="facebook.webp"
            alt="Facebook Icon"
            width="32px"
            height="32px"
          />
ארנה קליין - רפלקסולוגית        </a>
      </p>
      <br />
      <h2>שעות פעילות</h2>
      <p>
        א'-ה': 9:00-17:00
        <br />
        ו': בתאום מראש
      </p>
      <br />

      <h2>מקום</h2>

      <p>הקליניקה ממוקמת בכפר תבור, מורן 9</p>

      <Map />
    </main>
  );
}

// Map component to display location
const Map = () => (
  <iframe
  className="map"
    title="map"
    loading="async"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.7517858995943!2d35.41062754811086!3d32.69264540609096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c45dccce75575%3A0x6e925a518af69244!2sMoran%20St%209%2C%20Kfar%20Tavor!5e0!3m2!1sen!2sil!4v1711199100102!5m2!1sen!2sil"
  />
);
