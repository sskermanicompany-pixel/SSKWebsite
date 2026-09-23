type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  invert?: boolean;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  invert = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="mb-4 text-xs font-medium tracking-[0.22em] text-accent uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={`font-display text-3xl leading-tight font-medium tracking-tight sm:text-4xl ${
          invert ? "text-paper" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-xl text-base leading-7 ${
            invert ? "text-paper/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
