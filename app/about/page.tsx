import Image from "next/image";
import Link from "next/link";

const profileCards = [
  {
    label: "Currently",
    text: "Mechanical Engineering at UC San Diego. Graduating December 2026.",
  },
  {
    label: "Best Fit",
    text: "Hardware roles where design, build, and validation touch real parts.",
  },
  {
    label: "How I Work",
    text: "Define the goal. Build the proof. Measure what changed.",
  },
];

const whyMeCards = [
  {
    label: "Competitive Follow-Through",
    text: "When I set my mind on a problem, I keep working until the hardware gives a real answer.",
  },
  {
    label: "High Standards",
    text: "I care about clean CAD, repeatable setups, and details that show up during assembly.",
  },
  {
    label: "Team Alignment",
    text: "I work best when everyone understands the goal, the constraints, and the next step.",
  },
  {
    label: "Creative Problem Solving",
    text: "I like finding mechanical paths through messy constraints and making them testable.",
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
      className="min-h-screen bg-[linear-gradient(to_bottom,_#0b1020,_#172033_48%,_#080b12)] px-6 py-10 text-white md:px-10 md:py-14"
    >
      <div className="mx-auto max-w-7xl">
        <nav
          aria-label="About page navigation"
          className="mb-10 flex flex-wrap items-center gap-3 text-sm"
        >
          <Link
            href="/"
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-gray-100 shadow-xl shadow-black/20 transition hover:border-sky-300/40 hover:bg-sky-400/[0.10] hover:text-white"
          >
            ← Home
          </Link>
          <Link
            href="/projects"
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-gray-200 shadow-xl shadow-black/20 transition hover:border-sky-300/40 hover:bg-sky-400/[0.10] hover:text-white"
          >
            Projects
          </Link>
          <Link
            href="/experience"
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-gray-200 shadow-xl shadow-black/20 transition hover:border-sky-300/40 hover:bg-sky-400/[0.10] hover:text-white"
          >
            Experience / Internships
          </Link>
        </nav>

        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/25">
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
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">
                  UC San Diego
                </div>
                <p className="mt-2 text-lg font-semibold text-white">
                  Mechanical Engineering
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/25 md:p-9">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
                About Me
              </div>

              <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight text-white md:text-6xl">
                Alex Pacheco Santiago
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-100">
                I like practical hardware problems: the kind where a model,
                prototype, test result, and real assembly all have to agree.
              </p>

              <p className="mt-4 max-w-3xl text-base leading-7 text-gray-200">
                I am competitive, detail-driven, and team-oriented. When I care
                about a build, I can work on it obsessively, but I still want
                the team on the same page while the work gets sharper.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {profileCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">
                    {card.label}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-200">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
                Why Me
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {whyMeCards.map((card) => (
                  <div
                    key={card.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">
                      {card.label}
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-200">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
                Tools + Shop Work
              </div>
              <div className="mt-4 grid gap-5 md:grid-cols-3">
                {toolGroups.map((group) => (
                  <div key={group.label}>
                    <div className="text-sm font-semibold text-white">
                      {group.label}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-gray-200">
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
