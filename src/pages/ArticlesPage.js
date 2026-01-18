import React from "react";
import { Link } from "react-router-dom";
import articles from "../data/articles.json";
import { Helmet } from "react-helmet";

export default function ArticlesPage() {
    return (
        <div className="about-leg-page">
            <Helmet>
                <title>מאמרים | הרגליים - ארנה קליין | רפלקסולוגיה ודמיון מודרך</title>
                <meta
                    name="description"
                    content="מאמרים בנושא רפלקסולוגיה, בריאות ואיזון גוף-נפש מאת ארנה קליין."
                />
            </Helmet>

            <h1>מאמרים ומידע מקצועי</h1>

            <div className="about-leg-cards" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", width: "100%" }}>
                {articles.map((article) => (
                    <div key={article.id} className="about-leg-card">
                        <Link to={article.link}>
                            <div className="image-container">
                                <img
                                    src={article.image}
                                    alt={article.alt}
                                    loading="lazy"
                                    width="300px"
                                    height="200px"
                                    style={{ objectFit: "cover", width: "100%", height: "200px" }}
                                />
                            </div>
                            <div className="card-content">
                                <h3>{article.title}</h3>
                                <p>{article.desc}</p>
                                <div className="read-more">
                                    קראי עוד &larr;
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
