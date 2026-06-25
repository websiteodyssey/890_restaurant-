import { useEffect, useLayoutEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { INFO } from "../data/info";
import { useLang, useT } from "../i18n/lang";
import { LANGS } from "../i18n/ui";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { pathname } = useLocation();
  const transparentTop = pathname === "/";
  const t = useT();
  const { lang, setLang } = useLang();
  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  // Ferme le menu de langue au clic extérieur / changement de page
  useEffect(() => {
    if (!langOpen) return;
    const onDown = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".lang-dd")) setLangOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [langOpen]);
  useEffect(() => setLangOpen(false), [pathname]);

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
            <div className="lang-dd">
              <button
                className="lang-dd__toggle"
                onClick={() => setLangOpen((v) => !v)}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                aria-label="Language / Langue / 语言"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="lang-dd__globe">
                  <path fill="none" stroke="currentColor" strokeWidth="1.6" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 0c2.5 2.2 3.8 5.5 3.8 9s-1.3 6.8-3.8 9c-2.5-2.2-3.8-5.5-3.8-9s1.3-6.8 3.8-9zM3.5 9h17M3.5 15h17" />
                </svg>
                <span className="lang-dd__label">{current.label}</span>
                <span className={`lang-dd__caret ${langOpen ? "is-open" : ""}`} aria-hidden="true">▾</span>
              </button>
              {langOpen ? (
                <ul className="lang-dd__menu" role="listbox">
                  {LANGS.map((l) => (
                    <li key={l.code} role="option" aria-selected={lang === l.code}>
                      <button
                        className={`lang-dd__item ${lang === l.code ? "is-active" : ""}`}
                        onClick={() => {
                          setLang(l.code);
                          setLangOpen(false);
                        }}
                      >
                        <span className="lang-dd__item-code">{l.label}</span>
                        <span className="lang-dd__item-full">{l.full}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            <a className="nav__cta nav__cta--order" href={INFO.orderUrl} target="_blank" rel="noreferrer">
              {t.cta.order}
            </a>
            <a className="nav__cta" href={INFO.reserveUrl} target="_blank" rel="noreferrer">
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
            <a className="btn btn--gold btn--shine" href={INFO.orderUrl} target="_blank" rel="noreferrer">
              {t.cta.order}
            </a>
            <a className="btn btn--outline" href={INFO.reserveUrl} target="_blank" rel="noreferrer">
              {t.cta.reserve}
            </a>
          </div>

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
