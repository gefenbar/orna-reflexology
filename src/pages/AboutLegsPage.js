import { AboutLegsSection } from "./HomePage";
export default function AboutLegsPage() {
  const moreTreatments = [
    { title: "נרות הופי", image: "sweedish-massage.webp" ,      url: "/candles" ,   alt:"כוס נס קפה"
  },
    { title: "רפלקסולוגיה", image: "sweedish-massage.webp" ,      url: "/reflexology" ,   alt:"כוס נס קפה"
  },
    { title: "עיסוי פנים", image: "sweedish-massage.webp" ,      url: "/face" ,   alt:"כוס נס קפה"
  },
  ];
  return (
    <main className="treatment-page">
      <h1>הטיפולים שלי</h1>
      <AboutLegsSection
        additionalTreatments={moreTreatments}
        showLink={false}
        showTitle={false}
      />
    </main>
  );
}
