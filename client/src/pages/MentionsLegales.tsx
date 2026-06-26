import PageHeader from "../components/PageHeader";
import { INFO, LEGAL } from "../data/info";
import { useT } from "../i18n/lang";

export default function MentionsLegales() {
  const t = useT();
  const L = t.legal;

  const rows: { label: string; value: string }[] = [
    { label: L.lblCompany, value: LEGAL.company },
    { label: L.lblForm, value: LEGAL.form },
    { label: L.lblCapital, value: LEGAL.capital },
    { label: L.lblRcs, value: LEGAL.rcs },
    { label: L.lblEuid, value: LEGAL.euid },
    { label: L.lblDirector, value: LEGAL.director },
    { label: L.lblAddress, value: LEGAL.address },
    { label: L.lblHost, value: LEGAL.host },
  ];

  return (
    <>
      <PageHeader
        eyebrow={L.eyebrow}
        title={L.title}
        cn={L.cn}
        intro={L.intro}
        image="/images/devanture-nuit.jpg"
      />

      <section className="section legal">
        <div className="legal__inner">
          <p className="legal__updated">{L.updated}</p>

          <div className="legal__card">
            <h2>{L.editorTitle}</h2>
            <dl className="legal__dl">
              {rows.map((r) => (
                <div key={r.label}>
                  <dt>{r.label}</dt>
                  <dd>{r.value}</dd>
                </div>
              ))}
              <div>
                <dt>{t.contact.phone}</dt>
                <dd>
                  <a href={INFO.phoneHref}>{INFO.phone}</a>
                </dd>
              </div>
            </dl>
          </div>

          {L.sections.map((s) => (
            <article key={s.h} className="legal__section">
              <h2>{s.h}</h2>
              {s.p.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
