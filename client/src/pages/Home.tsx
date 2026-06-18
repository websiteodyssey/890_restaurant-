import { Link } from "react-router-dom";
import { INFO } from "../data/info";
import { MENU } from "../data/menu";
import Carousel, { type Slide } from "../components/Carousel";
import HeroSlideshow from "../components/HeroSlideshow";
import { Spice } from "../components/MenuMarks";

const signatures = MENU.flatMap((c) => c.dishes).filter((d) => d.signature && d.image);
const allDishes = MENU.flatMap((c) => c.dishes);

// Sélection « best of » pour la grille de tarifs.
const PICKS = [
  "Poulet au taro et boyaux de porc",
  "Bœuf au bouillon piquant",
  "Poulet frit aux piments de Chongqing",
  "Bar au bouillon piquant",
  "Couteaux aux piments de Sichuan",
  "Côtelette d'agneau au cumin",
  "Nouilles épicées à la viande hachée",
  "Aubergines à la sauce Yuxiang",
  "Riz Cantonais",
  "Concombre à l'ail",
];
const tarifs = PICKS.map((name) => allDishes.find((d) => d.name === name)).filter(
  (d): d is NonNullable<typeof d> => Boolean(d)
);

// Carrousel : nos plus belles photos (plats signature + ambiance), en paysage.
const slides: Slide[] = [
  {
    src: "/images/carousel-bar.jpg",
    title: "Poisson grillé à la sichuanaise",
    cn: "烤鱼",
    desc: "Poisson entier grillé, bouillon mala, piments et ciboule.",
  },
  {
    src: "/images/signature-poulet.jpg",
    title: "Poulet du chef en poêle",
    cn: "招牌干锅鸡",
    desc: "Poulet mijoté, pommes de terre, piments et poivre du Sichuan.",
  },
  {
    src: "/images/table-890.jpg",
    title: "Une table à partager",
    cn: "八九零",
    desc: "L'esprit convivial et généreux des tables du Sichuan.",
  },
  {
    src: "/images/interieur.jpg",
    title: "Un intérieur chaleureux",
    cn: "八九零",
    desc: "Lampes douces, brique et bois — l'atmosphère conviviale du 890.",
  },
  {
    src: "/images/salle-retro.jpg",
    title: "Une salle aux accents rétro",
    cn: "我们走过的童年",
    desc: "Le décor chaleureux, entre fresque et brique, des années 80-90.",
  },
];

const TICKER = [
  "麻辣 · Mala",
  "水煮鱼 · Poisson mala",
  "干锅鸡 · Poulet en poêle",
  "川菜 · Cuisine du Sichuan",
  "烧烤 · Grillades",
  "招牌菜 · Spécialités maison",
  "麻婆豆腐 · Mapo tofu",
  "Poivre du Sichuan",
];

