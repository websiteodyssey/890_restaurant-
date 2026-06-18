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
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M13 2c.5 3-1 4-1 6 2-1 3-3 3-3 1 2 2 4 2 6a5 5 0 0 1-10 0c0-3 2-4 3-6 .3 1 1 1.5 1.5 1.5C12 5 11 3 13 2z"/></svg>
            </span>
            <h3>Poivre &amp; piment du Sichuan</h3>
            <p>Importés et sélectionnés avec soin pour la véritable saveur mala.</p>
          </div>
          <div className="value-card">
            <span className="value-card__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M2 11h18l-.4 2.2A6 6 0 0 1 14 18h-4a6 6 0 0 1-5.6-4.8L4 11zm18 0 3-1.7-1-1.7L19 9.2zM6 9c0-2 3-2 3-4M10 9c0-2 3-2 3-4"/></svg>
            </span>
            <h3>Cuisiné à la commande</h3>
            <p>Chaque plat est préparé minute, à partir d'ingrédients frais.</p>
          </div>
          <div className="value-card">
            <span className="value-card__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M7 3h9a3 3 0 0 1 3 3v13a2 2 0 0 1-2 2H8a3 3 0 0 1-3-3V5a2 2 0 0 1 2-2zm2 5h7M9 12h7M9 16h5"/></svg>
            </span>
            <h3>Recettes traditionnelles</h3>
            <p>Le savoir-faire d'un maître certifié, transmis depuis Chengdu.</p>
          </div>
          <div className="value-card">
            <span className="value-card__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2v2m0 16v2M9 5h6c.6 2 1.5 3.5 1.5 7S15.6 17 15 19H9c-.6-2-1.5-3.5-1.5-7S8.4 7 9 5zm-3 7h12"/></svg>
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
