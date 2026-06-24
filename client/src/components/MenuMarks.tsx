// Indicateurs élégants pour la carte (remplacent les emojis).

export function Spice({ level }: { level?: 0 | 1 | 2 | 3 }) {
  if (!level) return null;
  return (
    <span className="spice" title={`Piment ${level}/3`} aria-label={`Piment ${level} sur 3`}>
      {[0, 1, 2].map((i) => (
        <i key={i} className={`spice__pip${i < level ? " is-on" : ""}`} />
      ))}
    </span>
  );
}

export function Pick() {
  return (
    <span className="pick" title="Recommandé par la maison" aria-label="Recommandé par la maison">
      👍
    </span>
  );
}

export function Veg() {
  return (
    <span className="veg" title="Végétarien" aria-label="Végétarien">
      <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
        <path
          fill="currentColor"
          d="M21 3c-9 0-15 5-15 12 0 1 .1 2 .3 3l1.6-2.9c2-3.6 5.1-6.2 9.1-7.3-3.5 1.9-6 4.8-7.5 8.7C11 17.5 13 18 15 18c6 0 8-7 8-14 0-.6-.4-1-2-1z"
        />
      </svg>
    </span>
  );
}
