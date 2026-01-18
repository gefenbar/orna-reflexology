import React from "react";
import { Link } from "react-router-dom";
import MoreArticles from "../../Components/MoreArticles";
import "./Migraines.css"; // Reusing the CSS from Migraines as it has the same card/table structures

export default function AnxietyRelief() {
    /* ================= JSON‑LD Schemas ================= */


    return (
        <div className="post-page-container">
            

            <article
                id="post-anxiety-relief"
                className="post-content-container"
                itemScope
                itemType="https://schema.org/Article"
            >
                <meta itemProp="datePublished" content="2025-06-10" />
                <span itemProp="author" itemScope itemType="https://schema.org/Person">
                    <meta itemProp="name" content="ארנה קליין" />
                </span>

                <h1 className="post-title" itemProp="headline">
                    לנשום עמוק: רפלקסולוגיה כעוגן במצבי חרדה
                </h1>

                {/* Introduction */}
                <section className="post-section intro">
                    <p itemProp="description">
                        <strong>
                            אנחנו חיים בקצב מסחרר. לפעמים נדמה שהמחשבות שלנו נמצאות במרוץ שליחים אינסופי, הלב מחסיר פעימה ללא סיבה ברורה,
                            ותחושה של "קוצר נשימה" הופכת למצב קבוע. חרדה היא לא רק מצב נפשי: היא חוויה גופנית מטלטלת.
                            החדשות הטובות הן שהגוף שלנו מצויד במנגנון הרגעה טבעי ועוצמתי, והמפתח להפעלתו נמצא, תאמינו או לא, בכפות הרגליים.
                        </strong>
                    </p>
                </section>

                <section>
                    <nav aria-label="תוכן עניינים" className="table-of-contents">
                        <h2>תוכן עניינים</h2>
                        <ol>
                            <li>
                                <a href="#healing-switch">המתג שנמצא בכף הרגל</a>
                            </li>
                            <li>
                                <a href="#symptoms-signals">הגוף מדבר חרדה</a>
                            </li>
                            <li>
                                <a href="#key-reflex-areas">נקודות המפתח לרגיעה</a>
                            </li>
                            <li>
                                <a href="#grounding-technique">תרגיל קרקוע ביתי</a>
                            </li>
                        </ol>
                    </nav>
                </section>

                {/* Section 1: The Switch */}
                <section className="post-section" id="healing-switch">
                    <h2>המתג שנמצא בכף הרגל</h2>
                    <p>
                        מערכת העצבים שלנו פועלת בשני מצבים עיקריים: מצב "הילחם או ברח" (Sympathetic) שמופעל בזמן סכנה או לחץ,
                        ומצב <a href="https://www.health.harvard.edu/staying-healthy/understanding-the-stress-response" target="_blank" rel="noopener noreferrer">"מנוחה ועיכול" (Parasympathetic)</a> שאחראי על רגיעה וריפוי.
                        הבעיה היא שאצל רבים מאיתנו, המתג "נתקע" על מצב חירום. אנחנו דרוכים תמיד, גם כשאין סכנה אמיתית.
                    </p>
                    <p>
                        הטיפול הרפלקסולוגי הוא כמו לחיצה פיזית על כפתור ה-Reset. המגע הקצבי, העמוק והמקרקע מאותת למוח: "אתה בטוח. אפשר לשחרר".
                        זהו רגע קסום שבו הנשימה מעמיקה והשרירים המכווצים (במיוחד בצוואר ובכתפיים שקשורים ל<Link to="/stress">סטרס</Link>) מתחילים להרפות. מידע נוסף על <a href="https://www.health.gov.il/Subjects/mental_health/BenefeshBria/Pages/default.aspx" target="_blank" rel="noopener noreferrer">התמודדות עם חרדה</a> זמין באתר משרד הבריאות.
                    </p>
                </section>

                {/* Infographic: Physical Symptoms */}
                <section className="post-section" id="symptoms-signals">
                    <h2>הגוף מדבר חרדה</h2>
                    <p>חרדה היא זיקית שיכולה להופיע במגוון צורות פיזיות. הנה הסימנים הנפוצים שהמטופלות שלי מתארות:</p>
                    <div className="infographic-container-cards">
                        <div className="info-card trigger-card" style={{ borderBottomColor: "#ed8936" }}>
                            <span className="icon">🫀</span>
                            <h4>דופק מואץ</h4>
                            <p>תחושה שהלב "יוצא מהחזה" גם במנוחה.</p>
                        </div>
                        <div className="info-card trigger-card" style={{ borderBottomColor: "#ed8936" }}>
                            <span className="icon">😮‍💨</span>
                            <h4>קוצר נשימה</h4>
                            <p>קושי לקחת אוויר עד הסוף, תחושת מחנק קלה.</p>
                        </div>
                        <div className="info-card trigger-card" style={{ borderBottomColor: "#ed8936" }}>
                            <span className="icon">🌀</span>
                            <h4>סחרחורת וניתוק</h4>
                            <p>תחושת ריחוף או חוסר יציבות (ורטיגו).</p>
                        </div>
                        <div className="info-card trigger-card" style={{ borderBottomColor: "#ed8936" }}>
                            <span className="icon">🤢</span>
                            <h4>בטן מתהפכת</h4>
                            <p>כאבי בטן, בחילות או שלשולים פתאומיים (הקשר בטן-מוח).</p>
                        </div>
                    </div>
                </section>

                {/* Section 2: Key Areas */}
                <section className="post-section" id="key-reflex-areas">
                    <h2>מפת הדרכים לרגיעה</h2>
                    <p>
                        בטיפול בחרדה, העבודה היא תמיד הוליסטית, אך ישנם כמה "כוכבים" במפה הרפלקסולוגית:
                    </p>
                    <ul>
                        <li>
                            <strong>מקלעת השמש (Solar Plexus):</strong> נקודה קריטית במרכז כף הרגל. היא נחשבת ל"מוח הרגשי" שלנו. עבודה עליה משחררת מתח צבור ומאפשרת נשימה עמוקה יותר.
                        </li>
                        <li>
                            <strong>הסרעפת:</strong> שריר הנשימה העיקרי. שחרור הסרעפת דרך כף הרגל מאפשר לגוף לחזור לנשימה מלאה ורגועה, מה שמיד משפיע על קצב הלב.
                        </li>
                        <li>
                            <strong>בלוטת יותרת המוח (היפופיזה):</strong> "המנצחת" על התזמורת ההורמונלית. איזון שלה עוזר לווסת את הפרשת הורמוני הלחץ (קורטיזול).
                        </li>
                        <li>
                            <strong>אלמנט האדמה (העקבים):</strong> חיזוק תחושת היציבות, הביטחון והקרקוע (Grounding) כנגד תחושת הריחוף של החרדה.
                        </li>
                    </ul>
                </section>

                {/* Section 3: Grounding Technique */}
                <section className="post-section" id="grounding-technique">
                    <h2>תרגיל: עוגן ברגעי סערה</h2>
                    <div className="callout-box" style={{ backgroundColor: "#f0fff4", borderColor: "#9ae6b4" }}>
                        <h3 style={{ color: "#276749", textAlign: "center" }}>תרגיל קרקוע ב-3 שלבים</h3>
                        <p>כשאת מרגישה הצפה רגשית, נסי את התרגיל הבא:</p>
                        <ol className="post-list" style={{ marginRight: "20px" }}>
                            <li className="post-list-item"><strong>1. מגע בקרקע:</strong> הסירי נעליים. עמדי יחפה על הרצפה (או עדיף - על דשא/אדמה).</li>
                            <li className="post-list-item"><strong>2. הפעלת משקל:</strong> העבירי משקל לאט מהעקבים לכריות האצבעות ובחזרה. הרגישי את התמיכה של האדמה.</li>
                            <li className="post-list-item"><strong>3. כיווץ ושחרור:</strong> כווצי חזק את אצבעות הרגליים לרצפה ל-5 שניות, ושחררי בבת אחת. חיזרי על כך 3 פעמים.</li>
                        </ol>
                    </div>
                </section>

                <section className="post-section" id="summary">
                    <h2>למצוא את השקט הפנימי</h2>
                    <p>
                        החרדה נוטה לשכנע אותנו שהעולם מסוכן ושאין לנו שליטה. הרפלקסולוגיה מזכירה לגוף אמת אחרת: הוא יודע להיות רגוע, הוא יודע להיות יציב.
                        אנחנו רק צריכים לעזור לו להיזכר בדרך.
                    </p>
                </section>

                {/* Call To Action */}
                <section className="post-section" id="call-to-action" style={{ textAlign: "center", marginTop: "3rem" }}>
                    <h2>זקוקה לרגע של שקט אמיתי?</h2>
                    <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
                        בקליניקה תמצאי מרחב מכיל ומקצועי, המאפשר לך לעצור את המרוץ היומיומי, להירגע ולטפל בעצמך.
                    </p>
                    <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                        <button className="general-button">
                            <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
                                לקביעת תור
                            </Link>
                        </button>
                        <button className="general-button" style={{ background: "transparent", border: "2px solid var(--primary-color)" }}>
                            <Link to="/sleep-improvement" style={{ color: "var(--primary-color)", textDecoration: "none" }}>
                                קראי גם על שיפור השינה
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
                    src="/anxiety-relief.webp"
                    alt="רגליים במים צלולים ומרגיעים"
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
