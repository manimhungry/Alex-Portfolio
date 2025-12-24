import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 text-gray-100 px-8 py-12">

      {/* Back to home */}
      <div className="mb-10">
        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-white transition"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Page header */}
      <h1 className="text-4xl font-bold mb-3 text-white">
        Projects
      </h1>

      <p className="text-gray-400 mb-14 max-w-3xl">
        Selected engineering projects demonstrating mechanical design,
        CAD modeling, fabrication, and system integration.
      </p>

      {/* ================= PROJECT CARD ================= */}
      <section className="max-w-6xl bg-white/95 text-gray-900 rounded-2xl shadow-xl p-10 mb-20">

        {/* Title */}
        <h2 className="text-3xl font-semibold mb-1">
          Triton Robotics — Direct Drive Turret
        </h2>

        <p className="italic text-gray-500 mb-10">
          Role: Mechanical Engineer — CAD, Fabrication, Integration
        </p>

        {/* CAD IMAGE PLACEHOLDERS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm">
            CAD Image — System Overview
          </div>
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm">
            CAD Image — Direct Drive Assembly
          </div>
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm">
            CAD Image — Integrated Robot
          </div>
        </div>

        {/* WHAT / HOW / RESULTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* WHAT */}
          <div>
            <h3 className="text-xl font-semibold mb-4">What?</h3>
            <ul className="list-disc ml-5 space-y-3 text-gray-700">
              <li>Redesigned and simplified the turret drive system.</li>
              <li>Transitioned from a 2:1 pulley-driven system to a single-motor direct-drive architecture.</li>
              <li>Modified the chassis and mechanical structure to support the new configuration.</li>
              <li>Modeled the complete turret assembly in SolidWorks with emphasis on alignment and integration.</li>
              <li>Fabricated custom components using 3D printing and precision tooling.</li>
            </ul>
          </div>

          {/* HOW */}
          <div>
            <h3 className="text-xl font-semibold mb-4">How?</h3>
            <ul className="list-disc ml-5 space-y-3 text-gray-700">
              <li>Collaborated with a 4th-year ME lead and electrical team to define interface requirements.</li>
              <li>Created early sketches to explore layout feasibility and motor placement.</li>
              <li>Developed full CAD assemblies in SolidWorks, optimizing structural fit and alignment.</li>
              <li>Used rapid prototyping (3D printing) for iteration and fit testing.</li>
              <li>Accepted reduced torque as a tradeoff to improve system simplicity and response time.</li>
            </ul>
          </div>

          {/* RESULTS */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Results</h3>
            <ul className="list-disc ml-5 space-y-3 text-gray-700">
              <li>Final CAD design completed and released for fabrication.</li>
              <li>Components fabricated using laser cutting, waterjet machining, and 3D printing.</li>
              <li>Materials include polycarbonate, sheet metal, and PLA/ABS.</li>
              <li>Turret assembly and system integration currently in progress.</li>
              <li>Final testing and validation planned following full integration.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Placeholder for future projects */}
      <p className="text-gray-400 italic">
        More projects coming soon.
      </p>

    </main>
  );
}
