import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 text-gray-100 px-8 py-12">
      <div className="max-w-7xl mx-auto">

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
<div className="text-center mb-16">
  <h1 className="text-4xl font-bold mb-4 text-white">
    Projects
  </h1>

  <p className="text-gray-400 max-w-3xl mx-auto">
    Selected engineering projects demonstrating mechanical design,
    CAD ownership, fabrication, and system-level validation.
  </p>
</div>


        {/* HEADER */}
        <h1 className="text-4xl font-bold mb-3 text-white">
          
        </h1>

        <p className="text-gray-400 mb-16 max-w-3xl">
          
        </p>

        {/* ========================================================= */}
        {/* TRITON ROBOTICS — DIRECT DRIVE TURRET */}
        {/* ========================================================= */}
        <section className="max-w-6xl mx-auto bg-white/95 text-gray-900 rounded-2xl shadow-lg px-10 py-10 mb-24">

          <h2 className="text-3xl font-semibold mb-1">
            Triton Robotics — Direct Drive Turret
          </h2>

          <p className="italic text-gray-500 mb-8">
            Role: Mechanical Engineer (Primary CAD Owner) — CAD, Fabrication, Integration
          </p>

          {/* IMAGES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="relative aspect-video bg-gray-50 rounded-xl overflow-hidden ring-1 ring-gray-200">
              <Image src="/turret-overview.png" alt="System overview" fill className="object-contain" />
            </div>

            <div className="relative aspect-video bg-gray-50 rounded-xl overflow-hidden ring-1 ring-gray-200">
              <Image src="/direct-drive-assembly.png" alt="Direct drive turret assembly" fill className="object-contain" />
            </div>

            <div className="relative aspect-video bg-gray-50 rounded-xl overflow-hidden ring-1 ring-gray-200">
              <Image src="/integrated-robot.png" alt="Integrated robot platform" fill className="object-contain" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div>
              <h3 className="text-lg font-semibold mb-3">What?</h3>
              <ul className="list-disc ml-5 space-y-3 text-gray-700">
                <li>Redesigned a 2:1 pulley-driven turret into a single-motor direct-drive system.</li>
                <li>Primary objective was eliminating backlash in the belt-driven design.</li>
                <li>Simplified architecture to improve response, reliability, and maintenance.</li>
                <li>Owned and released the complete turret CAD assembly.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">How?</h3>
              <ul className="list-disc ml-5 space-y-3 text-gray-700">
                <li>Primary CAD owner responsible for layout, interfaces, and tolerances.</li>
                <li>Iterated motor placement and drive geometry.</li>
                <li>Resolved slip-ring alignment and concentricity challenges.</li>
                <li>Iterated 3D-printed parts (~5 revisions).</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Results</h3>
              <ul className="list-disc ml-5 space-y-3 text-gray-700">
                <li>Eliminated belt backlash; smoother, repeatable motion.</li>
                <li>~50% faster perceived response.</li>
                <li>Completed power-on and closed-loop testing.</li>
                <li>System integrated successfully.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* TRITON UAS — ONBOARDING AIRCRAFT */}
        {/* ========================================================= */}
        <section className="max-w-6xl mx-auto bg-white/95 text-gray-900 rounded-2xl shadow-lg px-10 py-10 mb-24">

          <h2 className="text-3xl font-semibold mb-1">
            Triton UAS — Onboarding Aircraft Project
          </h2>

          <p className="italic text-gray-500 mb-3">
            Role: Lead Mechanical Engineer — CAD, Fabrication, Integration
          </p>

          <p className="text-sm text-gray-600 mb-12">
            Completed as a rapid onboarding challenge under a one-week timeline
            with strict material and fabrication constraints.
          </p>

          {/* WORK FIRST */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div>
              <img src="/CAD.png" alt="Aircraft CAD" className="w-full rounded-xl border border-gray-200 object-contain" />
              <p className="text-sm text-gray-500 mt-2 text-center">
                CAD defining geometry and configuration decisions
              </p>
            </div>

            <div>
              <img src="/Side.png" alt="Foam prototype" className="w-full rounded-xl border border-gray-200 object-contain" />
              <p className="text-sm text-gray-500 mt-2 text-center">
                Physical prototype built for rapid iteration
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <div>
              <h3 className="text-lg font-semibold mb-3">What?</h3>
              <ul className="list-disc ml-5 space-y-3 text-gray-700">
                <li>Designed and built a fixed-wing UAV within one week.</li>
                <li>Initial configuration exhibited poor stability.</li>
                <li>Reconfigured to a V-tail layout.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">How?</h3>
              <ul className="list-disc ml-5 space-y-3 text-gray-700">
                <li>Primary CAD owner for full aircraft assembly.</li>
                <li>Made all major configuration decisions.</li>
                <li>Iterated directly from flight behavior.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Results</h3>
              <ul className="list-disc ml-5 space-y-3 text-gray-700">
                <li>Achieved stable, controlled flight.</li>
                <li>Sustained flight (~40 seconds).</li>
                <li>Early landing chosen to reduce risk.</li>
              </ul>
            </div>
          </div>

          {/* VIDEO LAST */}
          <div className="max-w-4xl mx-auto">
            <video
              src="/Test.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full rounded-2xl border border-gray-200 shadow-md"
            />
            <p className="text-sm text-gray-500 mt-2 text-center">
              Flight validation following rapid iteration
            </p>
          </div>

        </section>

     {/* ========================================================= */}
{/* BALL RETRIEVAL ROBOT — COMPETITIVE ROBOTICS */}
{/* ========================================================= */}
<section className="max-w-6xl mx-auto bg-white/95 text-gray-900 rounded-2xl shadow-lg px-10 py-10 mb-24">

  <h2 className="text-3xl font-semibold mb-1">
    Ball Retrieval Robot — Competitive Robotics
  </h2>

  <p className="italic text-gray-500 mb-8">
    Role: Mechanical Engineer — CAD, Fabrication, Integration
  </p>

  {/* IMAGE OVERVIEW */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

    <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
      <img src="/Field.png" alt="Competition field layout" className="w-full object-contain" />
      <p className="text-sm text-gray-500 text-center py-2">
        Competition field and task constraints
      </p>
    </div>

    <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
      <img src="/CADR.png" alt="Robot CAD model" className="w-full object-contain" />
      <p className="text-sm text-gray-500 text-center py-2">
        CAD defining system layout and mechanisms
      </p>
    </div>

    <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
      <img src="/Real.png" alt="Built robot hardware" className="w-full object-contain" />
      <p className="text-sm text-gray-500 text-center py-2">
        Final fabricated robot
      </p>
    </div>

  </div>

  {/* WHAT / HOW / RESULTS */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">

    {/* WHAT */}
    <div>
      <h3 className="text-lg font-semibold mb-3">What?</h3>
      <ul className="list-disc ml-5 space-y-2 text-gray-700">
        <li>Designed and built a robot to retrieve and deposit balls during a timed competition.</li>
        <li>Optimized for speed, reliability, and repeatable mechanical performance.</li>
      </ul>
    </div>

    {/* HOW */}
    <div>
      <h3 className="text-lg font-semibold mb-3">How?</h3>
      <ul className="list-disc ml-5 space-y-2 text-gray-700">
        <li>Primary mechanical designer and CAD owner.</li>
        <li>Developed mechanisms using Fusion 360 and AutoCAD.</li>
        <li>Designed linkages, gears, and bearing-supported joints.</li>
        <li>Fabricated parts using shop tools and 3D printing.</li>
      </ul>
    </div>

    {/* RESULTS */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Results</h3>
      <ul className="list-disc ml-5 space-y-2 text-gray-700">
        <li>Successfully completed competition objectives.</li>
        <li>Consistent, repeatable performance across test runs.</li>
      </ul>
    </div>

  </div>

  {/* ACTION VIDEO — PROOF */}
  <div className="max-w-4xl mx-auto">
    <video
      src="/Action.mp4"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="w-full rounded-xl border border-gray-200 shadow-md"
    />
    <p className="text-sm text-gray-500 mt-2 text-center">
      Competition run demonstrating system performance
    </p>
  </div>

</section>

      </div>
    </main>
  );
}
