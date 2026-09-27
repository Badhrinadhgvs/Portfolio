import { profile } from "../data/portfolio";
import { IconGitHub, IconLinkedIn } from "./Icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-ink-800 bg-ink-950">
      <div className="section-line absolute inset-x-0 top-0" />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-bold text-white">
            {profile.shortName}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-1 text-xs text-ink-500">
            AI Engineer &amp; Forward Deployed Engineer · {profile.location}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-ink-400 transition hover:bg-ink-800 hover:text-white"
            aria-label="GitHub"
          >
            <IconGitHub size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-ink-400 transition hover:bg-ink-800 hover:text-white"
            aria-label="LinkedIn"
          >
            <IconLinkedIn size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg px-3 py-2 text-xs font-medium text-ink-400 transition hover:bg-ink-800 hover:text-accent"
          >
            {profile.email}
          </a>
        </div>

        <p className="text-xs text-ink-600">
          © {year} {profile.shortName}. Built to ship.
        </p>
      </div>
    </footer>
  );
}
