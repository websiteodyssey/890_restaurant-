import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { INFO } from "../data/info";

export default function Histoire() {
  return (
    <>
      <PageHeader
        eyebrow={INFO.concept}
        title="L'histoire du 890"
        cn="扒玖零"
        intro="Le vrai goût de la Chine, entre tradition sichuanaise et nostalgie des années 80-90 — au 40 rue Alexandre Dumas."
        image="/images/devanture-nuit.jpg"
      />

      <section className="section story" data-cn="传承">
        <div className="story__grid">
          <div className="story__text">
            <p className="section__eyebrow">Le chef</p>
            <h2 className="section__title">Un maître de Chengdu</h2>
            <p className="story__lead">{INFO.chef}</p>
            <p>{INFO.welcome2}</p>
            <p>{INFO.promise}</p>
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
              <span>ans d'expérience à Chengdu</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream values">
        <div className="section__head section__head--center">
          <p className="section__eyebrow">Notre signature</p>
          <h2 className="section__title">Ce qui fait le 890</h2>
        </div>
        <div className="values__grid">
          <div className="value-card">
            <span className="value-card__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M12 3c3 4 5 6 5 9a5 5 0 0 1-10 0c0-1.5.5-2.7 1.6-3.8C9 10 11 7 12 3z"/><path d="M12 14.5a2.2 2.2 0 0 0 2.2-2.2c0-1.1-.9-2.1-2.2-3.6"/></svg>
            </span>
            <h3>Poivre &amp; piment du Sichuan</h3>
            <p>Importés et sélectionnés avec soin pour la véritable saveur mala.</p>
          </div>
          <div className="value-card">
            <span className="value-card__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M5 11h14"/><path d="M6.5 11v1.5a5.5 5.5 0 0 0 11 0V11"/><path d="M9.5 8c.6-.7.6-1.5 0-2.2"/><path d="M14.5 8c.6-.7.6-1.5 0-2.2"/></svg>
            </span>
            <h3>Cuisiné à la commande</h3>
            <p>Chaque plat est préparé minute, à partir d'ingrédients frais.</p>
          </div>
          <div className="value-card">
            <span className="value-card__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M12 7C10 5.8 7.6 5.3 5 5.3V17c2.6 0 5 .5 7 1.7 2-1.2 4.4-1.7 7-1.7V5.3c-2.6 0-5 .5-7 1.7z"/><path d="M12 7v11.7"/></svg>
            </span>
            <h3>Recettes traditionnelles</h3>
            <p>Le savoir-faire d'un maître certifié, transmis depuis Chengdu.</p>
          </div>
          <div className="value-card">
            <span className="value-card__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M12 3v2"/><path d="M8.5 5.5h7"/><path d="M9.2 5.5C7.8 7 7 9 7 11s.8 4 2.2 5.5h5.6C16.2 15 17 13 17 11s-.8-4-2.2-5.5"/><path d="M8.5 16.5h7"/><path d="M12 16.5v2.5"/><path d="M10.5 21h3"/></svg>
            </span>
            <h3>Une ambiance authentique</h3>
            <p>Une salle chaleureuse aux accents rétro chinois, au cœur du 11ᵉ.</p>
          </div>
        </div>
      </section>

      <section className="section story-ambiance">
        <div className="story-ambiance__text section__head--center">
          <p className="section__eyebrow">L'atmosphère</p>
          <h2 className="section__title">Le décor des années 80-90</h2>
          <div className="divider"><span>◆</span></div>
          <p className="section__intro">
            {INFO.ambiance}
          </p>
        </div>
        <div className="story-ambiance__imgs">
          <img src="/images/banniere.jpg" alt="Devanture du 890 Restaurant" loading="lazy" />
          <img src="/images/ambiance-3.jpg" alt="Salle aux accents rétro" loading="lazy" />
          <img src="/images/ambiance-1.jpg" alt="Décoration rétro, assiette émaillée" loading="lazy" />
        </div>
        <div className="center-cta">
          <Link className="btn btn--red" to="/galerie">
            Voir la galerie
          </Link>
        </div>
      </section>
    </>
  );
}
