import Link from "next/link";
import type { ReactNode } from "react";

const tags = [
  "SOLIDWORKS + PDM",
  "CAD/BOM Recovery",
  "Sustaining Engineering",
  "GD&T Drawings",
  "Physical Fit Checks",
  "V&V Support",
  "Manufacturing Support",
];

const metrics = [
  { label: "BOM match", value: "25% → 95%", sub: "15/60 to 57/60" },
  { label: "CAD failures", value: "~100", sub: "mates + references" },
  { label: "Procedures", value: "15+", sub: "build/teardown" },
  { label: "V&V", value: "5", sub: "formal procedures" },
];

const snapshotCards = [
  {
    label: "Problem",
    title: "CAD/BOM drift from hardware",
    body: "Broken mates, missing references, obsolete parts, and BOM mismatch.",
    accent: "text-red-300",
    glow: "hover:shadow-red-500/10",
  },
  {
    label: "My Role",
    title: "Assembly repair + PDM updates",
    body: "Repaired SOLIDWORKS assemblies, checked hardware, and supported controlled updates.",
    accent: "text-amber-300",
    glow: "hover:shadow-amber-500/10",
  },
  {
    label: "Impact",
    title: "Manufacturing + V&V support",
    body: "Cleaner reference package for drawings, build procedures, and verification work.",
    accent: "text-blue-300",
    glow: "hover:shadow-blue-500/10",
  },
];

const impactCards = [
  { label: "BOM Recovery", value: "25% → 95%", detail: "match improved" },
  { label: "CAD Stability", value: "~100", detail: "failures resolved" },
  { label: "Manufacturing", value: "15+", detail: "build / teardown procedures" },
  { label: "Verification", value: "5", detail: "formal V&V procedures" },
];

const SparkleField = () => {
  const sparkles = [
    { top: "7%", left: "9%", size: "h-1 w-1", color: "bg-blue-300", delay: "0s" },
    { top: "16%", left: "82%", size: "h-1 w-1", color: "bg-white", delay: "0.8s" },
    { top: "30%", left: "48%", size: "h-1 w-1", color: "bg-blue-200", delay: "1.4s" },
    { top: "41%", left: "6%", size: "h-1 w-1", color: "bg-amber-200", delay: "2s" },
    { top: "67%", left: "13%", size: "h-1 w-1", color: "bg-white", delay: "2.7s" },
    { top: "76%", left: "78%", size: "h-1 w-1", color: "bg-amber-200", delay: "3.3s" },
    { top: "90%", left: "42%", size: "h-1 w-1", color: "bg-blue-300", delay: "4s" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.32)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.32)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute right-10 top-40 h-[280px] w-[280px] rounded-full bg-amber-400/8 blur-3xl" />
      <div className="absolute bottom-10 left-10 h-[340px] w-[340px] rounded-full bg-blue-400/8 blur-3xl" />

      {sparkles.map((sparkle, index) => (
        <span
          key={index}
          className={`absolute ${sparkle.size} ${sparkle.color} rounded-full opacity-45 shadow-[0_0_16px_rgba(255,255,255,0.65)] motion-safe:animate-pulse`}
          style={{
            top: sparkle.top,
            left: sparkle.left,
            animationDelay: sparkle.delay,
            animationDuration: "4.2s",
          }}
        />
      ))}
    </div>
  );
};

const Pill = ({ children }: { children: ReactNode }) => (
  <span className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-xs font-medium text-gray-200 backdrop-blur transition duration-300 hover:border-blue-300/30 hover:bg-blue-300/10 hover:text-white">
    {children}
  </span>
);

