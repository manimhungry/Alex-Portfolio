import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

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
  callouts?: string[];
};

type Chapter = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  bullets: string[];
  metrics?: Metric[];
};

type VideoSlot = {
  title: string;
  note: string;
  callouts: string[];
};

type Project = {
  id: string;
  eyebrow: string;
  title: string;
  role: string;
  summary: ReactNode;
  tags: string[];
  metrics: Metric[];
  hero: Media;
  details: {
    icon: string;
    label: string;
    text: string;
  }[];
  evidence?: Media[];
};

type ProjectPreview = {
  id: string;
  eyebrow: string;
  title: string;
  media: Media;
  signal: string;
  result: string;
  tags: string[];
};

type SnapshotCard = {
  title: string;
  text: string;
};

type SkillCard = {
  label: string;
  examples: string;
};

const nordsonMetrics: Metric[] = [
  { label: "Target volume", value: "5 µL" },
  { label: "Calibration", value: "24 → 54 kPa" },
  { label: "CAD correction", value: "40 → 38 mm" },
  { label: "Scale-up", value: "10 → 178 slots" },
  { label: "Print shrinkage", value: "3.12 mm" },
  { label: "XY compensation", value: "100.89%" },
];

const nordsonTags = [
  "Fixture Design",
  "CAD Correction",
  "Dispense Calibration",
  "FDM Prototyping",
  "Scale-Up",
];

const nordsonChapters: Chapter[] = [
  {
    id: "nordson-overview",
    eyebrow: "01 / Overview",
    title: "Manual dispensing → robot workflow",
    summary: "Fixture-based workflow for repeatable 5 µL dispensing.",
    bullets: [
      "Built tray workflow",
      "Combined fixture, robot setup, and calibration",
      "Validated with water",
    ],
    metrics: [
      { label: "Target", value: "5 µL" },
      { label: "Tray scale", value: "10 → 178" },
    ],
  },
  {
    id: "nordson-cad-vs-reality",
    eyebrow: "02 / CAD vs Reality",
    title: "CAD did not match hardware",
    summary: "The plate measured 38 mm, not the 40 mm CAD assumption.",
    bullets: [
      "Measured baseplate",
      "Found 2 mm spacing error",
      "Rebuilt around measured hardware",
    ],
    metrics: [{ label: "Hole spacing", value: "40 → 38 mm" }],
  },
  {
    id: "nordson-fixture-design",
    eyebrow: "03 / Fixture Design",
    title: "Tray controlled placement",
    summary: "The fixture reduced alignment dependence on manual placement.",
    bullets: [
      "Designed around a fixed datum",
      "Printed fit-check iterations",
      "Improved sensor positioning",
    ],
  },
  {
    id: "nordson-calibration",
    eyebrow: "04 / Dispense Calibration",
    title: "Pressure set by interpolation",
    summary: "Droplet mass tests bracketed the 5 µL target.",
    bullets: [
      "48 kPa → 4.6 µL",
      "54 kPa → 5.3 µL",
      "5 µL target → ~51.4 kPa",
    ],
    metrics: [
      { label: "Low test", value: "2.9 µL" },
      { label: "Mid test", value: "4.6 µL" },
      { label: "High test", value: "5.3 µL" },
      { label: "Target setting", value: "~51.4 kPa" },
    ],
  },
  {
    id: "nordson-scale-up",
    eyebrow: "05 / Scale-Up",
    title: "Scaled inside robot travel",
    summary: "The final tray layout stayed inside the usable machine envelope.",
    bullets: [
      "Started with small arrays",
      "Checked travel limit",
      "Landed on 178 slots",
    ],
    metrics: [
      { label: "Early tray", value: "10 slots" },
      { label: "Scaled tray", value: "178 slots" },
    ],
  },
  {
    id: "nordson-shrinkage",
    eyebrow: "06 / Print Shrinkage",
    title: "Large print shrinkage measured",
    summary: "The tray printed 3.12 mm short; next print scales XY to compensate.",
    bullets: [
      "CAD: 354.25 mm",
      "Print: 351.13 mm",
      "Next XY scale: 100.89%",
    ],
    metrics: [
      { label: "CAD target", value: "354.25 mm" },
      { label: "Printed length", value: "351.13 mm" },
      { label: "Error", value: "-3.12 mm" },
      { label: "Next XY scale", value: "100.89%" },
    ],
  },
  {
    id: "nordson-result",
    eyebrow: "07 / Result",
    title: "Workflow validated with water",
    summary: "The fixture and calibration path were ready for real-fluid follow-up.",
    bullets: [
      "Water workflow validated",
      "Repeatability improved",
      "Real-fluid test remains next",
    ],
  },
];

