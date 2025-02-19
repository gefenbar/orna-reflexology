import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const articles = [
  { id: 1, title: "רפלקסולוגיה לטיפול בכאב ראש", link: "/headache" },
  { id: 2, title: "איזון ורפלקסולוגיה", link: "/balance" },
  { id: 3, title: "רפלקסולוגיה: טיפול אלטרנטיבי", link: "/alternative" },
  { id: 4, title: "רפלקסולוגיה וכאבי גב", link: "/back-pain" },
  { id: 5, title: "רפלקסולוגיה והשתקפויות", link: "/reflection" },
  { id: 6, title: "רפלקסולוגיה לגב תחתון", link: "/lower-back" },
  { id: 7, title: "רפלקסולוגיה: טיפול מותאם אישית", link: "/reflexology" },
  { id: 8, title: "רפלקסולוגיה והפחתת לחץ", link: "/stress" },
  { id: 9, title: "רפלקסולוגיה לגב כף הרגל", link: "/foot-back" }
];

export default function MoreArticles() {
  const location = useLocation();
  const currentPath = location.pathname;

  // מסנן את המאמרים כך שהמאמר הנוכחי לא יוצג
  const filteredArticles = articles.filter(article => article.link !== currentPath);

  // בוחר באופן אקראי 3 מאמרים מהמאמרים הנותרים
  const getRandomArticles = () => {
    const shuffled = [...filteredArticles].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  const randomArticles = getRandomArticles();

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
        {randomArticles.map(article => (
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
    </div>
  );
}
