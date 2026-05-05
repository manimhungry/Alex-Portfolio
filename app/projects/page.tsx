import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

type MetricItem = {
  label: string;
  value: string;
};

type MediaItem = {
  type?: "image" | "video";
  src: string;
  alt?: string;
  caption?: string;
  contain?: boolean;
};

type ChapterVisualType =
  | "systemsMap"
  | "cadReality"
  | "fixtureRepeatability"
  | "calibrationPlot"
  | "travelEnvelope"
  | "shrinkage"
  | "validationStatus";

type Chapter = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  bullets?: string[];
  metrics?: MetricItem[];
  visualType: ChapterVisualType;
  videoPlaceholder?: string;
};

type Project = {
  id: string;
  eyebrow: string;
  title: string;
  role: string;
  summary: ReactNode;
  tags: string[];
  metrics: MetricItem[];
  hero: MediaItem;
  details: {
    icon: string;
    label: string;
    text: string;
  }[];
  evidence?: MediaItem[];
};

const nordsonMetrics: MetricItem[] = [
  { label: "Target volume", value: "5 µL" },
  { label: "Calibration", value: "24 → 54 kPa" },
  { label: "CAD correction", value: "40 → 38 mm" },
  { label: "Scale-up", value: "10 → 178 slots" },
  { label: "Print shrinkage", value: "3.12 mm" },
  { label: "Compensation", value: "100.89%" },
];

const nordsonTags = [
  "Fixture Design",
  "CAD-to-Hardware Correction",
  "Nordson Dispensing",
  "Robot Calibration",
  "FDM Prototyping",
  "Mass Measurement",
  "Scale-Up",
  "Tolerance / Shrinkage",
];

const nordsonChapters: Chapter[] = [
  {
    id: "nordson-overview",
    eyebrow: "01 / Overview",
    title: "From manual dispensing to a repeatable robot workflow",
    summary:
      "This project started as a 5 µL dispensing automation task, but the real engineering challenge became making the full system repeatable: fixture location, robot alignment, pressure-volume behavior, and tray scale-up.",
    bullets: [
      "Automated fluid dispensing for dense sensor arrays",
      "Reduced dependence on slow manual dispensing",
      "Combined robot setup, tray design, calibration, and physical testing",
    ],
    visualType: "systemsMap",
    videoPlaceholder:
      "Add later: robot motion / full dispensing sequence video showing the automated workflow.",
  },
  {
    id: "nordson-cad-vs-reality",
    eyebrow: "02 / CAD vs Reality",
    title: "The CAD reference did not match the real Nordson plate",
    summary:
      "The first major failure mode was not the robot. It was the reference geometry. The CAD assumption placed the hole pattern at 40 mm, but the actual plate measured 38 mm. I rebuilt the tray interface around the real hardware instead of trusting the model.",
    bullets: [
      "Measured the physical baseplate directly",
      "Identified 40 mm CAD spacing vs. 38 mm real spacing",
      "Rebuilt the fixture interface around the measured plate",
    ],
    metrics: [{ label: "Hole spacing correction", value: "40 → 38 mm" }],
    visualType: "cadReality",
  },
  {
    id: "nordson-fixture-design",
    eyebrow: "03 / Fixture Design",
    title: "The tray needed to locate the sensors repeatably",
    summary:
      "Early testing showed that small tray position or angle changes could move the dispense location. I designed tray interfaces that mechanically located the sensor array relative to the Nordson bed so repeated runs started from the same physical reference.",
    bullets: [
      "Designed tray geometry around the corrected baseplate",
      "Used physical tray iterations for fit and loading checks",
      "Focused on repeatable sensor placement before scaling the array",
    ],
    visualType: "fixtureRepeatability",
    videoPlaceholder:
      "Add later: tray loading or fixturing video showing repeatable placement before dispensing.",
  },
  {
    id: "nordson-calibration",
    eyebrow: "04 / Dispense Calibration",
    title: "Pressure was calibrated against droplet mass",
    summary:
      "Once alignment improved, I calibrated the dispense volume. I held the fluid, dispense time, tip, and setup constant, then varied pressure and measured droplet mass to estimate delivered volume. After bracketing the 5 µL target, I used linear interpolation to estimate the pressure setting instead of guessing.",
    bullets: [
      "24 kPa produced about 2.9 µL",
      "48 kPa produced about 4.6 µL",
      "54 kPa produced about 5.3 µL",
      "The 5 µL target falls between the 48 kPa and 54 kPa tests",
      "Interpolated pressure: 48 + ((5.0 - 4.6) / (5.3 - 4.6)) × (54 - 48) ≈ 51.4 kPa",
    ],
    metrics: [
      { label: "Low test", value: "2.9 µL" },
      { label: "Mid test", value: "4.6 µL" },
      { label: "High test", value: "5.3 µL" },
      { label: "Interpolated", value: "~51.4 kPa" },
    ],
    visualType: "calibrationPlot",
    videoPlaceholder:
      "Add later: close-up dispense video showing droplet formation during pressure-volume testing.",
  },
  {
    id: "nordson-scale-up",
    eyebrow: "05 / Scale-Up",
    title: "The design scaled beyond small test trays",
    summary:
      "After proving the smaller tray workflow, I pushed the system toward higher-throughput layouts. A 200+ slot tray used more of the bed, but the robot reached a physical travel limit before completing the full range. I redesigned around a 178-slot tray to stay inside the usable motion envelope.",
    bullets: [
      "Started with small test arrays",
      "Scaled toward 100+ position tray formats",
      "Redesigned around robot travel limits instead of moving the machine",
      "178-slot layout preserved high batch size within usable bed travel",
    ],
    metrics: [
      { label: "Early tray", value: "10 slots" },
      { label: "Scaled tray", value: "178 slots" },
    ],
    visualType: "travelEnvelope",
  },
  {
    id: "nordson-shrinkage",
    eyebrow: "06 / Shrinkage",
    title: "Large-format 3D printing introduced measurable error",
    summary:
      "Scaling the tray created a manufacturing problem. The large printed tray came out smaller than the CAD model, which shifted sensor positions and hurt dispense accuracy. I measured the error and calculated a compensation factor.",
    bullets: [
      "CAD target length: 354.25 mm",
      "Actual printed length: 351.13 mm",
      "Measured shrinkage: 3.12 mm",
      "Calculated XY scale compensation: 100.89%",
    ],
    metrics: [
      { label: "CAD target", value: "354.25 mm" },
      { label: "Printed length", value: "351.13 mm" },
      { label: "Compensation", value: "100.89%" },
    ],
    visualType: "shrinkage",
  },
  {
    id: "nordson-result",
    eyebrow: "07 / Result",
    title: "A stronger path toward high-throughput automated dispensing",
    summary:
      "The system demonstrated repeatable automated dispensing with water, improved tray alignment, a pressure-volume calibration path, and a scalable fixture direction. The remaining work is real-fluid validation and final manufacturing refinement.",
    bullets: [
      "Validated automated dispensing workflow with water",
      "Improved physical repeatability through tray fixturing",
      "Built a clearer path toward high-throughput lab testing",
      "Avoids overclaiming: real-fluid validation is still pending",
    ],
    visualType: "validationStatus",
    videoPlaceholder:
      "Add later: final end-to-end demo video of the automated dispensing workflow validated with water.",
  },
];

