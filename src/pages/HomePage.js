import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="home">
      <HeroSection />
      <AboutMeSection />
      <Testimonials/>
      <AboutLegsSection />
      <ContactSection />
    </main>
  );
}

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-content">
      <img
        src="logo-full.webp"
        alt="ארנה קליין"
        loading="lazy"
        width="240px"
        height="180px"
      />

      <br />
      <br />

      <button>
        <Link to="/contact">לתיאום טיפול</Link>
      </button>
    </div>
  </section>
);
const AboutMeSection = () => (
  <section className="about-section">
    <div className="about-container">
      <div className="about-content">
        <div className="about-image-container">
          <img
            src="orna2.webp"
            alt="ארנה קליין"
            loading="lazy"
            width="340px"
            height="450px"
          />
        </div>

        <div className="about-text-container">
          <h2>
            קצת עליי{" "}
            <img
              className="decoration"
              id="decoration-one"
              src="decoration.webp"
              alt="ארנה קליין"
              loading="lazy"
              width="192px"
              height="70px"
            />
          </h2>
          <p>
            ארנה קליין - מטפלת מוסמכת ברפלקסולוגיה ודמיון מודרך, בוגרת מכללת
            רידמן.
            <br />
            בחרתי ברפלקסולוגיה מתוך אמונה עמוקה ביכולתה לתת מענה נכון למגוון
            מצבים ותופעות. בגישתי הטיפולית אני משלבת הקשבה למטופלת ולצרכיה
            ומקצועיות תוך הבנה שריפוי אמיתי מגיע מתוך הגוף עצמו.{" "}
          </p>
          <Link className="contact-link" to="/contact">
            לפרטים נוספים וקביעת תור
          </Link>
        </div>
      </div>
    </div>
  </section>
);
const testimonials = [
  {
    name: "רותם כהן",
    quote: "ארנה היא מטפלת מדהימה! הרפלקסולוגיה עזרה לי מאוד להפחית את רמות הלחץ ולשפר את איכות השינה שלי. אני ממליצה בחום לכל מי שמחפש הקלה וריפוי.",
  },
  {
    name: "מיכל לוי",
    quote: "הגעתי לארנה עם כאבי גב חזקים. לאחר מספר טיפולים, הכאב נעלם כליל. ארנה מקצועית, קשובה ונותנת יחס אישי. תודה רבה לך!",
  },
  {
    name: "דוד בן-דוד",
    quote: "לא האמנתי שרפלקסולוגיה יכולה לעזור לי, אבל גיליתי שזו טעות. ארנה עזרה לי לטפל בבעיות עיכול כרוניות שהיו לי. אני מרגיש הרבה יותר טוב עכשיו.",
  },
];

const Testimonial = ({ name, quote, image }) => (
  <div className="testimonial">
    <p className="testimonial-quote">{quote}</p>
    <div className="testimonial-info">
      <p className="testimonial-name">{name}</p>
    </div>
  </div>
);

const Testimonials = () => (
  <section className="testimonials-section" id="testimonials">
    <h2>
      שיתופים{" "}
      <img
        className="decoration"
        id="decoration-four"
        src="decoration.webp"
        alt="ארנה קליין"
        loading="lazy"
        width="192px"
        height="70px"
      />
    </h2>
    <div className="testimonial-container">
      {testimonials.map((testimonial) => (
        <Testimonial key={testimonial.name} {...testimonial} />
      ))}
    </div>
  </section>
);

 export const AboutLegsSection = ({
  additionalInfos,
  showLink = true,
  showTitle = true,
}) => {
  let infos = [
    {
      title: "דוגמא",
      image: "red-flower.webp",
      url: "/babies",
    },
    {
      title: "דוגמא",
      image: "white-flower.webp",
      url: "/sound",
    },
    {
      title: "דוגמא",
      image: "blue-flower.webp",
      url: "/pregnant",
    },
    {
      title: "דוגמא",
      image: "pink-flower.webp",
      url: "/cups",
    },
    {
      title: "דוגמא",
      image: "purple-flower.webp",
      url: "/crystals",
    },
  ];

  if (Array.isArray(additionalInfos)) {
    infos = [...infos, ...additionalInfos];
  }

  return (
    <section className="treatments-section">
      {showTitle && (
        <h2>
          על הרגל{" "}
          <img
            className="decoration"
            id="decoration-two"
            src="decoration.webp"
            alt="ארנה קליין"
            loading="lazy"
            width="192px"
            height="70px"
          />
        </h2>
      )}
      <div className="treatment-cards">
        {infos.map((info, index) => (
          <button className="treatment-card" key={index}>
            <Link to={info.url}>
              <img
                src={info.image}
                alt={info.title}
                loading="lazy"
                className="treatment-image"
              />
              <p className="treatment-title"></p>
              {info.title}
            </Link>
          </button>
        ))}
      </div>
      <br />
      <br />
      <br />
      {showLink && (
        <Link className="more" to="/about-legs">
          למידע נוסף
        </Link>
      )}
      <br />
      <br />
    </section>
  );
};

const ContactSection = () => (
  <section className="contact-section">
    <h2>
      יצירת קשר{" "}
      <img
        className="decoration"
        id="decoration-three"
        src="decoration.webp"
        alt="ארנה קליין"
        loading="lazy"
        width="192px"
        height="70px"
      />
    </h2>
    <p>כתובת: כפר תבור, מורן 9 ב'</p>
    <p>טלפון: 054-9794-777</p>
    <p>אימייל: orenkl162@gmail.com</p>
    <p>פייסבוק: <a href="https://www.facebook.com/profile.php?id=100010434510829&mibextid=ZbWKwL">Orna Nissani Klein</a></p>
    <p>שעות פתיחה: א'-ה' 9:00-17:00, ו' בתאום מראש</p>
  </section>
);
