import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

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
  image: {
    src: string;
    alt: string;
    contain?: boolean;
    callouts: string[];
  };
};

type WorkTrack = {
  label: string;
  title: string;
  stat: string;
  bullets: string[];
};

const metrics: Metric[] = [
  { label: "CS2 BOM match", value: "15/60 → 57/60" },
  { label: "CS2 CAD issues fixed", value: "~100" },
  { label: "Manufacturing procedures", value: "15+" },
  { label: "Verification tasks", value: "5" },
  { label: "Quality inspection", value: "~100 parts" },
  { label: "Screen wipe test", value: "360 wipes" },
];

const tags = [
  "SOLIDWORKS",
  "PDM",
  "GD&T",
  "CS2 Recovery",
  "GT 450 Manufacturing",
  "Verification",
  "Quality Inspection",
  "Traceability",
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
    image: {
      src: "/leica-traceability-tracker.png",
      alt: "Traceability tracker spreadsheet",
      contain: true,
      callouts: ["PDM workflow", "Drawing updates", "Released work"],
    },
  },
];

const workTracks: WorkTrack[] = [
  {
    label: "Manufacturing support",
    title: "Built and checked production scanner hardware.",
    stat: "15+ procedures",
    bullets: [
      "Followed controlled PDF procedures step by step",
      "Supported GT 450 production scanner builds",
      "Worked on base plate, stanchion, VTM, VPU, rack gripper, and autoloader procedures",
      "Documented build steps, checks, and procedure results",
    ],
  },
  {
    label: "Verification + testing",
    title: "Verified hardware behavior against controlled procedures.",
    stat: "5 verification tasks",
    bullets: [
      "Checked documented requirements against real hardware behavior",
      "Verified XY travel distance behavior against procedure expectations",
      "Supported GT 450 testing workflows",
      "Performed 360 screen wipes to mimic hospital cleaning durability",
    ],
  },
  {
    label: "Design + drawing support",
    title: "Updated drawings, fixtures, and production documentation.",
    stat: "Design tasks",
    bullets: [
      "Updated cable drawing and optical light cover DWG",
      "Worked on dimensioning, BOM, and balloon updates",
      "Supported fixture and 3D print work",
      "Built or supported cover fixture and auto collimator work",
    ],
  },
  {
    label: "Quality + traceability",
    title: "Checked parts, inventory, and traceability records.",
    stat: "~100 parts inspected",
    bullets: [
      "Sorted and inspected Z-stanchion parts under NCR-style work",
      "Checked repeated parts for flatness and visible damage",
      "Completed critical part inventory checks",
      "Supported Excel traceability worksheets and design-control tracking",
    ],
  },
];

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-gray-200">
      {children}
    </span>
  );
}

function MetricCard({ label, value }: Metric) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">
        {label}
      </div>

      <div className="mt-3 text-2xl font-semibold tracking-tight text-white">
        {value}
      </div>
    </div>
  );
}

