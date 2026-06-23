import { useEffect, useLayoutEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { INFO } from "../data/info";
import { useLang, useT } from "../i18n/lang";
import { LANGS } from "../i18n/ui";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const transparentTop = pathname === "/";
  const t = useT();
  const { lang, setLang } = useLang();

  const LINKS = [
    { to: "/", label: t.nav.accueil, end: true },
    { to: "/histoire", label: t.nav.histoire },
    { to: "/carte", label: t.nav.carte },
    { to: "/galerie", label: t.nav.galerie },
    { to: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // useLayoutEffect : on referme le menu AVANT le paint de la nouvelle page,
  // sinon le menu ouvert (avec ses boutons) reste affiché ~1 s le temps de
  // son fondu de fermeture par-dessus la nouvelle page.
  useLayoutEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || !transparentTop;

  const LangSwitch = ({ className }: { className?: string }) => (
    <div className={`lang-switch ${className ?? ""}`} role="group" aria-label="Language">
      {LANGS.map((l) => (
        <button
          key={l.code}
          className={`lang-switch__btn ${lang === l.code ? "is-active" : ""}`}
          onClick={() => setLang(l.code)}
          aria-pressed={lang === l.code}
        >
          {l.label}
        </button>
      ))}
    </div>
  );

  return (
    <>
      <header
        className={`nav ${solid ? "nav--solid" : "nav--transparent"} ${open ? "nav--menu-open" : ""}`}
      >
        <div className="nav__inner">
          <Link to="/" className="nav__brand">
            <img className="nav__brand-logo" src={INFO.logo} alt="Logo 890 Restaurant" />
            <span className="nav__brand-text">
              <span className="nav__brand-num">890 Restaurant</span>
              <span className="nav__brand-cn">扒玖零 · 川菜</span>
            </span>
          </Link>

          <div className="nav__right">
            <LangSwitch className="lang-switch--nav" />
            <a className="nav__cta nav__cta--order" href={INFO.orderUrl}>
              {t.cta.order}
            </a>
            <a className="nav__cta" href={INFO.reserveUrl}>
              {t.cta.reserve}
            </a>
            <button
              className={`nav__menu-btn ${open ? "is-open" : ""}`}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? t.nav.fermer : t.nav.menu}
              aria-expanded={open}
            >
              <span className="nav__menu-label">{open ? t.nav.fermer : t.nav.menu}</span>
              <span className="nav__menu-icon">
                <i />
                <i />
                <i />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div className={`navmenu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="navmenu__bg" onClick={() => setOpen(false)} />
        <div className="navmenu__panel">
          <nav className="navmenu__links">
            {LINKS.map((l, i) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? "is-active" : "")}
              >
                <span className="navmenu__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="navmenu__label">{l.label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="navmenu__cta">
            <a className="btn btn--gold btn--shine" href={INFO.orderUrl}>
              {t.cta.order}
            </a>
            <a className="btn btn--outline" href={INFO.reserveUrl}>
              {t.cta.reserve}
            </a>
          </div>

          <LangSwitch className="lang-switch--menu" />

          <div className="navmenu__info">
            <a href={INFO.mapsUrl} target="_blank" rel="noreferrer">
              {INFO.address}
            </a>
            <a href={INFO.phoneHref}>{INFO.phone}</a>
            <div className="navmenu__social">
              <a href={INFO.instagram} target="_blank" rel="noreferrer">Instagram</a>
              <a href={INFO.tiktok} target="_blank" rel="noreferrer">TikTok</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