export default function Home() {
  return (
    <>
      {/* HERO — devanture du restaurant */}
      <section className="hero">
        <HeroSlideshow />
        <div className="hero__overlay" />
        <div className="hero__content">
          <p className="hero__cn-top hero__anim" style={{ ["--d" as string]: "0.1s" }}>
            八九零 · 川菜
          </p>
          <h1 className="hero__title hero__anim" style={{ ["--d" as string]: "0.25s" }}>
            890 <small>RESTAURANT</small>
          </h1>
          <div className="hero__divider hero__anim" style={{ ["--d" as string]: "0.45s" }}>
            <span className="hero__divider-line" />
            <span className="hero__divider-icon">◆</span>
            <span className="hero__divider-line" />
          </div>
          <p className="hero__tagline hero__anim" style={{ ["--d" as string]: "0.6s" }}>
            {INFO.tagline}
          </p>
          <p className="hero__sub hero__anim" style={{ ["--d" as string]: "0.75s" }}>
            Cuisine sichuanaise authentique &amp; grillades — saveurs <em>mala</em> et poivre
            du Sichuan, cuisinés à la commande par un maître de Chengdu. Paris 11ᵉ.
          </p>
          <div className="hero__actions hero__anim" style={{ ["--d" as string]: "0.9s" }}>
            <a className="btn btn--gold btn--shine" href={INFO.orderUrl}>
              Commander
            </a>
            <Link className="btn btn--ghost-light btn--shine" to="/reservation">
              Réserver une table
            </Link>
          </div>
        </div>
      </section>

      {/* BANDEAU DÉFILANT */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[...TICKER, ...TICKER].map((t, k) => (
            <span className="ticker__item" key={k}>
              {t}
              <i>◆</i>
            </span>
          ))}
        </div>
      </div>

      {/* INTRO */}
      <section className="section intro" id="decouvrir" data-cn="八九零">
        <div className="intro__grid">
          <div className="intro__text">
            <p className="section__eyebrow">{INFO.concept}</p>
            <h2 className="section__title">Le vrai goût de la Chine</h2>
            <div className="divider divider--left">
              <span>◆</span>
            </div>
            <p className="intro__lead">{INFO.welcome}</p>
            <p>{INFO.welcome2}</p>
            <p>{INFO.ambiance}</p>
            <Link className="btn btn--red btn--shine" to="/histoire">
              Notre histoire
            </Link>
          </div>
          <div className="intro__media">
            <img src="/images/ambiance-2.jpg" alt="Fresque rétro du 890 Restaurant" loading="lazy" />
            <span className="intro__chinese">我们走过的童年</span>
          </div>
        </div>
      </section>

      {/* SIGNATURES — bandeau sombre élégant */}
      <section className="section signatures-dark">
        <div className="section__head section__head--center">
          <p className="section__eyebrow section__eyebrow--gold">Nos incontournables</p>
          <h2 className="section__title">Plats signature</h2>
          <div className="divider"><span>◆</span></div>
          <p className="section__intro">
            Préparés à la minute, dans la grande tradition mala du Sichuan.
          </p>
        </div>
        <div className="sig-grid">
          {signatures.slice(0, 3).map((d) => (
            <article className="sig2" key={d.name}>
              <div className="sig2__media">
                <img src={d.image} alt={d.name} loading="lazy" />
              </div>
              <div className="sig2__body">
                {d.cn ? <span className="sig2__cn">{d.cn}</span> : null}
                <h3 className="sig2__name">{d.name}</h3>
                <span className="sig2__rule" />
                {d.spice ? <Spice level={d.spice} /> : null}
              </div>
            </article>
          ))}
        </div>
        <div className="center-cta">
          <Link className="btn btn--gold btn--shine" to="/carte">
            Voir toute la carte
          </Link>
        </div>
      </section>

      {/* CARROUSEL — ambiance 80-90 */}
      <section className="section" id="apercu">
        <div className="section__head section__head--center">
          <p className="section__eyebrow">À découvrir</p>
          <h2 className="section__title">En images</h2>
          <div className="divider"><span>◆</span></div>
          <p className="section__intro">
            Un aperçu de nos plats signature et de l'atmosphère du 890.
          </p>
        </div>
        <Carousel slides={slides} />
      </section>

      {/* TARIFS */}
      <section className="section section--cream tarifs" data-cn="麻辣">
        <div className="section__head section__head--center">
          <p className="section__eyebrow">Nos prix</p>
          <h2 className="section__title">Quelques plats &amp; tarifs</h2>
          <div className="divider"><span>◆</span></div>
          <p className="section__intro">
            Une sélection de la carte. Plats généreux, pensés pour être partagés.
          </p>
        </div>

        <ul className="tarifs__list tarifs__list--cols">
          {tarifs.map((d) => (
            <li className="tarif" key={d.name}>
              <span className="tarif__name">
                {d.name}
                {d.cn ? <em className="tarif__cn">{d.cn}</em> : null}
                {d.spice ? <Spice level={d.spice} /> : null}
              </span>
              <span className="tarif__dots" />
              <span className="tarif__price">{d.price}</span>
            </li>
          ))}
        </ul>

        <div className="center-cta">
          <Link className="btn btn--gold btn--shine" to="/carte">
            Voir toute la carte
          </Link>
        </div>
      </section>

      {/* MAP / ACCÈS */}
      <section className="section map-home" data-cn="川菜">
        <div className="map-home__grid">
          <div className="map-home__info">
            <p className="section__eyebrow">Nous trouver</p>
            <h2 className="section__title">Venez nous voir</h2>
            <div className="divider divider--left"><span>◆</span></div>
            <ul className="map-home__facts">
              <li>
                <span>Adresse</span>
                <a href={INFO.mapsUrl} target="_blank" rel="noreferrer">{INFO.address}</a>
              </li>
              <li>
                <span>Téléphone</span>
                <a href={INFO.phoneHref}>{INFO.phone}</a>
              </li>
              <li>
                <span>Horaires</span>
                <strong>12h–14h30 · 18h30–22h30</strong>
              </li>
              <li>
                <span>Fermeture</span>
                <strong>Le jeudi</strong>
              </li>
            </ul>
            <div className="map-home__actions">
              <a className="btn btn--red btn--shine" href={INFO.mapsUrl} target="_blank" rel="noreferrer">
                Itinéraire
              </a>
              <Link className="btn btn--outline" to="/contact">
                Détails &amp; accès
              </Link>
            </div>
          </div>
          <div className="map-home__map">
            <iframe
              title="Carte — 890 Restaurant"
              src="https://www.google.com/maps?q=40%20Rue%20Alexandre%20Dumas%2075011%20Paris&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* BANDEAU RESERVATION */}
      <section className="cta-band">
        <video
          className="section-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/video/890-bg-02.webm" type="video/webm" />
        </video>
        <div className="cta-band__inner">
          <div>
            <p className="section__eyebrow section__eyebrow--gold">Une table vous attend</p>
            <h2 className="cta-band__title">Réservez votre moment au 890</h2>
            <p>
              Déjeuner, dîner, repas de groupe ou événement privé — réservez en quelques
              secondes ou appelez-nous au {INFO.phone}.
            </p>
          </div>
          <div className="cta-band__actions">
            <Link className="btn btn--gold btn--shine" to="/reservation">
              Réserver en ligne
            </Link>
            <a className="btn btn--ghost-light" href={INFO.phoneHref}>
              {INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
