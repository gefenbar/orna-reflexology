import React from "react";
import { Link } from "react-router-dom";
import MoreArticles from "../../Components/MoreArticles";
import "./Migraines.css"; // We will add inline styles or a CSS file if needed, but inline is preferred for single article specific tweaks if small.

export default function Migraines() {
    /* ================= JSON‑LD Schemas ================= */


    return (
        <div className="post-page-container">


            <article
                id="post-migraines"
                className="post-content-container"
                itemScope
                itemType="https://schema.org/Article"
            >
                <meta itemProp="datePublished" content="2025-06-01" />
                <span itemProp="author" itemScope itemType="https://schema.org/Person">
                    <meta itemProp="name" content="ארנה קליין" />
                </span>

                <h1 className="post-title" itemProp="headline">
                    כשהראש מתפוצץ: רפלקסולוגיה ככלי לטיפול במיגרנות
                </h1>

                {/* Introduction */}
                <section className="post-section intro">
                    <p itemProp="description">
                        <strong>
                            מי שלא חוותה מיגרנה, תתקשה להבין זאת. זה לא "סתם כאב ראש" שאפשר לפתור עם כוס מים וכדור.
                            זהו מצב משתק, ששולח אותנו לחדר חשוך, רחוק מרעש ומאנשים, בתקווה שהגל יעבור. בקליניקה שלי,
                            אני פוגשת נשים שמחפשות דרך אחרת. דרך שלא רק מכבה את השריפה כשהיא פורצת, אלא מונעת ממנה להתלקח מלכתחילה.
                        </strong>
                    </p>
                </section>

                <section>
                    <nav aria-label="תוכן עניינים" className="table-of-contents">
                        <h2>תוכן עניינים</h2>
                        <ol>
                            <li>
                                <a href="#migraine-vs-headache">לא סתם כאב ראש</a>
                            </li>
                            <li>
                                <a href="#triggers">מה מצית את המיגרנה?</a>
                            </li>
                            <li>
                                <a href="#reflexology-connection">הקשר בין כף הרגל לראש</a>
                            </li>
                            <li>
                                <a href="#action-plan">תוכנית פעולה טבעית</a>
                            </li>
                        </ol>
                    </nav>
                </section>

                {/* Section 1: Migraine vs Headache */}
                <section className="post-section" id="migraine-vs-headache">
                    <h2>לא סתם כאב ראש: המנגנון הפיזיולוגי</h2>
                    <p>
                        המיגרנה היא תוצאה של כיווץ והרחבה קיצוניים של כלי הדם במוח. בניגוד ל<Link to="/headache/">כאבי ראש רגילים</Link> שנובעים לרוב ממתח שרירי בצוואר,
                        המיגרנה מערבת <a href="https://www.mayoclinic.org/diseases-conditions/migraine-headache/symptoms-causes/syc-20360201" target="_blank" rel="noopener noreferrer">תהליכים עצביים וכימיים מורכבים</a>. לעיתים קרובות היא מלווה ב"ארוה" (הפרעות ראייה), בחילות ורגישות קיצונית לגירויים. מידע נוסף בעברית ניתן למצוא ב<a href="https://www.clalit.co.il/he/medical/Pages/migraine.aspx" target="_blank" rel="noopener noreferrer">אתר כללית</a>.
                    </p>
                    <p>
                        ברפלקסולוגיה, אנחנו מתייחסים לראש כאל "קומת הגג" של הגוף. כשיש עומס בקומה הזו, כמו מחשבות טורדניות, דאגות או עומס חושי, הגוף מאותת לנו דרך הכאב.
                    </p>
                </section>

                {/* Infographic: Triggers */}
                <section className="post-section" id="triggers">
                    <h2>מה מצית את ההתקף?</h2>
                    <p>
                        זיהוי הטריגרים הוא חצי מהדרך לפתרון. הנה הגורמים הנפוצים ביותר שאני רואה בקליניקה:
                    </p>
                    <div className="infographic-container-cards">
                        <div className="info-card trigger-card">
                            <span className="icon">🤯</span>
                            <h4>סטרס ולחץ</h4>
                            <p>האויב מספר אחד. ירידת מתח פתאומית (למשל בסופי שבוע) יכולה גם היא לעורר התקף.</p>
                            <Link to="/stress/" style={{ fontSize: "0.9em" }}>קראו עוד על טיפול בסטרס</Link>
                        </div>
                        <div className="info-card trigger-card">
                            <span className="icon">⚖️</span>
                            <h4>שינויים הורמונליים</h4>
                            <p>נפוץ במיוחד אצל נשים לפני מחזור או בגיל המעבר. האיזון ההורמונלי הוא קריטי.</p>
                            <Link to="/hormonal-balance/" style={{ fontSize: "0.9em" }}>על איזון הורמונלי</Link>
                        </div>
                        <div className="info-card trigger-card">
                            <span className="icon">🧀</span>
                            <h4>תזונה ושינה</h4>
                            <p>דילוג על ארוחות, חוסר שעות שינה, או מאכלים מסוימים (שוקולד, גבינת צהובה) יכולים להוות טריגר.</p>
                        </div>
                    </div>
                </section>

                {/* Section 2: Reflexology Connection */}
                <section className="post-section" id="reflexology-connection">
                    <h2>איך לחיצה ברגל משפיעה על הראש?</h2>
                    <p>
                        הייחוד של הרפלקסולוגיה טמון בחיבור העצבי. הבוהן הגדולה בכף הרגל מייצגת את הראש והמוח.
                        צוואר הבוהן מייצג את הצוואר הפיזי (חוליות הצוואר), שדרכו עוברת זרימת הדם לראש.
                    </p>
                    <p>
                        בטיפול במיגרנות, אנו עובדים במספר מישורים:
                    </p>
                    <ul>
                        <li><strong>עבודה על הבוהן:</strong> לשחרור חסימות אנרגטיות באזור הראש.</li>
                        <li><strong>מערכת העצבים (עמוד השדרה):</strong> הרגעה כללית של הגוף כדי להוריד את סף הגירוי של הכאב.</li>
                        <li><strong>מערכת העיכול:</strong> הקשר בין הבטן לראש הוא הדוק. טיפול בבטן מפחית לעיתים קרובות את עוצמת המיגרנה.</li>
                        <li><strong>בלוטת יותרת הכליה (אדרנל):</strong> לאיזון תגובת הגוף למצבי לחץ.</li>
                    </ul>
                </section>

                {/* Section 3: Action Plan */}
                <section className="post-section" id="action-plan">
                    <h2>תוכנית פעולה טבעית</h2>
                    <div className="comparison-table-container">
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th>בזמן התקף 🚨</th>
                                    <th>בשגרה (מניעה) 🛡️</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>חושך ושקט מוחלט</td>
                                    <td>טיפולי רפלקסולוגיה סדירים</td>
                                </tr>
                                <tr>
                                    <td>קומפרסים קרים על העורף</td>
                                    <td>שתיית מים מרובה ושינה סדירה</td>
                                </tr>
                                <tr>
                                    <td>עיסוי עדין מאוד בכפות הידיים</td>
                                    <td>פעילות גופנית מתונה לשחרור מתחים</td>
                                </tr>
                                <tr>
                                    <td>נשימות עמוקות ואיטיות</td>
                                    <td>הימנעות ממזונות "טריגר" ידועים</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="post-section" id="summary">
                    <h2>אפשר לחיות אחרת</h2>
                    <p>
                        את לא חייבת לחיות בחרדה מההתקף הבא. הגוף שלך מאותת שמשהו יצא מאיזון, והוא מבקש תשומת לב.
                        דרך הרפלקסולוגיה, אנחנו מחזירים לגוף את היכולת לווסת את עצמו, להירגע, ולתפקד בהרמוניה.
                    </p>
                </section>

                {/* Call To Action */}
                <section className="post-section" id="call-to-action" style={{ textAlign: "center", marginTop: "3rem" }}>
                    <h2>מוכנה להפחית את עוצמת המיגרנות?</h2>
                    <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
                        הגיע הזמן לטפל בשורש הבעיה ולא רק בסימפטום. צרי קשר לתיאום סדרת טיפולים מונעת.
                    </p>
                    <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                        <button className="general-button">
                            <Link to="/contact/" style={{ color: "white", textDecoration: "none" }}>
                                לקביעת תור
                            </Link>
                        </button>
                        <button className="general-button" style={{ background: "transparent", border: "2px solid var(--primary-color)" }}>
                            <Link to="/testimonials/" style={{ color: "var(--primary-color)", textDecoration: "none" }}>
                                סיפורי הצלחה
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
                    src="/migraines.webp"
                    alt="אישה נחה בחדר מרגיע"
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