const otherProjects: Project[] = [
  {
    id: "direct-drive-turret",
    eyebrow: "Triton Robotics / Drivetrain Redesign",
    title: "Direct Drive Turret",
    role: "Primary CAD Owner — Motor Mount, Bearing Stack, and Slip-Ring Integration",
    summary: (
      <>
        I redesigned the turret drivetrain from belt drive to direct drive to
        reduce backlash, simplify service, and improve repeatability on the
        robot platform.
      </>
    ),
    tags: [
      "SOLIDWORKS",
      "Direct Drive",
      "Waterjet",
      "3D Printing",
      "Tolerance Stack",
      "Serviceability",
    ],
    metrics: [
      { label: "Drive change", value: "2:1 → 1:1" },
      { label: "Service time", value: "15 → 9 min" },
      { label: "Reduction", value: "~40%" },
      { label: "Revisions", value: "~5" },
    ],
    hero: {
      type: "image",
      src: "/turret-overview.png",
      alt: "Direct-drive turret overview",
      caption: "Direct-drive turret redesign integrated into the robot system",
      contain: true,
    },
    details: [
      {
        icon: "⌁",
        label: "Problem",
        text:
          "The original belt and pulley architecture introduced backlash, extra packaging complexity, and slower service access.",
      },
      {
        icon: "⚙",
        label: "What I did",
        text:
          "I redesigned the motor mount, bearing stack, and slip-ring interfaces through multiple printed and waterjet prototype iterations.",
      },
      {
        icon: "✓",
        label: "Outcome",
        text:
          "The final design removed the belt-driven layout, cut service time from 15 to 9 minutes, and produced a cleaner direct-drive assembly.",
      },
    ],
    evidence: [
      {
        type: "image",
        src: "/integrated-robot.png",
        alt: "Integrated robot with turret",
        caption: "Turret system installed on the robot platform",
      },
    ],
  },
  {
    id: "onboarding-aircraft",
    eyebrow: "Triton UAS / Rapid Aircraft Build",
    title: "Onboarding Aircraft",
    role: "Lead Mechanical Engineer — Concept, CAD, Fabrication, and Flight Test",
    summary: (
      <>
        I led the mechanical design and build of a V-tail fixed-wing onboarding
        aircraft, moving from concept to CAD, fabrication, electronics
        integration, and shakedown flight.
      </>
    ),
    tags: [
      "Aircraft Design",
      "CAD",
      "V-tail",
      "Rapid Build",
      "Electronics Integration",
      "Flight Test",
    ],
    metrics: [
      { label: "Build time", value: "~1 week" },
      { label: "Flight test", value: "~40 sec" },
      { label: "Configuration", value: "V-tail" },
      { label: "Role", value: "Lead" },
    ],
    hero: {
      type: "video",
      src: "/Test.mp4",
      caption: "Shakedown flight used to validate structure, controls, and power",
    },
    details: [
      {
        icon: "△",
        label: "Problem",
        text:
          "The team needed a fast onboarding aircraft that could teach design, fabrication, integration, and flight behavior in a short timeline.",
      },
      {
        icon: "✎",
        label: "What I did",
        text:
          "I led the mechanical layout, coordinated electronics and motor integration, and moved the aircraft to a V-tail configuration based on stability needs.",
      },
      {
        icon: "✈",
        label: "Outcome",
        text:
          "The aircraft completed a controlled shakedown flight and was landed early to reduce crash risk after validating structure, controls, and power.",
      },
    ],
    evidence: [
      {
        type: "image",
        src: "/CAD.png",
        alt: "V-tail aircraft CAD layout",
        caption: "CAD layout used to define the V-tail aircraft geometry",
        contain: true,
      },
      {
        type: "image",
        src: "/Side.png",
        alt: "Aircraft side view",
        caption: "Side view of the fabricated aircraft configuration",
      },
    ],
  },
  {
    id: "ball-retrieval-robot",
    eyebrow: "Class Competition / Mechanism Design",
    title: "Ball Retrieval Robot",
    role: "Mechanical Engineer — Drivetrain, Lift Mechanism, CAD, and Fabrication",
    summary: (
      <>
        Competition robot using a two-wheel friction drivetrain and double
        reverse four-bar lift to collect and deliver balls during timed runs.
      </>
    ),
    tags: [
      "Fusion 360",
      "AutoCAD",
      "Mechanisms",
      "Laser Cutting",
      "3D Printing",
      "Testing",
    ],
    metrics: [
      { label: "Peak intake", value: "20 balls / 15 s" },
      { label: "Reliability", value: "~8/10 runs" },
      { label: "Placement", value: "6 / 12" },
      { label: "Run time", value: "60 s" },
    ],
    hero: {
      type: "video",
      src: "/Action.mp4",
      caption: "Competition robot operating during ball retrieval testing",
    },
    details: [
      {
        icon: "◎",
        label: "Problem",
        text:
          "The robot needed to collect and deliver as many balls as possible in a short timed run.",
      },
      {
        icon: "⚙",
        label: "What I did",
        text:
          "I designed mechanisms with bearings and gears, fabricated parts through laser cutting and 3D printing, and tuned performance through repeated practice runs.",
      },
      {
        icon: "▲",
        label: "Outcome",
        text:
          "The robot reached a peak of 20 balls in 15 seconds, achieved roughly 8 out of 10 reliable runs, and placed 6th out of 12 teams.",
      },
    ],
    evidence: [
      {
        type: "image",
        src: "/Real.png",
        alt: "Ball retrieval robot hardware",
        caption: "Ball retrieval robot hardware during testing",
      },
    ],
  },
];

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-gray-200">
      {children}
    </span>
  );
}

