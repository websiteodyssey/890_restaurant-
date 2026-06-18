import { Link } from "react-router-dom";
import { INFO, COPYRIGHT } from "../data/info";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img className="footer__logo" src={INFO.logo} alt="Logo 890 Restaurant" />
          <span className="footer__num">890</span>
          <span className="footer__cn">扒玖零</span>
          <p>{INFO.cuisine}</p>
          <p className="footer__addr">{INFO.address}</p>
        </div>

        <div className="footer__col">
          <h4>Le restaurant</h4>
          <Link to="/histoire">L'histoire</Link>
          <Link to="/carte">La carte</Link>
          <Link to="/galerie">Galerie</Link>
          <a href={INFO.reserveUrl}>Réserver</a>
          <a href={INFO.orderUrl}>Commander</a>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <a href={INFO.mapsUrl} target="_blank" rel="noreferrer">
            Plan d'accès
          </a>
          <a href={INFO.phoneHref}>{INFO.phone}</a>
          <a href={INFO.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={INFO.tiktok} target="_blank" rel="noreferrer">
            TikTok
          </a>
        </div>

        <div className="footer__col">
          <h4>Livraison</h4>
          <a href={INFO.ubereats} target="_blank" rel="noreferrer">
            Uber Eats
          </a>
          <a href={INFO.deliveroo} target="_blank" rel="noreferrer">
            Deliveroo
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>{COPYRIGHT}</span>
        <span>Ouvert tous les jours sauf le jeudi · 12h–14h30 · 18h30–22h30</span>
      </div>
    </footer>
  );
}
