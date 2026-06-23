import { useState, useEffect, useRef } from "react";
import PageHeader from "../components/PageHeader";
import { MENU } from "../data/menu";
import { INFO } from "../data/info";
import { Spice, Veg } from "../components/MenuMarks";
import { useT, useLang } from "../i18n/lang";
import { dishName, dishCn, catTitle, catNote } from "../i18n/menu";

export default function Carte() {
  const [active, setActive] = useState(MENU[0].id);
  const current = MENU.find((c) => c.id === active) ?? MENU[0];
  const tabsRef = useRef<HTMLDivElement>(null);
  const t = useT();
  const { lang } = useLang();

  // Défilement horizontal fluide des onglets : molette (inertie) + glisser souris.
  useEffect(() => {
    const el = tabsRef.current;
    if (!el) return;

    let target = el.scrollLeft;
    let raf = 0;
    const clamp = (v: number) => Math.max(0, Math.min(el.scrollWidth - el.clientWidth, v));

    const animate = () => {
      const diff = target - el.scrollLeft;
      if (Math.abs(diff) < 0.5) {
        el.scrollLeft = target;
        raf = 0;
        return;
      }
      el.scrollLeft += diff * 0.16; // lissage (lerp)
      raf = requestAnimationFrame(animate);
    };

    const onWheel = (e: WheelEvent) => {
      if (el.scrollWidth <= el.clientWidth) return;
      const d = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(e.deltaY) >= Math.abs(e.deltaX)) e.preventDefault();
      // normalise le mode ligne (Firefox)
      const step = e.deltaMode === 1 ? d * 16 : d;
      target = clamp(target + step);
      if (!raf) raf = requestAnimationFrame(animate);
    };

    let down = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;

    const onDown = (e: PointerEvent) => {
      down = true; moved = false;
      startX = e.clientX; startScroll = el.scrollLeft;
      target = el.scrollLeft;
      if (raf) { cancelAnimationFrame(raf); raf = 0; }
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      const dx = e.clientX - startX;
      // On ne passe en mode glissement (et on ne bloque les clics) qu'au-delà d'un seuil.
      if (!moved && Math.abs(dx) > 6) {
        moved = true;
        el.classList.add("is-grabbing");
      }
      if (moved) {
        el.scrollLeft = clamp(startScroll - dx);
        target = el.scrollLeft;
      }
    };
    const onUp = () => { down = false; el.classList.remove("is-grabbing"); };
    const onClickCapture = (e: MouseEvent) => {
      if (moved) { e.preventDefault(); e.stopPropagation(); }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    el.addEventListener("click", onClickCapture, true);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      el.removeEventListener("click", onClickCapture, true);
    };
  }, []);

  return (
    <>
      <PageHeader
        eyebrow={t.nav.carte}
        title={t.carte.title}
        cn={t.carte.cn}
        intro={t.carte.intro}
        image="/images/table-890.jpg"
      />

      <section className="section menu">
        <div className="menu__tabs" ref={tabsRef}>
          {MENU.map((c) => (
            <button
              key={c.id}
              className={`menu__tab ${c.id === active ? "menu__tab--active" : ""}`}
              onClick={() => setActive(c.id)}
            >
              <span>{catTitle(c, lang)}</span>
              {lang !== "zh" ? <em>{c.cn}</em> : null}
            </button>
          ))}
        </div>

        <div className="menu__panel">
          <div className="menu__panel-head">
            <h2>
              {catTitle(current, lang)}{" "}
              {lang !== "zh" ? <span className="menu__panel-cn">{current.cn}</span> : null}
            </h2>
            {catNote(current, lang) ? <p>{catNote(current, lang)}</p> : null}
          </div>

          {current.simple ? (
            <ul className="menu__simple">
              {current.dishes.map((d) => (
                <li className="simple-row" key={d.name}>
                  <span className="simple-row__name">
                    {dishName(d, lang)}
                    {dishCn(d, lang) ? <em className="simple-row__cn">{dishCn(d, lang)}</em> : null}
                    {d.veg ? <Veg /> : null}
                    <Spice level={d.spice} />
                  </span>
                  <span className="simple-row__dots" />
                  <span className="simple-row__price">{d.price}</span>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="menu__list">
              {current.dishes.map((d) => (
                <li className="dish" key={d.name}>
                  {d.image ? (
                    <img className="dish__thumb" src={d.image} alt={dishName(d, lang)} loading="lazy" />
                  ) : (
                    <span className="dish__thumb dish__thumb--placeholder">八九零</span>
                  )}
                  <div className="dish__main">
                    <div className="dish__top">
                      <h3 className="dish__name">
                        {dishName(d, lang)}
                        {dishCn(d, lang) ? <span className="dish__cn">{dishCn(d, lang)}</span> : null}
                        {d.veg ? <Veg /> : null}
                        <Spice level={d.spice} />
                      </h3>
                      <span className="dish__dots" />
                      <span className="dish__price">{d.price}</span>
                    </div>
                    {d.desc ? <p className="dish__desc">{d.desc}</p> : null}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <p className="menu__legend">
          <span className="legend-mark"><Spice level={2} /> {t.carte.spiceLegend}</span>
          <span className="legend-sep">·</span>
          <span className="legend-mark"><Veg /> {t.carte.vegLegend}</span>
        </p>

        <div className="center-cta center-cta--row">
          <a className="btn btn--gold btn--shine" href={INFO.orderUrl}>
            {t.cta.order}
          </a>
          <a className="btn btn--red" href={INFO.reserveUrl}>
            {t.cta.reserveTable}
          </a>
        </div>
      </section>
    </>
  );
}
