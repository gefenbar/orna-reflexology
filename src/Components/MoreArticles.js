import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import articles from "../data/articles.json";

export default function MoreArticles() {
  const location = useLocation();
  const currentPath = location.pathname;

  // מצא את המאמר הנוכחי
  const currentArticle = articles.find(article => article.link === currentPath);

  // סנן את המאמר הנוכחי מהרשימה
  const otherArticles = articles.filter(article => article.link !== currentPath);

  const getRecommendedArticles = () => {
    if (!currentArticle || !currentArticle.tags) {
      // אם אין מאמר נוכחי או אין לו תגיות, החזר 3 מאמרים רנדומליים כמו קודם
      return [...otherArticles].sort(() => 0.5 - Math.random()).slice(0, 3);
    }

    const currentTags = currentArticle.tags;

    // צור מערך של מאמרים עם ציון רלוונטיות
    const scoredArticles = otherArticles.map(article => {
      let score = 0;
      if (article.tags) {
        // חשב כמה תגיות משותפות יש
        const intersection = article.tags.filter(tag => currentTags.includes(tag));
        score = intersection.length;
      }
      return { ...article, score };
    });

    // מיין לפי ציון (גבוה לנמוך). אם הציון זהה, אפשר למיין רנדומלית כדי לגוון
    scoredArticles.sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return 0.5 - Math.random();
    });

    // החזר את ה-3 הראשונים
    return scoredArticles.slice(0, 3);
  };

  const recommendedArticles = getRecommendedArticles();

  // עיצובים מודרניים
  const containerStyle = {
    borderRadius: "12px",
    padding: "30px",
    marginTop: "30px",
    // background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "25px",
    fontSize: "1.8rem",
    color: "#333"
  };

  const listStyle = {
    listStyle: "none",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: 0
  };

  const itemStyle = {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
    textAlign: "center",
    cursor: "pointer"
  };

  const linkStyle = {
    textDecoration: "none",
    // color: "#1a73e8",
    fontWeight: "bold",
    fontSize: "1.1rem"
  };

  return (
    <div className="more-articles-container" style={containerStyle}>
      <Helmet>
        <title>מאמרים מומלצים | הרגליים - ארנה קליין</title>
        <meta
          name="description"
          content="קראו מאמרים מומלצים באתר הרגליים - ארנה קליין, וגלו מידע מקצועי בתחום הרפלקסולוגיה."
        />
        <link rel="canonical" href="https://hergelaim.co.il/more-articles" />
      </Helmet>
      <h3 style={headerStyle}>מאמרים מומלצים</h3>
      <ul className="more-articles-list" style={listStyle}>
        {recommendedArticles.map(article => (
          <li
            key={article.id}
            style={itemStyle}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
            }}
          >
            <Link to={article.link} style={linkStyle}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
      <BackButton />

    </div>
  );
}





const BackButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    position: "fixed",
    left: "10px",
    top: "90px",
    padding: "5px 10px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "bold",
    zIndex: 1000,
    transition: "background-color 0.3s, transform 0.3s",
    cursor: "pointer",
    transform: isHovered ? "scale(1.05)" : "scale(1)"
  };

  return (
    <Link
      to="/about-legs"
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      חזור
    </Link>
  );
};