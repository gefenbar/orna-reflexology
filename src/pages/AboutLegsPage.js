import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';
import { AboutLegsSection } from './HomePage';

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
      <Helmet>
        <title>הרגליים - על הרגל</title>
        <meta name="description" content="מידע על רפלקסולוגיה ועוד." />
      </Helmet>
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
