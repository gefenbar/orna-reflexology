import React from "react";

export default function ContactPage() {
  return (
    <main className="contact-page">
      

      <div className="contact-header">
        <h1>יצירת קשר</h1>
        <p className="contact-intro">אני מזמינה אותך ליצור קשר, לשאול, להתייעץ או לתאם טיפול.</p>
      </div>

      <div className="contact-container">
        <div className="contact-card">
          <h2>פרטי התקשרות</h2>
          <div className="contact-links">
            <a href="tel:0549794777" className="contact-item">
              <div className="icon-circle"><img src="phone.webp" alt="Phone" /></div>
              <span>054-9794-777</span>
            </a>
            <a href="mailto:orenkl162@gmail.com" className="contact-item">
              <div className="icon-circle"><img src="email.webp" alt="Email" /></div>
              <span>Orna Klein</span>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100010434510829&mibextid=ZbWKwL" className="contact-item" target="_blank" rel="noopener noreferrer">
              <div className="icon-circle"><img src="facebook.webp" alt="Facebook" /></div>
              <span>ארנה קליין - רפלקסולוגית</span>
            </a>
          </div>
        </div>

        <div className="contact-card">
          <h2>שעות פעילות ומיקום</h2>
          <div className="info-block">
            <h3>שעות פעילות</h3>
            <p>א'-ו': בתיאום מראש</p>
          </div>
          <div className="info-block">
            <h3>כתובת הקליניקה</h3>
            <p>רחוב מורן 9 ב', כפר תבור</p>
          </div>
        </div>
      </div>

      <div className="map-container">
        <Map />
      </div>
    </main>
  );
}

// Map component to display location
const Map = () => (
  <iframe className="map-frame" title="map" loading="async" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.7517858995943!2d35.41062754811086!3d32.69264540609096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c45dccce75575%3A0x6e925a518af69244!2sMoran%20St%209%2C%20Kfar%20Tavor!5e0!3m2!1sen!2sil!4v1711199100102!5m2!1sen!2sil" />
);