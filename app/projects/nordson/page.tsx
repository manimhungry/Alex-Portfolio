import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Nordson Dispensing Case Study | Alex Pacheco",
  description:
    "Automated dispensing case study with fixture design, calibration, testing, and scale-up.",
};

type Metric = {
  label: string;
  value: string;
};

type Media = {
  type?: "image" | "video";
  src: string;
  alt?: string;
  caption?: string;
  contain?: boolean;
};

type Snapshot = {
  label: string;
  text: string;
};

type Section = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  points: string[];
  metrics?: Metric[];
};

const summaryStats: Metric[] = [
  { label: "Status", value: "Active" },
  { label: "Target", value: "5 µL" },
  { label: "Validation", value: "100 positions" },
  { label: "Next", value: "New fluid test" },
];

const projectMeta: Metric[] = [
  { label: "Context", value: "Wang Lab / active" },
  { label: "Role", value: "Fixture + validation owner" },
  { label: "Tools", value: "Nordson robot, CAD, FDM, scale data" },
];

const snapshots: Snapshot[] = [
  {
    label: "Objective",
    text: "Automate tray-based dispensing.",
  },
  {
    label: "My Role",
    text: "Owned fixture design, robot setup, calibration, and testing.",
  },
  {
    label: "Tools",
    text: "Nordson robot, CAD, FDM prototypes, scale data, dispense tests.",
  },
  {
    label: "Result",
    text: "Moved from manual setup to a repeatable robot process.",
  },
];

const sections: Section[] = [
  {
    id: "system",
    eyebrow: "01 / System",
    title: "Manual process became an automated run",
    text: "Taught the robot the tray path and dispense sequence.",
    points: [
      "Tray path teaching",
      "Indexed dispense positions",
      "Robot motion plus dispense control",
    ],
    metrics: [{ label: "Proof", value: "Full tray run" }],
  },
  {
    id: "calibration",
    eyebrow: "02 / Calibration",
    title: "Pressure sweep found the dispense setting",
    text: "Measured droplet mass at multiple pressures, then interpolated the robot setting.",
    points: [
      "24 kPa → 2.9 µL",
      "48 kPa → 4.6 µL",
      "54 kPa → 5.3 µL",
    ],
    metrics: [
      { label: "Target pressure", value: "~51.4 kPa" },
      { label: "Dispense time", value: "0.05 s" },
    ],
  },
  {
    id: "cad-reality",
    eyebrow: "03 / CAD vs Reality",
    title: "Reference CAD was corrected from hardware",
    text: "The reference hole pattern failed on the real plate, so I measured the hardware and corrected the model.",
    points: [
      "Found the spacing mismatch",
      "Measured the real baseplate",
      "Rebuilt the fixture around physical datums",
    ],
  },
  {
    id: "fixture",
    eyebrow: "04 / Fixture Design",
    title: "Tray geometry locked to repeatable datums",
    text: "The tray evolved into a prong-locked fixture with cleaner position and orientation.",
    points: [
      "Matched real plate holes",
      "Added prong-style locking",
      "Reduced placement ambiguity",
    ],
  },
  {
    id: "testing",
    eyebrow: "05 / Testing",
    title: "Failures became setup changes",
    text: "Early row failures led to setup changes in surface prep, z-height, and pressure.",
    points: [
      "Attempt 1 showed visible failures",
      "Cleaned surface and adjusted z-height",
      "Attempt 2 showed no visible failures",
    ],
    metrics: [
      { label: "Pressure", value: "52 kPa" },
      { label: "Z-height", value: "82.5" },
    ],
  },
  {
    id: "scale",
    eyebrow: "06 / Scale-Up",
    title: "Scale-up had to fit the robot envelope",
    text: "The larger concept exceeded usable travel, so I reduced the tray to fit the setup.",
    points: [
      "261-slot concept exceeded travel",
      "Robot reached the lab wall",
      "Final tray fit the setup",
    ],
    metrics: [{ label: "Final tray", value: "178 slots" }],
  },
  {
    id: "shrinkage",
    eyebrow: "07 / Print Shrinkage",
    title: "Printed geometry needed compensation",
    text: "The printed tray came out short, so I measured shrinkage and calculated XY compensation.",
    points: [
      "CAD target: 354.25 mm",
      "Printed length: 351.13 mm",
      "XY compensation: 100.89%",
    ],
  },
];

