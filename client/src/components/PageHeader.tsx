type Props = {
  eyebrow?: string;
  title: string;
  cn?: string;
  intro?: string;
  image?: string;
};

export default function PageHeader({ eyebrow, title, cn, intro, image }: Props) {
  return (
    <header
      className="pagehead"
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      <div className="pagehead__veil" />
      <div className="pagehead__inner">
        {eyebrow ? <p className="pagehead__eyebrow">{eyebrow}</p> : null}
        <h1 className="pagehead__title">
          {title}
          {cn ? <span className="pagehead__cn">{cn}</span> : null}
        </h1>
        {intro ? <p className="pagehead__intro">{intro}</p> : null}
      </div>
    </header>
  );
}