const Metric = ({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) => (
  <div className="group rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-300/25 hover:bg-white/[0.09] hover:shadow-xl hover:shadow-blue-500/10">
    <div className="text-xs text-gray-400 transition group-hover:text-blue-200">
      {label}
    </div>
    <div className="mt-1 text-2xl font-semibold tracking-tight text-white">
      {value}
    </div>
    <div className="mt-1 text-xs leading-snug text-gray-400">{sub}</div>
  </div>
);

const SnapshotCard = ({
  label,
  title,
  body,
  accent,
  glow,
}: {
  label: string;
  title: string;
  body: string;
  accent: string;
  glow: string;
}) => (
  <div
    className={`group rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-xl shadow-black/10 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] ${glow}`}
  >
    <div className={`text-xs font-semibold uppercase tracking-[0.2em] ${accent}`}>
      {label}
    </div>
    <div className="mt-3 text-lg font-semibold text-white">{title}</div>
    <p className="mt-2 text-sm leading-relaxed text-gray-400 transition group-hover:text-gray-300">
      {body}
    </p>
  </div>
);

const ImpactCard = ({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) => (
  <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-300/25 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-blue-500/10">
    <div className="text-xs uppercase tracking-[0.18em] text-gray-500 transition group-hover:text-blue-200">
      {label}
    </div>
    <div className="mt-2 text-3xl font-semibold text-white">{value}</div>
    <div className="mt-1 text-sm text-gray-400">{detail}</div>
  </div>
);

const Arrow = () => (
  <div className="hidden items-center justify-center lg:flex">
    <div className="text-5xl font-light text-amber-200 drop-shadow-[0_0_14px_rgba(251,191,36,0.35)] motion-safe:animate-pulse">
      →
    </div>
  </div>
);

export default function ExperiencePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_34%),linear-gradient(to_bottom,_#050505,_#111827_45%,_#050505)] px-6 py-10 text-gray-100 md:px-10 md:py-14">
      <SparkleField />

      <Link
        href="/"
        className="fixed left-6 top-6 z-50 rounded-2xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-gray-300 shadow-2xl shadow-black/30 backdrop-blur-md transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
      >
        ← Back to Home
      </Link>

      <div className="relative z-10 mx-auto max-w-7xl pt-12">
        <header className="mx-auto mb-20 max-w-4xl text-center">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
            Industry Experience
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
            Experience
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-400">
            Production hardware experience across CAD/BOM recovery, sustaining
            engineering, manufacturing support, drawings, and verification.
          </p>
        </header>

        <section className="mx-auto mb-28 max-w-7xl scroll-mt-24">
          <div className="grid items-stretch gap-8 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-8 shadow-2xl shadow-black/25 backdrop-blur transition duration-500 hover:border-blue-300/20 hover:bg-white/[0.075] md:p-10">
              <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-28 left-16 h-48 w-48 rounded-full bg-amber-300/8 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">
                  Leica Biosystems / Danaher
                </div>

                <h2 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
                  CS2 CAD/BOM Configuration Recovery
                </h2>

                <p className="mt-3 text-lg text-gray-300">
                  Hardware Engineering Intern · Vista, CA · June 2025 –
                  September 2025
                </p>

                <div className="mt-7 space-y-5 text-base leading-relaxed text-gray-300">
                  <p>
                    I worked on a production medical scanner platform where the
                    digital engineering reference had drifted from the as-built
                    hardware: broken mates, missing references, obsolete parts,
                    and BOM mismatch.
                  </p>

                  <p>
                    I helped recover the CAD/BOM baseline by checking assemblies
                    against physical hardware, repairing SOLIDWORKS failures,
                    replacing outdated components, and supporting controlled
                    updates through SOLIDWORKS PDM.
                  </p>

                  <p>
                    The recovered package supported sustaining updates,
                    manufacturing procedures, drawings, and formal verification
                    work.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Pill key={tag}>{tag}</Pill>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-blue-400/18 before:via-transparent before:to-amber-300/8 before:opacity-60 before:content-[''] after:absolute after:inset-0 after:rounded-3xl after:bg-[linear-gradient(120deg,transparent_25%,rgba(255,255,255,0.08)_45%,transparent_65%)] after:opacity-0 after:transition after:duration-700 after:content-[''] hover:border-blue-300/25 hover:shadow-blue-500/10 hover:after:opacity-100">
                <video
                  src="/Final_Gif.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="relative z-10 h-[310px] w-full object-contain p-4 transition duration-500 group-hover:scale-[1.015] md:h-[430px]"
                />

                <div className="relative z-10 border-t border-white/10 px-5 py-4 text-center text-sm text-gray-400">
                  Exterior CAD view of the recovered CS2 scanner assembly
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {metrics.map((metric) => (
                  <Metric key={metric.label} {...metric} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {snapshotCards.map((card) => (
              <SnapshotCard key={card.label} {...card} />
            ))}
          </div>

          <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 shadow-2xl shadow-black/25 backdrop-blur">
            <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" />

            <div className="relative z-10 mb-8">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">
                Engineering Transformation
              </div>

              <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                From legacy CAD/BOM drift to a usable sustaining baseline
              </h3>
            </div>

            <div className="relative z-10 grid gap-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
              <div className="rounded-3xl border border-red-300/10 bg-red-400/[0.045] p-6 shadow-xl shadow-black/20 transition duration-300 hover:border-red-300/20 hover:bg-red-400/[0.06]">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-red-300">
                    Starting Point
                  </div>

                  <div className="rounded-full border border-red-300/20 bg-red-400/10 px-3 py-1 text-xs text-red-200">
                    Drift
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-white">
                  Unreliable digital reference
                </h4>

                <div className="mt-5 space-y-3 text-sm leading-relaxed text-gray-300">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    Broken mates and missing references
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    Obsolete or missing components
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    BOM drift from physical hardware
                  </div>
                </div>
              </div>

              <Arrow />

              <div className="rounded-3xl border border-amber-300/10 bg-amber-400/[0.045] p-6 shadow-xl shadow-black/20 transition duration-300 hover:border-amber-300/20 hover:bg-amber-400/[0.06]">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
                    Engineering Response
                  </div>

                  <div className="rounded-full border border-amber-300/20 bg-amber-400/10 px-3 py-1 text-xs text-amber-200">
                    Recovery
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-white">
                  CAD/BOM rebuild
                </h4>

                <div className="mt-5 space-y-3 text-sm leading-relaxed text-gray-300">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    Repaired assemblies and references
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    Checked CAD against real scanner hardware
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    Tracked discrepancies and update decisions
                  </div>
                </div>
              </div>

              <Arrow />

              <div className="rounded-3xl border border-blue-300/15 bg-blue-400/[0.07] p-6 shadow-xl shadow-black/20 transition duration-300 hover:border-blue-300/25 hover:bg-blue-400/[0.09]">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
                    Result
                  </div>

                  <div className="rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-100">
                    Baseline
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-white">
                  Usable sustaining reference
                </h4>

                <div className="mt-5 space-y-3 text-sm leading-relaxed text-gray-200">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    BOM match improved from{" "}
                    <span className="font-semibold text-white">15/60</span> to{" "}
                    <span className="font-semibold text-white">57/60</span>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    Roughly{" "}
                    <span className="font-semibold text-white">
                      100 CAD/assembly failures
                    </span>{" "}
                    resolved
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    Supported manufacturing, drawings, and V&V work
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 grid gap-4 md:grid-cols-4">
              {impactCards.map((impact) => (
                <ImpactCard key={impact.label} {...impact} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}