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
  src: string;
  caption: string;
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

const engineeringStrengths = [
  {
    label: "CAD to Hardware",
    text: "Designs that are measured, assembled, and corrected against real parts.",
  },
  {
    label: "Test-Driven Iteration",
    text: "Failures become data, then geometry, settings, or process changes.",
  },
  {
    label: "Fixture Design",
    text: "Repeatable datums, practical constraints, and cleaner setup workflows.",
  },
  {
    label: "Mechanism Integration",
    text: "Motion, packaging, fabrication, and serviceability in one system.",
  },
];

const currentBuildSignals: Metric[] = [
  { label: "Status", value: "Parts staged" },
  { label: "Next proof", value: "First motion" },
  { label: "Scope", value: "6 axes" },
  { label: "Case study", value: "Coming after assembly" },
];

const nordsonChapters: Chapter[] = [
  {
    id: "nordson-overview",
    eyebrow: "01 / System",
    title: "Manual → automated",
    summary: "In the Wang Lab, I built a workflow that taught the Nordson robot where to move, what to look for with image detection, and how to repeat the dispense steps across a tray.",
    bullets: [
      "100-position dispense run",
      "Step-and-repeat robot motion",
      "Tray-based sensor workflow",
    ],
    metrics: [
      { label: "Target", value: "5 µL" },
      { label: "Validated run", value: "100 positions" },
    ],
  },
  {
    id: "nordson-calibration",
    eyebrow: "02 / Calibration",
    title: "Pressure → droplet mass",
    summary: "My PI emphasized that the droplets needed to be 5 µL, so I measured dispense mass at different pressures and used interpolation to land on the target setting.",
    bullets: [
      "24 kPa → 2.9 µL",
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
    id: "nordson-cad-vs-reality",
    eyebrow: "03 / CAD vs Reality",
    title: "CAD ≠ hardware",
    summary: "I was confused why the 40 mm hole spacing from Nordson's reference CAD was not working. After measuring the real plate, I found it was actually 38 mm and rebuilt the geometry myself.",
    bullets: [
      "Found 40 mm → 38 mm mismatch",
      "Measured the real baseplate",
      "Rebuilt the fixture around real hardware",
    ],
    metrics: [{ label: "Hole spacing", value: "40 → 38 mm" }],
  },
  {
    id: "nordson-fixture-design",
    eyebrow: "04 / Fixture Design",
    title: "Tray locks to datum",
    summary: "The first 10-slot tray proved the idea, but angle and placement still varied. I added a prong-style fixture so the tray locked into a repeatable position.",
    bullets: [
      "Used real plate holes",
      "Selected prong-style locking",
      "Added orientation/error-proofing geometry",
    ],
  },
  {
    id: "nordson-result",
    eyebrow: "05 / Testing Iteration",
    title: "Failures → clean rows",
    summary: "When the droplets did not dispense cleanly, I traced it to surface cleanliness, z-height, and pressure sensitivity, then adjusted the setup until the rows looked consistent.",
    bullets: [
      "Attempt 1: ~70% visible success",
      "Cleaned sample surface",
      "Adjusted z-height to 82.5",
      "Attempt 2: no visible dispense failures",
    ],
    metrics: [
      { label: "Pressure", value: "52 kPa" },
      { label: "Dispense time", value: "0.05 s" },
    ],
  },
  {
    id: "nordson-scale-up",
    eyebrow: "06 / Scale-Up",
    title: "Scale inside travel",
    summary: "Scaling past 100 slots was exciting until the robot/table envelope became the limit. The larger concept did not fit the physical setup, so I reduced it to 178 slots.",
    bullets: [
      "261-slot concept exceeded travel",
      "Robot hit the lab wall before full extension",
      "178-slot tray fit usable motion",
    ],
    metrics: [
      { label: "Validated run", value: "100 positions" },
      { label: "Scaled tray", value: "178 slots" },
    ],
  },
  {
    id: "nordson-shrinkage",
    eyebrow: "07 / Print Shrinkage",
    title: "Shrinkage measured",
    summary: "The 178-slot FDM tray printed shorter than CAD, which surprised me. I measured the shrinkage, calculated XY compensation, and started looking at resin or outsourced manufacturing for the next version.",
    bullets: [
      "CAD target: 354.25 mm",
      "Printed length: 351.13 mm",
      "Calculated XY scale: 100.89%",
    ],
    metrics: [
      { label: "CAD target", value: "354.25 mm" },
      { label: "Printed length", value: "351.13 mm" },
      { label: "Error", value: "-3.12 mm" },
      { label: "XY compensation", value: "100.89%" },
    ],
  },
];

const nordsonVideoSlots: VideoSlot[] = [
  {
    title: "100-position dispense run",
    note: "Robot motion, tray indexing, repeatable dispense.",
    src: "/nordson-100-dispense.mp4",
    caption: "Automated 100-position dispense sequence",
    callouts: ["100-position run", "Hands-free sequence", "Repeatable dispense"],
  },
  {
    title: "Slow-motion droplet",
    note: "Close-up proof of clean droplet formation.",
    src: "/IMG_6773.mp4",
    caption: "Slow-motion droplet formation",
    callouts: ["Clean droplet", "5 µL target", "Close-up validation"],
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
      caption: "Original belt-drive turret layout",
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
        caption: "Direct-drive motor mount and bearing stack",
        contain: true,
        callouts: ["Direct-drive assembly", "Mount stack", "Slip-ring clearance"],
      },
      {
        type: "image",
        src: "/integrated-robot.png",
        alt: "Integrated robot with turret",
        caption: "Turret integrated on the robot platform",
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
      caption: "Shakedown flight validation",
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
        caption: "V-tail aircraft CAD layout",
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
        caption: "Fabricated V-tail airframe",
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
      caption: "Ball retrieval test run",
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
        caption: "Drivetrain and lift mechanism CAD",
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
      type: "image",
      src: "/setup.jpg",
      alt: "Automated dispensing setup with robot stage, controller, CAD reference, and custom tray",
      caption: "Automated dispensing setup",
      callouts: ["5 µL target", "100-position run", "Custom tray fixture"],
    },
    signal: "10 → 178 slots",
    result: "Current workflow is validated; next step is testing a new fluid.",
    tags: ["Fixture Design", "Calibration", "Active Validation"],
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

function MetricCard({ label, value }: Metric) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">
        {label}
      </div>
      <div className="mt-2 break-words text-xl font-semibold text-white">
        {value}
      </div>
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

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex max-w-full flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="max-w-full break-words rounded-full border border-white/10 bg-white/[0.055] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-gray-200 sm:text-[11px] sm:tracking-[0.12em]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function PreviewMedia({ item }: { item: Media }) {
  return (
    <div className="relative h-56 overflow-hidden border-b border-white/10 bg-black/30">
      {item.type === "video" ? (
        <video
          src={item.src}
          aria-label={item.caption ?? "Project preview video"}
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
            aria-label={item.caption ?? "Project video"}
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
    <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/20">
      <div className="relative h-80 bg-black/30 md:h-[420px]">
        <video
          src={slot.src}
          aria-label={slot.caption}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-4 left-5 right-5">
          <h4 className="text-xl font-semibold tracking-tight text-white">
            {slot.title}
          </h4>
          <p className="mt-1 text-sm text-gray-300">{slot.caption}</p>
        </div>
      </div>

      <div className="p-5">
        <p className="text-sm leading-6 text-gray-400">{slot.note}</p>
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

function InlineMedia({
  item,
  className = "h-72 md:h-80",
}: {
  item: Media;
  className?: string;
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-black/25">
      <div className={`relative w-full ${className}`}>
        {item.type === "video" ? (
          <video
            src={item.src}
            aria-label={item.alt ?? item.caption ?? "Project video"}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
          />
        ) : (
          <Image
            src={item.src}
            alt={item.alt ?? item.caption ?? "Nordson project media"}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`transition duration-500 group-hover:scale-[1.025] ${
              item.contain ? "object-contain p-3" : "object-cover"
            }`}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {item.caption && (
          <div className="absolute inset-x-0 bottom-0 px-4 pb-3 pt-12">
            <p className="text-xs font-medium text-gray-100">{item.caption}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function EquationCard() {
  return (
    <div className="rounded-2xl border border-blue-300/20 bg-blue-400/[0.06] p-4">
      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-200">
        Interpolation result
      </div>
      <div className="mt-3 rounded-xl border border-white/10 bg-black/25 p-3 font-mono text-xs leading-6 text-gray-200">
        P = 48 + ((5.0 - 4.6) / (5.3 - 4.6)) × (54 - 48)
      </div>
      <div className="mt-3 text-2xl font-semibold tracking-tight text-white">
        ~51.4 kPa
      </div>
    </div>
  );
}

function OverviewVisual() {
  return (
    <VisualShell eyebrow="System proof" title="Automated 100-position run">
      <InlineMedia
        className="h-80 md:h-[420px]"
        item={{
          type: "video",
          src: "/nordson-100-dispense.mp4",
          alt: "Automated 100-position Nordson dispense run",
          caption: "Hands-free dispense sequence validating the tray workflow",
          callouts: ["100-position run", "Step-and-repeat", "Hands-free"],
        }}
      />
    </VisualShell>
  );
}

function CalibrationEvidenceVisual() {
  return (
    <VisualShell eyebrow="Droplet mass calibration" title="Pressure sweep → 5 µL setting">
      <div className="grid gap-3 md:grid-cols-3">
        <InlineMedia
          item={{
            src: "/calibration-24kpa-2p9mg.png",
            alt: "Scale showing 2.9 milligrams at 24 kilopascals",
            caption: "24 kPa → 2.9 µL",
            callouts: ["24 kPa", "2.9 µL"],
          }}
        />
        <InlineMedia
          item={{
            src: "/calibration-48kpa-4p6mg.png",
            alt: "Scale showing 4.6 milligrams at 48 kilopascals",
            caption: "48 kPa → 4.6 µL",
            callouts: ["48 kPa", "4.6 µL"],
          }}
        />
        <InlineMedia
          item={{
            src: "/calibration-54kpa-5p3mg.png",
            alt: "Scale showing 5.3 milligrams at 54 kilopascals",
            caption: "54 kPa → 5.3 µL",
            callouts: ["54 kPa", "5.3 µL"],
          }}
        />
      </div>
      <div className="mt-3 grid gap-3 md:grid-cols-[1fr_0.8fr]">
        <CompactCalibrationPlot />
        <EquationCard />
      </div>
    </VisualShell>
  );
}

function CadRealityVisual() {
  return (
    <VisualShell eyebrow="CAD vs measured hardware" title="40 mm reference became 38 mm real geometry">
      <div className="grid gap-4 lg:grid-cols-2">
        <InlineMedia
          className="h-96 md:h-[520px]"
          item={{
            src: "/cad-reference-40mm.png",
            alt: "CAD reference showing 40 millimeter hole spacing",
            contain: true,
            caption: "CAD reference: 40 mm",
            callouts: ["CAD", "40 mm"],
          }}
        />
        <InlineMedia
          className="h-96 md:h-[520px]"
          item={{
            src: "/real-plate-38mm.png",
            alt: "Measured real Nordson plate showing 38 millimeter hole spacing",
            caption: "Measured hardware: 38 mm",
            callouts: ["Real plate", "38 mm"],
          }}
        />
      </div>
      <div className="mt-4">
        <InlineMedia
          className="h-96 md:h-[520px]"
          item={{
            src: "/corrected-plate-38mm-sketch.png",
            alt: "Corrected plate sketch showing 38 millimeter spacing",
            contain: true,
            caption: "Corrected model: 38 mm grid",
            callouts: ["Corrected CAD", "Measured geometry"],
          }}
        />
      </div>
    </VisualShell>
  );
}

function FixtureVisual() {
  return (
    <VisualShell eyebrow="Fixture design" title="Tray lock and hole pattern tied the design to the real plate">
      <div className="grid gap-3 md:grid-cols-2">
        <InlineMedia
          className="h-80 md:h-[360px]"
          item={{
            src: "/corrected-plate-cad.png",
            alt: "Nordson tray CAD with hole pattern",
            contain: true,
            caption: "Hole-pattern tray layout",
            callouts: ["Plate interface", "Tray datum"],
          }}
        />
        <InlineMedia
          className="h-80 md:h-[360px]"
          item={{
            src: "/prong-lock-cad.png",
            alt: "Prong lock CAD detail",
            contain: true,
            caption: "Prong-style locking detail",
            callouts: ["Prong lock", "Repeatable fit"],
          }}
        />
      </div>
    </VisualShell>
  );
}

function TestingEvidenceVisual() {
  return (
    <VisualShell eyebrow="Real testing" title="Attempt 1 failures → Attempt 2 clean result">
      <div className="grid gap-3 md:grid-cols-2">
        <InlineMedia
          className="h-80 md:h-[360px]"
          item={{
            src: "/dispense-attempt-1-failures.png",
            alt: "Dispense attempt 1 with visible failures circled",
            caption: "Attempt 1: visible row failures",
            callouts: ["~70% success", "Failures marked"],
          }}
        />
        <InlineMedia
          className="h-80 md:h-[360px]"
          item={{
            src: "/dispense-attempt-2-success.png",
            alt: "Dispense attempt 2 with aligned successful droplets",
            caption: "Attempt 2: no visible dispense failures",
            callouts: ["Cleaned surface", "Z-height adjusted"],
          }}
        />
      </div>
      <div className="mt-3">
        <InlineMedia
          className="h-80 md:h-[440px]"
          item={{
            type: "video",
            src: "/IMG_6773.mp4",
            alt: "Slow motion droplet dispense video",
            caption: "Slow-motion droplet formation",
            callouts: ["Slow motion", "Clean droplet", "Close-up validation"],
          }}
        />
      </div>
    </VisualShell>
  );
}

function ScaleVisual() {
  return (
    <VisualShell eyebrow="Scale-up" title="100-position validation → 178-slot tray scale-up">
      <div className="grid gap-3 md:grid-cols-2">
        <InlineMedia
          className="h-80 md:h-[420px]"
          item={{
            src: "/tray-178-cad.png",
            alt: "178-slot tray CAD layout",
            contain: true,
            caption: "178-slot tray CAD",
            callouts: ["178 slots", "Usable travel"],
          }}
        />
        <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-300">
            Constraint
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-300">
            A larger 261-slot concept used the plate area, but the robot reached
            the physical lab wall before full extension. The 178-slot tray kept
            the scale-up inside usable machine travel.
          </p>
          <div className="mt-5 grid gap-3">
            <MetricCard label="Validated video" value="100 positions" />
            <MetricCard label="Scaled tray" value="178 slots" />
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

function ShrinkageVisual() {
  return (
    <VisualShell eyebrow="Manufacturing correction" title="Problem photo + correction calculation">
      <div className="grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
        <InlineMedia
          className="h-80 md:h-[440px]"
          item={{
            src: "/tray-178-printed-shrinkage-gap.png",
            alt: "Printed 178-slot tray showing shrinkage gap",
            caption: "Printed tray gap showed shrinkage from CAD target",
            callouts: ["Printed tray", "Shrinkage gap"],
          }}
        />
        <div className="rounded-2xl border border-amber-300/20 bg-amber-400/[0.055] p-5">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-200">
            Calculation
          </div>
          <div className="mt-4 grid gap-3 text-sm text-gray-200">
            <div className="flex justify-between gap-4 border-b border-white/10 pb-2">
              <span>CAD target</span>
              <strong>354.25 mm</strong>
            </div>
            <div className="flex justify-between gap-4 border-b border-white/10 pb-2">
              <span>Printed length</span>
              <strong>351.13 mm</strong>
            </div>
            <div className="flex justify-between gap-4 border-b border-white/10 pb-2">
              <span>Shrinkage</span>
              <strong>3.12 mm</strong>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/25 p-3 font-mono text-xs">
              354.25 / 351.13 = 1.0089
            </div>
            <div className="flex items-end justify-between gap-4">
              <span className="text-gray-300">XY compensation</span>
              <strong className="text-3xl tracking-tight text-white">100.89%</strong>
            </div>
          </div>
        </div>
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
    <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
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
      </svg>
    </div>
  );
}

function NordsonChapterVisual({ id }: { id: string }) {
  if (id === "nordson-overview") return <OverviewVisual />;
  if (id === "nordson-calibration") return <CalibrationEvidenceVisual />;
  if (id === "nordson-cad-vs-reality") return <CadRealityVisual />;
  if (id === "nordson-fixture-design") return <FixtureVisual />;
  if (id === "nordson-result") return <TestingEvidenceVisual />;
  if (id === "nordson-scale-up") return <ScaleVisual />;
  if (id === "nordson-shrinkage") return <ShrinkageVisual />;
  return <OverviewVisual />;
}

function SideMenu() {
  return (
    <aside className="hidden self-start xl:sticky xl:top-8 xl:block">
      <div className="max-h-[calc(100vh-4rem)] overflow-y-auto rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-4 shadow-2xl shadow-black/20 backdrop-blur">
        <div className="mb-4 space-y-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-gray-300 transition hover:bg-white/[0.07] hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300/60"
          >
            ← Back to Home
          </Link>

          <a
            href="#project-gallery"
            className="block rounded-xl px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-300 transition hover:bg-white/[0.07] hover:text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300/60"
          >
            Project Gallery
          </a>

          <a
            href="#current-build"
            className="block rounded-xl px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-amber-200 transition hover:bg-white/[0.07] hover:text-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-200/60"
          >
            Current Build
          </a>
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
                  className="block rounded-lg px-3 py-1.5 text-xs text-gray-300 transition hover:bg-white/[0.06] hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300/60"
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
                className="block rounded-xl px-3 py-2 font-medium text-gray-300 transition hover:bg-white/[0.07] hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300/60"
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
        className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300/60"
      >
        ← Home
      </Link>

      <a
        href="#project-gallery"
        className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300/60"
      >
        Gallery
      </a>

      <a
        href="#current-build"
        className="whitespace-nowrap rounded-full border border-amber-200/20 bg-amber-300/[0.07] px-4 py-2 text-xs font-medium text-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-200/60"
      >
        Current Build
      </a>

      <a
        href="#nordson"
        className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300/60"
      >
        Nordson
      </a>

      {otherProjects.map((project) => (
        <a
          key={project.id}
          href={`#${project.id}`}
          className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300/60"
        >
          {project.title}
        </a>
      ))}
    </nav>
  );
}

function EngineeringStrengths() {
  return (
    <section className="mb-16">
      <div className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
        Engineering Strengths
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {engineeringStrengths.map((strength) => (
          <div
            key={strength.label}
            className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5"
          >
            <h2 className="text-base font-semibold tracking-tight text-white">
              {strength.label}
            </h2>
            <p className="mt-3 text-sm leading-6 text-gray-300">
              {strength.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectGallery() {
  return (
    <section id="project-gallery" className="mb-20 scroll-mt-24">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
            Project Gallery
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projectPreviews.map((project) => (
          <a
            key={project.id}
            href={`#${project.id}`}
            className="group min-w-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-blue-300/25 hover:bg-white/[0.055] focus:outline-none focus:ring-2 focus:ring-blue-300/60"
          >
            <PreviewMedia item={project.media} />

            <div className="min-w-0 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
                {project.eyebrow}
              </div>

              <div className="mt-3">
                <h3 className="break-words text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl">
                  {project.title}
                </h3>
              </div>

              <div className="mt-5 min-w-0 rounded-2xl border border-blue-300/15 bg-blue-400/[0.07] p-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-200">
                  Outcome
                </div>
                <div className="mt-2 break-words text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl">
                  {project.signal}
                </div>
                <p className="mt-2 break-words text-sm leading-6 text-gray-200">
                  {project.result}
                </p>
              </div>

              <div className="mt-4">
                <TagList tags={project.tags} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function CurrentBuildTeaser() {
  return (
    <section id="current-build" className="mb-28 scroll-mt-24">
      <div className="grid gap-5 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(59,130,246,0.11),_rgba(255,255,255,0.035)_45%,_rgba(251,191,36,0.07))] p-5 shadow-2xl shadow-black/20 md:grid-cols-[1.1fr_0.9fr] md:p-7">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
            Currently Building
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Six-Axis Robot System
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-200">
            Parts are staged and the build is still under assembly, so I am not
            presenting it as a finished project yet. The case study opens after
            mechanical integration, first controlled motion, and repeatability
            testing.
          </p>

          <div className="mt-6">
            <TagList
              tags={[
                "Robotics",
                "Motion System",
                "Mechanical Assembly",
                "Controls Pending",
              ]}
            />
          </div>
        </div>

        <div className="rounded-[1.25rem] border border-white/10 bg-black/30 p-4">
          <div className="grid grid-cols-2 gap-3">
            {currentBuildSignals.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-4 font-mono text-xs leading-6 text-gray-300">
            <div>axis_01 ... staged</div>
            <div>axis_02 ... staged</div>
            <div>axis_03 ... staged</div>
            <div>axis_04 ... staged</div>
            <div>axis_05 ... staged</div>
            <div>axis_06 ... staged</div>
            <div className="mt-2 text-amber-200">first_motion ... pending</div>
          </div>
        </div>
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

        <p className="mt-4 max-w-5xl text-sm leading-6 text-gray-200 md:text-base md:leading-7">
          {chapter.summary}
        </p>

        <NordsonChapterVisual id={chapter.id} />

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
  const summaryMetrics = [
    { label: "Status", value: "Active" },
    { label: "Target", value: "5 µL" },
    { label: "Validated", value: "100 positions" },
    { label: "Scaled tray", value: "178 slots" },
    { label: "Correction", value: "40 → 38 mm" },
    { label: "Next step", value: "New fluid test" },
  ];

  return (
    <section id="nordson" className="mb-36 scroll-mt-24">
      <div className="mb-8">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
          Lab Automation / Active Fixture Design
        </div>

        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Automated 5 µL Dispensing Workflow
        </h2>

        <p className="mt-3 max-w-5xl text-lg text-gray-300">
          Mechanical Owner — Fixture Design, Calibration, and Test
        </p>

        <div className="mt-5 rounded-[1.25rem] border border-amber-200/20 bg-amber-300/[0.07] p-4">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">
            Active Lab Work
          </div>
          <p className="mt-2 text-sm leading-6 text-gray-200 md:text-base">
            This case study documents the current validated workflow, not a
            finished endpoint. The next phase is validating a new fluid through
            the same calibrated dispense process.
          </p>
        </div>
      </div>

      <div className="mb-8 grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 md:grid-cols-[1fr_1.1fr] md:p-6">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
            Executive Summary
          </div>
          <p className="mt-3 text-base leading-7 text-gray-200">
            I converted a manual dispense process into a calibrated robot
            workflow by designing the tray fixture, validating pressure settings,
            and iterating on real hardware until the dispense rows were clean.
            The system is still active, with new-fluid validation as the next
            test phase.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {summaryMetrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>
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
            "100-position run",
            "Robot + dispense controller",
          ],
        }}
        priority
        hero
        className="h-[500px] md:h-[720px]"
      />

      <div className="mt-8">
        <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
              Validation Videos
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              Dispense proof
            </h3>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {nordsonVideoSlots.map((slot) => (
            <VideoPlaceholder key={slot.title} slot={slot} />
          ))}
        </div>
      </div>

      <div className="mt-12 grid items-stretch gap-8">
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

        <p className="mt-4 max-w-4xl text-base leading-7 text-gray-200">
          {project.summary}
        </p>

        <div className="mt-5">
          <TagList tags={project.tags} />
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className={reverse ? "lg:order-2" : ""}>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-7">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/35 to-transparent" />

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
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
      className="min-h-screen overflow-x-hidden bg-[linear-gradient(to_bottom,_#050505,_#0f172a_45%,_#050505)] px-6 py-10 text-gray-100 md:px-10 md:py-14"
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
          <EngineeringStrengths />
          <ProjectGallery />
          <CurrentBuildTeaser />

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
