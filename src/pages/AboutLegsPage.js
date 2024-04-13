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

  // const more = [
  //   {
  //     title: "רפלקסולוגיה",
  //     image: "sweedish-massage.webp",
  //     url: "/reflexology",
  //     alt: "כוס נס קפה",
  //     desc: "123"
  //   },
  // ];

  return (
    <main className="about-leg-page">
     <Helmet>
  <title>על הרגל | הרגליים - ארנה קליין | רפלקסולוגיה ודמיון מודרך</title>
  <meta name="description" content="על הרגל - למדו על סודות הרפלקסולוגיה, טיפול עתיק יומין המשתמש בלחיצות ממוקדות על כפות הרגליים כדי להקל על כאבים, לשפר את הבריאות הכללית ולעודד איזון גוף ונפש. ארנה קליין מטפלת מוסמכת בתחום זה." />

  <meta property="og:type" content="website" />
  <meta property="og:title" content="על הרגל | הרגליים - ארנה קליין | רפלקסולוגיה ודמיון מודרך" />
  <meta property="og:description" content="על הרגל - למדו על סודות הרפלקסולוגיה, טיפול עתיק יומין המשתמש בלחיצות ממוקדות על כפות הרגליים כדי להקל על כאבים, לשפר את הבריאות הכללית ולעודד איזון גוף ונפש. ארנה קליין מטפלת מוסמכת בתחום זה." />
  <meta property="og:url" content="https://hergelaim.co.il/about-legs" />
  <meta property="og:image" content="https://hergelaim.co.il/reflexology.webp" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="על הרגל | הרגליים - ארנה קליין | רפלקסולוגיה ודמיון מודרך" />
  <meta name="twitter:description" content="על הרגל - למדו על סודות הרפלקסולוגיה, טיפול עתיק יומין המשתמש בלחיצות ממוקדות על כפות הרגליים כדי להקל על כאבים, לשפר את הבריאות הכללית ולעודד איזון גוף ונפש. ארנה קליין מטפלת מוסמכת בתחום זה." />
  <meta name="twitter:image" content="https://hergelaim.co.il/reflexology.webp" />
</Helmet>
      <h1>על הרגל</h1>
      <AboutLegsSection
        // additionalInfos={more}
        showLink={false}
        showTitle={false}
        onAboutLegCardClick={handleAboutLegCardClick}
      />
    </main>
  );
}
