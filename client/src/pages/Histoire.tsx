import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { useT } from "../i18n/lang";

export default function Histoire() {
  const t = useT();
  return (
    <>
      <PageHeader
        eyebrow={t.info.concept}
        title={t.histoire.title}
        cn={t.histoire.cn}
        intro={t.histoire.intro}
        image="/images/devanture-nuit.jpg"
      />

      <section className="section story" data-cn="传承">
        <div className="story__grid">
          <div className="story__text">
            <p className="section__eyebrow">{t.histoire.chefEyebrow}</p>
            <h2 className="section__title">{t.histoire.chefTitle}</h2>
            <p className="story__lead">{t.info.chef}</p>
            <p>{t.info.welcome2}</p>
            <p>{t.info.promise}</p>
          </div>
          <div className="story__media">
            <video
              className="story__video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/wok-flammes.jpg"
              aria-label="Cuisson au wok sur flammes vives"
            >
              <source src="/video/890-bg-01.webm" type="video/webm" />
            </video>
            <div className="story__badge">
              <span className="story__badge-num">20</span>
              <span>{t.histoire.badge}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream values">
        <div className="section__head section__head--center">
          <p className="section__eyebrow">{t.histoire.valuesEyebrow}</p>
          <h2 className="section__title">{t.histoire.valuesTitle}</h2>
        </div>
        <div className="values__grid">
          {t.histoire.values.map((v, i) => (
            <div className="value-card" key={i}>
              <span className="value-card__num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{v.t}</h3>
              <p>{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section story-ambiance">
        <div className="story-ambiance__text section__head--center">
          <p className="section__eyebrow">{t.histoire.ambianceEyebrow}</p>
          <h2 className="section__title">{t.histoire.ambianceTitle}</h2>
          <div className="divider"><span>◆</span></div>
          <p className="section__intro">
            {t.info.ambiance}
          </p>
        </div>
        <div className="story-ambiance__imgs">
          <img src="/images/banniere.jpg" alt="Devanture du 890 Restaurant" loading="lazy" />
          <img src="/images/ambiance-3.jpg" alt="Salle aux accents rétro" loading="lazy" />
          <img src="/images/ambiance-1.jpg" alt="Décoration rétro, assiette émaillée" loading="lazy" />
        </div>
        <div className="center-cta">
          <Link className="btn btn--red" to="/galerie">
            {t.histoire.seeGallery}
          </Link>
        </div>
      </section>
    </>
  );
}