function MetricCard({ label, value }: MetricItem) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="text-[11px] uppercase tracking-[0.2em] text-gray-500">
        {label}
      </div>
      <div className="mt-2 text-xl font-semibold text-white">{value}</div>
    </div>
  );
}

function DetailCard({
  icon,
  label,
  text,
}: {
  icon: string;
  label: string;
  text: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/35 to-transparent" />
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-300/20 bg-blue-400/10 text-sm text-blue-200">
          {icon}
        </div>
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
          {label}
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-gray-300">{text}</p>
    </div>
  );
}

function EngineeringVisualShell({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
      <div className="border-b border-white/10 px-5 py-4">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
          {eyebrow}
        </div>
        <h4 className="mt-2 text-lg font-semibold text-white">{title}</h4>
      </div>

      <div className="p-5">{children}</div>
    </div>
  );
}

function VideoPlaceholderCard({ text }: { text: string }) {
  return (
    <div className="mt-5 flex min-h-[150px] items-center justify-center rounded-3xl border border-dashed border-amber-300/25 bg-amber-400/[0.035] p-6 text-center">
      <div>
        <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-amber-300/25 bg-amber-400/10 text-amber-200">
          ▶
        </div>

        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
          Video Placeholder
        </div>

        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-400">
          {text}
        </p>
      </div>
    </div>
  );
}

