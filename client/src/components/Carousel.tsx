import { useEffect, useState, useCallback } from "react";

export type Slide = {
  src: string;
  title: string;
  cn?: string;
  desc?: string;
};

const pad = (n: number) => String(n).padStart(2, "0");

export default function Carousel({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = slides.length;

  const to = useCallback((k: number) => setI(((k % n) + n) % n), [n]);
  const next = useCallback(() => setI((p) => (p + 1) % n), [n]);
  const prev = useCallback(() => setI((p) => (p - 1 + n) % n), [n]);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(next, 4600);
    return () => window.clearInterval(id);
  }, [next, i, paused]);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="carousel__viewport">
        <div className="carousel__track" style={{ transform: `translateX(-${i * 100}%)` }}>
          {slides.map((s, k) => (
            <figure className="carousel__slide" key={s.src + s.title}>
              <img
                className="carousel__img"
                src={s.src}
                alt={s.title}
                loading={k === 0 ? "eager" : "lazy"}
              />
              <figcaption className="carousel__caption">
                <span className="carousel__index">{pad(k + 1)}</span>
                <div className="carousel__caption-text">
                  {s.cn ? <span className="carousel__cn">{s.cn}</span> : null}
                  <h3>{s.title}</h3>
                  {s.desc ? <p>{s.desc}</p> : null}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <span className="carousel__counter">
          <strong>{pad(i + 1)}</strong> / {pad(n)}
        </span>

        <button className="carousel__arrow carousel__arrow--prev" onClick={prev} aria-label="Précédent">
          ‹
        </button>
        <button className="carousel__arrow carousel__arrow--next" onClick={next} aria-label="Suivant">
          ›
        </button>
      </div>

      <div className="carousel__thumbs">
        {slides.map((s, k) => (
          <button
            key={s.src + k}
            className={`carousel__thumb ${k === i ? "is-active" : ""}`}
            onClick={() => to(k)}
            aria-label={`Voir : ${s.title}`}
          >
            <img src={s.src} alt={s.title} loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}
