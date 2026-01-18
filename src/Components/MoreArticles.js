import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
      // Return 3 articles deterministically (e.g., newest or by ID)
      return [...otherArticles].slice(0, 3);
    }

    const currentTags = currentArticle.tags;

    // Create array of articles with relevance score
    const scoredArticles = otherArticles.map(article => {
      let score = 0;
      if (article.tags) {
        // Calculate shared tags
        const intersection = article.tags.filter(tag => currentTags.includes(tag));
        score = intersection.length;
      }
      return { ...article, score };
    });

    // Sort by score (high to low). If score is identical, sort by ID to be deterministic.
    scoredArticles.sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return b.id - a.id;
    });

    // Return first 3
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

  // Determine styles based on hover state
  const buttonStyle = {
    position: "fixed",
    left: "1.5%",
    bottom: "2%",
    width: "45px",
    height: "45px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: isHovered ? "var(--accent-color)" : "var(--nav-bg)",
    color: isHovered ? "white" : "var(--primary-color)",
    border: "none",
    borderRadius: "50%",
    textDecoration: "none",
    boxShadow: isHovered
      ? "0 4px 12px rgba(0,0,0,0.15)"
      : "0 2px 5px rgba(0,0,0,0.1)",
    zIndex: 1000,
    transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
    cursor: "pointer",
    transform: isHovered ? "scale(1.1)" : "scale(1)"
  };

  return (
    <Link
      to="/about-legs/"
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="חזרה לבלוג"
      title="חזרה לבלוג"
    >
      {/* Right Arrow SVG for RTL Back */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>
    </Link>
  );
};