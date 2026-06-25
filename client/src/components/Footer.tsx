import { Link } from "react-router-dom";
import { INFO } from "../data/info";
import { useT } from "../i18n/lang";

export default function Footer() {
  const t = useT();
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img className="footer__logo" src={INFO.logo} alt="Logo 890 Restaurant" />
          <span className="footer__num">890</span>
          <span className="footer__cn">扒玖零</span>
          <p>{t.info.cuisine}</p>
          <p className="footer__addr">{INFO.address}</p>
        </div>

        <div className="footer__col">
          <h4>{t.footer.restaurant}</h4>
          <Link to="/histoire">{t.nav.histoire}</Link>
          <Link to="/carte">{t.nav.carte}</Link>
          <Link to="/galerie">{t.nav.galerie}</Link>
          <a href={INFO.reserveUrl} target="_blank" rel="noreferrer">{t.footer.reserve}</a>
          <a href={INFO.orderUrl} target="_blank" rel="noreferrer">{t.footer.order}</a>
        </div>

        <div className="footer__col">
          <h4>{t.footer.contact}</h4>
          <a href={INFO.mapsUrl} target="_blank" rel="noreferrer">
            {t.footer.plan}
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
          <h4>{t.footer.delivery}</h4>
          <a href={INFO.ubereats} target="_blank" rel="noreferrer">
            Uber Eats
          </a>
          <a href={INFO.deliveroo} target="_blank" rel="noreferrer">
            Deliveroo
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>{t.footer.copyright}</span>
        <span>{t.footer.hoursLine}</span>
      </div>
    </footer>
  );
}
