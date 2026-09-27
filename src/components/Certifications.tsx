import { Award, BadgeCheck } from "lucide-react";
import { certifications } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-28">
      <div className="section-line absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials that match the work"
          description="ServiceNow platform certifications front and center, backed by AI/ML coursework and practical skill verification."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c, i) => {
            const flagship = c.tier === "flagship";
            return (
              <div
                key={c.name}
                className={`reveal reveal-delay-${(i % 4) + 1} badge-shimmer group flex items-start gap-3 rounded-2xl border p-4 transition duration-300 ${
                  flagship
                    ? "border-accent/30 bg-accent/5"
                    : "border-ink-700/50 bg-ink-900/40 hover:border-ink-500"
                }`}
              >
                <div
                  className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                    flagship
                      ? "bg-accent/15 text-accent ring-1 ring-accent/30"
                      : "bg-ink-800 text-teal ring-1 ring-ink-600/50"
                  }`}
                >
                  {flagship ? <Award size={16} /> : <BadgeCheck size={16} />}
                </div>
                <div>
                  <p
                    className={`font-display text-sm font-bold leading-snug ${
                      flagship ? "text-white" : "text-ink-100"
                    }`}
                  >
                    {c.name}
                  </p>
                  <p className="mt-1 text-xs text-ink-500">{c.org}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
