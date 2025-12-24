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
          Role: Mechanical Engineer — CAD, Fabrication, Integration
        </p>

        {/* IMAGE STRIP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

          {/* Image 1 */}
          <div className="relative aspect-video bg-gray-50 rounded-xl overflow-hidden ring-1 ring-gray-200">
            <Image
              src="/turret-overview.png"
              alt="Integrated robot with direct drive turret"
              fill
              className="object-contain"
            />
          </div>

          {/* Image 2 */}
          <div className="relative aspect-video bg-gray-50 rounded-xl overflow-hidden ring-1 ring-gray-200">
            <Image
              src="/direct-drive-assembly.png"
              alt="Direct drive turret mechanism CAD"
              fill
              className="object-contain"
            />
          </div>

          {/* Image 3 */}
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

        {/* SUBTLE DIVIDER */}
        <hr className="my-8 border-gray-200" />

        {/* WHAT / HOW / RESULTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* WHAT */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              What?
            </h3>
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
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              How?
            </h3>
            <ul className="list-disc ml-5 space-y-3 text-gray-700">
              <li>Collaborated with a 4th-year ME lead and electrical team to define interface requirements.</li>
              <li>Created early sketches to evaluate layout feasibility and motor placement.</li>
              <li>Developed full CAD assemblies in SolidWorks, optimizing structural fit and alignment.</li>
              <li>Used rapid prototyping (3D printing) for iterative fit and validation.</li>
              <li>Accepted reduced torque as a tradeoff to improve system simplicity and response time.</li>
            </ul>
          </div>

          {/* RESULTS */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Results
            </h3>
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
