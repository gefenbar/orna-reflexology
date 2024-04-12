import { AboutLegsSection } from "./HomePage";
import { useEffect } from 'react';
import ReactGA from 'react-ga';

export default function AboutLegsPage() {
  useEffect(() => {
    ReactGA.pageview('/about-legs');
  }, []);

  const handleAboutLegCardClick = (title) => {
    ReactGA.event({
      category: 'Interaction',
      action: 'Click',
      label: `About Leg Card - ${title}`
    });
  };

  const more = [
    {
      title: "רפלקסולוגיה",
      image: "sweedish-massage.webp",
      url: "/reflexology",
      alt: "כוס נס קפה",
      desc: "123"
    },
  ];

  return (
    <main className="about-leg-page">
      <h1>על הרגל</h1>
      <AboutLegsSection
        additionalInfos={more}
        showLink={false}
        showTitle={false}
        onAboutLegCardClick={handleAboutLegCardClick}
      />
    </main>
  );
}