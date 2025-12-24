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

      <p className="text-gray-400 mb-12 max-w-3xl">
        Selected engineering projects demonstrating mechanical design,
        CAD modeling, fabrication, and system integration.
      </p>

      {/* PROJECT CARD */}
      <section className="max-w-4xl bg-white/95 text-gray-900 rounded-2xl shadow-xl p-8 mb-16">
        <h2 className="text-2xl font-semibold mb-1">
          Triton Robotics — Direct Drive Turret
        </h2>

        <p className="italic text-gray-500 mb-6">
          Role: Mechanical Engineer — CAD, Fabrication, Integration
        </p>

        <ul className="list-disc ml-6 space-y-3 text-gray-700">
          <li>
            Redesigned a 2:1 pulley-driven turret into a single-motor direct-drive system.
          </li>
          <li>
            Modeled the complete turret assembly in SolidWorks with emphasis on alignment and structural fit.
          </li>
          <li>
            Collaborated with senior mechanical and electrical team members to align interface requirements.
          </li>
          <li>
            Fabricated components using 3D printing, laser cutting, and hand tools.
          </li>
        </ul>
      </section>

      {/* Placeholder */}
      <p className="text-gray-400 italic">
        More projects coming soon.
      </p>

    </main>
  );
}
