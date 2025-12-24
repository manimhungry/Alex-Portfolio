import Link from "next/link";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 text-gray-100 px-8 py-12">

      {/* BACK */}
<div className="mb-10 text-center">
  <Link
    href="/"
    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
  >
    ← Back to Home
  </Link>
</div>

{/* HEADER */}
<div className="text-center mb-14">
  <h1 className="text-4xl font-bold mb-4 text-white">
    Experience
  </h1>

  <p className="text-gray-400 max-w-3xl mx-auto">
    Industry experience focused on sustainment engineering, CAD ownership,
    and verification of production mechanical systems.
  </p>
</div>
      {/* HEADER */}
      <h1 className="text-4xl font-bold mb-3 text-white">
        
      </h1>

      <p className="text-gray-400 mb-14 max-w-3xl">
        
      </p>

      {/* ================= LEICA CARD ================= */}
      <section className="max-w-6xl mx-auto bg-white/95 text-gray-900 rounded-2xl shadow-xl px-10 py-10 mb-20">

        {/* TITLE */}
        <h2 className="text-3xl font-semibold mb-1">
          Leica Biosystems — Hardware Engineering Intern
        </h2>

        <p className="italic text-gray-500 mb-10">
          Vista, CA · Danaher Corporation
        </p>

        {/* OVERVIEW */}
        <div className="mb-12 max-w-4xl">
          <h3 className="text-xl font-semibold mb-3">Overview</h3>
          <p className="text-gray-700 leading-relaxed">
            Supported sustainment and verification of the CS2 clinical diagnostics
            system. Owned mechanical CAD updates to reconcile legacy models with the
            current production hardware, restoring trust in CAD for manufacturing,
            validation, and senior engineering use within a regulated environment.
          </p>
        </div>

        {/* VIDEOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">

          {/* XY STAGE */}
          <div>
            <h4 className="font-semibold mb-3">
              XY Stage — Production Motion Validation
            </h4>

            <div className="rounded-xl overflow-hidden ring-1 ring-gray-200 bg-black">
              <video
                src="/XY.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              />
            </div>

            <p className="mt-3 text-sm text-gray-600">
              Legacy XY stage CAD (circa 2008) was updated and validated against the
              real, shipping product. Motion behavior confirmed to match production
              hardware after CAD correction.
            </p>
          </div>

          {/* PARTS */}
          <div>
            <h4 className="font-semibold mb-3">
              Internal Assemblies — Updated CAD Representation
            </h4>

            <div className="rounded-xl overflow-hidden ring-1 ring-gray-200 bg-black">
              <video
                src="/PARTS.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              />
            </div>

            <p className="mt-3 text-sm text-gray-600">
              Updated internal assemblies reflect the as-built system. Visibility
              studies were used to confirm correct interfaces, part placement, and
              overall model reliability for manufacturing and senior engineer review.
            </p>
          </div>

        </div>

        <hr className="my-12 border-gray-200" />

        {/* DETAILS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* OWNERSHIP */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Technical Ownership
            </h3>
            <ul className="list-disc ml-5 space-y-3 text-gray-700">
              <li>Primary CAD owner for multiple CS2 subassemblies in SOLIDWORKS + PDM.</li>
              <li>Resolved long-standing discrepancies between legacy CAD and real hardware.</li>
              <li>Determined correct part placement and assembly structure based on the production system.</li>
              <li>Unblocked downstream work by fixing missing, incomplete, and obsolete CAD.</li>
            </ul>
          </div>

          {/* PROCESS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Engineering Process
            </h3>
            <ul className="list-disc ml-5 space-y-3 text-gray-700">
              <li>Worked within formal design-control and change-management workflows.</li>
              <li>Reviewed peer work for validation while own designs were validated by senior engineers.</li>
              <li>Generated drawings with GD&amp;T to support manufacturing and build activities.</li>
              <li>Collaborated across design, manufacturing, and V&amp;V teams.</li>
            </ul>
          </div>

          {/* IMPACT */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Verification & Impact
            </h3>
            <ul className="list-disc ml-5 space-y-3 text-gray-700">
              <li>Executed formal V&amp;V procedures to confirm mechanical reliability.</li>
              <li>Validated that CAD accurately represented the product currently being sold.</li>
              <li>Improved BOM accuracy and restored confidence in CAD for downstream use.</li>
              <li>Work recognized by team as reliable and production-ready.</li>
            </ul>
          </div>

        </div>
      </section>

    </main>
  );
}
