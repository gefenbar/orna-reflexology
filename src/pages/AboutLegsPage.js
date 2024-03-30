import { AboutLegsSection } from "./HomePage";
export default function AboutLegsPage() {
  const moreTreatments = [
    { title: "נרות הופי", image: "sweedish-massage.webp" ,      url: "/candles" ,   alt:"כוס נס קפה", desc:"123"
  },
    { title: "רפלקסולוגיה", image: "sweedish-massage.webp" ,      url: "/reflexology" ,   alt:"כוס נס קפה", desc:"123"
  },
    { title: "עיסוי פנים", image: "sweedish-massage.webp" ,      url: "/face" ,   alt:"כוס נס קפה", desc:"123"
  },
  ];
  return (
    <main className="treatment-page">
      <h1>על הרגל</h1>
      <AboutLegsSection
        additionalTreatments={moreTreatments}
        showLink={false}
        showTitle={false}
      />
    </main>
  );
}