function SystemsMapVisual() {
  const steps = [
    { label: "Measure", value: "40 → 38 mm" },
    { label: "Fixture", value: "repeatable tray" },
    { label: "Calibrate", value: "~51.4 kPa" },
    { label: "Scale", value: "178 slots" },
    { label: "Compensate", value: "100.89%" },
  ];

  return (
    <EngineeringVisualShell
      eyebrow="System map"
      title="Measure → Fixture → Calibrate → Scale → Compensate"
    >
      <div className="grid gap-3">
        {steps.map((step, index) => (
          <div key={step.label} className="grid gap-3 md:grid-cols-[1fr_auto]">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-300/20 bg-blue-400/10 text-[11px] font-semibold text-blue-200">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {step.label}
                  </div>
                  <div className="mt-1 text-sm text-gray-400">
                    {step.value}
                  </div>
                </div>
              </div>
            </div>

            {index < steps.length - 1 && (
              <div className="hidden items-center justify-center text-amber-200/80 md:flex">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </EngineeringVisualShell>
  );
}

function CadRealityVisual() {
  return (
    <EngineeringVisualShell
      eyebrow="CAD vs measured hardware"
      title="Reference geometry corrected around the real plate"
    >
      <div className="space-y-5">
        <div className="rounded-2xl border border-red-300/15 bg-red-400/[0.045] p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-300">
              CAD assumption
            </span>
            <span className="rounded-full border border-red-300/20 bg-red-400/10 px-3 py-1 text-xs text-red-200">
              40 mm
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full border-2 border-red-200/70 bg-black/30" />
            <div className="h-px flex-1 bg-red-200/50" />
            <div className="text-sm font-semibold text-red-100">40 mm</div>
            <div className="h-px flex-1 bg-red-200/50" />
            <div className="h-8 w-8 rounded-full border-2 border-red-200/70 bg-black/30" />
          </div>
        </div>

        <div className="rounded-2xl border border-blue-300/20 bg-blue-400/[0.055] p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
              Measured hardware
            </span>
            <span className="rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-100">
              38 mm
            </span>
          </div>

          <div className="mx-auto flex max-w-[88%] items-center gap-3">
            <div className="h-8 w-8 rounded-full border-2 border-blue-200/80 bg-black/30" />
            <div className="h-px flex-1 bg-blue-200/60" />
            <div className="text-sm font-semibold text-blue-100">38 mm</div>
            <div className="h-px flex-1 bg-blue-200/60" />
            <div className="h-8 w-8 rounded-full border-2 border-blue-200/80 bg-black/30" />
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-relaxed text-gray-300">
          Design decision: stop relying on the mismatched CAD reference and
          rebuild the tray interface around direct measurements from the real
          Nordson plate.
        </div>
      </div>
    </EngineeringVisualShell>
  );
}

function FixtureRepeatabilityVisual() {
  const SensorArray = ({ shifted = false }: { shifted?: boolean }) => (
    <div
      className={`grid grid-cols-5 gap-2 transition ${
        shifted ? "rotate-2 translate-x-2" : ""
      }`}
    >
      {Array.from({ length: 15 }).map((_, index) => (
        <div
          key={index}
          className="h-8 rounded-md border border-white/10 bg-white/[0.08]"
        >
          <div className="mx-auto mt-2 h-3 w-3 rounded-full bg-blue-200/70" />
        </div>
      ))}
    </div>
  );

  return (
    <EngineeringVisualShell
      eyebrow="Fixture behavior"
      title="The tray turns placement into a repeatable reference"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-red-300/15 bg-red-400/[0.04] p-5">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-red-300">
            Before
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
            <SensorArray shifted />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Tray position and angle could shift between runs, moving the
            dispense location even if the robot program stayed the same.
          </p>
        </div>

        <div className="rounded-2xl border border-blue-300/20 bg-blue-400/[0.05] p-5">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
            After
          </div>
          <div className="rounded-2xl border border-blue-300/15 bg-black/25 p-4">
            <SensorArray />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Fixture geometry locates the tray against the bed so repeated runs
            start from the same physical reference.
          </p>
        </div>
      </div>
    </EngineeringVisualShell>
  );
}

function CalibrationPlotCard() {
  const xMin = 20;
  const xMax = 56;
  const yMin = 2;
  const yMax = 5.6;

  const plotW = 520;
  const plotH = 320;
  const padL = 58;
  const padR = 20;
  const padT = 24;
  const padB = 42;

  const innerW = plotW - padL - padR;
  const innerH = plotH - padT - padB;

  const x = (v: number) => padL + ((v - xMin) / (xMax - xMin)) * innerW;
  const y = (v: number) => padT + ((yMax - v) / (yMax - yMin)) * innerH;

  const points = [
    { px: 24, py: 2.9, label: "(24, 2.9)" },
    { px: 48, py: 4.6, label: "(48, 4.6)" },
    { px: 54, py: 5.3, label: "(54, 5.3)" },
  ];

  const interpX = 51.43;
  const interpY = 5.0;

  const seg1 = `${x(24)},${y(2.9)} ${x(48)},${y(4.6)} ${x(54)},${y(5.3)}`;
  const seg2 = `${x(48)},${y(4.6)} ${x(54)},${y(5.3)}`;

  return (
    <EngineeringVisualShell
      eyebrow="Calibration plot"
      title="Interpolating pressure for a 5 µL target"
    >
      <p className="mb-4 text-sm leading-relaxed text-gray-400">
        Linear interpolation between the 48 kPa and 54 kPa tests estimated the
        pressure needed for the 5 µL target.
      </p>

      <svg
        viewBox={`0 0 ${plotW} ${plotH}`}
        className="h-auto w-full"
        role="img"
        aria-label="Pressure versus estimated droplet volume plot with interpolation to 5 microliters"
      >
        <rect
          x="0"
          y="0"
          width={plotW}
          height={plotH}
          rx="20"
          fill="rgba(255,255,255,0.02)"
        />

        {[2, 3, 4, 5].map((yv) => (
          <g key={`y-${yv}`}>
            <line
              x1={padL}
              y1={y(yv)}
              x2={plotW - padR}
              y2={y(yv)}
              stroke="rgba(255,255,255,0.08)"
              strokeDasharray="4 6"
            />
            <text
              x={padL - 12}
              y={y(yv) + 4}
              textAnchor="end"
              fontSize="11"
              fill="rgba(255,255,255,0.55)"
            >
              {yv.toFixed(1)}
            </text>
          </g>
        ))}

        {[24, 30, 36, 42, 48, 54].map((xv) => (
          <g key={`x-${xv}`}>
            <line
              x1={x(xv)}
              y1={padT}
              x2={x(xv)}
              y2={plotH - padB}
              stroke="rgba(255,255,255,0.05)"
            />
            <text
              x={x(xv)}
              y={plotH - padB + 18}
              textAnchor="middle"
              fontSize="11"
              fill="rgba(255,255,255,0.55)"
            >
              {xv}
            </text>
          </g>
        ))}

        <line
          x1={padL}
          y1={plotH - padB}
          x2={plotW - padR}
          y2={plotH - padB}
          stroke="rgba(255,255,255,0.25)"
        />
        <line
          x1={padL}
          y1={padT}
          x2={padL}
          y2={plotH - padB}
          stroke="rgba(255,255,255,0.25)"
        />

        <polyline
          points={seg1}
          fill="none"
          stroke="rgba(96,165,250,0.35)"
          strokeWidth="2"
        />
        <polyline
          points={seg2}
          fill="none"
          stroke="rgba(96,165,250,0.95)"
          strokeWidth="3"
        />

        <line
          x1={padL}
          y1={y(interpY)}
          x2={x(interpX)}
          y2={y(interpY)}
          stroke="rgba(251,191,36,0.9)"
          strokeDasharray="6 6"
          strokeWidth="2"
        />
        <line
          x1={x(interpX)}
          y1={plotH - padB}
          x2={x(interpX)}
          y2={y(interpY)}
          stroke="rgba(251,191,36,0.9)"
          strokeDasharray="6 6"
          strokeWidth="2"
        />

        {points.map((p) => (
          <g key={p.label}>
            <circle
              cx={x(p.px)}
              cy={y(p.py)}
              r="5.5"
              fill="rgb(96,165,250)"
              stroke="white"
              strokeWidth="1.5"
            />
            <text
              x={x(p.px) + 8}
              y={y(p.py) - 10}
              fontSize="11"
              fill="rgba(255,255,255,0.82)"
            >
              {p.label}
            </text>
          </g>
        ))}

        <circle
          cx={x(interpX)}
          cy={y(interpY)}
          r="6"
          fill="rgb(251,191,36)"
          stroke="white"
          strokeWidth="1.5"
        />
        <text
          x={x(interpX) + 10}
          y={y(interpY) - 10}
          fontSize="11"
          fill="rgba(255,255,255,0.92)"
        >
          (51.4, 5.0)
        </text>

        <text
          x={(padL + plotW - padR) / 2}
          y={plotH - 6}
          textAnchor="middle"
          fontSize="12"
          fill="rgba(255,255,255,0.68)"
        >
          Pressure (kPa)
        </text>

        <text
          x={18}
          y={plotH / 2}
          textAnchor="middle"
          fontSize="12"
          fill="rgba(255,255,255,0.68)"
          transform={`rotate(-90 18 ${plotH / 2})`}
        >
          Estimated volume (µL)
        </text>
      </svg>

      <div className="mt-4 grid gap-3">
        <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-gray-300">
          Use the two points around the target:{" "}
          <strong>48 kPa → 4.6 µL</strong> and{" "}
          <strong>54 kPa → 5.3 µL</strong>.
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-gray-300">
          Interpolation:{" "}
          <span className="font-mono text-[13px] text-gray-200">
            P = 48 + ((5.0 - 4.6) / (5.3 - 4.6)) × (54 - 48)
          </span>
        </div>

        <div className="rounded-2xl border border-blue-300/20 bg-blue-400/[0.06] px-4 py-3 text-sm text-blue-100">
          <strong>Estimated pressure for 5 µL:</strong> ~51.4 kPa
        </div>
      </div>
    </EngineeringVisualShell>
  );
}

function TravelEnvelopeVisual() {
  return (
    <EngineeringVisualShell
      eyebrow="Robot travel envelope"
      title="Scale-up constrained by usable machine travel"
    >
      <svg
        viewBox="0 0 560 320"
        className="h-auto w-full"
        role="img"
        aria-label="Robot travel envelope diagram comparing 178 slot tray and 200 plus slot tray"
      >
        <rect
          x="20"
          y="28"
          width="520"
          height="244"
          rx="22"
          fill="rgba(255,255,255,0.025)"
          stroke="rgba(255,255,255,0.12)"
        />

        <rect
          x="70"
          y="70"
          width="340"
          height="150"
          rx="14"
          fill="rgba(96,165,250,0.12)"
          stroke="rgba(96,165,250,0.55)"
          strokeWidth="2"
        />

        <rect
          x="70"
          y="70"
          width="420"
          height="150"
          rx="14"
          fill="rgba(248,113,113,0.06)"
          stroke="rgba(248,113,113,0.75)"
          strokeDasharray="8 8"
          strokeWidth="2"
        />

        <line
          x1="410"
          y1="54"
          x2="410"
          y2="238"
          stroke="rgba(251,191,36,0.85)"
          strokeDasharray="6 6"
          strokeWidth="2"
        />

        <text
          x="240"
          y="148"
          textAnchor="middle"
          fontSize="17"
          fontWeight="700"
          fill="rgba(191,219,254,0.95)"
        >
          178-slot tray fits
        </text>

        <text
          x="456"
          y="148"
          textAnchor="middle"
          fontSize="14"
          fill="rgba(254,202,202,0.9)"
        >
          200+ exceeds
        </text>

        <text
          x="410"
          y="44"
          textAnchor="middle"
          fontSize="12"
          fill="rgba(251,191,36,0.95)"
        >
          usable travel limit
        </text>

        <text
          x="280"
          y="295"
          textAnchor="middle"
          fontSize="13"
          fill="rgba(255,255,255,0.62)"
        >
          Design choice: maximize batch size inside the reachable dispense region
        </text>
      </svg>
    </EngineeringVisualShell>
  );
}

function ShrinkageVisual() {
  const target = 354.25;
  const printed = 351.13;
  const targetWidth = 100;
  const printedWidth = (printed / target) * 100;

  return (
    <EngineeringVisualShell
      eyebrow="Print compensation"
      title="Measured shrinkage converted into a scale factor"
    >
      <div className="space-y-5">
        <div>
          <div className="mb-2 flex justify-between text-sm text-gray-300">
            <span>CAD target length</span>
            <span className="font-semibold text-white">354.25 mm</span>
          </div>
          <div className="h-5 rounded-full bg-white/10">
            <div
              className="h-5 rounded-full bg-blue-300/80"
              style={{ width: `${targetWidth}%` }}
            />
          </div>
        </div>

        <div>
          <div className="mb-2 flex justify-between text-sm text-gray-300">
            <span>Printed length</span>
            <span className="font-semibold text-white">351.13 mm</span>
          </div>
          <div className="h-5 rounded-full bg-white/10">
            <div
              className="h-5 rounded-full bg-red-300/75"
              style={{ width: `${printedWidth}%` }}
            />
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          <MetricCard label="Error" value="-3.12 mm" />
          <MetricCard label="Scale factor" value="354.25 / 351.13" />
          <MetricCard label="Compensation" value="100.89%" />
        </div>

        <div className="rounded-2xl border border-amber-300/20 bg-amber-400/[0.06] p-4 text-sm leading-relaxed text-amber-100">
          Correction strategy: intentionally scale the tray in XY so the printed
          part lands closer to the target geometry after cooling.
        </div>
      </div>
    </EngineeringVisualShell>
  );
}

function ValidationStatusVisual() {
  const validated = [
    "Water dispensing workflow",
    "Robot motion sequence",
    "Tray fit/loading concept",
    "Pressure-volume calibration path",
  ];

  const pending = [
    "Real-fluid validation",
    "Final material/process refinement",
    "Final tray manufacturing method",
  ];

  return (
    <EngineeringVisualShell
      eyebrow="Validation status"
      title="What is proven vs. what remains"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-emerald-300/20 bg-emerald-400/[0.055] p-5">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Validated so far
          </div>

          <div className="grid gap-3">
            {validated.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-gray-200"
              >
                <span className="text-emerald-300">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-amber-300/20 bg-amber-400/[0.05] p-5">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
            Remaining work
          </div>

          <div className="grid gap-3">
            {pending.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-gray-200"
              >
                <span className="text-amber-300">○</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </EngineeringVisualShell>
  );
}

function ChapterVisual({ type }: { type: ChapterVisualType }) {
  if (type === "systemsMap") return <SystemsMapVisual />;
  if (type === "cadReality") return <CadRealityVisual />;
  if (type === "fixtureRepeatability") return <FixtureRepeatabilityVisual />;
  if (type === "calibrationPlot") return <CalibrationPlotCard />;
  if (type === "travelEnvelope") return <TravelEnvelopeVisual />;
  if (type === "shrinkage") return <ShrinkageVisual />;
  return <ValidationStatusVisual />;
}

function MediaCard({
  item,
  priority = false,
  className = "h-[520px]",
  hero = false,
}: {
  item: MediaItem;
  priority?: boolean;
  className?: string;
  hero?: boolean;
}) {
  if (!item.src) return null;

  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/25">
      <div className={`relative w-full ${className}`}>
        {item.type === "video" ? (
          <video
            src={item.src}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          />
        ) : (
          <Image
            src={item.src}
            alt={item.alt ?? item.caption ?? "Project media"}
            fill
            priority={priority}
            sizes={hero ? "100vw" : "(max-width: 1024px) 100vw, 50vw"}
            className={item.contain ? "object-contain p-5" : "object-cover"}
          />
        )}

        {item.caption && (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-6 pb-5 pt-20">
            <p className="text-base text-gray-200 md:text-lg">
              {item.caption}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function SideMenu() {
  return (
    <aside className="hidden xl:block">
      <div className="sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-4 shadow-2xl shadow-black/20 backdrop-blur">
        <div className="mb-4 space-y-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-gray-400 transition hover:bg-white/[0.07] hover:text-white"
          >
            ← Back to Home
          </Link>

          <div className="px-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
            Project Menu
          </div>
        </div>

        <nav className="space-y-5 text-sm">
          <div>
            <a
              href="#nordson"
              className="block rounded-xl px-3 py-2 font-semibold text-white transition hover:bg-white/[0.07]"
            >
              Automated Dispensing
            </a>

            <div className="mt-2 space-y-1 border-l border-white/10 pl-3">
              {nordsonChapters.map((chapter) => (
                <a
                  key={chapter.id}
                  href={`#${chapter.id}`}
                  className="block rounded-lg px-3 py-1.5 text-xs text-gray-400 transition hover:bg-white/[0.06] hover:text-blue-200"
                >
                  {chapter.eyebrow.replace("/", "·")}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            {otherProjects.map((project) => (
              <a
                key={project.id}
                href={`#${project.id}`}
                className="block rounded-xl px-3 py-2 font-medium text-gray-300 transition hover:bg-white/[0.07] hover:text-white"
              >
                {project.title}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
}

function MobileJumpMenu() {
  return (
    <div className="mb-12 flex gap-2 overflow-x-auto rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-3 backdrop-blur xl:hidden">
      <Link
        href="/"
        className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium text-gray-200"
      >
        ← Home
      </Link>

      <a
        href="#nordson"
        className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium text-gray-200"
      >
        Nordson
      </a>

      {nordsonChapters.map((chapter) => (
        <a
          key={chapter.id}
          href={`#${chapter.id}`}
          className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-gray-400"
        >
          {chapter.eyebrow.split("/")[1].trim()}
        </a>
      ))}

      {otherProjects.map((project) => (
        <a
          key={project.id}
          href={`#${project.id}`}
          className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-gray-400"
        >
          {project.title}
        </a>
      ))}
    </div>
  );
}

function ChapterButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium text-gray-300 transition hover:border-blue-300/30 hover:bg-blue-400/10 hover:text-white"
    >
      {children}
    </a>
  );
}

function ChapterSection({ chapter }: { chapter: Chapter }) {
  const hasMetrics = chapter.metrics && chapter.metrics.length > 0;

  return (
    <section id={chapter.id} className="scroll-mt-28">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-black/20">
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/35 to-transparent" />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">
              {chapter.eyebrow}
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              {chapter.title}
            </h3>

            <p className="mt-4 text-base leading-relaxed text-gray-300">
              {chapter.summary}
            </p>

            {chapter.bullets && chapter.bullets.length > 0 && (
              <div className="mt-5 grid gap-3">
                {chapter.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-gray-300"
                  >
                    {bullet}
                  </div>
                ))}
              </div>
            )}

            {hasMetrics && (
              <div className="mt-5 grid grid-cols-2 gap-3">
                {chapter.metrics?.map((metric) => (
                  <MetricCard key={metric.label} {...metric} />
                ))}
              </div>
            )}
          </div>

          <div>
            <ChapterVisual type={chapter.visualType} />

            {chapter.videoPlaceholder && (
              <VideoPlaceholderCard text={chapter.videoPlaceholder} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedNordsonCaseStudy() {
  return (
    <section id="nordson" className="mb-36 scroll-mt-24">
      <div className="mb-8">
        <div className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">
          Lab Automation / Fixture Design
        </div>

        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Automated Dispensing Fixture System
        </h2>

        <p className="mt-3 max-w-5xl text-lg text-gray-300">
          Mechanical Owner — Fixture Design, Robot Setup, Calibration, and Test
        </p>
      </div>

      <MediaCard
        item={{
          type: "image",
          src: "/setup.jpg",
          alt: "Automated dispensing setup with robot stage, controller, CAD reference, and custom tray",
          caption:
            "Automated dispensing setup with robot stage, controller, CAD reference, and custom tray",
        }}
        priority
        hero
        className="h-[440px] md:h-[620px]"
      />

      <div className="sticky top-4 z-30 mt-6 flex flex-wrap gap-2 rounded-[2rem] border border-white/10 bg-black/35 p-3 backdrop-blur-xl">
        <ChapterButton href="#nordson-overview">Overview</ChapterButton>
        <ChapterButton href="#nordson-cad-vs-reality">
          CAD vs Reality
        </ChapterButton>
        <ChapterButton href="#nordson-fixture-design">
          Fixture Design
        </ChapterButton>
        <ChapterButton href="#nordson-calibration">Calibration</ChapterButton>
        <ChapterButton href="#nordson-scale-up">Scale-Up</ChapterButton>
        <ChapterButton href="#nordson-shrinkage">Shrinkage</ChapterButton>
        <ChapterButton href="#nordson-result">Result</ChapterButton>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-7">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/35 to-transparent" />

          <p className="text-base leading-relaxed text-gray-300">
            I developed a fixtured dispensing system for automated{" "}
            <strong className="font-semibold text-white">5 µL</strong> delivery
            across dense sensor arrays. The project moved from alignment
            problems and CAD mismatch to a calibrated, scalable tray system for
            repeatable robot dispensing.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {nordsonTags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {nordsonMetrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-stretch">
        {[
          {
            number: "01",
            title: "Fix reference",
            note: "The real plate did not match the CAD.",
          },
          {
            number: "02",
            title: "Fixture tray",
            note: "Tray position had to become repeatable.",
          },
          {
            number: "03",
            title: "Calibrate",
            note: "Pressure was tested against droplet mass.",
          },
          {
            number: "04",
            title: "Scale",
            note: "Tray layout was redesigned around robot travel.",
          },
        ].map((step, index) => (
          <div key={step.title} className="contents">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-300/20 bg-blue-400/10 text-[11px] font-semibold text-blue-200">
                  {step.number}
                </div>

                <div className="text-sm font-semibold text-white">
                  {step.title}
                </div>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {step.note}
              </p>
            </div>

            {index < 3 && (
              <div className="hidden items-center justify-center text-gray-500 md:flex">
                →
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8">
        {nordsonChapters.map((chapter) => (
          <ChapterSection key={chapter.id} chapter={chapter} />
        ))}
      </div>
    </section>
  );
}

function CompactProjectSection({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const evidence = (project.evidence ?? []).filter((item) => item.src);
  const reverse = index % 2 === 1;

  return (
    <section id={project.id} className="mb-32 scroll-mt-24">
      <div className="mb-8">
        <div className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">
          {project.eyebrow}
        </div>

        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          {project.title}
        </h2>

        <p className="mt-3 max-w-4xl text-lg text-gray-300">
          {project.role}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className={reverse ? "lg:order-2" : ""}>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-7">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/35 to-transparent" />

            <p className="text-base leading-relaxed text-gray-300">
              {project.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
              {project.metrics.map((metric) => (
                <MetricCard key={metric.label} {...metric} />
              ))}
            </div>

            <div className="mt-8 grid gap-4">
              {project.details.map((detail) => (
                <DetailCard key={detail.label} {...detail} />
              ))}
            </div>
          </div>
        </div>

        <div className={reverse ? "lg:order-1" : ""}>
          <MediaCard
            item={project.hero}
            priority={index === 0}
            className="h-[380px] md:h-[520px]"
          />
        </div>
      </div>

      {evidence.length > 0 && (
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {evidence.map((item) => (
            <MediaCard
              key={`${project.title}-${item.src}-${item.caption}`}
              item={item}
              className="h-[320px] md:h-[420px]"
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(to_bottom,_#050505,_#0f172a_45%,_#050505)] px-6 py-10 text-gray-100 md:px-10 md:py-14">
      <div className="mx-auto grid max-w-[1520px] gap-8 xl:grid-cols-[240px_minmax(0,1fr)]">
        <SideMenu />

        <div className="min-w-0">
          <header id="top" className="mx-auto mb-20 max-w-4xl text-center">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Selected Engineering Work
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
              Projects
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-400">
              Mechanical design case studies with CAD ownership, prototypes,
              integration, testing, and measurable engineering outcomes.
            </p>
          </header>

          <MobileJumpMenu />

          <FeaturedNordsonCaseStudy />

          {otherProjects.map((project, index) => (
            <CompactProjectSection
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </main>
  );
}