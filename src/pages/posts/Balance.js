import React from "react";
import { Link } from "react-router-dom";
import MoreArticles from "../../Components/MoreArticles";

export default function Balance() {
  /* ================= JSON‑LD Schemas ================= */
  const schemaArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "איזון ורפלקסולוגיה",
    image: ["https://hergelaim.co.il/balance.webp"],
    author: {
      "@type": "Person",
      name: "ארנה קליין",
      url: "https://hergelaim.co.il/about",
    },
    publisher: {
      "@type": "Organization",
      name: "הרגליים - ארנה קליין",
      logo: {
        "@type": "ImageObject",
        url: "https://hergelaim.co.il/logo.jpeg",
      },
    },
    datePublished: "2025-04-20",
    dateModified: "2025-04-20",
    description:
      "למדו על הקשר בין רפלקסולוגיה ואיזון. טיפול רפלקסולוגי הוא טיפול אישי המותאם לצרכים הייחודיים של כל מטופלת, במטרה להשיג איזון פיזי וריגשי. ארנה קליין מטפלת מוסמכת בתחום זה.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://hergelaim.co.il/balance",
    },
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "מה הקשר בין רפלקסולוגיה ואיזון?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "רפלקסולוגיה שואפת להחזיר את הגוף לאיזון פיזי ורגשי על ידי השפעה על מערכות הגוף השונות באמצעות לחיצות בכפות הרגליים.",
        },
      },
      {
        "@type": "Question",
        name: "כיצד טיפול רפלקסולוגי מותאם אישית?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "תוכנית הטיפול נבנית לאחר תשאול והכרות עם המטופלת, תוך התחשבות במאפיינים ובצרכים הייחודיים שלה.",
        },
      },
      {
        "@type": "Question",
        name: "אילו גורמים משפיעים על חוסר איזון בגוף?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "תזונה, פעילות גופנית, לחצים ומתחים, פגיעות פיזיות ורגשיות ועוד.",
        },
      },
      {
        "@type": "Question",
        name: "כיצד רפלקסולוגיה משפיעה על זרימת הדם?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "לחיצה או עיסוי בנקודה מסוימת בכף הרגל מעוררת זרימת דם לאיבר המשויך, משפרת את תפקודו ומרגיעה אותו.",
        },
      },
      {
        "@type": "Question",
        name: "מהי ההשפעה של רפלקסולוגיה על מערכת העצבים?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "רפלקסולוגיה מאזנת את הפרשת ההורמונים השונים, ומאפשרת למערכת העצבים לתפקד באופן רגוע והרמוני.",
        },
      },
    ],
  };

  /* ================ JSX ================ */
  return (
    <div className="post-page-container">
      
      <article
        id="post-balance"
        className="post-content-container"
        itemScope
        itemType="https://schema.org/Article"
      >
        <meta itemProp="datePublished" content="2025-04-20" />
        <meta itemProp="dateModified" content="2025-04-20" />
        <span itemProp="author" itemScope itemType="https://schema.org/Person">
          <meta itemProp="name" content="ארנה קליין" />
        </span>

        <h1 className="post-title" itemProp="headline">
          איזון ורפלקסולוגיה
        </h1>

        {/* ===== First 100 Words Optimized Intro ===== */}
        <section className="post-section intro" id="intro">
          <p itemProp="description">
            <strong>
              <em>טיפול רפלקסולוגי</em> הוא טיפול אישי שמותאם לכל גוף, עם
              התייחסות למאפיינים ולצרכים שלו. את תוכנית הטיפול האישית אני בונה
              לאחר תשאול והכרות איתך, כשכל התהליך נעשה בשיתוף פעולה ובהסכמתך.
              השאיפה שלנו בטיפול, כמו בחיים, היא להגיע לאיזון. בין
              המרכיבים שמשפיעים על חוסר האיזון נמצא את התזונה, פעילות גופנית,
              לחצים ומתחים, פגיעות פיזיות וריגשיות ועוד.
            </strong>
          </p>
        </section>
        <section>
          {/* ### Table of Contents ### */}
          <nav aria-label="תוכן עניינים" className="table-of-contents">
            <h2>תוכן עניינים</h2>
            <ol>
              <li>
                <a href="#what-is-balance-reflexology">
                  מהו איזון ברפלקסולוגיה?
                </a>
              </li>
              <li>
                <a href="#personal-treatment">טיפול אישי ומותאם</a>
              </li>
              <li>
                <a href="#factors-affecting-imbalance">
                  גורמים המשפיעים על חוסר איזון
                </a>
              </li>
              <li>
                <a href="#reflexology-points">נקודות רפלקסולוגיות</a>
              </li>
              <li>
                <a href="#blood-flow-organs">זרימת דם לאיברים</a>
              </li>
              <li>
                <a href="#lymphatic-drainage">ניקוז לימפתי</a>
              </li>
              <li>
                <a href="#endorphins-release">שחרור אנדורפינים</a>
              </li>
              <li>
                <a href="#nervous-system-balance">איזון מערכת העצבים</a>
              </li>
              <li>
                <a href="#stress-anxiety">מתח וחרדה</a>
              </li>
              <li>
                <a href="#proven-treatment">דרך טיפול מוכחת</a>
              </li>
              <li>
                <a href="#summary">סיכום</a>
              </li>
              <li>
                <a href="#call-to-action">בואי לאזן</a>
              </li>
            </ol>
          </nav>
        </section>
        {/* ===== What is Balance Reflexology ===== */}
        <section className="post-section" id="what-is-balance-reflexology">
          <h2>מהו איזון ברפלקסולוגיה?</h2>
          <p>
            השאיפה שלנו בטיפול רפלקסולוגי, כמו בחיים, היא להגיע לאיזון.
            רפלקסולוגיה שואפת להחזיר את הגוף לאיזון פיזי ורגשי, תוך התייחסות
            למאפיינים ולצרכים הייחודיים של כל מטופלת.
          </p>
        </section>

        {/* ===== Personal Treatment ===== */}
        <section className="post-section" id="personal-treatment">
          <h2>טיפול אישי ומותאם</h2>
          <p>
            תוכנית הטיפול האישית נבנית לאחר תשאול והכרות עם המטופלת, כאשר כל
            התהליך נעשה בשיתוף פעולה ובהסכמתה. הטיפול מותאם אישית לכל גוף, עם
            התייחסות למאפיינים ולצרכים שלו.
          </p>
        </section>

        {/* ===== Factors Affecting Imbalance ===== */}
        <section className="post-section" id="factors-affecting-imbalance">
          <h2>גורמים המשפיעים על חוסר איזון</h2>
          <p>
            בין המרכיבים שמשפיעים על חוסר האיזון נמצא את התזונה, פעילות גופנית,
            לחצים ומתחים, פגיעות פיזיות ורגשיות ועוד. כל אלה יכולים להשפיע על
            היכולת של הגוף לשמור על איזון.
          </p>
        </section>

        {/* ===== Reflexology Points ===== */}
        <section className="post-section" id="reflexology-points">
          <h2>נקודות רפלקסולוגיות</h2>
          <p>
            ברפלקסולוגיה, כל נקודה בכף הרגל משקפת אזור/איבר בגוף. לחיצה או עיסוי
            מתאים בנקודה מסוימת תשפיע על האיבר, תעורר זרימת דם, תשפר את תפקוד
            האיבר ותרגיע.
          </p>
        </section>

        {/* ===== Blood Flow Organs ===== */}
        <section className="post-section" id="blood-flow-organs">
          <h2>זרימת דם לאיברים</h2>
          <p>
            כשהדם זורם באיברים הם מקבלים חמצן וחומרי הזנה לתפקוד תקין. טיפול
            רפלקסולוגי מסייע להבטיח שכל האיברים יקבלו את החמצן והחומרים הדרושים
            להם.
          </p>
        </section>

        {/* ===== Lymphatic Drainage ===== */}
        <section className="post-section" id="lymphatic-drainage">
          <h2>ניקוז לימפתי</h2>
          <p>
            הטיפול ישפיע על הניקוז הלימפתי ויעזור בסילוק פסולת מהגוף ובכך ישפר
            את ההגנה הטיבעית של המערכת החיסונית בגוף.
          </p>
        </section>

        {/* ===== Endorphins Release ===== */}
        <section className="post-section" id="endorphins-release">
          <h2>שחרור אנדורפינים</h2>
          <p>
            במהלך טיפול רפלקסולוגי, בלחיצות מתאימות, ישתחררו גם אנדרופינים
            שירגיעו כאב, יפחיתו מתח, יגרמו למערכת החיסון לתפקד בצורה מיטיבה
            ויגרמו למערכת השלד והשריר רוגע שייקל על תנועתיות.
          </p>
        </section>

        {/* ===== Nervous System Balance ===== */}
        <section className="post-section" id="nervous-system-balance">
          <h2>איזון מערכת העצבים</h2>
          <p>
            השפעה משמעותית בטיפול רפלקסולוגי היא גם על מערכת העצבים. גם פה המטרה
            העיקרית היא לאזן את הפרשת ההורמונים השונים, מה שיאפשר למערכת העצבים
            לתפקד באופן רגוע והרמוני.
          </p>
        </section>

        {/* ===== Stress Anxiety ===== */}
        <section className="post-section" id="stress-anxiety">
          <h2>מתח וחרדה</h2>
          <p>
            כולנו חווים מדי פעם מצבים מתח, חרדה ובחודשים האחרונים המצבים האלה
            קורים בעצימות גבוהה יותר, מה שמשפיע מאד על בריאות הגוף והנפש.
          </p>
        </section>

        {/* ===== Proven Treatment ===== */}
        <section className="post-section" id="proven-treatment">
          <h2>דרך טיפול מוכחת</h2>
          <p>
            הרפלקסולוגיה היא דרך טיפול מוכחת שמשפיעה על הגוף ומאפשרת לו לחזור
            לאיזון פיזי וריגשי ולשמור על האיזון לאורך זמן.
          </p>
        </section>

        {/* ===== Summary ===== */}
        <section className="post-section" id="summary">
          <h2>סיכום</h2>
          <p>
            רפלקסולוגיה היא כלי רב עוצמה להשגת איזון גוף-נפש, תוך התאמה אישית
            לצרכים הייחודיים של כל מטופל. הטיפול משפיע על מערכות הגוף השונות,
            משפר את זרימת הדם, תומך בניקוז הלימפתי ומסייע בהפחתת מתחים וחרדה.
          </p>
        </section>
        {/* ===== Call To Action ===== */}
        <section className="post-section" id="call-to-action">
          <h2>בואי לאזן (אני גם מאזינה.... 😉)</h2>
          <p>
            התקשרי עכשיו 0549794777
            <br />
            ארנה קליין
            <br />
            רפלקסולוגית 👣🪻
          </p>
        </section>
      </article>

      {/* ===== Featured Image ===== */}
      <div className="post-image-container">
        <img
          className="post-image"
          src="/balance.webp"
          alt="אבנים מאוזנות"
          width="250"
          height="250"
          loading="lazy"
          itemProp="image"
        />
      </div>

      <MoreArticles />

      <button className="general-button" style={{ marginTop: "1.5rem" }}>
        <Link to="/contact" className="post-book-treatment-button">
          לקביעת תור
        </Link>
      </button>
      <br />
      <br />
    </div>
  );
}
