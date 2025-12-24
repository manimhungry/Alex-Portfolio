import Link from "next/link";
import Image from "next/image";

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
      <section className="max-w-6xl bg-white/95 text-gray-900 rounded-2xl shadow-lg px-10 py-8 mb-20">

        {/* Title */}
        <h2 className="text-3xl font-semibold mb-1">
          Triton Robotics — Direct Drive Turret
        </h2>

        <p className="italic text-gray-500 mb-8">
          Role: Mechanical Engineer (Primary CAD Owner) — CAD, Fabrication, Integration
        </p>

        {/* IMAGE STRIP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

          <div className="relative aspect-video bg-gray-50 rounded-xl overflow-hidden ring-1 ring-gray-200">
            <Image
              src="/turret-overview.png"
              alt="Integrated robot with direct drive turret"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative aspect-video bg-gray-50 rounded-xl overflow-hidden ring-1 ring-gray-200">
            <Image
              src="/direct-drive-assembly.png"
              alt="Direct drive turret mechanism CAD"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative aspect-video bg-gray-50 rounded-xl overflow-hidden ring-1 ring-gray-200">
            <Image
              src="/integrated-robot.png"
              alt="System-level robot integration"
              fill
              className="object-contain"
            />
          </div>

        </div>

        {/* IMAGE CAPTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-sm text-gray-500">
          <p className="text-center">System Overview</p>
          <p className="text-center">Direct Drive Turret Assembly</p>
          <p className="text-center">Integrated Robot Platform</p>
        </div>

        {/* DIVIDER */}
        <hr className="my-8 border-gray-200" />

        {/* WHAT / HOW / RESULTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* WHAT */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              What?
            </h3>
            <ul className="list-disc ml-5 space-y-3 text-gray-700">
              <li>Redesigned a 2:1 pulley-driven turret into a single-motor direct-drive system.</li>
              <li>Primary design objective was to eliminate backlash observed in the belt-driven configuration.</li>
              <li>Simplified the mechanical architecture to improve response time, reliability, and maintenance.</li>
              <li>Modified the existing chassis and mechanical structure to support the new drive layout.</li>
              <li>Owned and developed the full turret CAD assembly in SolidWorks.</li>
            </ul>
          </div>

          {/* HOW */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              How?
            </h3>
            <ul className="list-disc ml-5 space-y-3 text-gray-700">
              <li>Collaborated with a senior ME lead and electrical team to align mechanical and control interfaces.</li>
              <li>Iterated motor placement and drive geometry to reduce compliance and improve responsiveness.</li>
              <li>Resolved slip ring alignment and drive concentricity challenges during system integration.</li>
              <li>Iterated CAD and 3D-printed parts (~5 revisions) to correct hole alignment and tolerance stack-ups.</li>
              <li>Accepted reduced torque as a tradeoff for faster, smoother turret response.</li>
            </ul>
          </div>

          {/* RESULTS */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Results
            </h3>
            <ul className="list-disc ml-5 space-y-3 text-gray-700">
              <li>Eliminated belt backlash, resulting in significantly smoother turret motion.</li>
              <li>Observed approximately 50% faster perceived response compared to the pulley-driven system.</li>
              <li>Completed power-on and closed-loop control testing with stable, smooth performance.</li>
              <li>Final CAD released and components fabricated via laser cutting, waterjet, and 3D printing.</li>
              <li>System integrated successfully and operating reliably under test conditions.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Placeholder */}
      <p className="text-gray-400 italic">
        More projects coming soon.
      </p>

    </main>
  );
}
