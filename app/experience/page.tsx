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

              {/* PROOF CHIPS (SEPARATED TO AVOID MISREADING) */}
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
                digitizes glass pathology slides into high-resolution images for downstream review and analysis.
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
                  <span className="font-semibold">15/60 (25%) → 57/60 (95%)</span> by adding{" "}
                  <span className="font-semibold">25</span> current parts and removing{" "}
                  <span className="font-semibold">30</span> obsolete parts (remaining{" "}
                  <span className="font-semibold">3/60</span> cables excluded per scope).
                </li>
                <li>
                  Resolved <span className="font-semibold">~100</span> SOLIDWORKS failures (broken references + mate errors) and
                  verified corrections against the physical scanner via{" "}
                  <span className="font-semibold">fit checks + dimensional verification</span>.
                </li>
                <li>
                  Released a CAD/BOM <span className="font-semibold">configuration baseline</span> used by
                  engineering/manufacturing and leveraged by senior engineers for sustaining and future platform work{" "}
                  <span className="font-semibold">(e.g., CS5)</span>.
                </li>
              </ul>

              <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                <span className="font-semibold">Why it matters:</span> Demonstrates configuration recovery under ambiguity—
                translating as-built production reality into a trusted CAD/BOM reference within design-control review/sign-off.
              </p>
            </div>

            {/* OTHER INTERNSHIP WORK */}
            <div>
              <h3 className="text-lg font-semibold mb-2.5">Additional internship execution (separate from CS2)</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700 text-sm leading-relaxed">
                <li>
                  Executed <span className="font-semibold">15+</span> manufacturing build/teardown procedures supporting
                  sustainment work and hardware readiness.
                </li>
                <li>
                  Executed <span className="font-semibold">5</span> formal V&amp;V procedures, including{" "}
                  <span className="font-semibold">3×360-cycle</span> wipe durability testing; documented results for review.
                </li>
                <li>
                  Built an <span className="font-semibold">Excel traceability tracker</span> for part/requirement status within
                  design-control workflows to improve cross-team visibility (design, manufacturing, V&amp;V).
                </li>
              </ul>
            </div>
          </div>

          {/* MEDIA */}
          <hr className="my-8 border-gray-200" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden">
              <div className="px-5 py-3 border-b border-gray-200">
                <h4 className="font-semibold">XY Stage — Production Motion Validation</h4>
              </div>
              <div className="bg-black">
                <video src="/XY.mp4" autoPlay loop muted playsInline className="w-full h-auto" />
              </div>
              <p className="px-5 py-3 text-sm text-gray-600 leading-relaxed">
                Validated corrected CAD against production motion behavior after reconciliation.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden">
              <div className="px-5 py-3 border-b border-gray-200">
                <h4 className="font-semibold">Internal Assemblies — Updated CAD Representation</h4>
              </div>
              <div className="bg-white">
                <video src="/PARTS.mp4" autoPlay loop muted playsInline className="w-full h-auto" />
              </div>
              <p className="px-5 py-3 text-sm text-gray-600 leading-relaxed">
                Rebuilt internal assemblies to reflect as-built placement and interfaces for manufacturing reference and senior
                engineer review.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
