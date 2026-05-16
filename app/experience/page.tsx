import Image from "next/image";
import Link from "next/link";

type Metric = {
  label: string;
  value: string;
};

type StoryBlock = {
  id: string;
  eyebrow: string;
  title: string;
  stat: string;
  bullets: string[];
  image?: {
    src: string;
    alt: string;
    contain?: boolean;
    callouts: string[];
  };
};

type WorkTrack = {
  label: string;
  stat: string;
  text: string;
  icon: "tool" | "checklist" | "drawing" | "inspect";
};

const metrics: Metric[] = [
  { label: "CS2 BOM match", value: "15/60 → 57/60" },
  { label: "CS2 CAD issues fixed", value: "~100" },
  { label: "Manufacturing procedures", value: "15+" },
];

const storyBlocks: StoryBlock[] = [
  {
    id: "cs2-cad-recovery",
    eyebrow: "01 / CS2 CAD Recovery",
    title: "The scanner CAD had drifted from reality.",
    stat: "~100 CAD fixes",
    bullets: [
      "Resolved broken mates and references",
      "Rebuilt assembly structure",
      "Cleaned up legacy scanner CAD",
    ],
    image: {
      src: "/leica-cad-errors.png",
      alt: "SOLIDWORKS mate and reference errors",
      contain: true,
      callouts: ["CS2 scanner", "Broken mates", "~100 fixes"],
    },
  },
  {
    id: "cs2-bom-recovery",
    eyebrow: "02 / CS2 BOM Recovery",
    title: "The BOM did not match the physical scanner.",
    stat: "15/60 → 57/60",
    bullets: [
      "Added current CS2 hardware",
      "Removed obsolete components",
      "Matched CAD/BOM closer to the production scanner",
    ],
    image: {
      src: "/leica-cs2-cad.png",
      alt: "Recovered CS2 scanner CAD assembly",
      contain: true,
      callouts: ["CS2 baseline", "BOM recovery", "57/60 match"],
    },
  },
  {
    id: "cs2-hardware-checks",
    eyebrow: "03 / CS2 Hardware Checks",
    title: "The model had to agree with real hardware.",
    stat: "CAD ↔ hardware",
    bullets: [
      "Compared CAD against as-built scanner hardware",
      "Checked fit, clearance, and revision mismatches",
      "Flagged issues for engineering review",
    ],
    image: {
      src: "/leica-front-comparison.png",
      alt: "Scanner hardware comparison",
      callouts: ["As-built check", "Physical hardware", "Revision checks"],
    },
  },
  {
    id: "drawing-support",
    eyebrow: "04 / Drawing Support",
    title: "Released drawing work reached manufacturing.",
    stat: "Production use",
    bullets: [
      "Created and updated SOLIDWORKS drawings",
      "Applied GD&T under engineering review",
      "Autocollimator drawings later used for manufacturing",
    ],
  },
];

const workTracks: WorkTrack[] = [
  {
    label: "Manufacturing support",
    stat: "15+ procedures",
    text: "Built and checked GT 450 scanner hardware from controlled procedures.",
    icon: "tool",
  },
  {
    label: "Verification + testing",
    stat: "5 verification tasks",
    text: "Verified hardware behavior, XY travel, and screen-wipe durability.",
    icon: "checklist",
  },
  {
    label: "Design + drawing support",
    stat: "Drawings + fixtures",
    text: "Updated drawings, BOM balloons, fixtures, and 3D-print support work.",
    icon: "drawing",
  },
  {
    label: "Quality + traceability",
    stat: "~100 parts inspected",
    text: "Inspected parts, checked inventory, and supported traceability records.",
    icon: "inspect",
  },
];

function MetricCard({ label, value }: Metric) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-black/20">
      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-300">
        {label}
      </div>

      <div className="mt-3 text-2xl font-semibold tracking-tight text-white">
        {value}
      </div>
    </div>
  );
}

function ImageStoryCard({ block }: { block: StoryBlock }) {
  if (!block.image) return null;

  return (
    <div className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/25">
      <div className="relative h-[360px] bg-black/30">
        <Image
          src={block.image.src}
          alt={block.image.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={`transition duration-500 group-hover:scale-[1.025] ${
            block.image.contain ? "object-contain p-5" : "object-cover"
          }`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

        <div className="absolute bottom-5 left-5 right-5">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">
            {block.eyebrow}
          </div>

          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
            {block.stat}
          </h3>
        </div>
      </div>
    </div>
  );
}

function StorySection({
  block,
  reverse = false,
}: {
  block: StoryBlock;
  reverse?: boolean;
}) {
  return (
    <section id={block.id} className="scroll-mt-28">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className={reverse ? "lg:order-2" : ""}>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/25">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
              {block.eyebrow}
            </div>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {block.title}
            </h2>

            <div className="mt-6 grid gap-3">
              {block.bullets.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm leading-6 text-gray-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {block.image && (
          <div className={reverse ? "lg:order-1" : ""}>
            <ImageStoryCard block={block} />
          </div>
        )}
      </div>
    </section>
  );
}

function WorkIcon({ icon }: { icon: WorkTrack["icon"] }) {
  const common = {
    className: "h-6 w-6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (icon === "tool") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
        <path d="m14.5 5.5 4 4" />
        <path d="m13 7 2.5-2.5a3 3 0 0 1 3.9-.25l.35.25-4.25 4.25" />
        <path d="M14 10 6.5 17.5a2.1 2.1 0 0 1-3-3L11 7" />
      </svg>
    );
  }

  if (icon === "checklist") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
        <path d="M8 6h11" />
        <path d="M8 12h11" />
        <path d="M8 18h11" />
        <path d="m3.5 6 1 1 2-2" />
        <path d="m3.5 12 1 1 2-2" />
        <path d="m3.5 18 1 1 2-2" />
      </svg>
    );
  }

  if (icon === "drawing") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
        <path d="M6 3h9l3 3v15H6z" />
        <path d="M15 3v4h4" />
        <path d="M9 15h6" />
        <path d="M9 11h3" />
        <path d="m9 19 6-6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
      <circle cx="10.5" cy="10.5" r="5.5" />
      <path d="m15 15 5 5" />
      <path d="M8.5 10.5h4" />
      <path d="M10.5 8.5v4" />
    </svg>
  );
}

