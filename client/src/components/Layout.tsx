import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { INFO } from "../data/info";
import { useScrollReveal } from "../hooks/useScrollReveal";

function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setP(max > 0 ? el.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return <div className="scroll-progress" style={{ transform: `scaleX(${p})` }} />;
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // Si un ancrage est présent, on le laisse défiler vers la section.
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        // léger délai pour laisser la page se monter avant de cibler l'ancre
        window.setTimeout(() => el.scrollIntoView(), 60);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  const { pathname } = useLocation();
  useScrollReveal(pathname);

  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      {pathname === "/contact" ? (
        <div className="floating-btns">
          <a className="fab-call" href={INFO.phoneHref} aria-label="Appeler le restaurant" title="Appeler">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .5 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.5-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.2 2.2z"/>
            </svg>
          </a>
          <a className="fab-map" href={INFO.mapsUrl} target="_blank" rel="noreferrer" aria-label="Voir le plan d'accès" title="Plan d'accès">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M12 2c-4 0-7 3-7 7 0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>
            </svg>
          </a>
        </div>
      ) : null}
    </>
  );
}
