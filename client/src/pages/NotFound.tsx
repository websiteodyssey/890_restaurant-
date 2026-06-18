import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section notfound">
      <p className="notfound__num">404</p>
      <h1 className="section__title">Page introuvable</h1>
      <p className="section__intro">
        Cette page n'existe pas — mais une bonne table vous attend.
      </p>
      <Link className="btn btn--red" to="/">
        Retour à l'accueil
      </Link>
    </section>
  );
}
