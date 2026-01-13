import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import articles from "../data/articles.json";

const AboutLegsSection = ({
    showLink = true,
    showTitle = true,
    onContactSectionView,
    displayIds = [12, 11, 8, 3] // Default curated list for Home Page: Sleep, Map, Headache, Stress, LowerBack
}) => {

    // Filter and Sort based on displayIds
    let infos = displayIds
        ? displayIds.map(id => articles.find(a => a.id === id)).filter(Boolean)
        : articles;

    useEffect(() => {
        if (typeof onContactSectionView === "function") {
            onContactSectionView();
        }
    }, [onContactSectionView]);

    return (
        <section className="about-leg-section">
            <div className="about-leg-header">
                {showTitle && <h2>על הרגל</h2>}

                {showLink && (
                    <button className="general-button">
                        <Link className="more" to="/about-legs">
                            למאמרים נוספים                        </Link>
                    </button>
                )}
            </div>
            <div className="about-leg-cards">
                {infos.map((info, index) => (
                    <button className="about-leg-card" key={index}>
                        <Link to={info.link || info.url}>
                            <img
                                src={info.image}
                                alt={info.alt}
                                loading="lazy"
                                className="about-leg-image"
                                width={"200px"}
                                height={"200px"}
                            />
                            <p className="about-leg-title"> {info.title}</p>
                            {info.desc}
                        </Link>
                    </button>
                ))}
            </div>

        </section>
    );
};

export default AboutLegsSection;
