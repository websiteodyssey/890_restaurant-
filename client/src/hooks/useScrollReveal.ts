import { useEffect } from "react";

// Éléments révélés en fondu-montant à l'entrée dans le viewport.
const SELECTOR = [
  ".section__head--center",
  ".intro__grid",
  ".sig-card",
  ".sig2",
  ".value-card",
  ".menu__panel",
  ".gallery__item",
  ".galcar-section__head",
  ".galsup__back",
  ".galsup__front",
  ".galcar",
  ".cta-band__inner",
  ".contact2__panel",
  ".contact2__map",
  ".story__grid",
  ".story-ambiance__imgs > img",
].join(",");

/**
 * Ajoute la classe `reveal` aux éléments clés puis `is-in` dès qu'ils
 * entrent dans la fenêtre. Léger décalage (stagger) pour les groupes.
 */
export function useScrollReveal(trigger: unknown) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
    const groups = new Map<Element, number>();

    els.forEach((el) => {
      el.classList.add("reveal");
      const parent = el.parentElement;
      if (parent) {
        const i = groups.get(parent) ?? 0;
        groups.set(parent, i + 1);
        el.style.transitionDelay = `${Math.min(i * 90, 540)}ms`;
      }
    });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [trigger]);
}
