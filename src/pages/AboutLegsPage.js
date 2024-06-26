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
      title: "טיפול אלטרנטיבי",
      image: "alternative.webp",
      url: "/alternative",
      alt: "איש מסתכל על דרך חלופית",
      desc: "מחפשים טיפול אלטרנטיבי יעיל וטבעי? רפלקסולוגיה היא הבחירה המושלמת עבורכם! שיטה עתיקה זו, המבוססת...."
    },
    {
      title: "כאבי גב",
      image: "backpain.webp",
      url: "/back-pain",
      alt: "",
      desc: "רפלקסולוגיה מציעה גישה ייחודית לטיפול בכאבי גב. על פי עקרונות הרפלקסולוגיה, ישנם אזורים ספציפיים...."
    }
  ];

  return (
    <main className="about-leg-page">
     <Helmet>
  <title>על הרגל | הרגליים - ארנה קליין | רפלקסולוגיה ודמיון מודרך</title>
  <meta name="description" content="על הרגל - למדו על סודות הרפלקסולוגיה, טיפול עתיק יומין המשתמש בלחיצות ממוקדות על כפות הרגליים כדי להקל על כאבים, לשפר את הבריאות הכללית ולעודד איזון גוף ונפש. ארנה קליין מטפלת מוסמכת בתחום זה." />

  <meta property="og:type" content="website" />
  <meta property="og:title" content="על הרגל | הרגליים - ארנה קליין | רפלקסולוגיה ודמיון מודרך" />
  <meta property="og:description" content="על הרגל - למדו על סודות הרפלקסולוגיה, טיפול עתיק יומין המשתמש בלחיצות ממוקדות על כפות הרגליים כדי להקל על כאבים, לשפר את הבריאות הכללית ולעודד איזון גוף ונפש. ארנה קליין מטפלת מוסמכת בתחום זה." />
  <meta property="og:url" content="https://hergelaim.co.il/about-legs" />
  <meta property="og:image" content="https://hergelaim.co.il/logo.jpeg" />
  <link rel="canonical" href="https://hergelaim.co.il/about-legs" />

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