function WorkTrackCard({ track }: { track: WorkTrack }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-black/20">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-300/20 bg-sky-400/[0.10] text-sky-200">
        <WorkIcon icon={track.icon} />
      </div>
      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">
        {track.label}
      </div>
      <div className="mt-3 text-2xl font-semibold tracking-tight text-white">
        {track.stat}
      </div>
      <p className="mt-3 text-sm leading-6 text-gray-200">{track.text}</p>
    </div>
  );
}

function WorkTracksSection() {
  return (
    <section id="work-tracks" className="mt-24 scroll-mt-28">
      <div className="mb-6">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
          Additional Leica Work
        </div>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Production hardware support
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {workTracks.map((track) => (
          <WorkTrackCard key={track.label} track={track} />
        ))}
      </div>
    </section>
  );
}

function TeamEnvironmentSection() {
  return (
    <section id="team-environment" className="mt-24 scroll-mt-28">
      <div className="grid gap-8 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/25 md:p-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-black/30">
          <div className="relative aspect-[4/3]">
            <Image
              src="/Team Image.jpg"
              alt="Leica Biosystems hardware engineering team group photo"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
            Team + Engineering Environment
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Design, manufacturing, and V&V work with the Leica team.
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-100">
            Over the summer, I contributed across design, manufacturing, and
            verification and validation workflows while also working on a project
            to update the CS2 CAD design.
          </p>
          <p className="mt-4 text-sm leading-6 text-gray-200">
            I am grateful to the mentors and team at Leica Biosystems for
            guiding me, giving me the opportunity to learn, and helping me make
            an impact I can carry into the rest of my mechanical engineering
            journey.
          </p>
        </div>
      </div>
    </section>
  );
}

function SideMenu() {
  return (
    <aside className="hidden xl:block">
      <div className="sticky top-8 rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-4 shadow-2xl shadow-black/25 backdrop-blur">
        <Link
          href="/"
          className="block rounded-xl px-3 py-2 text-sm text-gray-200 transition hover:bg-white/[0.06] hover:text-white"
        >
          ← Back Home
        </Link>

        <div className="mt-4 px-3 text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">
          Leica
        </div>

        <nav className="mt-4 space-y-1 text-sm">
          <a
            href="#metrics"
            className="block rounded-xl px-3 py-2 text-gray-200 transition hover:bg-white/[0.06] hover:text-white"
          >
            Metrics
          </a>

          {storyBlocks.map((block) => (
            <a
              key={block.id}
              href={`#${block.id}`}
              className="block rounded-xl px-3 py-2 text-gray-200 transition hover:bg-white/[0.06] hover:text-white"
            >
              {block.eyebrow.split("/")[1].trim()}
            </a>
          ))}

          <a
            href="#team-environment"
            className="block rounded-xl px-3 py-2 text-gray-200 transition hover:bg-white/[0.06] hover:text-white"
          >
            Team
          </a>

          <a
            href="#work-tracks"
            className="block rounded-xl px-3 py-2 text-gray-200 transition hover:bg-white/[0.06] hover:text-white"
          >
            Additional Work
          </a>

          <Link
            href="/projects"
            className="mt-4 block rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2 text-gray-100 transition hover:border-sky-300/40 hover:bg-sky-400/[0.10] hover:text-white"
          >
            Projects
          </Link>
        </nav>
      </div>
    </aside>
  );
}

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(to_bottom,_#0b1020,_#172033_45%,_#080b12)] px-6 py-10 text-white md:px-10 md:py-14">
      <div className="mx-auto grid max-w-[1520px] gap-8 xl:grid-cols-[240px_minmax(0,1fr)]">
        <SideMenu />

        <div className="min-w-0">
          <header className="mb-14">
            <h1 className="max-w-5xl text-5xl font-bold tracking-tight text-white md:text-6xl">
              Leica Biosystems (Danaher)
            </h1>

            <p className="mt-5 max-w-3xl text-2xl font-semibold tracking-tight text-sky-200 md:text-3xl">
              Hardware Engineering Intern
            </p>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-gray-100">
              As a hardware engineering intern, I worked on CS2 CAD/BOM
              recovery, drawing support, hardware checks, GT 450 manufacturing
              support, verification, quality inspection, and traceability work.
            </p>
          </header>

          <section id="metrics" className="mb-14 scroll-mt-28">
            <div className="grid gap-3 md:grid-cols-3">
              {metrics.map((metric) => (
                <MetricCard key={metric.label} {...metric} />
              ))}
            </div>
          </section>

          <div className="grid gap-20">
            {storyBlocks.map((block, index) => (
              <StorySection
                key={block.id}
                block={block}
                reverse={index % 2 === 1}
              />
            ))}
          </div>

          <TeamEnvironmentSection />
          <WorkTracksSection />
        </div>
      </div>
    </main>
  );
}
