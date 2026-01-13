import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import MoreArticles from "../../Components/MoreArticles";

export default function Digestion() {
    /* ================= JSON‑LD Schemas ================= */
    const schemaArticle = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "רפלקסולוגיה ומערכת העיכול: הקלה טבעית",
        image: ["https://hergelaim.co.il/digestion.webp"],
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
        datePublished: "2025-05-15",
        dateModified: "2025-05-15",
        description:
            "סובלים מנפיחות, עצירות או כאבי בטן? גלו כיצד רפלקסולוגיה מסייעת לאיזון מערכת העיכול, הרגעת 'המוח השני' ושחרור מתחים המשפיעים על הבטן. טיפול טבעי המותאם אישית.",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://hergelaim.co.il/digestion",
        },
    };

    const schemaFAQ = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "איך רפלקסולוגיה עוזרת לעצירות ונפיחות?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "הטיפול מתמקד בנקודות המייצגות את המעיים והקיבה בכף הרגל. לחיצות עדינות מניעות את הפריסטלטיקה (תנועתיות המעי), משחררות חסימות ומעודדות זרימת דם שמקלה על נפיחות ותחושת כבדות.",
                },
            },
            {
                "@type": "Question",
                name: "האם יש קשר בין מתח נפשי לכאבי בטן?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "בהחלט. מערכת העיכול מכונה 'המוח השני' ורגישה מאוד לשינויים במצב הרוח. כשאנו בלחץ, הגוף מכווץ את כלי הדם בבטן. הרפלקסולוגיה מרגיעה את מערכת העצבים ומאפשרת לבטן להשתחרר.",
                },
            },
            {
                "@type": "Question",
                name: "למי מתאים הטיפול?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "הטיפול מתאים לכל גיל, מתינוקות הסובלים מגזים ועד מבוגרים המתמודדים עם תסמונת המעי הרגיז (IBS), צרבות, או אי-נוחות כללית לאחר ארוחות.",
                },
            },
        ],
    };

    return (
        <div className="post-page-container">
            <Helmet>
                <title>רפלקסולוגיה ומערכת העיכול | הרגליים - ארנה קליין</title>
                <meta
                    name="description"
                    content="סובלים מנפיחות או כאבי בטן? גלו כיצד רפלקסולוגיה מאזנת את מערכת העיכול בצורה טבעית ומרגיעה. ארנה קליין - מטפלת מוסמכת בכפר תבור."
                />
                <meta property="og:type" content="article" />
                <meta
                    property="og:title"
                    content="רפלקסולוגיה ומערכת העיכול: הקלה טבעית ואיזון פנימי"
                />
                <meta
                    property="og:description"
                    content="הבטן שלכם מדברת את מה שהלב מרגיש. טיפול רפלקסולוגי למערכת העיכול מסייע בשחרור מתחים, הקלה על נפיחות ועצירות ושיפור איכות החיים."
                />
                <meta property="og:url" content="https://hergelaim.co.il/digestion" />
                <meta
                    property="og:image"
                    content="https://hergelaim.co.il/digestion.webp"
                />
                <link rel="canonical" href="https://hergelaim.co.il/digestion" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
                />
            </Helmet>

            <article
                id="post-digestion"
                className="post-content-container"
                itemScope
                itemType="https://schema.org/Article"
            >
                <meta itemProp="datePublished" content="2025-05-15" />
                <span itemProp="author" itemScope itemType="https://schema.org/Person">
                    <meta itemProp="name" content="ארנה קליין" />
                </span>

                <h1 className="post-title" itemProp="headline">
                    רפלקסולוגיה ומערכת העיכול: להקשיב למה שהבטן מספרת
                </h1>

                {/* Introduction */}
                <section className="post-section intro">
                    <p itemProp="description">
                        <strong>
                            מכירים את התחושה של "פרפרים בבטן" לפני אירוע מרגש, או כאב בטן פתאומי ברגע של לחץ?
                            לא סתם מערכת העיכול מכונה "המוח השני" של הגוף. היא רגישה, חכמה, ומגיבה מיד לכל שינוי במצב הרוח שלנו.
                            בקליניקה שלי בכפר תבור, אני פוגשת נשים וגברים שמגיעים עם תלונה על 'בטן רגישה', נפיחות או עצירויות,
                            ומגלים יחד שהדרך להקלה עוברת דרך הרגעה עמוקה ואיזון של הגוף כולו דרך כפות הרגליים.
                        </strong>
                    </p>
                </section>

                <section>
                    <nav aria-label="תוכן עניינים" className="table-of-contents">
                        <h2>תוכן עניינים</h2>
                        <ol>
                            <li>
                                <a href="#gut-brain-connection">הקשר בין הרגש לבטן</a>
                            </li>
                            <li>
                                <a href="#how-reflexology-helps">איך רפלקסולוגיה עובדת על העיכול?</a>
                            </li>
                            <li>
                                <a href="#common-symptoms">תסמינים נפוצים והטיפול בהם</a>
                            </li>
                            <li>
                                <a href="#holistic-tips">טיפים לאיזון יומיומי</a>
                            </li>
                            <li>
                                <a href="#treatment-process">מה קורה בטיפול?</a>
                            </li>
                        </ol>
                    </nav>
                </section>

                {/* Section 1: The Gut-Brain Connection */}
                <section className="post-section" id="gut-brain-connection">
                    <h2>הקשר בין הרגש לבטן</h2>
                    <p>
                        מערכת העיכול שלנו היא הרבה יותר מסדרה של צינורות ואיברים לפירוק מזון. היא עשירה בתאי עצב ומייצרת אחוז גבוה מהסרוטונין בגוף (הורמון מצב הרוח).
                        כשאנחנו בסטרס מתמשך, הגוף נכנס למצב של "הילחם או ברח". במצב זה, דם מוזרם לשרירים וללב כדי "לברוח מהסכנה", ומערכת העיכול מקבלת עדיפות אחרונה.
                    </p>
                    <p>
                        התוצאה? תהליך העיכול מואט או משתבש, ואנחנו חווים נפיחות, כבדות, ולעיתים כאבים של ממש.
                        <Link to="/stress">הפחתת מתח באמצעות רפלקסולוגיה</Link> היא לכן צעד ראשון והכרחי בטיפול בבעיות עיכול. כשאנחנו מרגיעים את מערכת העצבים, הבטן יכולה סוף סוף "לנשום לרווחה" ולחזור לפעולה סדירה.
                    </p>
                </section>

                {/* Infographic: Symptoms */}
                <section className="post-section" style={{ marginBottom: "2rem" }}>
                    <div
                        style={{
                            backgroundColor: "#f7fafc",
                            border: "1px solid #e2e8f0",
                            borderRadius: "12px",
                            padding: "1.5rem",
                            boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                        }}
                    >
                        <h3 style={{ marginTop: 0, color: "#2d3748", textAlign: "center" }}>
                            באילו מצבים רפלקסולוגיה יכולה לסייע?
                        </h3>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "1rem",
                                marginTop: "1rem",
                            }}
                        >
                            <div style={infographicItemStyle}>
                                <span style={{ fontSize: "1.2rem" }}>🎈</span> נפיחות וגזים
                            </div>
                            <div style={infographicItemStyle}>
                                <span style={{ fontSize: "1.2rem" }}>🛑</span> עצירות כרונית
                            </div>
                            <div style={infographicItemStyle}>
                                <span style={{ fontSize: "1.2rem" }}>🌀</span> תסמונת המעי הרגיז (IBS)
                            </div>
                            <div style={infographicItemStyle}>
                                <span style={{ fontSize: "1.2rem" }}>🔥</span> צרבות וריפלוקס
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: How it Works */}
                <section className="post-section" id="how-reflexology-helps">
                    <h2>איך רפלקסולוגיה עובדת על העיכול?</h2>
                    <p>
                        במפה הרפלקסולוגית, קשת כף הרגל (האזור הרך במרכז) מייצגת את מערכת העיכול.
                        לחיצות מדויקות, הנעות בתנועת גל (בדומה לתנועת המעיים הטבעית), עוזרות לעורר את האיברים הפנימיים לפעולה.
                    </p>
                    <p>
                        העבודה מתמקדת במספר אזורים:
                    </p>
                    <ul>
                        <li><strong>אזור הקיבה:</strong> להרגעה ושיפור הפירוק הראשוני של המזון.</li>
                        <li><strong>המעי הגס והדק:</strong> לעידוד תנועתיות (פריסטלטיקה) ושחרור פסולת תקועה.</li>
                        <li><strong>הכבד וכיס המרה:</strong> לחיזוק תהליכי ניקוי רעלים מהגוף.</li>
                        <li><strong>מקלעת השמש:</strong> אזור מרכזי להרגעת מתחים ולשחרור "תקיעויות" רגשיות בבטן.</li>
                    </ul>
                    <p>
                        רוצים לראות היכן נמצאים האזורים האלו? בקרו ב<Link to="/reflexology-map">מפה הרפלקסולוגית</Link> המלאה באתר.
                    </p>
                </section>

                {/* Section 3: Holistic Tips */}
                <section className="post-section" id="holistic-tips">
                    <h2>טיפים קטנים לשינוי גדול</h2>
                    <p>
                        כחלק מהגישה ההוליסטית, הטיפול בקליניקה תמיד משתלב עם התבוננות על אורח החיים. הנה כמה דברים פשוטים שתוכלו ליישם כבר היום:
                    </p>

                    <div className="tips-container" style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
                        <div style={tipCardStyle}>
                            <h4>💧 מים, מים, מים</h4>
                            <p>מערכת העיכול זקוקה לנוזלים כדי להניע פסולת. הקפידו לשתות כוס מים פושרים מיד כשאתם קמים בבוקר.</p>
                        </div>
                        <div style={tipCardStyle}>
                            <h4>🚶 תנועה עדינה</h4>
                            <p>הליכה קלה לאחר ארוחה עוזרת לעיכול הרבה יותר מישיבה על הספה. אפילו 10 דקות של תנועה עושות הבדל.</p>
                        </div>
                        <div style={tipCardStyle}>
                            <h4>🧘 נשימה לבטן</h4>
                            <p>כשאתם בלחץ, הניחו ידיים על הבטן וקחו 5 נשימות עמוקות. נסו להרגיש את הבטן מתנפחת כמו בלון. זהו עיסוי פנימי נהדר לאיברים.</p>
                        </div>
                    </div>
                </section>

                {/* Section 4: Treatment Process */}
                <section className="post-section" id="treatment-process">
                    <h2>מה קורה בטיפול אצלי?</h2>
                    <p>
                        המפגש מתחיל תמיד בשיחה. אני רוצה להבין לא רק מה אתם אוכלים, אלא מה "יושב לכם בבטן" מבחינה רגשית.
                        האם זו תקופה לחוצה בעבודה? האם יש דאגות שלא מרפות?
                    </p>
                    <p>
                        הטיפול עצמו נעשה באווירה שקטה ומרגיעה. המגע הוא קשוב – לפעמים עמוק ומניע כדי לשחרר חסימות, ולפעמים עדין ומרגיע כדי לאותת למערכת העצבים שהכל בסדר.
                        מטופלים רבים מדווחים כבר אחרי הטיפול הראשון על תחושת קלילות, יציאות סדירות יותר ושינה טובה ועמוקה.
                    </p>
                </section>

                <section className="post-section" id="summary">
                    <h2>הקשיבו לבטן שלכם</h2>
                    <p>
                        הבטן שלנו היא ברומטר רגיש לבריאות הכללית שלנו. אל תתעלמו מהאותות שלה.
                        בין אם אתם סובלים מבעיה כרונית או סתם מתחושת אי-נוחות זמנית, לרפלקסולוגיה יש כלים נהדרים ועדינים להציע.
                        זה הזמן לתת לגוף שלכם את התמיכה שהוא מבקש.
                    </p>
                </section>

                {/* Call To Action */}
                <section className="post-section" id="call-to-action" style={{ textAlign: "center", marginTop: "3rem" }}>
                    <h2>מוכנים להרגיש קלילים יותר?</h2>
                    <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
                        צרו קשר עוד היום ונתחיל יחד את הדרך לבטן רגועה וגוף מאוזן.
                    </p>
                    <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                        <button className="general-button">
                            <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
                                לקביעת תור בקליניקה
                            </Link>
                        </button>
                        <button className="general-button" style={{ background: "transparent", border: "2px solid var(--primary-color)" }}>
                            <Link to="/testimonials" style={{ color: "var(--primary-color)", textDecoration: "none" }}>
                                קראו מה מטופלים מספרים
                            </Link>
                        </button>
                    </div>
                    <p style={{ marginTop: "1rem" }}>
                        054-9794-777 | ארנה קליין, כפר תבור
                    </p>
                </section>

            </article>

            {/* Featured Image */}
            <div className="post-image-container">
                <img
                    className="post-image"
                    src="/digestion.webp"
                    alt="תה צמחים מרגיע ואווירה ביתית נעימה"
                    width="400"
                    height="300"
                    loading="lazy"
                    itemProp="image"
                />
            </div>

            <MoreArticles />
            <br /><br />
        </div>
    );
}

// Inline styles for infographics
const infographicItemStyle = {
    backgroundColor: "white",
    padding: "0.8rem",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    fontSize: "0.95rem",
    color: "#4a5568",
};

const tipCardStyle = {
    backgroundColor: "#fff",
    borderRight: "4px solid #81e6d9", // Teal accent
    padding: "1rem",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
};
