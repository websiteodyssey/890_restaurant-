import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { INFO } from "../data/info";

type Shot = { src: string; alt: string; tall?: boolean };

const SHOTS: Shot[] = [
  { src: "/images/sig-boeuf-mala.jpg", alt: "Bœuf bouilli à l'huile pimentée · 水煮牛肉", tall: true },
  { src: "/images/table-890.jpg", alt: "Une tablée généreuse au 890" },
  { src: "/images/devanture-nuit.jpg", alt: "La devanture du 890, le soir" },
  { src: "/images/sig-poisson-choucroute.jpg", alt: "Poisson à la choucroute sichuanaise · 酸菜鱼", tall: true },
  { src: "/images/salle-retro.jpg", alt: "Salle aux accents rétro 80-90" },
  { src: "/images/sig-poulet-piments.jpg", alt: "Poulet croustillant aux piments · 辣子鸡", tall: true },
  { src: "/images/wok-flammes.jpg", alt: "Cuisson au wok sur flammes vives", tall: true },
  { src: "/images/deco-tasses.jpg", alt: "Tasses émaillées d'époque" },
  { src: "/images/plat-choucroute.jpg", alt: "Poisson à la choucroute, en bol", tall: true },
  { src: "/images/signature-poulet.jpg", alt: "Poulet du chef en poêle" },
  { src: "/images/hotpot-poisson.jpg", alt: "Poisson bouilli à l'huile pimentée" },
  { src: "/images/wok-huile.jpg", alt: "Huile pimentée versée sur les piments", tall: true },
  { src: "/images/deco-tasse.jpg", alt: "Détail rétro sur les tables" },
  { src: "/images/mapo-tofu.jpg", alt: "Mapo tofu" },
  { src: "/images/fruits-de-mer.jpg", alt: "Couteaux de mer à la sichuanaise", tall: true },
  { src: "/images/interieur.jpg", alt: "Intérieur chaleureux du 890" },
  { src: "/images/banniere.jpg", alt: "Devanture du 890 Restaurant" },
];

const ROW_A = SHOTS.slice(0, 6);
const ROW_B = SHOTS.slice(6, 12);
const ROW_C = SHOTS.slice(11);

export default function Galerie() {
  const [active, setActive] = useState<Shot | null>(null);

  return (
    <>
      <PageHeader
        eyebrow="Galerie"
        title="En images"
        cn="相册"
        intro="L'ambiance, les saveurs et l'esprit du 890 — entre tradition sichuanaise et décor rétro chinois."
        image="/images/ambiance-2.jpg"
      />

      {/* Carrousel auto-défilant (3 rangées en sens alternés) */}
      <section className="galmar-section">
        <div className="section__head section__head--center">
          <p className="section__eyebrow">Notre univers en images</p>
          <h2 className="section__title">Le 890 en mouvement</h2>
          <div className="divider"><span>◆</span></div>
          <p className="section__intro">
            Cliquez sur une photo pour l'agrandir.
          </p>
        </div>

        <div className="galmarquee">
          <div className="galmarquee__row">
            {[...ROW_A, ...ROW_A].map((s, i) => (
              <button key={`a${i}`} className="galmarquee__item" onClick={() => setActive(s)} aria-label={s.alt}>
                <img src={s.src} alt={s.alt} loading="lazy" />
              </button>
            ))}
          </div>
          <div className="galmarquee__row galmarquee__row--rev">
            {[...ROW_B, ...ROW_B].map((s, i) => (
              <button key={`b${i}`} className="galmarquee__item" onClick={() => setActive(s)} aria-label={s.alt}>
                <img src={s.src} alt={s.alt} loading="lazy" />
              </button>
            ))}
          </div>
          <div className="galmarquee__row">
            {[...ROW_C, ...ROW_C].map((s, i) => (
              <button key={`c${i}`} className="galmarquee__item" onClick={() => setActive(s)} aria-label={s.alt}>
                <img src={s.src} alt={s.alt} loading="lazy" />
              </button>
            ))}
          </div>
        </div>

        <div className="center-cta">
          <a className="btn btn--gold btn--shine" href={INFO.reserveUrl}>
            Réserver une table
          </a>
        </div>
      </section>

      {active ? (
        <div className="lightbox" onClick={() => setActive(null)}>
          <button className="lightbox__close" aria-label="Fermer">
            ×
          </button>
          <figure className="lightbox__fig" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.alt} />
            <figcaption>{active.alt}</figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
