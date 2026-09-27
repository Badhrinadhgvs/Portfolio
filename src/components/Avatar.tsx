import { UserRound } from "lucide-react";

const photoModules = import.meta.glob(
  "../assets/profile.{jpg,jpeg,png,webp}",
  { eager: true, query: "?url", import: "default" },
) as Record<string, string>;

const photo = Object.values(photoModules)[0];

export function Avatar() {
  return (
    <div
      className="relative order-first mx-auto w-fit shrink-0 self-center lg:order-last lg:mx-0"
      aria-label="Profile photo"
    >
      <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent/50 via-teal/30 to-transparent blur-xl" aria-hidden />
      <div className="relative isolate flex aspect-square h-36 w-36 items-center justify-center overflow-hidden rounded-full border border-accent/50 bg-ink-900 shadow-[0_0_0_6px_rgba(45,212,191,0.08)] sm:h-44 sm:w-44 lg:h-52 lg:w-52">
        {photo ? (
          <img
            src={photo}
            alt="Portrait of Gundlapallivenkata Sai Badhrinadh"
            className="h-full w-full object-cover object-[center_24%]"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-teal" role="img" aria-label="Photo placeholder for Gundlapallivenkata Sai Badhrinadh">
            <UserRound size={34} strokeWidth={1.5} />
            <span className="font-display text-3xl font-bold tracking-widest text-white">GB</span>
          </div>
        )}
      </div>
    </div>
  );
}
