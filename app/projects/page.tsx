import Image from "next/image";
import Link from "next/link";

type Metric = {
  label: string;
  value: string;
};

type Media = {
  type?: "image" | "video";
  src: string;
  alt?: string;
  contain?: boolean;
};

type ProjectSnapshot = {
  label: string;
  text: string;
};

type ProjectCard = {
  id: string;
  eyebrow: string;
  title: string;
  role: string;
  context: string;
  team: string;
  tools: string;
  outcome: string;
  challenge: string;
  media: Media;
  snapshots: ProjectSnapshot[];
  evidence?: Media[];
  metrics: Metric[];
  tags: string[];
};

const starMetrics: Metric[] = [
  { label: "Status", value: "Active" },
  { label: "Validation", value: "100 positions" },
  { label: "Scale-Up", value: "178 slots" },
  { label: "Next", value: "New fluid" },
];

const currentBuildMetrics: Metric[] = [
  { label: "Status", value: "Parts staged" },
  { label: "Scope", value: "6 axes" },
  { label: "Next proof", value: "First motion" },
  { label: "Case study", value: "After assembly" },
];

const projects: ProjectCard[] = [
  {
    id: "direct-drive-turret",
    eyebrow: "Triton Robotics",
    title: "Direct-Drive Turret Redesign",
    role: "Primary CAD Owner — mount, bearing stack, slip-ring integration",
    context: "Robotics subsystem redesign",
    team: "Triton Robotics",
    tools: "SOLIDWORKS, waterjet, FDM",
    outcome: "Removed the belt path and cut service time from 15 to 9 minutes.",
    challenge: "Packaging motor, bearing stack, and slip-ring path while retaining service access.",
    media: {
      src: "/direct-drive-assembly.png",
      alt: "Direct-drive turret CAD assembly",
      contain: true,
    },
    snapshots: [
        { label: "Objective", text: "Replace belt drive with direct drive." },
      { label: "My Role", text: "Mount geometry, bearing stack, slip-ring clearance." },
      { label: "Result", text: "1:1 drive; ~40% faster service." },
    ],
    evidence: [
      {
        src: "/turret-overview.png",
        alt: "Original turret overview CAD",
        contain: true,
      },
      {
        src: "/integrated-robot.png",
        alt: "Turret integrated on robot platform",
      },
    ],
    metrics: [
      { label: "Drive", value: "2:1 → 1:1" },
      { label: "Service", value: "15 → 9 min" },
      { label: "Reduction", value: "~40%" },
    ],
    tags: ["SOLIDWORKS", "Waterjet", "3D Printing", "Serviceability"],
  },
  {
    id: "onboarding-aircraft",
    eyebrow: "Triton UAS",
    title: "V-Tail Onboarding Aircraft",
    role: "Lead Mechanical Engineer — CAD, packaging, fabrication, flight test",
    context: "Rapid onboarding aircraft",
    team: "Triton UAS",
    tools: "CAD, fabrication, flight test",
    outcome: "Led a rapid aircraft build through shakedown flight.",
    challenge: "Balancing build speed with margin for a controlled flight test.",
    media: {
      type: "video",
      src: "/Test.mp4",
      alt: "V-tail aircraft shakedown flight",
    },
    snapshots: [
      { label: "Objective", text: "Build a flyable aircraft." },
      { label: "My Role", text: "CAD layout, packaging, fabrication, V-tail integration." },
      { label: "Result", text: "Validated structure, controls, and power in flight." },
    ],
    evidence: [
      {
        src: "/CAD.png",
        alt: "V-tail aircraft CAD layout",
        contain: true,
      },
      {
        src: "/Side.png",
        alt: "Fabricated V-tail aircraft side view",
      },
    ],
    metrics: [
      { label: "Build", value: "~1 week" },
      { label: "Flight", value: "~40 sec" },
      { label: "Role", value: "Lead" },
    ],
    tags: ["Aircraft Design", "CAD", "Rapid Build", "Flight Test"],
  },
  {
    id: "ball-retrieval-robot",
    eyebrow: "Class Competition",
    title: "Timed Ball Retrieval Robot",
    role: "Mechanical Engineer — drivetrain, lift, CAD, fabrication",
    context: "Timed design competition",
    team: "Student build team",
    tools: "Fusion 360, laser cutting, testing",
    outcome: "Built and tuned a timed retrieval robot for competition runs.",
    challenge: "Making the intake and lift repeatable under competition timing.",
    media: {
      type: "video",
      src: "/Action.mp4",
      alt: "Ball retrieval robot test run",
    },
    snapshots: [
      { label: "Objective", text: "Collect and deliver balls in 60s." },
      { label: "My Role", text: "Drivetrain and lift design, fabrication, tuning." },
      { label: "Result", text: "20 balls in 15s peak; 6/12 teams." },
    ],
    evidence: [
      {
        src: "/CADR.png",
        alt: "Ball retrieval robot CAD assembly",
        contain: true,
      },
      {
        src: "/Field.png",
        alt: "Ball retrieval robot competition field",
      },
    ],
    metrics: [
      { label: "Peak", value: "20 balls / 15 s" },
      { label: "Reliability", value: "~8/10 runs" },
      { label: "Placement", value: "6 / 12" },
    ],
    tags: ["Fusion 360", "Mechanisms", "Laser Cutting", "Testing"],
  },
];

