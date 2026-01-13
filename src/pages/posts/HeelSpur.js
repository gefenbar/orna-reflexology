import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import MoreArticles from "../../Components/MoreArticles";

export default function HeelSpur() {
    /* ================= JSON‑LD Schemas ================= */
    const schemaArticle = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "רפלקסולוגיה לדורבן (Heel Spur): הקלה על כאבי עקב",
        image: ["https://hergelaim.co.il/heel-spur.webp"],
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
        datePublished: "2025-05-20",
        dateModified: "2025-05-20",
        description:
            "סובלים מכאב דוקר בעקב בצעד הראשון של הבוקר? דורבן (Plantar Fasciitis) הוא תופעה כואבת אך ניתנת לטיפול. גלו כיצד רפלקסולוגיה מסייעת בריכוך הדלקת, שיפור זרימת הדם והקלה על הכאב.",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://hergelaim.co.il/heel-spur",
        },
    };

    const schemaFAQ = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "מה זה דורבן ואיך הוא נוצר?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "דורבן הוא כינוי לדלקת ברצועה הפלנטרית המחברת את העקב לאצבעות. הגורמים כוללים עומס יתר, עמידה ממושכת, נעליים לא מתאימות, או מבנה כף רגל מסוים כמו פלטפוס.",
                },
            },
            {
                "@type": "Question",
                name: "איך רפלקסולוגיה עוזרת לדורבן?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "הטיפול הרפלקסולוגי עובד על הזרמת דם מוגברת לאזור העקב לפינוי דלקת, ריכוך הרקמה המתוחה, ועבודה על אזורי עמוד השדרה והאגן המשפיעים על היציבה והעומס על כפות הרגליים.",
                },
            },
            {
                "@type": "Question",
                name: "האם הטיפול כואב בגלל הדלקת?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "הטיפול מותאם תמיד לרמת הכאב של המטופל. אנחנו לא עובדים 'בכוח' על אזור דלקתי וכואב אלא מסביבו ועל אזורי השתקפות, כדי להביא להקלה ולא להחמיר את המצב.",
                },
            },
        ],
    };

    return (
        <div className="post-page-container">
            <Helmet>
                <title>טיפול בדורבן בכף הרגל | הרגליים - ארנה קליין</title>
                <meta
                    name="description"
                    content="כאבים בעקב? דורבן יכול לשבש את שגרת היום. גלו טיפול טבעי ויעיל ברפלקסולוגיה להקלה על דלקת ברצועת כף הרגל. ארנה קליין, כפר תבור."
                />
                <meta property="og:type" content="article" />
                <meta
                    property="og:title"
                    content="רפלקסולוגיה לדורבן: איך להיפטר מהכאב בעקב?"
                />
                <meta
                    property="og:description"
                    content="הצעד הראשון בבוקר כואב לכם? אל תתעלמו. טיפול משולב לדורבן עוזר להחזיר את הגמישות לכף הרגל ולהקל על הכאב."
                />
                <meta property="og:url" content="https://hergelaim.co.il/heel-spur" />
                <meta
                    property="og:image"
                    content="https://hergelaim.co.il/heel-spur.webp"
                />
                <link rel="canonical" href="https://hergelaim.co.il/heel-spur" />
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
                id="post-heel-spur"
                className="post-content-container"
                itemScope
                itemType="https://schema.org/Article"
            >
                <meta itemProp="datePublished" content="2025-05-20" />
                <span itemProp="author" itemScope itemType="https://schema.org/Person">
                    <meta itemProp="name" content="ארנה קליין" />
                </span>

                <h1 className="post-title" itemProp="headline">
                    הצעד הראשון לא חייב לכאוב: רפלקסולוגיה לדורבן
                </h1>

                {/* Introduction */}
                <section className="post-section intro">
                    <p itemProp="description">
                        <strong>
                            אם אתם מרגישים כאב חד, כמו דקירה של מסמר, בעקב כף הרגל כשאתם קמים מהמיטה בבוקר – אתם כנראה מכירים מקרוב את ה"דורבן".
                            זוהי אחת הבעיות הנפוצות ביותר שאני פוגשת בקליניקה, והיא יכולה להיות מייאשת מאוד. החדשות הטובות?
                            הגוף שלכם יודע לרפא את הדלקת, והרפלקסולוגיה כאן כדי לתת לו את הדחיפה המדויקת שהוא צריך.
                        </strong>
                    </p>
                </section>

                <section>
                    <nav aria-label="תוכן עניינים" className="table-of-contents">
                        <h2>תוכן עניינים</h2>
                        <ol>
                            <li>
                                <a href="#what-is-heel-spur">מה זה בעצם "דורבן"?</a>
                            </li>
                            <li>
                                <a href="#emotional-connection">הזווית הרגשית: לעמוד על שלנו</a>
                            </li>
                            <li>
                                <a href="#reflexology-treatment">הטיפול הרפלקסולוגי</a>
                            </li>
                            <li>
                                <a href="#home-tips">תרגילים להקלה בבית</a>
                            </li>
                        </ol>
                    </nav>
                </section>

                {/* Section 1: What is Heel Spur */}
                <section className="post-section" id="what-is-heel-spur">
                    <h2>מה זה בעצם "דורבן"?</h2>
                    <p>
                        למרות השם המאיים, "דורבן" הוא לא עצם שצמחה פתאום (למרות שלעיתים רואים זיז סידן בצילום), אלא דלקת ברצועה העבה שנמתחת לאורך כף הרגל (Plantar Fascia).
                        הרצועה הזו פועלת כמו קפיץ בולם זעזועים בכל צעד שלנו. כשיש עומס יתר, נוצרים קרעים מיקרוסקופיים שמובילים לדלקת וכאב.
                    </p>
                    <div style={{ backgroundColor: "#fff5f5", padding: "1rem", borderRadius: "8px", borderRight: "4px solid #fc8181", marginTop: "1rem" }}>
                        <strong>למה זה קורה?</strong>
                        <ul style={{ margin: "0.5rem 0" }}>
                            <li>עמידה ממושכת על הרגליים בעבודה.</li>
                            <li>שינוי בנעלים או הליכה בנעל שטוחה מדי ללא תמיכה.</li>
                            <li>פעילות גופנית עצימה ללא "חימום" מתאים.</li>
                            <li>מבנה כף רגל: קשת גבוהה או פלטפוס שמגבירים את המתח על הרצועה.</li>
                        </ul>
                    </div>
                </section>

                {/* Section 2: The Emotional Connection */}
                <section className="post-section" id="emotional-connection">
                    <h2>הזווית הרגשית: לעמוד על העקרונות</h2>
                    <p>
                        בראייה ההוליסטית, העקב מייצג את הבסיס שלנו, השורשים והיציבות. כאב בעקב עשוי להופיע בתקופות של חוסר ביטחון כלכלי או קיומי,
                        או כשאנחנו מרגישים שאנחנו "נדרכים" במקום אחד.
                    </p>
                    <p>
                        לעיתים הדורבן "מאלץ" אותנו לעצור. הוא מבקש מאיתנו להאט את הקצב ולהסתכל על הדרך שאנחנו עושים בצורה מחושבת יותר. בטיפול ננסה להבין אם יש משהו בחיים שלוחץ עליכם כרגע, במקביל לכאב הפיזי.
                    </p>
                </section>

                {/* Section 3: Reflexology Treatment */}
                <section className="post-section" id="reflexology-treatment">
                    <h2>איך רפלקסולוגיה מטפלת בדורבן?</h2>
                    <p>
                        בניגוד לזריקות סטרואידים שמטפלות בסימפטום, הרפלקסולוגיה מטפלת בשורש הבעיה ומעודדת החלמה ארוכת טווח.
                    </p>
                    <p>
                        <strong>הטיפול מתמקד ב:</strong>
                    </p>
                    <ul>
                        <li>
                            <strong>הזרמת דם מוגברת:</strong> כדי לפנות את הדלקת, אנחנו חייבים זרימת דם טובה. העיסוי הרפלקסולוגי פותח חסימות ומזרים חמצן לרקמה הפגועה.
                        </li>
                        <li>
                            <strong>עבודה על מערכת השלד והשרירים:</strong> דורבן הוא לא רק בעיה בכף הרגל. הוא קשור לעיתים קרובות לקיצור בשרירי התאומים או בעיה באגן. בטיפול נעבוד על אזורי ההשתקפות של עמוד השדרה והאגן כדי לשפר את היציבה.
                        </li>
                        <li>
                            <strong>רגיעה למערכת העצבים:</strong> כאב מייצר מתח, ומתח מייצר כיווץ שמחמיר את הכאב. מעגל קסמים שחייבים לשבור על ידי הרגעה עמוקה.
                        </li>
                    </ul>
                </section>

                {/* Section 4: Home Tips */}
                <section className="post-section" id="home-tips">
                    <h2>מה אפשר לעשות בבית להקלה מידית?</h2>
                    <p>
                        בין הטיפולים בקליניקה, הנה כמה תרגילים שיעזרו לכם לעבור את היום:
                    </p>

                    <div className="tips-grid" style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
                        <div style={tipCardStyle}>
                            <h4>🎾 כדור טניס</h4>
                            <p>שבו על כיסא וגלגלו את כף הרגל על כדור טניס למשך 2-3 דקות. זה מעסה את הרצועה בעדינות.</p>
                        </div>
                        <div style={tipCardStyle}>
                            <h4>🧊 בקבוק קרח</h4>
                            <p>הקפיאו בקבוק מים קטן וגלגלו עליו את הרגל הכואבת. הקור מצוין להפחתת הדלקת והכאב האקוטי.</p>
                        </div>
                        <div style={tipCardStyle}>
                            <h4>🧘 מתיחה בבוקר</h4>
                            <p>לפני שאתם יורדים מהמיטה, קחו מגבת, כרכו אותה סביב כריות כף הרגל ומשכו בעדינות אליכם (כשהרגל ישרה). זה מאריך את הרצועה לפני העומס הראשון.</p>
                        </div>
                    </div>
                </section>

                <section className="post-section" id="summary">
                    <h2>לחזור ללכת בחופשיות</h2>
                    <p>
                        כאבי דורבן לא עוברים ביום אחד, אבל עם טיפול עקבי, סבלנות ותרגול נכון – אפשר להחזיר לכף הרגל את התנועתיות והבריאות שלה.
                        אל תחכו שהכאב יהפוך לכרוני.
                    </p>
                </section>

                {/* Call To Action */}
                <section className="post-section" id="call-to-action" style={{ textAlign: "center", marginTop: "3rem" }}>
                    <h2>רוצים להיפרד מהכאב בעקב?</h2>
                    <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
                        אני מזמינה אתכם לטיפול מותאם אישית שיתמקד בשורש הבעיה ויעזור לכם לחזור לצעוד בביטחון.
                    </p>
                    <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                        <button className="general-button">
                            <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
                                צרי קשר לקביעת תור
                            </Link>
                        </button>
                    </div>
                    <p style={{ marginTop: "1rem" }}>
                        054-9794-777 | ארנה קליין
                    </p>
                </section>

            </article>

            {/* Featured Image */}
            <div className="post-image-container">
                <img
                    className="post-image"
                    src="/heel-spur.webp"
                    alt="טיפול רפלקסולוגי בכף הרגל"
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

const tipCardStyle = {
    backgroundColor: "#fff",
    borderRight: "4px solid var(--primary-color)",
    padding: "1rem",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
};
