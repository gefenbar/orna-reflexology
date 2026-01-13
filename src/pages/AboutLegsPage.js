import { Helmet } from "react-helmet";
import AboutLegsSection from "../Components/AboutLegsSection";

export default function AboutLegsPage() {

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
        displayIds={null}
        maxItems={null}
        showLink={false}
        showTitle={false}
      />
    </main>
  );
}
