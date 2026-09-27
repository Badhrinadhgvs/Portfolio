type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  return (
    <div
      className={`reveal mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
