import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="home">
      <HeroSection />
      <AboutSection />
      <TreatmentsSection />
      <ContactSection />
    </main>
  );
}

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-content">
                <img src="logo-full.webp" alt="ארנה קליין" loading="lazy" width="240px" height="180px" />

      <br />
      <br />

      <button>
        <Link to="/contact">לתיאום טיפול</Link>
      </button>
    </div>
  </section>
);
const AboutSection = () => (
  <section className="about-section">
    <div className="about-container">
      <div className="about-content">
        <div className="about-image-container">
          <img src="orna.webp" alt="ארנה קליין" loading="lazy" width="400px" height="500px" />
        </div>
        
        <div className="about-text-container">

          <h2>קצת עליי  <img className="decoration" src="decoration.webp" alt="ארנה קליין" loading="lazy" width="128px" height="60px"/> 
          </h2>
          <p>
          ארנה קליין - מטפלת מוסמכת ברפלקסולוגיה ודמיון מודרך, בוגרת מכללת רידמן.

<br/>בחרתי ברפלקסולוגיה מתוך אמונה עמוקה ביכולתה לתת מענה נכון למגוון מצבים ותופעות. גישתי הטיפולית משלבת צניעות וענווה, תוך הבנה שריפוי אמיתי מגיע מתוך הגוף עצמו.
          </p>
          <Link className="contact-link" to="/contact">לפרטים נוספים וקביעת תור</Link>
          
        </div>
        
      </div>
      
    </div>
    
  </section>
);

export const TreatmentsSection = ({
  additionalTreatments,
  showLink = true,
  showTitle = true,
}) => {
  let treatments = [
    {
      title: "עיסוי תינוקות",
      image: "baby-massage.webp",
      url: "/babies",
    },
    {
      title: "Sound Healing",
      image: "soundHealing.webp",
      url: "/sound",
    },
    {
      title: "עיסוי לנשים הרות",
      image: "pregnancy-massage.webp",
      url: "/pregnant",
    },
    {
      title: "כוסות רוח",
      image: "cups.webp",
      url: "/cups",
    },
    {
      title: "טיפול בקריסטלים",
      image: "crystals-massage.webp",
      url: "/crystals",
    },
  ];

  if (Array.isArray(additionalTreatments)) {
    treatments = [...treatments, ...additionalTreatments];
  }

  return (
    <section className="treatments-section">
      {showTitle && <h2>טיפולים  <img className="decoration" src="decoration.webp" alt="ארנה קליין" loading="lazy" width="128px" height="60px"  />
</h2>}
      <div className="treatment-cards">
        {treatments.map((treatment, index) => (
          <button className="treatment-card" key={index}>
             <Link to={treatment.url}>
            <img
              src={treatment.image}
              alt={treatment.title}
              loading="lazy"
              className="treatment-image"
            />
            <p className="treatment-title">
            </p>
            {treatment.title}</Link>
          </button>
        ))}
      </div>
      <br />
      <br />
      <br />
      {showLink && (
        <Link className="more" to="/treatments">
          לטיפולים נוספים
        </Link>
      )}
      <br />
      <br />
    </section>
  );
};

const ContactSection = () => (
  <section className="contact-section">
    <h2>יצירת קשר  <img className="decoration" src="decoration.webp" alt="ארנה קליין" loading="lazy" width="128px" height="60px"  />
</h2>
    <p>כתובת: כפר תבור, מורן 9</p>
    <p>טלפון: 054-9794-777</p>
    <p>אימייל: orenkl162@gmail.com</p>
    <p>שעות פתיחה: א'-ה' 9:00-17:00, ו' בתאום מראש</p>
  </section>
);