const nordsonVideoSlots: VideoSlot[] = [
  {
    title: "Robot motion",
    note: "Add dispensing path / stage movement clip",
    callouts: ["Robot path", "Tray indexing"],
  },
  {
    title: "Fixture loading",
    note: "Add tray loading or datum fit-check clip",
    callouts: ["Custom tray", "Repeatable datum"],
  },
  {
    title: "Droplet test",
    note: "Add close-up dispense calibration clip",
    callouts: ["5 µL target", "Pressure sweep"],
  },
];

const otherProjects: Project[] = [
  {
    id: "direct-drive-turret",
    eyebrow: "Triton Robotics / Drivetrain Redesign",
    title: "Direct-Drive Turret Redesign",
    role: "Primary CAD Owner — Motor Mount, Bearing Stack, and Slip-Ring Integration",
    summary: (
      <>
        Belt drive removed. Direct drive installed. Service time cut ~40%.
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
      callouts: [
        "2:1 belt path removed",
        "1:1 direct-drive layout",
        "~40% faster service",
      ],
    },
    details: [
      {
        icon: "⌁",
        label: "Problem",
        text: "Belt path added backlash, packaging complexity, and slow service.",
      },
      {
        icon: "⚙",
        label: "My contribution",
        text: "Owned motor mount, bearing stack, and slip-ring interfaces.",
      },
      {
        icon: "✓",
        label: "Result",
        text: "Service dropped from 15 to 9 minutes.",
      },
    ],
    evidence: [
      {
        type: "image",
        src: "/direct-drive-assembly.png",
        alt: "Direct-drive turret assembly CAD",
        caption: "Assembly view showing the direct-drive packaging and mount stack",
        contain: true,
        callouts: ["Direct-drive assembly", "Mount stack", "Slip-ring clearance"],
      },
      {
        type: "image",
        src: "/integrated-robot.png",
        alt: "Integrated robot with turret",
        caption: "Turret system installed on the robot platform",
        callouts: ["Subsystem integrated", "Service access improved"],
      },
    ],
  },
  {
    id: "onboarding-aircraft",
    eyebrow: "Triton UAS / Rapid Aircraft Build",
    title: "V-Tail Onboarding Aircraft",
    role: "Lead Mechanical Engineer — Concept, CAD, Fabrication, and Flight Test",
    summary: (
      <>
        Rapid V-tail build from CAD layout to controlled shakedown flight.
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
      callouts: [
        "Structure validated",
        "Controls/power checked",
        "Risk-limited flight test",
      ],
    },
    details: [
      {
        icon: "△",
        label: "Problem",
        text: "Build an onboarding aircraft fast enough to test.",
      },
      {
        icon: "✎",
        label: "My contribution",
        text: "Led layout, packaging, fabrication, and V-tail integration.",
      },
      {
        icon: "✈",
        label: "Result",
        text: "Flight validated structure, controls, and power.",
      },
    ],
    evidence: [
      {
        type: "image",
        src: "/CAD.png",
        alt: "V-tail aircraft CAD layout",
        caption: "CAD layout used to define the V-tail aircraft geometry",
        contain: true,
        callouts: [
          "V-tail configuration",
          "Motor/electronics packaging",
          "Rapid CAD-to-build layout",
        ],
      },
      {
        type: "image",
        src: "/Side.png",
        alt: "Aircraft side view",
        caption: "Side view of the fabricated aircraft configuration",
        callouts: ["Fabricated airframe", "Flight-ready layout"],
      },
    ],
  },
  {
    id: "ball-retrieval-robot",
    eyebrow: "Class Competition / Mechanism Design",
    title: "Timed Ball Retrieval Robot",
    role: "Mechanical Engineer — Drivetrain, Lift Mechanism, CAD, and Fabrication",
    summary: (
      <>
        Friction drivetrain and double reverse four-bar for timed collection.
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
      callouts: [
        "Friction drivetrain",
        "Double reverse four-bar",
        "Timed competition runs",
      ],
    },
    details: [
      {
        icon: "◎",
        label: "Problem",
        text: "Collect and deliver balls inside a 60-second run.",
      },
      {
        icon: "⚙",
        label: "My contribution",
        text: "Designed mechanisms, fabricated parts, and tuned runs.",
      },
      {
        icon: "▲",
        label: "Result",
        text: "Peak: 20 balls in 15 seconds. Placed 6/12.",
      },
    ],
    evidence: [
      {
        type: "image",
        src: "/CADR.png",
        alt: "Ball retrieval robot CAD assembly",
        caption: "CAD assembly used to package the drivetrain and lift mechanism",
        contain: true,
        callouts: ["CAD assembly", "Friction drivetrain", "Lift mechanism"],
      },
    ],
  },
];

