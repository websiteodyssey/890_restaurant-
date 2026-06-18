import { useState, type FormEvent } from "react";
import PageHeader from "../components/PageHeader";
import { createReservation } from "../services/api";

const TIMES = [
  "12:00", "12:30", "13:00", "13:30", "14:00",
  "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00",
];

const today = new Date().toISOString().slice(0, 10);

type Status =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success"; id: string }
  | { kind: "error"; message: string };

export default function Reservation() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "19:30",
    guests: 2,
    notes: "",
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus({ kind: "loading" });
    try {
      const res = await createReservation({ ...form, guests: Number(form.guests) });
      setStatus({ kind: "success", id: res.reservation.id });
      setForm((f) => ({ ...f, name: "", email: "", phone: "", notes: "" }));
    } catch (err) {
      setStatus({
        kind: "error",
        message: err instanceof Error ? err.message : "Erreur inconnue.",
      });
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Réservation"
        title="Réservez votre table"
        cn="预订"
        intro="Réservez en quelques secondes. Pour les grandes tablées ou un événement privé, appelez-nous directement."
        image="/images/signature-poulet.jpg"
      />

      <section className="section reservation">
        <div className="reservation__grid">
          <div className="reservation__card">
            {status.kind === "success" ? (
              <div className="reservation__success">
                <div className="reservation__success-icon">✓</div>
                <h3>Demande envoyée&nbsp;!</h3>
                <p>
                  Merci. Votre demande a bien été enregistrée sous la référence{" "}
                  <strong>{status.id}</strong>. Nous vous confirmons votre table très
                  prochainement.
                </p>
                <button
                  className="btn btn--outline"
                  onClick={() => setStatus({ kind: "idle" })}
                >
                  Faire une autre réservation
                </button>
              </div>
            ) : (
              <form className="form" onSubmit={onSubmit}>
                <div className="form__row">
                  <label className="field">
                    <span>Nom complet *</span>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Votre nom"
                    />
                  </label>
                  <label className="field">
                    <span>Convives *</span>
                    <select
                      value={form.guests}
                      onChange={(e) => update("guests", Number(e.target.value))}
                    >
                      {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>
                          {n} {n > 1 ? "personnes" : "personne"}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="form__row">
                  <label className="field">
                    <span>Email *</span>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="vous@email.com"
                    />
                  </label>
                  <label className="field">
                    <span>Téléphone *</span>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="06 12 34 56 78"
                    />
                  </label>
                </div>

                <div className="form__row">
                  <label className="field">
                    <span>Date *</span>
                    <input
                      required
                      type="date"
                      min={today}
                      value={form.date}
                      onChange={(e) => update("date", e.target.value)}
                    />
                  </label>
                  <label className="field">
                    <span>Heure *</span>
                    <select
                      value={form.time}
                      onChange={(e) => update("time", e.target.value)}
                    >
                      {TIMES.map((t) => (
                        <option key={t} value={t}>
                          {t.replace(":", "h")}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="field">
                  <span>Demande particulière</span>
                  <textarea
                    rows={3}
                    value={form.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    placeholder="Allergies, occasion spéciale, table…"
                  />
                </label>

                {status.kind === "error" ? (
                  <p className="form__error">{status.message}</p>
                ) : null}

                <button
                  className="btn btn--red btn--block"
                  type="submit"
                  disabled={status.kind === "loading"}
                >
                  {status.kind === "loading" ? "Envoi en cours…" : "Confirmer la réservation"}
                </button>
                <p className="form__hint">
                  Demande envoyée à l'équipe du 890. Confirmation par téléphone ou email.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
