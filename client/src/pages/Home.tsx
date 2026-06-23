import { Link } from "react-router-dom";
import { INFO } from "../data/info";
import { MENU } from "../data/menu";
import Carousel, { type Slide } from "../components/Carousel";
import HeroSlideshow from "../components/HeroSlideshow";
import { Spice } from "../components/MenuMarks";
import { useT, useLang } from "../i18n/lang";
import { dishName, dishCn } from "../i18n/menu";

const signatures = MENU.flatMap((c) => c.dishes).filter((d) => d.signature && d.image);
const allDishes = MENU.flatMap((c) => c.dishes);

// Sélection « best of » pour la grille de tarifs (recherche par nom FR dans les données).
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

// Carrousel : photos (src + nom chinois) ; les titres/descriptions viennent des traductions.
const SLIDE_META = [
  { src: "/images/carousel-bar.jpg", cn: "烤鱼" },
  { src: "/images/signature-poulet.jpg", cn: "招牌干锅鸡" },
  { src: "/images/table-890.jpg", cn: "八九零" },
  { src: "/images/interieur.jpg", cn: "八九零" },
  { src: "/images/salle-retro.jpg", cn: "我们走过的童年" },
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
  const t = useT();
  const { lang } = useLang();

  const slides: Slide[] = SLIDE_META.map((m, i) => ({
    src: m.src,
    cn: m.cn,
    title: t.slides[i].title,
    desc: t.slides[i].desc,
  }));

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
            {t.info.tagline}
          </p>
          <p className="hero__sub hero__anim" style={{ ["--d" as string]: "0.75s" }}>
            {t.hero.sub}
          </p>
          <div className="hero__actions hero__anim" style={{ ["--d" as string]: "0.9s" }}>
            <a className="btn btn--gold btn--shine" href={INFO.orderUrl}>
              {t.cta.order}
            </a>
            <a className="btn btn--ghost-light btn--shine" href={INFO.reserveUrl}>
              {t.cta.reserveTable}
            </a>
          </div>
        </div>
      </section>

      {/* BANDEAU DÉFILANT */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[...TICKER, ...TICKER].map((tk, k) => (
            <span className="ticker__item" key={k}>
              {tk}
              <i>◆</i>
            </span>
          ))}
        </div>
      </div>

      {/* INTRO */}
      <section className="section intro" id="decouvrir" data-cn="八九零">
        <div className="intro__grid">
          <div className="intro__text">
            <p className="section__eyebrow">{t.info.concept}</p>
            <h2 className="section__title">{t.home.introTitle}</h2>
            <div className="divider divider--left">
              <span>◆</span>
            </div>
            <p className="intro__lead">{t.info.welcome}</p>
            <p>{t.info.welcome2}</p>
            <p>{t.info.ambiance}</p>
            <Link className="btn btn--red btn--shine" to="/histoire">
              {t.home.introBtn}
            </Link>
          </div>
          <div className="intro__media intro__media--duo">
            <img className="intro__duo-back" src="/images/gal-17.jpg" alt="Une tablée généreuse au 890" loading="lazy" />
            <img className="intro__duo-front" src="/images/gal-01.jpg" alt="Poêlée épicée du wok, ciboule et piments" loading="lazy" />
          </div>
        </div>
      </section>

      {/* SIGNATURES — bandeau sombre élégant */}
      <section className="section signatures-dark">
        <div className="section__head section__head--center">
          <p className="section__eyebrow section__eyebrow--gold">{t.home.sigEyebrow}</p>
          <h2 className="section__title">{t.home.sigTitle}</h2>
          <div className="divider"><span>◆</span></div>
          <p className="section__intro">{t.home.sigIntro}</p>
        </div>
        <div className="sig-grid">
          {signatures.slice(0, 3).map((d) => (
            <article className="sig2" key={d.name}>
              <div className="sig2__media">
                <img src={d.image} alt={dishName(d, lang)} loading="lazy" />
              </div>
              <div className="sig2__body">
                {dishCn(d, lang) ? <span className="sig2__cn">{dishCn(d, lang)}</span> : null}
                <h3 className="sig2__name">{dishName(d, lang)}</h3>
                <span className="sig2__rule" />
                {d.spice ? <Spice level={d.spice} /> : null}
              </div>
            </article>
          ))}
        </div>
        <div className="center-cta">
          <Link className="btn btn--gold btn--shine" to="/carte">
            {t.home.seeMenu}
          </Link>
        </div>
      </section>

      {/* CARROUSEL — ambiance 80-90 */}
      <section className="section" id="apercu">
        <div className="section__head section__head--center">
          <p className="section__eyebrow">{t.home.apercuEyebrow}</p>
          <h2 className="section__title">{t.home.apercuTitle}</h2>
          <div className="divider"><span>◆</span></div>
          <p className="section__intro">{t.home.apercuIntro}</p>
        </div>
        <Carousel slides={slides} />
      </section>

      {/* TARIFS */}
      <section className="section section--cream tarifs" data-cn="麻辣">
        <div className="section__head section__head--center">
          <p className="section__eyebrow">{t.home.tarifsEyebrow}</p>
          <h2 className="section__title">{t.home.tarifsTitle}</h2>
          <div className="divider"><span>◆</span></div>
          <p className="section__intro">{t.home.tarifsIntro}</p>
        </div>

        <ul className="tarifs__list tarifs__list--cols">
          {tarifs.map((d) => (
            <li className="tarif" key={d.name}>
              <span className="tarif__name">
                {dishName(d, lang)}
                {dishCn(d, lang) ? <em className="tarif__cn">{dishCn(d, lang)}</em> : null}
                {d.spice ? <Spice level={d.spice} /> : null}
              </span>
              <span className="tarif__dots" />
              <span className="tarif__price">{d.price}</span>
            </li>
          ))}
        </ul>

        <div className="center-cta">
          <Link className="btn btn--gold btn--shine" to="/carte">
            {t.home.seeMenu}
          </Link>
        </div>
      </section>

      {/* MAP / ACCÈS */}
      <section className="section map-home" data-cn="川菜">
        <div className="map-home__grid">
          <div className="map-home__info">
            <p className="section__eyebrow">{t.home.mapEyebrow}</p>
            <h2 className="section__title">{t.home.mapTitle}</h2>
            <div className="divider divider--left"><span>◆</span></div>
            <ul className="map-home__facts">
              <li>
                <span>{t.home.labelAddress}</span>
                <a href={INFO.mapsUrl} target="_blank" rel="noreferrer">{INFO.address}</a>
              </li>
              <li>
                <span>{t.home.labelPhone}</span>
                <a href={INFO.phoneHref}>{INFO.phone}</a>
              </li>
              <li>
                <span>{t.home.labelHours}</span>
                <strong>{t.home.hoursValue}</strong>
              </li>
              <li>
                <span>{t.home.labelClosed}</span>
                <strong>{t.home.closedValue}</strong>
              </li>
            </ul>
            <div className="map-home__actions">
              <a className="btn btn--red btn--shine" href={INFO.mapsUrl} target="_blank" rel="noreferrer">
                {t.home.route}
              </a>
              <Link className="btn btn--outline" to="/contact">
                {t.home.details}
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
            <p className="section__eyebrow section__eyebrow--gold">{t.home.bandEyebrow}</p>
            <h2 className="cta-band__title">{t.home.bandTitle}</h2>
            <p>
              {t.home.bandText} {INFO.phone}.
            </p>
          </div>
          <div className="cta-band__actions">
            <a className="btn btn--gold btn--shine" href={INFO.reserveUrl}>
              {t.home.bookOnline}
            </a>
            <a className="btn btn--ghost-light" href={INFO.phoneHref}>
              {INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
