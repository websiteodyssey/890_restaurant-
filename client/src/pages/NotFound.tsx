import { Link } from "react-router-dom";
import { useT } from "../i18n/lang";

export default function NotFound() {
  const t = useT();
  return (
    <section className="section notfound">
      <p className="notfound__num">404</p>
      <h1 className="section__title">{t.notFound.title}</h1>
      <p className="section__intro">{t.notFound.intro}</p>
      <Link className="btn btn--red" to="/">
        {t.notFound.back}
      </Link>
    </section>
  );
}