function ImageStoryCard({ block }: { block: StoryBlock }) {
  return (
    <div className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/20">
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

        <div className="absolute left-4 top-4 flex max-w-[88%] flex-wrap gap-2">
          {block.image.callouts.map((callout) => (
            <span
              key={callout}
              className="rounded-full border border-white/15 bg-black/55 px-3 py-1 text-xs font-medium text-white shadow-lg backdrop-blur"
            >
              {callout}
            </span>
          ))}
        </div>

        <div className="absolute bottom-5 left-5 right-5">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
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
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-black/20">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
              {block.eyebrow}
            </div>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {block.title}
            </h2>

            <div className="mt-5 inline-flex rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-100">
              {block.stat}
            </div>

            <div className="mt-6 grid gap-3">
              {block.bullets.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm leading-6 text-gray-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={reverse ? "lg:order-1" : ""}>
          <ImageStoryCard block={block} />
        </div>
      </div>
    </section>
  );
}

function WorkTrackCard({ track }: { track: WorkTrack }) {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20">
      <div className="absolute left-6 top-6 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-blue-300/70 via-blue-300/25 to-transparent" />

      <div className="relative pl-7">
        <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full border border-blue-100 bg-blue-300 shadow-[0_0_24px_rgba(147,197,253,0.5)]" />

        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
          {track.label}
        </div>

        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
          {track.title}
        </h3>

        <div className="mt-4 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white">
          {track.stat}
        </div>

        <div className="mt-6 grid gap-3">
          {track.bullets.map((bullet) => (
            <div
              key={bullet}
              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm leading-6 text-gray-300"
            >
              {bullet}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkTracksSection() {
  return (
    <section id="work-tracks" className="mt-24 scroll-mt-28">
      <div className="mb-6">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
          Additional Leica Work
        </div>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Separate from CS2 recovery.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {workTracks.map((track) => (
          <WorkTrackCard key={track.label} track={track} />
        ))}
      </div>
    </section>
  );
}

function SideMenu() {
  return (
    <aside className="hidden xl:block">
      <div className="sticky top-8 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-4 shadow-2xl shadow-black/20 backdrop-blur">
        <Link
          href="/"
          className="block rounded-xl px-3 py-2 text-sm text-gray-400 transition hover:bg-white/[0.07] hover:text-white"
        >
          ← Back Home
        </Link>

        <div className="mt-4 px-3 text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
          Leica
        </div>

        <nav className="mt-4 space-y-1 text-sm">
          <a
            href="#metrics"
            className="block rounded-xl px-3 py-2 text-gray-300 transition hover:bg-white/[0.07] hover:text-white"
          >
            Metrics
          </a>

          {storyBlocks.map((block) => (
            <a
              key={block.id}
              href={`#${block.id}`}
              className="block rounded-xl px-3 py-2 text-gray-300 transition hover:bg-white/[0.07] hover:text-white"
            >
              {block.eyebrow.split("/")[1].trim()}
            </a>
          ))}

          <a
            href="#work-tracks"
            className="block rounded-xl px-3 py-2 text-gray-300 transition hover:bg-white/[0.07] hover:text-white"
          >
            Additional Work
          </a>

          <Link
            href="/projects"
            className="mt-4 block rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-gray-300 transition hover:bg-white/[0.08] hover:text-white"
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
    <main className="min-h-screen bg-[linear-gradient(to_bottom,_#050505,_#0f172a_45%,_#050505)] px-6 py-10 text-gray-100 md:px-10 md:py-14">
      <div className="mx-auto grid max-w-[1520px] gap-8 xl:grid-cols-[240px_minmax(0,1fr)]">
        <SideMenu />

        <div className="min-w-0">
          <header className="mb-14">
            <div className="mb-5 flex flex-wrap gap-2">
              <Pill>Leica Biosystems</Pill>
              <Pill>Danaher</Pill>
              <Pill>Hardware Engineering Intern</Pill>
              <Pill>Production Medical Hardware</Pill>
            </div>

            <h1 className="max-w-5xl text-5xl font-bold tracking-tight text-white md:text-6xl">
              Leica Biosystems (Danaher)
            </h1>

            <p className="mt-5 max-w-3xl text-2xl font-semibold tracking-tight text-blue-200 md:text-3xl">
              Hardware Engineering Intern
            </p>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-gray-300">
              CS2 CAD/BOM recovery, drawing support, hardware checks, GT 450
              manufacturing support, verification, quality inspection, and
              traceability work.
            </p>
          </header>

          <section id="metrics" className="mb-14 scroll-mt-28">
            <div className="grid gap-3 md:grid-cols-3">
              {metrics.map((metric) => (
                <MetricCard key={metric.label} {...metric} />
              ))}
            </div>
          </section>

          <section className="mb-20 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
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

          <WorkTracksSection />
        </div>
      </div>
    </main>
  );
}