const projectPreviews: ProjectPreview[] = [
  {
    id: "nordson",
    eyebrow: "Lab Automation",
    title: "Automated 5 µL Dispensing Workflow",
    media: {
      src: "/setup.jpg",
      alt: "Automated dispensing setup with robot stage, controller, CAD reference, and custom tray",
      callouts: ["5 µL target", "Custom tray fixture"],
    },
    signal: "10 → 178 slots",
    result: "Corrected the fixture, calibrated pressure, and scaled the tray.",
    tags: ["Fixture Design", "Calibration", "Scale-Up"],
  },
  {
    id: "direct-drive-turret",
    eyebrow: "Triton Robotics",
    title: "Direct-Drive Turret Redesign",
    media: {
      src: "/turret-overview.png",
      alt: "Direct-drive turret overview",
      contain: true,
      callouts: ["2:1 belt path removed", "~40% faster service"],
    },
    signal: "15 → 9 min service",
    result: "Removed belt backlash with a cleaner 1:1 drive.",
    tags: ["SOLIDWORKS", "Waterjet", "Serviceability"],
  },
  {
    id: "onboarding-aircraft",
    eyebrow: "Triton UAS",
    title: "V-Tail Onboarding Aircraft",
    media: {
      type: "video",
      src: "/Test.mp4",
      caption: "Shakedown flight used to validate structure, controls, and power",
      callouts: ["Structure validated", "Flight test"],
    },
    signal: "~1 week build",
    result: "Led CAD, packaging, fabrication, and flight test.",
    tags: ["Aircraft Design", "CAD", "Flight Test"],
  },
  {
    id: "ball-retrieval-robot",
    eyebrow: "Class Competition",
    title: "Timed Ball Retrieval Robot",
    media: {
      type: "video",
      src: "/Action.mp4",
      caption: "Competition robot operating during ball retrieval testing",
      callouts: ["Friction drivetrain", "Double reverse four-bar"],
    },
    signal: "20 balls / 15 s",
    result: "Built and tuned the mechanism for repeatable runs.",
    tags: ["Mechanisms", "Laser Cutting", "Testing"],
  },
];

const portfolioTags = [
  "Mechanical Design",
  "CAD",
  "Prototyping",
  "Testing",
  "Manufacturing Support",
  "Robotics",
];

const snapshotCards: SnapshotCard[] = [
  {
    title: "CAD ownership",
    text: "Fixture layouts, drivetrain geometry, and CAD-ready assemblies.",
  },
  {
    title: "Built hardware",
    text: "3D printed, waterjet, laser-cut, and assembled prototypes.",
  },
  {
    title: "Validation mindset",
    text: "Measured, tested, tuned, and closed the loop.",
  },
];

const skillCards: SkillCard[] = [
  {
    label: "CAD / DFM",
    examples: "Nordson tray, turret mount, UAS layout",
  },
  {
    label: "Testing",
    examples: "Dispense calibration, flight test, competition runs",
  },
  {
    label: "Robotics",
    examples: "Turret, ball robot, Nordson robot workflow",
  },
  {
    label: "Manufacturing",
    examples: "3D printing, waterjet, laser cutting, vendor-ready thinking",
  },
];

