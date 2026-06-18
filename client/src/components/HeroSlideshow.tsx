import { useEffect, useState } from "react";

// Visuels appétissants paysage/carré (se recadrent proprement en plein écran).
const IMAGES = [
  "/images/signature-poulet.jpg",
  "/images/table-890.jpg",
  "/images/hotpot-poisson.jpg",
  "/images/devanture-nuit.jpg",
];

/** Diaporama plein écran en fondu enchaîné + zoom Ken Burns derrière le héro. */
export default function HeroSlideshow() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setI((p) => (p + 1) % IMAGES.length), 5200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="hero__slides" aria-hidden="true">
      {IMAGES.map((src, k) => (
        <div
          key={src}
          className={`hero__slide ${k === i ? "is-active" : ""}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <div className="hero__progress">
        {IMAGES.map((src, k) => (
          <button
            key={src}
            className={k === i ? "is-active" : ""}
            onClick={() => setI(k)}
            aria-label={`Image ${k + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
