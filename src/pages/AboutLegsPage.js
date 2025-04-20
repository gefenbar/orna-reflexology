import { Helmet } from "react-helmet";
import { AboutLegsSection } from "./HomePage";

export default function AboutLegsPage() {
  const more = [
    {
      title: "טיפול אלטרנטיבי",
      image: "alternative.webp",
      url: "/alternative",
      alt: "דרך חלופית",
      desc: "ההיסטוריה של רפואה אלטרנטיבית ובפרט של רפלקסולוגיה",
    },
    {
      title: "רפלקסולוגיה",
      image: "reflexology.webp",
      url: "/reflexology",
      alt: "טביעות רגליים בחול",
      desc: "מה זה רפלקסולוגיה: טיפול מותאם אישית בידיים שלך - הרגליים",
    },
    {
      title: "כאבי גב",
      image: "backpain.webp",
      url: "/back-pain",
      alt: "גב",
      desc: "רפלקסולוגיה וכאבי גב: פתרונות טבעיים לשיפור איכות החיים",
    },
    {
      title: "השתקפות",
      image: "reflection.webp",
      url: "/reflection",
      alt: "השתקפות עץ על המים",
      desc: "רפלקסולוגיה והשתקפויות: איך כף הרגל משקפת את גופך?",
    },

    {
      title: "גב כף הרגל",
      image: "foot-back.webp",
      url: "/foot-back",
      alt: "גב כף הרגל",
      desc: "רפלקסולוגיה לגב כף הרגל: גישה טבעית להקלה ושיפור תפקוד כף הרגל",
    },

    {
      title: "איזון",
      image: "balance.webp",
      url: "/balance",
      alt: "אבנים מאוזנות",
      desc: "על הקשר בין איזון לרפלקסולוגיה",
    },
  ];

  return (
    <main className="about-leg-page">
      <Helmet>
        <title>על הרגל | הרגליים - ארנה קליין | רפלקסולוגיה ודמיון מודרך</title>
        <meta
          name="description"
          content="על הרגל - למדו על סודות הרפלקסולוגיה, טיפול עתיק יומין המשתמש בלחיצות ממוקדות על כפות הרגליים כדי להקל על כאבים, לשפר את הבריאות הכללית ולעודד איזון גוף ונפש. ארנה קליין מטפלת מוסמכת בתחום זה."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="על הרגל | הרגליים - ארנה קליין | רפלקסולוגיה ודמיון מודרך"
        />
        <meta
          property="og:description"
          content="על הרגל - למדו על סודות הרפלקסולוגיה, טיפול עתיק יומין המשתמש בלחיצות ממוקדות על כפות הרגליים כדי להקל על כאבים, לשפר את הבריאות הכללית ולעודד איזון גוף ונפש. ארנה קליין מטפלת מוסמכת בתחום זה."
        />
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
