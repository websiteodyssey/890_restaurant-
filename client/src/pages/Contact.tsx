import PageHeader from "../components/PageHeader";
import { INFO } from "../data/info";
import { useT } from "../i18n/lang";

const ICONS: Record<string, JSX.Element> = {
  pin: (
    <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
  ),
  phone: (
    <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .5 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.5-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.2 2.2z" />
  ),
  clock: (
    <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm1-13h-2v6l5 3 1-1.7-4-2.3V7z" />
  ),
  insta: (
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.4-.6a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z" />
  ),
};

function Ic({ name }: { name: keyof typeof ICONS }) {
  return (
    <span className="contact2__ic" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="currentColor">
        {ICONS[name]}
      </svg>
    </span>
  );
}

export default function Contact() {
  const t = useT();
  return (
    <>
      <PageHeader
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        cn={t.contact.cn}
        intro={t.contact.intro}
        image="/images/devanture-nuit.jpg"
      />

      <section className="section contact2">
        <div className="contact2__grid">
          <div className="contact2__panel">
            <ul className="contact2__rows">
              <li>
                <Ic name="pin" />
                <div>
                  <h4>{t.contact.address}</h4>
                  <a href={INFO.mapsUrl} target="_blank" rel="noreferrer">
                    40 Rue Alexandre Dumas<br />75011 Paris
                  </a>
                </div>
              </li>
              <li>
                <Ic name="phone" />
                <div>
                  <h4>{t.contact.phone}</h4>
                  <a href={INFO.phoneHref}>{INFO.phone}</a>
                </div>
              </li>
              <li>
                <Ic name="clock" />
                <div>
                  <h4>{t.contact.hours}</h4>
                  <p>
                    {t.contact.hoursText}<br />
                    {t.home.hoursValue}
                  </p>
                </div>
              </li>
              <li>
                <Ic name="insta" />
                <div>
                  <h4>{t.contact.follow}</h4>
                  <p className="contact2__social">
                    <a href={INFO.instagram} target="_blank" rel="noreferrer">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.4-.6a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z" />
                      </svg>
                      Instagram
                    </a>
                    <a href={INFO.tiktok} target="_blank" rel="noreferrer">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.6c-1.3.1-2.5-.3-3.6-1V15a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.1v2.7a3 3 0 1 0 2.1 2.9V3h2.8z" />
                      </svg>
                      TikTok
                    </a>
                  </p>
                </div>
              </li>
            </ul>

            <div className="contact2__actions">
              <a className="btn btn--gold btn--shine" href={INFO.reserveUrl} target="_blank" rel="noreferrer">
                {t.cta.reserveTable}
              </a>
              <a className="btn btn--outline" href={INFO.mapsUrl} target="_blank" rel="noreferrer">
                {t.contact.route}
              </a>
            </div>

            <div className="contact2__delivery">
              <span>{t.contact.delivery}</span>
              <a href={INFO.ubereats} target="_blank" rel="noreferrer" aria-label="Uber Eats">
                <img src="/images/ubereats.png" alt="Uber Eats" />
              </a>
              <a href={INFO.deliveroo} target="_blank" rel="noreferrer" aria-label="Deliveroo">
                <img src="/images/deliveroo.png" alt="Deliveroo" />
              </a>
            </div>
          </div>

          <div className="contact2__map">
            <iframe
              title="Carte — 890 Restaurant"
              src="https://www.google.com/maps?q=40%20Rue%20Alexandre%20Dumas%2075011%20Paris&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
