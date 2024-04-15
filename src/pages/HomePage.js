import ReactGA from 'react-ga';
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import GiftCardBanner from "../Components/GiftCardBanner";
import { Helmet } from 'react-helmet';
export default function HomePage() {
  useEffect(() => {
    ReactGA.pageview('/');
  }, []);

  const handleHeroButtonClick = () => {
    ReactGA.event({
      category: 'Interaction',
      action: 'Click',
      label: 'Hero Button'
    });
  };

  const handleAboutMeButtonClick = () => {
    ReactGA.event({
      category: 'Interaction',
      action: 'Click',
      label: 'About Me Button'
    });
  };

  const handleContactSectionView = () => {
    ReactGA.event({
      category: 'Engagement',
      action: 'View',
      label: 'Contact Section'
    });
  };

  return (
    <main className="home">
    <Helmet>
    <title>עמוד הבית | הרגליים - ארנה קליין | רפלקסולוגיה ודמיון מודרך</title>
    <meta name="description" content="הרגליים - ארנה קליין, מטפלת מוסמכת ברפלקסולוגיה ודמיון מודרך. בוגרת מכללת רידמן. משלבת הקשבה לצורכי המטופלת והתאמת מענה טיפולי מדויק. הקליניקה ממוקמת בכפר תבור." />
    <meta name="keywords" content="רפלקסולוגיה, רפלקסולוג, רפלקסולוגית, הרגליים, ארנה קליין" />
    
    <meta property="og:type" content="website" />
    <meta property="og:title" content="עמוד הבית | הרגליים - ארנה קליין | רפלקסולוגיה ודמיון מודרך" />
    <meta property="og:description" content="הרגליים - ארנה קליין, מטפלת מוסמכת ברפלקסולוגיה ודמיון מודרך. בוגרת מכללת רידמן. משלבת הקשבה לצורכי המטופלת והתאמת מענה טיפולי מדויק. הקליניקה ממוקמת בכפר תבור." />
    <meta property="og:url" content="https://hergelaim.co.il/" />
    <meta property="og:image" content="https://hergelaim.co.il/logo.jpeg" />

    {/* <div itemScope itemType="http://schema.org/ImageObject">
        <link itemProp="thumbnailUrl" href="https://hergelaim.co.il/logo-full.webp" />
        <link itemProp="url" href="https://hergelaim.co.il/logo-full.webp" />
      </div> */}
        <link rel="preload" href="logo-full.webp" as="image" />

    <meta name="author" content="Orna Klein" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Helmet>
      <HeroSection handleHeroButtonClick={handleHeroButtonClick} />
      <AboutMeSection handleAboutMeButtonClick={handleAboutMeButtonClick} />
      <Testimonials />
      <AboutLegsSection onContactSectionView={handleContactSectionView} />
      <GiftCardBanner />
      <ContactSection />
    </main>
  );
}

const HeroSection = ({ handleHeroButtonClick }) => (
  <section className="hero-section">
    <div className="hero-content">
      <img
        src="logo-full.webp"
        alt="ארנה קליין"
        width="240px"
        height="180px"
      />

      <br />
      <br />
      <button className="general-button" onClick={handleHeroButtonClick}>
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
);

const AboutMeSection = ({ handleAboutMeButtonClick }) => (
  
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
            {/* <img
              className="decoration"
              id="decoration-one"
              src="decoration.webp"
              alt="ארנה קליין"
              loading="lazy"
              width="192px"
              height="70px"
            /> */}
          </h2>
          <p>
            ארנה קליין - מטפלת מוסמכת ברפלקסולוגיה ודמיון מודרך, בוגרת מכללת
            רידמן.
            <br />
            בחרתי ברפלקסולוגיה מתוך אמונה עמוקה ביכולתה לתת מענה נכון למגוון
            מצבים ותופעות. בגישתי הטיפולית אני משלבת הקשבה לצורכי המטופלת והתאמת
            מענה טיפולי מדוייק תוך הבנה שריפויי אמיתי מגיע מתוך איזון של הגוף
            עצמו.
          </p>
          <button className="general-button" onClick={handleAboutMeButtonClick}>
          <Link className="contact-link" to="/contact">   לפרטים נוספים וקביעת תור
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
  {
    name: "קרן מעוז",
    quote:
      "רוצה לתת לעצמך מתנה? שעה של טיפול רפלוקסולוגי מפנק אצל אורן קליין Orna Nissani Klein.",
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
      המלצות
      {/* <img
        className="decoration"
        id="decoration-four"
        src="decoration.webp"
        alt="ארנה קליין"
        loading="lazy"
        width="192px"
        height="70px"
      /> */}
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
  onContactSectionView
}) => {
  let infos = [
    {
      title: "השתקפות",
      image: "reflection.webp",
      url: "/reflection",
      alt: "השתקפות עץ על המים",
      desc:
        "רפלקסולוגיה באה מהמילה REFLECTION שפירושה השתקפות. כל אזור בכף הרגל מייצג איבר או אזור מסוים בגוף...",
    },
    {
      title: "רפלקסולוגיה",
      image: "reflexology.webp",
      url: "/reflexology",
      alt: "טביעות רגליים בחול",
      desc:
        "בטיפול רפלקסולוגי, כדי להגיע לכל שכבות האיברים והמערכות, נעבור יחד תהליך יסודי...",
    },
    {
      title: "איזון",
      image: "balance.webp",
      url: "/balance",
      alt: "אבנים מאוזנות",
      desc:
        "טיפול רפלקסולוגי הוא טיפול אישי שמותאם לכל גוף עם התייחסות למאפיינים ולצרכים שלו...",
    },
  ];

  if (Array.isArray(additionalInfos)) {
    infos = [...infos, ...additionalInfos];
  }

  useEffect(() => {
    if (typeof onContactSectionView === 'function') {
      onContactSectionView();
    }
  }, [onContactSectionView]);

  return (
    <section className="about-leg-section">
      {showTitle && (
        <h2>
          על הרגל
          {/* <img
            className="decoration"
            id="decoration-two"
            src="decoration.webp"
            alt="ארנה קליין"
            loading="lazy"
            width="192px"
            height="70px"
          /> */}
        </h2>
      )}
      <div className="about-leg-cards">
        {infos.map((info, index) => (
          <button className="about-leg-card" key={index}>
            <Link to={info.url}>
              <img
                src={info.image}
                alt={info.alt}
                loading="lazy"
                className="about-leg-image"
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
    <h2>
      יצירת קשר{" "}
      {/* <img
        className="decoration"
        id="decoration-three"
        src="decoration.webp"
        alt="ארנה קליין"
        loading="lazy"
        width="192px"
        height="70px"
      /> */}
    </h2>
    <p>כתובת: כפר תבור, מורן 9 ב'</p>
    <p>טלפון: 054-9794-777</p>
    <p>אימייל: orenkl162@gmail.com</p>
    <p>
      פייסבוק:{" "}
      <a href="https://www.facebook.com/profile.php?id=100010434510829&mibextid=ZbWKwL">
        Orna Nissani Klein
      </a>
    </p>
    <p>שעות פתיחה: א'-ה' 9:00-17:00, ו' בתאום מראש</p>
  </section>
);
