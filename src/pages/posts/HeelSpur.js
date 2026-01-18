import React from "react";
import { Link } from "react-router-dom";
import MoreArticles from "../../Components/MoreArticles";

export default function HeelSpur() {
    /* ================= JSON‑LD Schemas ================= */


    return (
        <div className="post-page-container">
            

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
                            אם את מרגישה כאב חד, כמו דקירה של מסמר, בעקב כף הרגל כשאת קמה מהמיטה בבוקר, את כנראה מכירה מקרוב את ה"דורבן".
                            זוהי אחת הבעיות הנפוצות ביותר שאני פוגשת בקליניקה, והיא יכולה להיות מייאשת מאוד. החדשות הטובות?
                            הגוף שלך יודע לרפא את הדלקת, והרפלקסולוגיה כאן כדי לתת לו את הדחיפה המדויקת שהוא צריך.
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
                        למרות השם המאיים, "דורבן" הוא לא עצם שצמחה פתאום (למרות שלעיתים רואים זיז סידן בצילום), אלא <a href="https://www.mayoclinic.org/diseases-conditions/plantar-fasciitis/symptoms-causes/syc-20354846" target="_blank" rel="noopener noreferrer">דלקת ברצועה העבה שנמתחת לאורך כף הרגל (Plantar Fascia)</a>.
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
                        לעיתים הדורבן "מאלץ" אותנו לעצור. הוא מבקש מאיתנו להאט את הקצב ולהסתכל על הדרך שאנחנו עושים בצורה מחושבת יותר. בטיפול ננסה להבין אם יש משהו בחיים שלוחץ עלייך כרגע, במקביל לכאב הפיזי.
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
                        בין הטיפולים בקליניקה, הנה כמה תרגילים שיעזרו לך לעבור את היום:
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
                            <p>לפני שאת יורדת מהמיטה, קחי מגבת, כרכי אותה סביב כריות כף הרגל ומשכי בעדינות אלייך (כשהרגל ישרה). זה מאריך את הרצועה לפני העומס הראשון.</p>
                        </div>
                    </div>
                </section>

                <section className="post-section" id="summary">
                    <h2>לחזור ללכת בחופשיות</h2>
                    <p>
                        כאבי דורבן לא עוברים ביום אחד, אבל עם טיפול עקבי, סבלנות ותרגול נכון, אפשר להחזיר לכף הרגל את התנועתיות והבריאות שלה.
                        אל תחכו שהכאב יהפוך לכרוני.
                    </p>
                </section>

                {/* Call To Action */}
                <section className="post-section" id="call-to-action" style={{ textAlign: "center", marginTop: "3rem" }}>
                    <h2>רוצים להיפרד מהכאב בעקב?</h2>
                    <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
                        אני מזמינה אותך לטיפול מותאם אישית שיתמקד בשורש הבעיה ויעזור לך לחזור לצעוד בביטחון.
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
