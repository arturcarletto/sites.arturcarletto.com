type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "split";
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "split",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}

