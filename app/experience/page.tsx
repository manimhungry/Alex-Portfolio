import Link from "next/link";

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full bg-gray-900 text-white text-[11px] px-3 py-1 leading-none">
    {children}
  </span>
);

const ToolPill = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full bg-white border border-gray-200 text-[11px] px-2.5 py-1 leading-none text-gray-700">
    {children}
  </span>
);

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 text-gray-100 px-8 py-10">
      {/* BACK */}
      <div className="mb-6 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
        >
          ← Back to Home
        </Link>
      </div>

      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3 text-white">Experience</h1>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Industry experience focused on sustainment engineering, CAD ownership,
          and verification of production mechanical systems.
        </p>
      </div>

      {/* ================= LEICA CARD ================= */}
      <section className="max-w-6xl mx-auto bg-white/95 text-gray-900 rounded-2xl shadow-xl overflow-hidden mb-14">
        {/* TOP BAR */}
        <div className="px-10 py-6 border-b border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 items-start">
            {/* LEFT */}
            <div>
              <h2 className="text-3xl font-semibold leading-tight">
                Leica Biosystems (Danaher) — CS2 Sustaining &amp; Configuration Recovery
              </h2>

              <p className="text-gray-600 mt-1.5">
                Hardware Engineering Intern · Vista, CA · June 2025 – September 2025
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Role focus: CAD Ownership · SOLIDWORKS PDM · Drawings · V&amp;V support
              </p>

              {/* ONE PARAGRAPH STORY (CS2 ONLY) */}
              <p className="mt-4 text-sm text-gray-700 leading-relaxed max-w-3xl">
                Recovered <span className="font-semibold">2008-era</span> CS2 CAD/BOM to match the{" "}
                <span className="font-semibold">as-built production scanner</span> after drift introduced broken references,
                mate errors, and mismatched configurations that reduced trust in CAD as a manufacturing reference. As
                primary CAD owner for <span className="font-semibold">~12–15 subassemblies</span>, I corrected structure/mates,
                replaced missing/obsolete components, updated drawings under review, and performed{" "}
                <span className="font-semibold">fit checks + dimensional verification</span> on hardware to support engineering
                review/sign-offs. I then released an updated CAD/BOM reference package used by engineering/manufacturing and
                leveraged by senior engineers for sustaining work and future next generation (e.g., CS5).
              </p>

              {/* PROOF CHIPS */}
              <div className="mt-4 space-y-2.5">
                <div>
                  <p className="text-[11px] font-semibold tracking-wide text-gray-700 uppercase mb-1.5">
                    CS2 configuration recovery
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Chip>~100 SOLIDWORKS failures resolved</Chip>
                    <Chip>BOM 25% → 95%</Chip>
                    <Chip>~12–15 subassemblies owned</Chip>
                  </div>
                </div>

                <div>
                  <p className="text-[11px] font-semibold tracking-wide text-gray-700 uppercase mb-1.5">
                    Manufacturing &amp; V&amp;V support
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Chip>15+ manufacturing build/teardown procedures</Chip>
                    <Chip>5 formal V&amp;V procedures</Chip>
                    <Chip>3×360-cycle wipe durability testing</Chip>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: TOOLS + CS2 CONTEXT */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
              <p className="text-xs font-semibold tracking-wide text-gray-700 uppercase mb-2">
                Tools &amp; Methods
              </p>

              <p className="text-[12px] text-gray-600 leading-relaxed mb-3">
                <span className="font-semibold text-gray-800">Aperio CS2</span> is a desktop whole-slide imaging scanner that
                digitizes glass pathology slides into high-resolution images.
              </p>

              <div className="flex flex-wrap gap-2">
                <ToolPill>SOLIDWORKS + PDM</ToolPill>
                <ToolPill>Drawings + GD&amp;T</ToolPill>
                <ToolPill>Fit checks + measurement</ToolPill>
                <ToolPill>Excel traceability</ToolPill>
                <ToolPill>Build/teardown support</ToolPill>
                <ToolPill>V&amp;V procedures</ToolPill>
              </div>
            </div>
          </div>
        </div>

        {/* BODY */}
        <div className="px-10 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* CS2 ONLY */}
            <div>
              <h3 className="text-lg font-semibold mb-2.5">Execution &amp; impact — CS2</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700 text-sm leading-relaxed">
                <li>
                  Recovered BOM/CAD configuration from{" "}
                  <span className="font-semibold">15/60 (25%) → 57/60 (95%)</span> by resolving
                  obsolete components and missing design references.
                </li>
                <li>
                  Resolved <span className="font-semibold">~100</span> SOLIDWORKS failures and
                  verified corrections against the physical scanner via{" "}
                  <span className="font-semibold">fit checks + dimensional verification</span>.
                </li>
                <li>
                  Released a CAD/BOM <span className="font-semibold">configuration baseline</span> used by
                  engineering/manufacturing for sustaining and future platform work.
                </li>
              </ul>
            </div>

            {/* OTHER INTERNSHIP WORK */}
            <div>
              <h3 className="text-lg font-semibold mb-2.5">Additional internship execution</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700 text-sm leading-relaxed">
                <li>
                  Executed <span className="font-semibold">15+</span> manufacturing build/teardown procedures.
                </li>
                <li>
                  Executed <span className="font-semibold">5</span> formal V&amp;V procedures, including hardware durability testing.
                </li>
                <li>
                  Built an <span className="font-semibold">Excel traceability tracker</span> for design-control workflows.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}