import Image from "next/image";
import Link from "next/link";

const profileCards = [
  {
    label: "Currently",
    text: "Mechanical Engineering student at UC San Diego.",
  },
  {
    label: "Interested in",
    text: "Hardware roles where CAD, fabrication, and validation meet.",
  },
  {
    label: "How I Work",
    text: "Define the objective, build the hardware, measure it, and iterate.",
  },
];

const toolGroups = [
  {
    label: "CAD",
    text: "SOLIDWORKS, Fusion 360, Onshape",
  },
  {
    label: "Build",
    text: "FDM printing, waterjet, laser cutting, hand assembly",
  },
  {
    label: "Validation",
    text: "Mass measurement, fit checks, robot runs, hardware inspection",
  },
];

const profileImage = {
  src: "/Geisel.JPEG",
  alt: "UC San Diego campus",
};

export default function AboutPage() {
  return (
    <main
      id="main"
      className="min-h-screen bg-[linear-gradient(to_bottom,_#050505,_#0f172a_48%,_#050505)] px-6 py-10 text-gray-100 md:px-10 md:py-14"
    >
      <div className="mx-auto max-w-7xl">
        <nav
          aria-label="About page navigation"
          className="mb-10 flex flex-wrap items-center gap-3 text-sm"
        >
          <Link
            href="/"
            className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-gray-300 transition hover:bg-white/[0.08] hover:text-white"
          >
            ← Home
          </Link>
          <Link
            href="/projects"
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-gray-400 transition hover:bg-white/[0.08] hover:text-white"
          >
            Projects
          </Link>
          <Link
            href="/experience"
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-gray-400 transition hover:bg-white/[0.08] hover:text-white"
          >
            Experience / Internships
          </Link>
        </nav>

        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/25">
            <div className="relative h-[420px] bg-black/30 md:h-[620px]">
              <Image
                src={profileImage.src}
                alt={profileImage.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 pt-20">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
                  UC San Diego
                </div>
                <p className="mt-2 text-lg font-semibold text-white">
                  Mechanical Engineering
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-black/20 md:p-9">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                About Me
              </div>

              <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl">
                Alex Pacheco Santiago
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
                Mechanical engineering student focused on hardware that moves
                from CAD into real prototypes, testing, and iteration.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {profileCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
                    {card.label}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-300">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                Tools + Shop Work
              </div>
              <div className="mt-4 grid gap-5 md:grid-cols-3">
                {toolGroups.map((group) => (
                  <div key={group.label}>
                    <div className="text-sm font-semibold text-white">
                      {group.label}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      {group.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