function MetricCard({ label, value }: Metric) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-xl shadow-black/20 md:p-6">
      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-300">
        {label}
      </div>
      <div className="mt-3 break-words text-2xl font-semibold text-white md:text-3xl">
        {value}
      </div>
    </div>
  );
}

function SnapshotGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {snapshots.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
        >
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">
            {item.label}
          </div>
          <p className="mt-3 text-base leading-7 text-gray-200">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

function MetaRow({ items }: { items: Metric[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3"
        >
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-300">
            {item.label}
          </div>
          <div className="mt-2 text-sm leading-6 text-gray-100">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
}

function MediaFrame({
  item,
  className = "h-96 md:h-[520px]",
  priority = false,
}: {
  item: Media;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-black/25 shadow-xl shadow-black/20">
      <div className={`relative w-full ${className}`}>
        {item.type === "video" ? (
          <video
            src={item.src}
            aria-label={item.alt ?? item.caption ?? "Nordson project video"}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <Image
            src={item.src}
            alt={item.alt ?? item.caption ?? "Nordson project media"}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={`transition duration-500 group-hover:scale-[1.02] ${
              item.contain
                ? item.caption
                  ? "object-contain p-5 pb-16 md:p-6 md:pb-20"
                  : "object-contain p-6"
                : "object-cover"
            }`}
          />
        )}

        {item.caption && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 px-6 pb-5 pt-20">
              <p className="text-base font-medium text-white md:text-lg">
                {item.caption}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function VisualShell({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04]">
      <div className="border-b border-white/10 px-5 py-4">
        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">
          {eyebrow}
        </div>
        <div className="mt-2 text-base font-semibold text-white">{title}</div>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function CalibrationPlot() {
  const width = 580;
  const height = 250;
  const plot = { left: 58, top: 24, width: 460, height: 155 };
  const xDomain = [20, 56];
  const yDomain = [2, 5.6];
  const xTicks = [24, 30, 36, 42, 48, 54];
  const yTicks = [2, 3, 4, 5];
  const data = [
    { pressure: 24, volume: 2.9, label: "(24, 2.9)" },
    { pressure: 48, volume: 4.6, label: "(48, 4.6)" },
    { pressure: 54, volume: 5.3, label: "(54, 5.3)" },
  ];
  const target = { pressure: 51.4, volume: 5, label: "(51.4, 5.0)" };
  const x = (value: number) =>
    plot.left + ((value - xDomain[0]) / (xDomain[1] - xDomain[0])) * plot.width;
  const y = (value: number) =>
    plot.top + ((yDomain[1] - value) / (yDomain[1] - yDomain[0])) * plot.height;
  const linePoints = data
    .map((point) => `${x(point.pressure)},${y(point.volume)}`)
    .join(" ");

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label="Interpolation plot estimating 51.4 kilopascals for a 5 microliter dispense target"
        className="h-auto w-full"
      >
        <rect width={width} height={height} rx="18" fill="#111827" />

        {xTicks.map((tick) => (
          <g key={tick}>
            <line
              x1={x(tick)}
              x2={x(tick)}
              y1={plot.top}
              y2={plot.top + plot.height}
              stroke="#334155"
              strokeWidth="1"
              opacity="0.65"
            />
            <text
              x={x(tick)}
              y={plot.top + plot.height + 28}
              textAnchor="middle"
              fill="#a8b0bf"
              fontSize="12"
              fontWeight="600"
            >
              {tick}
            </text>
          </g>
        ))}

        {yTicks.map((tick) => (
          <g key={tick}>
            <line
              x1={plot.left}
              x2={plot.left + plot.width}
              y1={y(tick)}
              y2={y(tick)}
              stroke="#334155"
              strokeWidth="1"
              strokeDasharray={tick === 5 ? "10 10" : "6 12"}
              opacity={tick === 5 ? "0.95" : "0.65"}
            />
            <text
              x={plot.left - 22}
              y={y(tick) + 6}
              textAnchor="end"
              fill="#a8b0bf"
              fontSize="12"
              fontWeight="600"
            >
              {tick.toFixed(1)}
            </text>
          </g>
        ))}

        <line
          x1={plot.left}
          y1={plot.top}
          x2={plot.left}
          y2={plot.top + plot.height}
          stroke="#64748b"
          strokeWidth="1.5"
        />
        <line
          x1={plot.left}
          y1={plot.top + plot.height}
          x2={plot.left + plot.width}
          y2={plot.top + plot.height}
          stroke="#64748b"
          strokeWidth="1.5"
        />
        <line
          x1={plot.left}
          x2={x(target.pressure)}
          y1={y(target.volume)}
          y2={y(target.volume)}
          stroke="#fbbf24"
          strokeWidth="2.5"
          strokeDasharray="7 7"
        />
        <line
          x1={x(target.pressure)}
          x2={x(target.pressure)}
          y1={y(target.volume)}
          y2={plot.top + plot.height}
          stroke="#fbbf24"
          strokeWidth="2.5"
          strokeDasharray="7 7"
        />
        <polyline points={linePoints} fill="none" stroke="#4f80bd" strokeWidth="3" />

        {data.map((point) => (
          <g key={point.label}>
            <circle
              cx={x(point.pressure)}
              cy={y(point.volume)}
              r="6"
              fill="#60a5fa"
              stroke="white"
              strokeWidth="3"
            />
            <text
              x={x(point.pressure) + 12}
              y={y(point.volume) - 12}
              fill="#e5e7eb"
              fontSize="12"
              fontWeight="700"
            >
              {point.label}
            </text>
          </g>
        ))}

        <circle
          cx={x(target.pressure)}
          cy={y(target.volume)}
          r="7"
          fill="#fbbf24"
          stroke="white"
          strokeWidth="3"
        />
        <text
          x={x(target.pressure) + 15}
          y={y(target.volume) - 14}
          fill="#e5e7eb"
          fontSize="12"
          fontWeight="800"
        >
          {target.label}
        </text>
      </svg>
    </div>
  );
}

function SectionVisual({ id }: { id: string }) {
  if (id === "system") {
    return (
      <VisualShell eyebrow="System proof" title="Automated 100-position run">
        <MediaFrame
          className="h-[440px] md:h-[620px]"
          item={{
            type: "video",
            src: "/nordson-100-dispense.mp4",
            alt: "Automated 100-position Nordson dispense run",
            caption: "Hands-free dispense sequence across the tray",
          }}
        />
      </VisualShell>
    );
  }

  if (id === "calibration") {
    return (
      <VisualShell eyebrow="Calibration data" title="Pressure sweep data">
        <div className="grid gap-4 md:grid-cols-3">
          <MediaFrame
            item={{
              src: "/calibration-24kpa-2p9mg.png",
              alt: "Scale showing 2.9 milligrams at 24 kilopascals",
              caption: "24 kPa → 2.9 µL",
            }}
          />
          <MediaFrame
            item={{
              src: "/calibration-48kpa-4p6mg.png",
              alt: "Scale showing 4.6 milligrams at 48 kilopascals",
              caption: "48 kPa → 4.6 µL",
            }}
          />
          <MediaFrame
            item={{
              src: "/calibration-54kpa-5p3mg.png",
              alt: "Scale showing 5.3 milligrams at 54 kilopascals",
              caption: "54 kPa → 5.3 µL",
            }}
          />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-[1fr_0.75fr]">
          <CalibrationPlot />
          <div className="rounded-2xl border border-sky-300/20 bg-sky-400/[0.10] p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">
              Interpolation
            </div>
            <div className="mt-4 rounded-xl border border-sky-300/15 bg-white/[0.04] p-4 font-mono text-sm leading-7 text-gray-100">
              P = 48 + ((5.0 - 4.6) / (5.3 - 4.6)) × (54 - 48)
            </div>
            <div className="mt-4 text-3xl font-semibold tracking-tight text-white">
              ~51.4 kPa
            </div>
          </div>
        </div>
      </VisualShell>
    );
  }

  if (id === "cad-reality") {
    return (
      <VisualShell eyebrow="Hardware mismatch" title="Reference CAD corrected from measured plate">
        <div className="grid gap-4 xl:grid-cols-[1fr_0.85fr]">
          <MediaFrame
            className="h-80 md:h-[620px]"
            item={{
              src: "/cad-reference-40mm.png",
              alt: "CAD reference showing 40 millimeter hole spacing",
              contain: true,
              caption: "Reference CAD",
            }}
          />
          <div className="grid gap-4">
            <MediaFrame
              className="h-72 md:h-[300px]"
              item={{
                src: "/real-plate-38mm.png",
                alt: "Measured real Nordson plate showing 38 millimeter hole spacing",
                contain: true,
                caption: "Measured plate",
              }}
            />
            <MediaFrame
              className="h-72 md:h-[300px]"
              item={{
                src: "/corrected-plate-38mm-sketch.png",
                alt: "Corrected plate sketch showing 38 millimeter spacing",
                contain: true,
                caption: "Corrected CAD",
              }}
            />
          </div>
        </div>
      </VisualShell>
    );
  }

  if (id === "fixture") {
    return (
      <VisualShell eyebrow="Fixture design" title="Tray lock tied to real datums">
        <div className="grid gap-4 md:grid-cols-2">
          <MediaFrame
            item={{
              src: "/corrected-plate-cad.png",
              alt: "Nordson tray CAD with hole pattern",
              contain: true,
              caption: "Hole-pattern tray layout",
            }}
          />
          <MediaFrame
            item={{
              src: "/prong-lock-cad.png",
              alt: "Prong lock CAD detail",
              contain: true,
              caption: "Prong-style locking detail",
            }}
          />
        </div>
      </VisualShell>
    );
  }

  if (id === "testing") {
    return (
      <VisualShell eyebrow="Testing iteration" title="Attempt 1 failures → Attempt 2 clean rows">
        <div className="grid gap-4 md:grid-cols-2">
          <MediaFrame
            item={{
              src: "/dispense-attempt-1-failures.png",
              alt: "Dispense attempt 1 with visible failures circled",
              caption: "Attempt 1: visible row failures",
            }}
          />
          <MediaFrame
            item={{
              src: "/dispense-attempt-2-success.png",
              alt: "Dispense attempt 2 with aligned successful droplets",
              caption: "Attempt 2: no visible failures",
            }}
          />
        </div>
        <div className="mt-3">
          <MediaFrame
            className="h-[440px] md:h-[560px]"
            item={{
              type: "video",
              src: "/IMG_6773.mp4",
              alt: "Slow motion droplet dispense video",
              caption: "Slow-motion droplet formation",
            }}
          />
        </div>
      </VisualShell>
    );
  }

  if (id === "scale") {
    return (
      <VisualShell eyebrow="Scale-up" title="Validation scaled to a larger tray">
        <div className="grid gap-4 md:grid-cols-[1fr_0.8fr]">
          <MediaFrame
            className="h-[440px] md:h-[560px]"
            item={{
              src: "/tray-178-cad.png",
              alt: "Scaled tray CAD layout",
              contain: true,
              caption: "Scaled tray CAD",
            }}
          />
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">
              Constraint
            </div>
            <p className="mt-4 text-base leading-7 text-gray-200">
              The bigger tray worked on paper but failed the machine envelope.
              The next tray had to respect the robot and the lab setup.
            </p>
            <div className="mt-6 grid gap-4">
              <MetricCard label="Baseline" value="Validated" />
              <MetricCard label="Redesign" value="Envelope-limited" />
            </div>
          </div>
        </div>
      </VisualShell>
    );
  }

  return (
    <VisualShell eyebrow="Manufacturing correction" title="Shrinkage measured and corrected">
      <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
        <MediaFrame
          className="h-[440px] md:h-[560px]"
          item={{
            src: "/tray-178-printed-shrinkage-gap.png",
            alt: "Printed 178-slot tray showing shrinkage gap",
            caption: "Printed tray gap showed shrinkage from CAD target",
          }}
        />
        <div className="rounded-2xl border border-amber-300/25 bg-amber-400/[0.08] p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">
            Calculation
          </div>
          <div className="mt-5 grid gap-4 text-base text-gray-100">
            <div className="flex justify-between gap-4 border-b border-amber-300/25 pb-2">
              <span>CAD target</span>
              <strong>354.25 mm</strong>
            </div>
            <div className="flex justify-between gap-4 border-b border-amber-300/25 pb-2">
              <span>Printed length</span>
              <strong>351.13 mm</strong>
            </div>
            <div className="flex justify-between gap-4 border-b border-amber-300/25 pb-2">
              <span>Shrinkage</span>
              <strong>3.12 mm</strong>
            </div>
            <div className="rounded-xl border border-amber-300/25 bg-white/[0.04] p-4 font-mono text-sm">
              354.25 / 351.13 = 1.0089
            </div>
            <div className="flex items-end justify-between gap-4">
              <span className="text-gray-200">XY compensation</span>
              <strong className="text-4xl tracking-tight text-white">100.89%</strong>
            </div>
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

function CaseSection({ section }: { section: Section }) {
  return (
    <section id={section.id} className="scroll-mt-28">
      <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 md:p-8">
        <div>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-5xl">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">
                {section.eyebrow}
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {section.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-100 md:text-lg md:leading-8">
                {section.text}
              </p>
            </div>

            {section.metrics && (
              <div className="grid min-w-0 grid-cols-2 gap-4 lg:w-[360px]">
                {section.metrics.map((metric) => (
                  <MetricCard key={metric.label} {...metric} />
                ))}
              </div>
            )}
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {section.points.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-base leading-7 text-gray-100"
              >
                {point}
              </div>
            ))}
          </div>
        </div>

        <SectionVisual id={section.id} />
      </div>
    </section>
  );
}

function SideNav() {
  return (
    <aside className="hidden self-start xl:sticky xl:top-8 xl:block">
      <div className="max-h-[calc(100vh-4rem)] overflow-y-auto rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/25 backdrop-blur">
        <Link
          href="/projects"
          className="block rounded-xl px-3 py-2 text-sm text-gray-200 transition hover:bg-white/[0.06] hover:text-white"
        >
          ← Project Gallery
        </Link>

        <div className="mt-5 px-3 text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">
          Featured Project
        </div>

        <nav className="mt-5 space-y-2 text-sm" aria-label="Nordson case study sections">
          <a
            href="#overview"
            className="block rounded-xl px-3 py-2 text-gray-200 transition hover:bg-white/[0.06] hover:text-white"
          >
            Overview
          </a>
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="block rounded-xl px-3 py-2 text-gray-200 transition hover:bg-white/[0.06] hover:text-white"
            >
              {section.eyebrow.replace("/", "·")}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default function NordsonProjectPage() {
  return (
    <main
      id="main"
      className="min-h-screen overflow-x-hidden bg-[linear-gradient(to_bottom,_#0b1020,_#172033_42%,_#080b12)] px-6 py-10 text-white md:px-10 md:py-14"
    >
      <div className="mx-auto grid max-w-[1680px] gap-10 xl:grid-cols-[260px_minmax(0,1fr)]">
        <SideNav />

        <div className="min-w-0">
          <nav className="mb-10 flex flex-wrap gap-3 text-sm xl:hidden">
            <Link
              href="/projects"
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-gray-100 shadow-xl shadow-black/20 transition hover:border-sky-300/40 hover:bg-sky-400/[0.10]"
            >
              ← Gallery
            </Link>
          </nav>

          <header id="overview" className="mb-14 scroll-mt-28">
            <div className="inline-flex rounded-full border border-amber-300/30 bg-amber-400/[0.1] px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-amber-200 shadow-lg shadow-amber-950/20">
              Featured Project / Active Lab Work
            </div>

            <h1 className="mt-6 max-w-6xl text-5xl font-bold tracking-tight text-white md:text-6xl">
              Automated Dispensing Workflow
            </h1>

            <p className="mt-6 max-w-5xl text-xl leading-8 text-gray-100 md:text-2xl md:leading-9">
              Fixture design, robot calibration, and validation.
            </p>
          </header>

          <section className="mb-12 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 md:p-8">
            <div className="max-w-5xl">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">
                Executive Summary
              </div>
              <p className="mt-4 text-lg leading-8 text-gray-100">
                Manual setup became a calibrated robot process. New fluid
                testing is next.
              </p>

              <div className="mt-5">
                <MetaRow items={projectMeta} />
              </div>

              <div className="mt-5 rounded-2xl border border-amber-300/20 bg-amber-400/[0.08] px-5 py-4 text-base leading-7 text-amber-50">
                Hardest problem: the reference model did not match the physical
                baseplate, so the fixture had to be rebuilt from measured
                hardware instead of trusted CAD.
              </div>

              <div className="mt-5">
                <SnapshotGrid />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {summaryStats.map((metric) => (
                <MetricCard key={metric.label} {...metric} />
              ))}
            </div>
          </section>

          <MediaFrame
            className="h-[560px] md:h-[780px]"
            priority
            item={{
              src: "/setup.jpg",
              alt: "Automated dispensing setup with robot stage, controller, CAD reference, and custom tray",
              caption:
                "Automated dispensing setup with custom tray, robot stage, and controller",
            }}
          />

          <div className="mt-12 grid gap-10">
            {sections.map((section) => (
              <CaseSection key={section.id} section={section} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
