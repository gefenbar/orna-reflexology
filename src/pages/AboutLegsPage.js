import { AboutLegsSection } from "./HomePage";
export default function AboutLegsPage() {
  const more = [
    { title: "נרות הופי", image: "sweedish-massage.webp" ,      url: "/candles" ,   alt:"כוס נס קפה", desc:"123"
  },
    { title: "רפלקסולוגיה", image: "sweedish-massage.webp" ,      url: "/reflexology" ,   alt:"כוס נס קפה", desc:"123"
  },
    { title: "עיסוי פנים", image: "sweedish-massage.webp" ,      url: "/face" ,   alt:"כוס נס קפה", desc:"123"
  },
  ];
  return (
    <main className="about-leg-page">
      <h1>על הרגל</h1>
      <AboutLegsSection
        additionalTreatments={more}
        showLink={false}
        showTitle={false}
      />
    </main>
  );
}
