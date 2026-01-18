// import ReactGA from 'react-ga';
import { Link } from "react-router-dom";
import GiftCardBanner from "../Components/GiftCardBanner";
import FAQSection from "../Components/FAQ";
import { Helmet } from "react-helmet-async";
import AboutLegsSection from "../Components/AboutLegsSection";
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
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "הרגליים - ארנה קליין",
        "image": "https://hergelaim.co.il/logo.jpeg",
        "@id": "https://hergelaim.co.il/",
        "url": "https://hergelaim.co.il/",
        "telephone": "+972549794777",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "מורן 9 ב'",
          "addressLocality": "כפר תבור",
          "addressCountry": "IL"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 32.6846,
          "longitude": 35.4206
        },
        "openingHours": "Mo-Sa ByAppointment",
        "description": "ארנה קליין - מטפלת מוסמכת ברפלקסולוגיה ודמיון מודרך...",
        "priceRange": "$",
        "sameAs": [
          "https://www.facebook.com/profile.php?id=100010434510829"
        ]
      }
    `}
        </script>
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "מהי רפלקסולוגיה?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "רפלקסולוגיה היא שיטת טיפול משלימה המתמקדת בלחיצות ונגיעה בנקודות בכפות הרגליים, הידיים או האוזניים - אשר משקפות את מערכות הגוף. טיפול זה מסייע לגוף שיצא מאיזון, לחזור אליו. משפר את תפקוד האיברים על ידי הפחתת מתחים."
      }
    },
    {
      "@type": "Question",
      "name": "איך עובדת רפלקסולוגיה?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "הטיפול מתבצע באמצעות לחיצות על נקודות ספציפיות בכפות הרגליים או הידיים, הלחיצות מפעילות תהליכים לשחרור חסימות אנרגטיות ועידוד תהליכי ריפוי טבעיים בגוף."
      }
    },
    {
      "@type": "Question",
      "name": "מהם היתרונות הבריאותיים של רפלקסולוגיה?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "הרפלקסולוגיה עשויה לסייע בהפחתת מתחים, שיפור איכות השינה, הגברת זרימת הדם, שיפור העיכול והפחתת כאבים, כמו גם לעידוד רגיעה ואיזון נפשי."
      }
    },
    {
      "@type": "Question",
      "name": "האם טיפול ברפלקסולוגיה כואב?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "רוב המטופלים מתארים את הטיפול כעדין ונעים ללא כאבים. יש מקרים בהם מתבקש בטיפול ללחיצות מעט חזקות אך הלחץ מותאם אישית לתחושת הנוחות של כל מטופל."
      }
    },
    {
      "@type": "Question",
      "name": "כמה זמן נמשך טיפול טיפוסי?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "מפגש טיפולי ברפלקסולוגיה נמשך כשעה, בהתאם לצרכי המטופל והמטרות הטיפוליות."
      }
    },
    {
      "@type": "Question",
      "name": "האם יש תופעות לוואי בטיפול?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "לרוב הטיפול אינו גורם לתופעות לוואי משמעותיות. ייתכן שתחושו עייפות קלה או שחרור רגשי לאחר הטיפול - תגובות נורמליות כחלק מתהליך הריפוי. לעיתים יש ריאקציות, תחושות באיברים שטופלו, אך הן חולפות במהרה."
      }
    },
    {
      "@type": "Question",
      "name": "מי יכול לעבור טיפול ברפלקסולוגיה?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "הרפלקסולוגיה מתאימה למבוגרים, לילדים ואף לנשים בהריון (בהתייעצות עם מומחה). מומלץ להתייעץ עם מטפל מוסמך לפני תחילת הטיפול, במיוחד במקרים מורכבים."
      }
    },
    {
      "@type": "Question",
      "name": "כמה מפגשים נדרשים להשגת תוצאות?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "התוצאות תלויות במצב הבריאותי ובמטרות האישיות. לעיתים קרובות סדרת טיפולים של 5 עד 8 מפגשים יכולה להביא לשיפור ניכר בתחושת הרוגע והבריאות הכללית."
      }
    },
    {
      "@type": "Question",
      "name": "האם הרפלקסולוגיה מתאימה לטיפול במחלות כרוניות?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "הרפלקסולוגיה יכולה לשמש כטיפול משלים לשיפור איכות החיים והפחתת תסמינים אצל מטופלים עם מחלות כרוניות - אך אינה מחליפה טיפול רפואי קונבנציונלי."
      }
    },
    {
      "@type": "Question",
      "name": "כיצד לבחור מטפל רפלקסולוגי מקצועי?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "חשוב לבחור מטפל בעל הסמכות, ניסיון והמלצות חיוביות. יש לוודא שהמטפל יוצר סביבה נעימה ובטוחה ומבין את הצרכים האישיים שלך."
      }
    }
  ]
}
`}
        </script>
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
    <div className="testimonials-header">
      <h2>המלצות</h2>
      <button className="general-button">
        <Link className="more" to="/testimonials">
          להמלצות נוספות
        </Link>
      </button>
    </div>
    <div className="testimonial-container">
      {testimonials.map((testimonial) => (
        <Testimonial key={testimonial.name} {...testimonial} />
      ))}
    </div>

  </section>
);



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
