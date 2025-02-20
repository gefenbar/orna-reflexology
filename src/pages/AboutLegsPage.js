import { Helmet } from 'react-helmet';
import { AboutLegsSection } from './HomePage';

export default function AboutLegsPage() {

  const more = [
    {
      title: "טיפול אלטרנטיבי",
      image: "alternative.webp",
      url: "/alternative",
      alt: "דרך חלופית",
      desc: "מחפשים טיפול אלטרנטיבי יעיל וטבעי? רפלקסולוגיה היא הבחירה המושלמת עבורכם! שיטה עתיקה זו, המבוססת...."
    },
    {
      title: "רפלקסולוגיה",
      image: "reflexology.webp",
      url: "/reflexology",
      alt: "טביעות רגליים בחול",
      desc:
        "בטיפול רפלקסולוגי, כדי להגיע לכל שכבות האיברים והמערכות, נעבור יחד תהליך יסודי....",
    },
    {
      title: "כאבי גב",
      image: "backpain.webp",
      url: "/back-pain",
      alt: "גב",
      desc: "רפלקסולוגיה מציעה גישה ייחודית לטיפול בכאבי גב. על פי עקרונות הרפלקסולוגיה, ישנם אזורים ספציפיים...."
    },
    {
      title: "השתקפות",
      image: "reflection.webp",
      url: "/reflection",
      alt: "השתקפות עץ על המים",
      desc:
        "רפלקסולוגיה באה מהמילה REFLECTION שפירושה השתקפות. כל אזור בכף הרגל מייצג איבר או אזור מסוים...."
    },
    {
      title: "גב תחתון",
      image: "lower-back.webp",
      url: "/lower-back",
      alt: "גב תחתון",
      desc:
        "כאבי גב תחתון הם תלונה נפוצה המשפיעה על איכות החיים, במיוחד בשגרת היום-יום. רפלקסולוגיה מציעה....",
    },
    {
      title: "גב כף הרגל",
      image: "foot-back.webp",
      url: "/foot-back",
      alt: "גב כף הרגל",
      desc:
        "כף הרגל היא חלק חיוני במערכת הגוף שלנו, והגב של כף הרגל מהווה אזור מרכזי במפת הרפלקסולוגיה....",
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
      />
    </main>
  );
}
