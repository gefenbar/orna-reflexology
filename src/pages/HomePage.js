// import ReactGA from 'react-ga';
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import GiftCardBanner from "../Components/GiftCardBanner";
import FAQSection from "../Components/FAQ";
import { Helmet } from "react-helmet";
export default function HomePage() {
  return (
    <main className="home">
      <Helmet>
        <title>
          עמוד הבית | הרגליים - ארנה קליין | רפלקסולוגיה ודמיון מודרך
        </title>
        <meta
          name="description"
          content="הרגליים - ארנה קליין, מטפלת מוסמכת ברפלקסולוגיה ודמיון מודרך. בוגרת מכללת רידמן. משלבת הקשבה לצורכי המטופלת והתאמת מענה טיפולי מדויק. הקליניקה ממוקמת בכפר תבור."
        />
        <meta
          name="keywords"
          content="רפלקסולוגיה, רפלקסולוג, רפלקסולוגית, הרגליים, ארנה קליין"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="עמוד הבית | הרגליים - ארנה קליין | רפלקסולוגיה ודמיון מודרך"
        />
        <meta
          property="og:description"
          content="הרגליים - ארנה קליין, מטפלת מוסמכת ברפלקסולוגיה ודמיון מודרך. בוגרת מכללת רידמן. משלבת הקשבה לצורכי המטופלת והתאמת מענה טיפולי מדויק. הקליניקה ממוקמת בכפר תבור."
        />
        <meta property="og:url" content="https://hergelaim.co.il/" />
        <meta property="og:image" content="https://hergelaim.co.il/logo.jpeg" />
        <meta name="author" content="ארנה קליין" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="preload"
          href="https://hergelaim.co.il/logo-full.webp"
          as="image"
        />
        <link rel="canonical" href="https://hergelaim.co.il/" />
      </Helmet>
      <HeroSection />
      <AboutMeSection />
      <Testimonials />
      <AboutLegsSection />
      <GiftCardBanner />
      <FAQSection />
      <ContactSection />
    </main>
  );
}

const HeroSection = () => (
  <header>
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="visually-hidden">
          הרגליים - ארנה קליין - רפלקסולוגית מוסמכת
        </h1>
        <img
          src="logo-full.webp"
          alt="ארנה קליין"
          width="264px"
          height="198px"
        />

        <br />
        <br />
        <button className="general-button">
          <a
            href="https://api.whatsapp.com/send?phone=+972549794777&text=שלום ארנה, ברצוני להזמין טיפול רפלקסולוגי"
            rel="noreferrer"
            target="_blank"
          >
            לתיאום טיפול
          </a>
        </button>
      </div>
    </section>
  </header>
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
            width="348px"
            height="480px"
          />
        </div>

        <div className="about-text-container">
          <h2>קצת עליי</h2>
          <p>
            ארנה קליין - מטפלת מוסמכת ברפלקסולוגיה ודמיון מודרך, בוגרת מכללת
            רידמן.
            <br />
            בחרתי ברפלקסולוגיה מתוך אמונה עמוקה ביכולתה לתת מענה נכון למגוון
            מצבים ותופעות. בגישתי הטיפולית אני משלבת הקשבה לצורכי המטופלת והתאמת
            מענה טיפולי מדוייק תוך הבנה שריפויי אמיתי מגיע מתוך איזון של הגוף
            עצמו.
          </p>
          <button className="general-button">
            <Link className="contact-link" to="/contact">
              {" "}
              לפרטים נוספים וקביעת תור
            </Link>
          </button>
        </div>
      </div>
    </div>
  </section>
);

const testimonials = [
  {
    name: "אנה נקסדורף",
    quote: "אורנה מקסימה עם אנרגיות טובות. מטפלת קשובה ורגישה. ממליצה מאוד.",
  },
  {
    name: 'ד"ר מירה המאירי',
    quote: "מטפלת מעולה, מומלצת מאוד.",
  },
  {
    name: "מינה נלגבאץ",
    quote:
      "חיפשתי מקום קרוב לבית. מצאתי עולם ומלואו.. אישה נעימה חכמה ישרה ומיקצועית!!!  מצאתי בית. רפלקסולוגיה היא אחת הדרכים לאבחן לטפל וגם להתפנק. אין ספק שזה המקום. זכיתי.",
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
    <h2>המלצות</h2>
    <div className="testimonial-container">
      {testimonials.map((testimonial) => (
        <Testimonial key={testimonial.name} {...testimonial} />
      ))}
    </div>
    <button className="general-button">
      <Link className="more" to="/testimonials">
        לביקורות נוספות
      </Link>
    </button>
  </section>
);

export const AboutLegsSection = ({
  additionalInfos,
  showLink = true,
  showTitle = true,
  onContactSectionView,
}) => {
  let infos = [
    {
      title: "כאבי ראש",
      image: "headache.webp",
      url: "/headache",
      alt: "כאב ראש",
      desc:
        "כאבי ראש הם אחת התלונות הנפוצות ביותר שמשפיעות על איכות החיים, והם יכולים לנבוע ממגוון סיבות....",
    },

    {
      title: "איזון",
      image: "balance.webp",
      url: "/balance",
      alt: "אבנים מאוזנות",
      desc:
        "טיפול רפלקסולוגי הוא טיפול אישי שמותאם לכל גוף עם התייחסות למאפיינים ולצרכים שלו....",
    },
    {
      title: "הפחתת לחץ",
      image: "stress.webp",
      url: "/stress",
      alt: "אבנים מאוזנות",
      desc:
        " בעידן שבו לחץ מתמיד מהעבודה, מהמשפחה ומהחיים המודרניים משפיע על כל תחומי החיים....",
    },
  ];

  if (Array.isArray(additionalInfos)) {
    infos = [...additionalInfos, ...infos];
  }

  useEffect(() => {
    if (typeof onContactSectionView === "function") {
      onContactSectionView();
    }
  }, [onContactSectionView]);

  return (
    <section className="about-leg-section">
      {showTitle && <h2>על הרגל</h2>}
      <div className="about-leg-cards">
        {infos.map((info, index) => (
          <button className="about-leg-card" key={index}>
            <Link to={info.url}>
              <img
                src={info.image}
                alt={info.alt}
                loading="lazy"
                className="about-leg-image"
                width={"200px"}
                height={"200px"}
              />
              <p className="about-leg-title"> {info.title}</p>
              {info.desc}
            </Link>
          </button>
        ))}
      </div>
      <br />
      <br />
      <br />

      {showLink && (
        <button className="general-button">
          <Link className="more" to="/about-legs">
            למידע נוסף
          </Link>
        </button>
      )}
      <br />
      <br />
    </section>
  );
};

const ContactSection = () => (
  <section className="contact-section">
    <h2>יצירת קשר</h2>
    <p>כתובת: כפר תבור, מורן 9 ב'</p>
    <p>טלפון: 054-9794-777</p>
    <p>אימייל: orenkl162@gmail.com</p>
    <p>
      פייסבוק:{" "}
      <a href="https://www.facebook.com/profile.php?id=100010434510829&mibextid=ZbWKwL">
        Orna Nissani Klein
      </a>
    </p>
    <p>שעות פתיחה: א'-ו בתיאום מראש</p>
  </section>
);
