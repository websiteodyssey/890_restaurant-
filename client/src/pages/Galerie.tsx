import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { INFO } from "../data/info";
import { useT } from "../i18n/lang";

type Shot = { src: string; alt: string };

const SHOTS: Shot[] = [
  { src: "/images/gal-01.jpg", alt: "Poêlée épicée du wok, ciboule et piments" },
  { src: "/images/gal-02.jpg", alt: "Marmite mijotée à la sichuanaise" },
  { src: "/images/gal-03.jpg", alt: "Brochette grillée, sauce du chef" },
  { src: "/images/gal-04.jpg", alt: "Poulet croustillant aux cacahuètes · 宫保鸡丁" },
  { src: "/images/gal-05.jpg", alt: "Nouilles sautées, fraîcheur du jour" },
  { src: "/images/gal-06.jpg", alt: "Tofu grillé sur plaque chaude" },
  { src: "/images/gal-07.jpg", alt: "Poisson snacké aux herbes fraîches" },
  { src: "/images/gal-08.jpg", alt: "Poisson entier à la ciboule" },
  { src: "/images/gal-09.jpg", alt: "Couteaux de mer à la sichuanaise" },
  { src: "/images/gal-10.jpg", alt: "Vermicelles sichuanais à l'huile pimentée" },
  { src: "/images/gal-11.jpg", alt: "Bol fraîcheur, concombre et piment" },
  { src: "/images/gal-12.jpg", alt: "Poisson à la choucroute · 酸菜鱼" },
  { src: "/images/gal-13.jpg", alt: "Wok parfumé, dégustation à la baguette" },
  { src: "/images/gal-14.jpg", alt: "Bol mijoté, bouillon épicé" },
  { src: "/images/gal-15.jpg", alt: "Marmite de fête, légumes croquants" },
  { src: "/images/gal-16.jpg", alt: "Plat signature à l'huile pimentée" },
  { src: "/images/gal-17.jpg", alt: "Une tablée généreuse au 890" },
];

// Liste doublée → la translation de -50 % boucle sans couture
const LOOP = [...SHOTS, ...SHOTS];

// Bloc en superposition (façade éditoriale)
const SUP_BACK: Shot = { src: "/images/gal-10.jpg", alt: "Vermicelles sichuanais à l'huile pimentée" };
const SUP_FRONT: Shot = { src: "/images/gal-16.jpg", alt: "Plat signature à l'huile pimentée" };

export default function Galerie() {
  const [active, setActive] = useState<Shot | null>(null);
  const t = useT();

  return (
    <>
      <PageHeader
        eyebrow={t.galerie.eyebrow}
        title={t.galerie.title}
        cn={t.galerie.cn}
        intro={t.galerie.intro}
        image="/images/ambiance-2.jpg"
      />

      {/* Galerie sur fond sombre : superposition + carrousel auto (style éditorial) */}
      <section className="galcar-section">
        <div className="galcar-section__head">
          <p className="galcar__eyebrow">{t.galerie.sectionEyebrow}</p>
          <h2 className="galcar__title">{t.galerie.sectionTitle}</h2>
          <div className="galcar__divider"><span>◆</span></div>
          <p className="galcar__intro">{t.galerie.sectionIntro}</p>
        </div>

        {/* Bloc en superposition */}
        <div className="galsup">
          <button className="galsup__back" onClick={() => setActive(SUP_BACK)} aria-label={SUP_BACK.alt}>
            <img src={SUP_BACK.src} alt={SUP_BACK.alt} loading="lazy" />
          </button>
          <button className="galsup__front" onClick={() => setActive(SUP_FRONT)} aria-label={SUP_FRONT.alt}>
            <img src={SUP_FRONT.src} alt={SUP_FRONT.alt} loading="lazy" />
          </button>
        </div>

        {/* Carrousel à défilement automatique continu (marquee CSS, GPU) */}
        <div className="galcar">
          <div className="galcar__track">
            {LOOP.map((s, k) => (
              <button
                key={k}
                className="galcar__card"
                onClick={() => setActive(s)}
                aria-label={s.alt}
              >
                <img src={s.src} alt={s.alt} loading={k < 4 ? "eager" : "lazy"} />
                <span className="galcar__card-cap">{s.alt}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="center-cta">
          <a className="btn btn--gold btn--shine" href={INFO.reserveUrl}>
            {t.cta.reserveTable}
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