function MetricPill({ label, value }: Metric) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 shadow-xl shadow-black/20">
      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-300">
        {label}
      </div>
      <div className="mt-2 break-words text-xl font-semibold tracking-tight text-white">
        {value}
      </div>
    </div>
  );
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-100"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function SnapshotGrid({ snapshots }: { snapshots: ProjectSnapshot[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {snapshots.map((snapshot) => (
        <div
          key={snapshot.label}
          className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"
        >
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-200">
            {snapshot.label}
          </div>
          <p className="mt-2 text-sm leading-6 text-gray-200">
            {snapshot.text}
          </p>
        </div>
      ))}
    </div>
  );
}

function MetaRow({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <div className="grid gap-2 sm:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2"
        >
          <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-400">
            {item.label}
          </div>
          <div className="mt-1 text-sm leading-5 text-gray-100">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
}

function MediaFrame({
  media,
  className = "h-64 md:h-80",
  priority = false,
}: {
  media: Media;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/25 shadow-xl shadow-black/20">
      <div className={`relative w-full ${className}`}>
        {media.type === "video" ? (
          <video
            src={media.src}
            aria-label={media.alt ?? "Project video"}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
          />
        ) : (
          <Image
            src={media.src}
            alt={media.alt ?? "Project media"}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={`transition duration-500 group-hover:scale-[1.025] ${
              media.contain ? "object-contain p-5" : "object-cover"
            }`}
          />
        )}
      </div>
    </div>
  );
}

function EvidenceStrip({ evidence }: { evidence?: Media[] }) {
  if (!evidence?.length) return null;

  return (
    <div className="mt-4 grid gap-4 md:grid-cols-2">
      {evidence.map((item) => (
        <MediaFrame
          key={item.src}
          media={item}
          className="h-44 md:h-52"
        />
      ))}
    </div>
  );
}

function FeaturedProject() {
  return (
    <section id="nordson" className="mb-12 scroll-mt-24">
      <Link
        href="/projects/nordson"
        className="group block overflow-hidden rounded-[2rem] border border-amber-300/25 bg-[linear-gradient(135deg,_rgba(251,191,36,0.10),_rgba(255,255,255,0.045)_45%,_rgba(56,189,248,0.10))] p-5 shadow-2xl shadow-black/25 transition hover:-translate-y-1 hover:border-amber-200/45 md:p-7"
      >
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-full border border-amber-300/30 bg-amber-400/[0.12] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">
              Featured Project
            </div>

            <h2 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl">
              Automated Dispensing Workflow
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-100">
              Fixture design, calibration, dispense validation.
            </p>

            <div className="mt-5 max-w-3xl">
              <MetaRow
                items={[
                  { label: "Context", value: "Wang Lab" },
                  { label: "Role", value: "Fixture & validation" },
                  { label: "Next", value: "Fluid test" },
                ]}
              />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {starMetrics.map((metric) => (
                <MetricPill key={metric.label} {...metric} />
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex rounded-full bg-sky-300 px-5 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-black/20">
                Open Case Study
              </span>
              <TagList tags={["Fixture Design", "Calibration", "Validation"]} />
            </div>
          </div>

          <MediaFrame
            priority
            className="h-[360px] md:h-[520px]"
            media={{
              src: "/setup.jpg",
              alt: "Automated dispensing setup with robot stage, controller, CAD reference, and custom tray",
            }}
          />
        </div>
      </Link>
    </section>
  );
}

function CurrentBuild() {
  return (
    <section id="current-build" className="mb-12 scroll-mt-24">
      <div className="grid gap-5 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 md:p-6 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
            Current Build
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Six-Axis Robot System
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-100">
            Parts staged. Next: first motion and repeatability tests.
          </p>
          <div className="mt-5">
            <TagList tags={["Robotics", "Motion System", "Assembly Pending"]} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {currentBuildMetrics.map((metric) => (
            <MetricPill key={metric.label} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CompactProjectCard({ project }: { project: ProjectCard }) {
  return (
    <article
      id={project.id}
      className="scroll-mt-24 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 md:p-6"
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
            {project.eyebrow}
          </div>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-gray-200">{project.role}</p>
          <p className="mt-4 text-base leading-7 text-gray-100">
            {project.outcome}
          </p>

          <div className="mt-4">
            <MetaRow
              items={[
                { label: "Context", value: project.context },
                { label: "Team", value: project.team },
                { label: "Tools", value: project.tools },
              ]}
            />
          </div>

          <div className="mt-4 rounded-2xl border border-amber-300/20 bg-amber-400/[0.08] px-4 py-3 text-sm leading-6 text-amber-50">
            {project.challenge}
          </div>

          <div className="mt-5">
            <SnapshotGrid snapshots={project.snapshots} />
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {project.metrics.map((metric) => (
              <MetricPill key={metric.label} {...metric} />
            ))}
          </div>

          <div className="mt-5">
            <TagList tags={project.tags} />
          </div>
        </div>

        <div>
          <MediaFrame media={project.media} className="h-72 md:h-[420px]" />
          <EvidenceStrip evidence={project.evidence} />
        </div>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <main
      id="main"
      className="min-h-screen overflow-x-hidden bg-[linear-gradient(to_bottom,_#0b1020,_#172033_42%,_#080b12)] px-6 py-10 text-white md:px-10 md:py-14"
    >
      <div className="mx-auto max-w-7xl">
        <nav className="mb-10 flex flex-wrap gap-3 text-sm">
          <Link
            href="/"
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-gray-100 shadow-xl shadow-black/20 transition hover:border-sky-300/40 hover:bg-sky-400/[0.10]"
          >
            ← Home
          </Link>
          <a
            href="#nordson"
            className="rounded-full border border-amber-300/25 bg-amber-400/[0.08] px-4 py-2 text-amber-200 shadow-xl shadow-black/20 transition hover:border-amber-200/40"
          >
            Featured Project
          </a>
          <a
            href="#current-build"
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-gray-200 shadow-xl shadow-black/20 transition hover:border-sky-300/40 hover:bg-sky-400/[0.10]"
          >
            Current Build
          </a>
        </nav>

        <header className="mb-12 max-w-4xl">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
            Project Gallery
          </div>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
            Selected Engineering Work
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-200">
            Selected engineering work. Open Nordson for the full case study.
          </p>
        </header>

        {/* Removed three descriptive blocks: Proof first / Real constraints / Current work labeled */}

        <FeaturedProject />
        <CurrentBuild />

        <section className="mb-6">
          <div className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
            Other Projects
          </div>
          <div className="grid gap-6">
            {projects.map((project) => (
              <CompactProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
