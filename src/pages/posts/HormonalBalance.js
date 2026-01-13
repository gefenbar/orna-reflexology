import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import MoreArticles from "../../Components/MoreArticles";

export default function HormonalBalance() {
    /* ================= JSON‑LD Schemas ================= */
    const schemaArticle = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "איזון הורמונלי טבעי: כשהגוף יוצא משליטה",
        image: ["https://hergelaim.co.il/hormonal-balance.webp"],
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
        datePublished: "2026-01-13",
        dateModified: "2026-01-13",
        description:
            "גלי חום? מצבי רוח משתנים? PMS? רפלקסולוגיה מציעה דרך טבעית לאזן את המערכת ההורמונלית ולהחזיר לעצמך את השליטה בגוף.",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://hergelaim.co.il/hormonal-balance",
        },
    };

    const schemaFAQ = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "האם רפלקסולוגיה יכולה להקל על גלי חום של גיל המעבר?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "בהחלט. הטיפול מסייע בוויסות המערכת האנדוקרינית ולהרגעת מערכת העצבים, מה שמוביל במקרים רבים להפחתה משמעותית בתדירות ובעוצמת גלי החום.",
                },
            },
            {
                "@type": "Question",
                name: "האם זה עוזר לכאבי מחזור ותסמונת קדם וסתית (PMS)?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "כן. רפלקסולוגיה ידועה ביכולתה לאזן את האגן, לשחרר כיווצים ברחם ולהרגיע את המתח הנפשי הנלווה לתקופת המחזור.",
                },
            },
            {
                "@type": "Question",
                name: "כמה טיפולים נדרשים כדי להרגיש שינוי?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "מערכת הורמונלית דורשת זמן כדי להתאזן מחדש. לרוב מומלץ על סדרה של 8-12 טיפולים כדי ליצור יציבות לאורך כל החודש.",
                },
            },
        ],
    };

    /* ================ JSX ================ */
    return (
        <div className="post-page-container">
            <Helmet>
                <title>
                    איזון הורמונלי טבעי: רפלקסולוגיה לנשים | הרגליים - ארנה קליין
                </title>
                <meta
                    name="description"
                    content="סובלת מ-PMS או גיל המעבר? רפלקסולוגיה מציעה איזון הורמונלי טבעי. הקליקי לקריאה על הקשר בין כפות הרגליים למערכת הנשית."
                />
                <meta property="og:type" content="article" />
                <meta
                    property="og:title"
                    content="איזון הורמונלי טבעי: כשהגוף יוצא משליטה"
                />
                <meta
                    property="og:description"
                    content="ההורמונים משתוללים? את לא חייבת לסבול. גלי כיצד רפלקסולוגיה מאזנת את הגוף והנפש."
                />
                <meta property="og:url" content="https://hergelaim.co.il/hormonal-balance" />
                <meta
                    property="og:image"
                    content="https://hergelaim.co.il/hormonal-balance.webp"
                />
                <meta name="robots" content="index,follow" />
                <link rel="canonical" href="https://hergelaim.co.il/hormonal-balance" />
                {/* JSON‑LD injection */}
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
                id="post-hormonal-balance"
                className="post-content-container"
                itemScope
                itemType="https://schema.org/Article"
            >
                <meta itemProp="datePublished" content="2026-01-13" />
                <meta itemProp="dateModified" content="2026-01-13" />
                <span itemProp="author" itemScope itemType="https://schema.org/Person">
                    <meta itemProp="name" content="ארנה קליין" />
                </span>

                <h1 className="post-title" itemProp="headline">
                    איזון הורמונלי טבעי: כשהגוף יוצא משליטה
                </h1>

                {/* ===== Intro ===== */}
                <section className="post-section intro" id="intro">
                    <p itemProp="description">
                        <strong>
                            <em>
                                האם את מרגישה לפעמים שהגוף שלך בוגד בך? יום אחד את מלאת אנרגיה, ולמחרת עייפה, עצבנית או מוצפת רגשית ללא סיבה נראית לעין? את לא לבד. נשים רבות חוות את "רכבת ההרים" ההורמונלית כחלק משגרת חייהן, בין אם מדובר בתסמונת קדם וסתית (PMS), בעיות פוריות, או תופעות גיל המעבר. החדשות הטובות הן שאפשר להחזיר את השליטה והרוגע לגוף בעזרת כלי טבעי ועדין: רפלקסולוגיה.
                            </em>
                        </strong>
                    </p>
                </section>

                <section>
                    <nav aria-label="תוכן עניינים" className="table-of-contents">
                        <h2>תוכן עניינים</h2>
                        <ol>
                            <li><a href="#hormonal-system">המערכת ההורמונלית: המנצח על התזמורת</a></li>
                            <li><a href="#how-it-works">איך רפלקסולוגיה מאזנת הורמונים?</a></li>
                            <li><a href="#menopause-pms">מגיל ההתבגרות ועד גיל המעבר</a></li>
                            <li><a href="#reflex-points">נקודות חיבור בכף הרגל</a></li>
                            <li><a href="#lifestyle-tips">טיפים לאיזון בבית</a></li>
                            <li><a href="#summary">בשורה התחתונה</a></li>
                            <li><a href="#faq">שאלות נפוצות</a></li>
                        </ol>
                    </nav>
                </section>

                {/* ===== The Endocrine System ===== */}
                <section className="post-section" id="hormonal-system">
                    <h2>המערכת ההורמונלית: המנצח על התזמורת</h2>
                    <p>
                        הגוף שלנו פועל כמו תזמורת מורכבת, וההורמונים הם המנצחים. הם משפיעים על הכל: מצב הרוח, השינה, חילוף החומרים, רמות האנרגיה והפוריות. כשאחד ה"נגנים" מזייף (כלומר, בלוטה מסוימת עובדת יותר מדי או פחות מדי), כל המנגינה משתבשת.
                    </p>
                    <p>
                        רפלקסולוגיה אינה מתערבת בצורה כימית בגוף כמו תרופות. במקום זאת, היא מעודדת את הגוף לווסת את עצמו ("הומאוסטזיס") ולחזור לקצב הטבעי והבריא שלו.
                    </p>
                </section>

                {/* ===== Infographic: Endocrine Loops ===== */}
                <section className="post-section">
                    <div style={{
                        backgroundColor: "#fff5f7",
                        border: "1px solid #fed7e2",
                        borderRadius: "12px",
                        padding: "20px",
                        margin: "2rem 0",
                        textAlign: "center"
                    }}>
                        <h3 style={{ color: "#b83280", marginTop: 0 }}>ציר האיזון הנשי</h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", maxWidth: "400px", margin: "0 auto" }}>
                            <div style={{ width: "100%", padding: "12px", backgroundColor: "white", borderRadius: "8px", borderRight: "4px solid #b83280" }}>
                                <strong>היפופיזה (בראש)</strong><br />
                                בלוטת העל שנותנת את הפקודות
                            </div>
                            <div style={{ fontSize: "1.5rem", color: "#b83280" }}>⬇</div>
                            <div style={{ width: "100%", padding: "12px", backgroundColor: "white", borderRadius: "8px", borderRight: "4px solid #b83280" }}>
                                <strong>בלוטת התריס (בצוואר)</strong><br />
                                אחראית על אנרגיה וחילוף חומרים
                            </div>
                            <div style={{ fontSize: "1.5rem", color: "#b83280" }}>⬇</div>
                            <div style={{ width: "100%", padding: "12px", backgroundColor: "white", borderRadius: "8px", borderRight: "4px solid #b83280" }}>
                                <strong>שחלות (באגן)</strong><br />
                                אסטרוגן, פרוגסטרון ומחזוריות
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== Menopause & PMS ===== */}
                <section className="post-section" id="menopause-pms">
                    <h2>מגיל ההתבגרות ועד גיל המעבר</h2>
                    <p>
                        בכל שלב בחיים, האיזון ההורמונלי פוגש אותנו בצורה שונה. הטיפול הרפלקסולוגי מותאם אישית לכל שלב:
                    </p>
                    <h3>תסמונת קדם וסתית (PMS)</h3>
                    <p>
                        נפיחות בבטן, רגישות בחזה, עצבנות ותשוקה למתוקים. הטיפול מתמקד בהרגעת מערכת העצבים ושחרור נוזלים (דרך מערכת הלימפה והכליות) כדי להקל על תחושת הכבדות.
                    </p>
                    <h3>גיל המעבר (מנופאוזה)</h3>
                    <p>
                        גלי חום, הפרעות שינה ויובש. זו תקופה של שינוי עמוק. הרפלקסולוגיה מספקת "עוגן" של יציבות, מסייעת לקירור הגוף (דרך עבודה על אלמנט המים והאש) ומשפרת משמעותית את איכות <Link to="/sleep-improvement">השינה</Link>.
                    </p>
                </section>

                {/* ===== Reflex Points Table ===== */}
                <section className="post-section" id="reflex-points">
                    <h2>נקודות חיבור בכף הרגל</h2>
                    <div style={{ overflowX: "auto" }}>
                        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem", minWidth: "300px" }}>
                            <thead>
                                <tr style={{ backgroundColor: "#fff0f5" }}>
                                    <th style={{ padding: "12px", border: "1px solid #fbb6ce", textAlign: "right" }}>אזור בכף הרגל</th>
                                    <th style={{ padding: "12px", border: "1px solid #fbb6ce", textAlign: "right" }}>מערכת מקבילה</th>
                                    <th style={{ padding: "12px", border: "1px solid #fbb6ce", textAlign: "right" }}>יתרון בטיפול</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: "12px", border: "1px solid #fbb6ce" }}><strong>מרכז הבוהן הגדולה</strong></td>
                                    <td style={{ padding: "12px", border: "1px solid #fbb6ce" }}>היפופיזה (יותרת המוח)</td>
                                    <td style={{ padding: "12px", border: "1px solid #fbb6ce" }}>ויסות כללי של המערכת ההורמונלית.</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "12px", border: "1px solid #fbb6ce" }}><strong>צידי העקב</strong></td>
                                    <td style={{ padding: "12px", border: "1px solid #fbb6ce" }}>רחם ושחלות</td>
                                    <td style={{ padding: "12px", border: "1px solid #fbb6ce" }}>הסדרת המחזור, הפחתת כאבים, הכנה ללידה.</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "12px", border: "1px solid #fbb6ce" }}><strong>גב כף הרגל</strong></td>
                                    <td style={{ padding: "12px", border: "1px solid #fbb6ce" }}>מערכת הלימפה</td>
                                    <td style={{ padding: "12px", border: "1px solid #fbb6ce" }}>ניקוז נוזלים, הפחתת נפיחות בשדיים ובבטן.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* ===== Summary ===== */}
                <section className="post-section" id="summary">
                    <h2>בשורה התחתונה</h2>
                    <p>
                        להיות אישה זה מסע של השתנות מתמדת. הגוף שלנו הוא חכם, ולפעמים, כשהוא יוצא מאיזון, הוא רק מבקש תשומת לב והקשבה.
                    </p>
                    <p>
                        רפלקסולוגיה מאפשרת לך לעצור, להתמסר למגע, ולתת לגוף את התמיכה שהוא צריך כדי לרפא את עצמו מבפנים. אם את מרגישה שההורמונים מנהלים אותך במקום שאת תנהלי אותם, בואי ננסה דרך אחרת.
                    </p>
                </section>

                {/* ===== FAQ ===== */}
                <section className="post-section faq-list" id="faq">
                    <h2>שאלות נפוצות</h2>
                    <dl>
                        <input type="checkbox" id="faq1" className="faq-toggle" />
                        <dt><label htmlFor="faq1">האם רפלקסולוגיה יכולה להקל על גלי חום של גיל המעבר?</label></dt>
                        <dd>בהחלט. הטיפול מסייע בוויסות המערכת האנדוקרינית ולהרגעת מערכת העצבים, מה שמוביל במקרים רבים להפחתה משמעותית בתדירות ובעוצמת גלי החום.</dd>

                        <input type="checkbox" id="faq2" className="faq-toggle" />
                        <dt><label htmlFor="faq2">האם זה עוזר לכאבי מחזור ותסמונת קדם וסתית (PMS)?</label></dt>
                        <dd>כן. רפלקסולוגיה ידועה ביכולתה לאזן את האגן, לשחרר כיווצים ברחם ולהרגיע את המתח הנפשי הנלווה לתקופת המחזור.</dd>

                        <input type="checkbox" id="faq3" className="faq-toggle" />
                        <dt><label htmlFor="faq3">כמה טיפולים נדרשים כדי להרגיש שינוי?</label></dt>
                        <dd>מערכת הורמונלית דורשת זמן כדי להתאזן מחדש. לרוב מומלץ על סדרה של 8-12 טיפולים כדי ליצור יציבות לאורך כל החודש.</dd>
                    </dl>
                </section>
            </article>

            {/* ===== Featured Image ===== */}
            <div className="post-image-container">
                <img
                    className="post-image"
                    src="/hormonal-balance.webp"
                    alt="אישה יושבת ברוגע ליד חלון מואר - איזון ושלווה"
                    width="250"
                    height="250"
                    loading="lazy"
                    itemProp="image"
                />
            </div>

            <MoreArticles />

            <button className="general-button" style={{ marginTop: "1.5rem" }}>
                <Link to="/contact" className="post-book-treatment-button">
                    רוצה להחזיר לעצמך את האיזון? קבעי תור היום
                </Link>
            </button>
        </div>
    );
}
