import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { profile } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { IconGitHub, IconLinkedIn } from "./Icons";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${name || "someone"}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="section-line absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something real"
          description="Open to Forward Deployed Engineer, AI Engineer, and ServiceNow-heavy roles. Prefer email for first contact."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="reveal space-y-4 lg:col-span-2">
            <a
              href={`mailto:${profile.email}`}
              className="card-surface flex items-center gap-4 rounded-2xl p-5 transition duration-300"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/25">
                <Mail size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-ink-500">
                  Email
                </p>
                <p className="truncate text-sm font-medium text-ink-100">
                  {profile.email}
                </p>
              </div>
            </a>

            <a
              href={`tel:${profile.phone.replace(/-/g, "")}`}
              className="card-surface flex items-center gap-4 rounded-2xl p-5 transition duration-300"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal ring-1 ring-teal/25">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-ink-500">
                  Phone
                </p>
                <p className="text-sm font-medium text-ink-100">
                  {profile.phone}
                </p>
              </div>
            </a>

            <div className="card-surface flex items-center gap-4 rounded-2xl p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-800 text-ink-300 ring-1 ring-ink-600/50">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-ink-500">
                  Location
                </p>
                <p className="text-sm font-medium text-ink-100">
                  {profile.location}
                </p>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-ink-600 bg-ink-900/50 py-3 text-sm font-medium text-ink-200 transition hover:border-accent/40 hover:text-accent"
              >
                <IconGitHub size={16} /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-ink-600 bg-ink-900/50 py-3 text-sm font-medium text-ink-200 transition hover:border-accent/40 hover:text-accent"
              >
                <IconLinkedIn size={16} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="reveal reveal-delay-2 card-surface rounded-2xl p-6 sm:p-8 lg:col-span-3">
            {sent ? (
              <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
                <CheckCircle2 className="mb-4 text-teal" size={40} />
                <h3 className="font-display text-xl font-bold text-white">
                  Mail client opening…
                </h3>
                <p className="mt-2 max-w-sm text-sm text-ink-400">
                  If nothing opened, email me directly at{" "}
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-accent underline-offset-2 hover:underline"
                  >
                    {profile.email}
                  </a>
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm text-ink-400 underline-offset-2 hover:text-accent hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-500"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-input"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-500"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-input"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-500"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="form-input resize-y"
                    placeholder="Role, timeline, or what you're building…"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-ink-950 transition hover:bg-[#ffb61a] hover:shadow-lg hover:shadow-accent/20 sm:w-auto"
                >
                  <Send size={16} />
                  Send message
                </button>
                <p className="text-xs text-ink-500">
                  Opens your email client via mailto — no backend, no data
                  stored.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