const nordsonSummaryCards = [
  {
    label: "Objective",
    text: "Repeatable 5 µL dispensing across dense sensor arrays.",
  },
  {
    label: "My contribution",
    text: "Fixture logic, CAD correction, tray iterations, pressure calibration.",
  },
  {
    label: "Result",
    text: "Water-validated workflow scaled to 178 slots.",
  },
];

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-gray-200">
      {children}
    </span>
  );
}

function MetricCard({ label, value }: Metric) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">
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
    <div className="border-t border-white/10 pt-5">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-300/20 bg-blue-400/10 text-sm text-blue-200">
          {icon}
        </div>
        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
          {label}
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-gray-300">{text}</p>
    </div>
  );
}

function PreviewMedia({ item }: { item: Media }) {
  return (
    <div className="relative h-56 overflow-hidden border-b border-white/10 bg-black/30">
      {item.type === "video" ? (
        <video
          src={item.src}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <Image
          src={item.src}
          alt={item.alt ?? "Project preview"}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`transition duration-500 group-hover:scale-[1.03] ${
            item.contain ? "object-contain p-4" : "object-cover"
          }`}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {item.callouts && item.callouts.length > 0 && (
        <div className="absolute left-4 top-4 flex max-w-[88%] flex-wrap gap-2">
          {item.callouts.map((callout) => (
            <span
              key={callout}
              className="rounded-full border border-white/15 bg-black/55 px-3 py-1 text-xs font-medium text-white shadow-lg backdrop-blur"
            >
              {callout}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function MediaCard({
  item,
  priority = false,
  className = "h-[520px]",
  hero = false,
}: {
  item: Media;
  priority?: boolean;
  className?: string;
  hero?: boolean;
}) {
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
            preload="metadata"
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

        {item.callouts && item.callouts.length > 0 && (
          <div className="absolute left-5 top-5 flex max-w-[85%] flex-wrap gap-2">
            {item.callouts.map((callout) => (
              <span
                key={callout}
                className="rounded-full border border-white/15 bg-black/55 px-3 py-1 text-xs font-medium text-white shadow-lg backdrop-blur"
              >
                {callout}
              </span>
            ))}
          </div>
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

function VideoPlaceholder({ slot }: { slot: VideoSlot }) {
  return (
    <div className="group overflow-hidden rounded-[1.5rem] border border-dashed border-white/15 bg-white/[0.025]">
      <div className="relative flex h-56 items-center justify-center bg-black/25">
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {slot.callouts.map((callout) => (
            <span
              key={callout}
              className="rounded-full border border-white/15 bg-black/55 px-3 py-1 text-xs font-medium text-white shadow-lg backdrop-blur"
            >
              {callout}
            </span>
          ))}
        </div>

        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-blue-300/25 bg-blue-400/10 text-2xl text-blue-200 transition group-hover:scale-105">
          ▶
        </div>
      </div>

      <div className="p-5">
        <h4 className="text-lg font-semibold text-white">{slot.title}</h4>
        <p className="mt-2 text-sm leading-6 text-gray-400">{slot.note}</p>
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
    <div className="mt-5 overflow-hidden rounded-[1.35rem] border border-white/10 bg-black/20">
      <div className="border-b border-white/10 px-4 py-3">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-300">
          {eyebrow}
        </div>
        <div className="mt-1 text-sm font-semibold text-white">{title}</div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function MeasurementRow({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "red" | "blue";
}) {
  const isRed = tone === "red";

  return (
    <div
      className={`rounded-2xl border p-4 ${
        isRed
          ? "border-red-300/25 bg-red-400/[0.055]"
          : "border-blue-300/25 bg-blue-400/[0.07]"
      }`}
    >
      <div
        className={`mb-5 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] ${
          isRed ? "text-red-200" : "text-blue-200"
        }`}
      >
        <span>{label}</span>
        <span
          className={`rounded-full border px-3 py-1 normal-case tracking-normal ${
            isRed
              ? "border-red-300/25 bg-red-400/10"
              : "border-blue-300/25 bg-blue-400/10"
          }`}
        >
          {value}
        </span>
      </div>
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-full border-4 border-current opacity-80" />
        <div className="h-px flex-1 bg-current opacity-60" />
        <div className="text-lg font-semibold text-white">{value}</div>
        <div className="h-px flex-1 bg-current opacity-60" />
        <div className="h-10 w-10 rounded-full border-4 border-current opacity-80" />
      </div>
    </div>
  );
}

function CadRealityVisual() {
  return (
    <VisualShell
      eyebrow="CAD vs Measured Hardware"
      title="Reference geometry corrected around the real plate"
    >
      <div className="grid gap-4">
        <MeasurementRow label="CAD assumption" value="40 mm" tone="red" />
        <MeasurementRow label="Measured hardware" value="38 mm" tone="blue" />
      </div>
    </VisualShell>
  );
}

function OverviewVisual() {
  const steps = ["Tray", "Robot", "Pressure", "Water test"];

  return (
    <VisualShell eyebrow="System Flow" title="Fixture + robot + calibration">
      <div className="grid gap-3 sm:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={step}
            className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-4"
          >
            <div className="text-xs font-semibold text-blue-200">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="mt-5 text-sm font-semibold text-white">{step}</div>
            {index < steps.length - 1 && (
              <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-blue-200 sm:block">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </VisualShell>
  );
}

function FixtureVisual() {
  return (
    <VisualShell eyebrow="Fixture Datum" title="Tray locates from fixed references">
      <div className="rounded-2xl border border-blue-300/20 bg-blue-400/[0.06] p-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
            Sensor Tray
          </div>
          <div className="rounded-full border border-blue-300/20 px-3 py-1 text-xs font-semibold text-blue-100">
            repeatable datum
          </div>
        </div>

        <div className="relative h-28 rounded-xl border border-white/10 bg-black/20">
          <div className="absolute left-4 top-4 h-20 w-2 rounded-full bg-amber-300" />
          <div className="absolute bottom-4 left-4 right-4 grid grid-cols-8 gap-2">
            {Array.from({ length: 16 }).map((_, index) => (
              <span
                key={index}
                className="h-2.5 rounded-full bg-blue-200/80"
              />
            ))}
          </div>
          <div className="absolute left-8 top-5 text-xs font-semibold text-amber-100">
            fixed edge
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

function ScaleVisual() {
  return (
    <VisualShell eyebrow="Travel Envelope" title="178 slots kept inside usable motion">
      <div className="relative h-44 rounded-2xl border border-white/10 bg-black/20 p-5">
        <div className="absolute inset-5 rounded-xl border border-blue-300/30 bg-blue-400/[0.04]" />
        <div className="absolute left-8 top-8 h-24 w-[54%] rounded-lg border-2 border-blue-300 bg-blue-400/10" />
        <div className="absolute right-8 top-12 h-20 w-[30%] rounded-lg border-2 border-dashed border-red-300/70 bg-red-400/10" />
        <div className="absolute left-10 top-11 text-xs font-semibold text-blue-100">
          178-slot tray
        </div>
        <div className="absolute right-12 top-16 text-xs font-semibold text-red-100">
          oversized
        </div>
        <div className="absolute bottom-7 left-[35%] -translate-x-1/2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-semibold text-gray-200">
          usable robot travel
        </div>
      </div>
    </VisualShell>
  );
}

function ShrinkageVisual() {
  return (
    <VisualShell eyebrow="Print Shrinkage" title="Measured shrinkage → compensation scale">
      <div className="grid gap-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
            CAD target
          </div>
          <div className="h-3 w-full rounded-full bg-blue-300" />
          <div className="mt-2 text-lg font-semibold text-white">354.25 mm</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
            Printed tray
          </div>
          <div className="h-3 w-[88%] rounded-full bg-amber-300" />
          <div className="mt-2 flex items-center justify-between gap-3">
            <span className="text-lg font-semibold text-white">351.13 mm</span>
            <span className="rounded-full border border-amber-300/25 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-100">
              -3.12 mm
            </span>
          </div>
        </div>
        <div className="rounded-2xl border border-blue-300/20 bg-blue-400/[0.06] p-4">
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
            Next print compensation
          </div>
          <div className="flex items-end justify-between gap-4">
            <div className="text-3xl font-semibold tracking-tight text-white">
              100.89%
            </div>
            <div className="rounded-full border border-blue-300/25 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-100">
              scale XY up
            </div>
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

function ResultVisual() {
  const items = [
    "Water workflow validated",
    "Repeatability improved",
    "Real-fluid test next",
  ];

  return (
    <VisualShell eyebrow="Validation Status" title="Validated path, clear next step">
      <div className="grid gap-3">
        {items.map((item, index) => (
          <div
            key={item}
            className={`flex items-center gap-3 rounded-2xl border p-4 ${
              index < 2
                ? "border-emerald-300/20 bg-emerald-400/[0.06]"
                : "border-amber-300/20 bg-amber-400/[0.06]"
            }`}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 text-sm font-semibold text-white">
              {index < 2 ? "✓" : "→"}
            </span>
            <span className="text-sm font-semibold text-gray-200">{item}</span>
          </div>
        ))}
      </div>
    </VisualShell>
  );
}

function CompactCalibrationPlot() {
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
    <VisualShell eyebrow="Calibration Plot" title="~51.4 kPa for 5 µL">
      <div className="rounded-2xl bg-black/20 p-3">
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

            <polyline
              points={linePoints}
              fill="none"
              stroke="#4f80bd"
              strokeWidth="3"
            />

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

            <text
              x={plot.left + plot.width / 2}
              y={height - 20}
              textAnchor="middle"
              fill="#c7ced9"
              fontSize="13"
              fontWeight="700"
            >
              Pressure (kPa)
            </text>
            <text
              x="16"
              y={plot.top + plot.height / 2}
              textAnchor="middle"
              fill="#c7ced9"
              fontSize="13"
              fontWeight="700"
              transform={`rotate(-90 16 ${plot.top + plot.height / 2})`}
            >
              Estimated volume (µL)
            </text>
          </svg>
      </div>
      <div className="mt-3 rounded-2xl border border-blue-300/20 bg-blue-400/10 p-3 text-sm font-semibold text-blue-100">
        48 kPa → 4.6 µL, 54 kPa → 5.3 µL, target → ~51.4 kPa
      </div>
    </VisualShell>
  );
}

function NordsonChapterVisual({ id }: { id: string }) {
  if (id === "nordson-overview") return <OverviewVisual />;
  if (id === "nordson-cad-vs-reality") return <CadRealityVisual />;
  if (id === "nordson-fixture-design") return <FixtureVisual />;
  if (id === "nordson-calibration") return <CompactCalibrationPlot />;
  if (id === "nordson-scale-up") return <ScaleVisual />;
  if (id === "nordson-shrinkage") return <ShrinkageVisual />;
  return <ResultVisual />;
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

          <div className="px-3 text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
            Project Menu
          </div>
        </div>

        <nav aria-label="Project menu" className="space-y-5 text-sm">
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
    <nav
      aria-label="Project jump links"
      className="mb-12 flex gap-2 overflow-x-auto rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-3 backdrop-blur xl:hidden"
    >
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

      {otherProjects.map((project) => (
        <a
          key={project.id}
          href={`#${project.id}`}
          className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-gray-400"
        >
          {project.title}
        </a>
      ))}
    </nav>
  );
}

function PortfolioSnapshot() {
  return (
    <section className="mb-16">
      <div className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
        Portfolio Snapshot
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        {portfolioTags.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {snapshotCards.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
          >
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-gray-400">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectGallery() {
  return (
    <section className="mb-20">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
            Project Gallery
          </div>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Visual proof first, details after
          </h2>
        </div>

        <p className="max-w-xl text-sm leading-6 text-gray-400 md:text-right">
          Four builds. Real hardware. Measured outcomes.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projectPreviews.map((project) => (
          <a
            key={project.id}
            href={`#${project.id}`}
            className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-blue-300/25 hover:bg-white/[0.055]"
          >
            <PreviewMedia item={project.media} />

            <div className="p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
                {project.eyebrow}
              </div>

              <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {project.title}
                </h3>

                <div className="shrink-0 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-semibold text-gray-200">
                  {project.signal}
                </div>
              </div>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                {project.result}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={`${project.id}-${tag}`}>{tag}</Tag>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function SkillIndex() {
  return (
    <section className="mb-16">
      <div className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
        Skill Index
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {skillCards.map((skill) => (
          <div
            key={skill.label}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
          >
            <div className="font-semibold text-white">{skill.label}</div>
            <p className="mt-3 text-sm leading-6 text-gray-400">
              {skill.examples}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ChapterSection({ chapter }: { chapter: Chapter }) {
  return (
    <section id={chapter.id} className="scroll-mt-28">
      <div className="relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20">
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/35 to-transparent" />

        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
          {chapter.eyebrow}
        </div>

        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
          {chapter.title}
        </h3>

        <p className="mt-4 text-sm leading-6 text-gray-300">
          {chapter.summary}
        </p>

        <NordsonChapterVisual id={chapter.id} />

        <div className="mt-5 flex flex-wrap gap-2">
          {chapter.bullets.map((bullet) => (
            <span
              key={bullet}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-gray-300"
            >
              {bullet}
            </span>
          ))}
        </div>

        {chapter.metrics && (
          <div className="mt-auto grid grid-cols-2 gap-x-5 gap-y-3 border-t border-white/10 pt-5">
            {chapter.metrics.map((metric) => (
              <div key={metric.label}>
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">
                  {metric.label}
                </div>
                <div className="mt-1 text-lg font-semibold text-white">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function FeaturedNordsonCaseStudy() {
  return (
    <section id="nordson" className="mb-36 scroll-mt-24">
      <div className="mb-8">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
          Lab Automation / Fixture Design
        </div>

        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Automated 5 µL Dispensing Workflow
        </h2>

        <p className="mt-3 max-w-5xl text-lg text-gray-300">
          Mechanical Owner — Fixture Design, Calibration, and Test
        </p>
      </div>

      <MediaCard
        item={{
          type: "image",
          src: "/setup.jpg",
          alt: "Automated dispensing setup with robot stage, controller, CAD reference, and custom tray",
          caption:
            "Automated dispensing setup with custom tray, robot stage, and controller",
          callouts: [
            "5 µL target",
            "Custom tray fixture",
            "Robot + dispense controller",
          ],
        }}
        priority
        hero
        className="h-[440px] md:h-[620px]"
      />

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {nordsonSummaryCards.map((item) => (
          <div
            key={item.label}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/35 to-transparent" />
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
              {item.label}
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-300">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-7">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/35 to-transparent" />

          <p className="text-base leading-7 text-gray-300">
            CAD mismatch → corrected fixture → calibrated pressure → scaled tray.
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

      <div className="mt-8">
        <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
              Video Slots
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              Nordson clips 
            </h3>
          </div>
          <p className="max-w-lg text-sm leading-6 text-gray-400 md:text-right">
            Coming Soon 
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {nordsonVideoSlots.map((slot) => (
            <VideoPlaceholder key={slot.title} slot={slot} />
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
            Engineering Notes
          </div>

          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            Key decisions and proof points
          </h3>
        </div>
      </div>

      <div className="mt-6 grid items-stretch gap-4 lg:grid-cols-2">
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
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
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

            <p className="text-base leading-7 text-gray-300">
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
    <main
      id="main"
      className="min-h-screen bg-[linear-gradient(to_bottom,_#050505,_#0f172a_45%,_#050505)] px-6 py-10 text-gray-100 md:px-10 md:py-14"
    >
      <div className="mx-auto grid max-w-[1520px] gap-8 xl:grid-cols-[240px_minmax(0,1fr)]">
        <SideMenu />

        <div className="min-w-0">
          <header id="top" className="mx-auto mb-20 max-w-4xl text-center">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
              Selected Work
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
              Projects
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-7 text-gray-400">
              Mechanical design case studies focused on CAD, prototypes, testing,
              and real hardware outcomes.
            </p>
          </header>

          <MobileJumpMenu />
          <PortfolioSnapshot />
          <ProjectGallery />
          <SkillIndex />

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
