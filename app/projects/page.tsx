import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 text-gray-100 px-8 py-12">

      {/* Centered content column */}
      <div className="max-w-7xl mx-auto">

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
          CAD ownership, fabrication, and system integration.
        </p>

        {/* ===================================================== */}
        {/* PROJECT 1 — TRITON ROBOTICS */}
        {/* ===================================================== */}
        <section className="max-w-6xl mx-auto bg-white/95 text-gray-900 rounded-2xl shadow-lg px-10 py-8 mb-20">

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
                alt="System overview with direct drive turret"
                fill
                className="object-contain"
              />
            </div>

            <div className="relative aspect-video bg-gray-50 rounded-xl overflow-hidden ring-1 ring-gray-200">
              <Image
                src="/direct-drive-assembly.png"
                alt="Direct drive turret assembly CAD"
                fill
                className="object-contain"
              />
            </div>

            <div className="relative aspect-video bg-gray-50 rounded-xl overflow-hidden ring-1 ring-gray-200">
              <Image
                src="/integrated-robot.png"
                alt="Integrated robot platform"
                fill
                className="object-contain"
              />
            </div>

          </div>

          <hr className="my-8 border-gray-200" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div>
              <h3 className="text-lg font-semibold mb-3">What?</h3>
              <ul className="list-disc ml-5 space-y-3 text-gray-700">
                <li>Redesigned a 2:1 pulley-driven turret into a single-motor direct-drive system.</li>
                <li>Primary objective was eliminating backlash observed in the belt-driven configuration.</li>
                <li>Simplified the mechanical architecture to improve response time and reliability.</li>
                <li>Modified the chassis and structure to support the new drive layout.</li>
                <li>Owned the complete turret CAD assembly in SolidWorks.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">How?</h3>
              <ul className="list-disc ml-5 space-y-3 text-gray-700">
                <li>Collaborated with senior ME and electrical teammates to align interfaces.</li>
                <li>Iterated motor placement and geometry to reduce compliance.</li>
                <li>Resolved slip ring alignment and drive concentricity challenges.</li>
                <li>Iterated 3D-printed components (~5 revisions) to correct tolerance stack-ups.</li>
                <li>Accepted reduced torque as a tradeoff for smoother response.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Results</h3>
              <ul className="list-disc ml-5 space-y-3 text-gray-700">
                <li>Eliminated belt backlash, resulting in smoother turret motion.</li>
                <li>Observed ~50% faster perceived response.</li>
                <li>Completed power-on and closed-loop control testing.</li>
                <li>Final CAD released; components fabricated and integrated successfully.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* ===================================================== */}
        {/* PROJECT 2 — TRITON UAS */}
        {/* ===================================================== */}
        <section className="max-w-6xl mx-auto bg-white/95 text-gray-900 rounded-2xl shadow-md px-10 py-10 mb-20">

          <h2 className="text-3xl font-semibold mb-1">
            Triton UAS — Onboarding Aircraft Project
          </h2>

          <p className="italic text-gray-500 mb-6">
            Role: Lead Mechanical Engineer — CAD, Fabrication, Integration · 1 Week Timeline
          </p>

          {/* FLIGHT VIDEO */}
          <div className="mb-10">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full rounded-xl border border-gray-200"
            >
              <source src="/Test.mp4" type="video/mp4" />
            </video>
            <p className="text-sm text-gray-500 mt-2 text-center">
              First validated flight following rapid configuration iteration
            </p>
          </div>

          <p className="max-w-4xl text-gray-700 mb-10">
            Rapid design, fabrication, and flight validation of a fixed-wing UAV completed
            under extreme time and material constraints as part of a one-week onboarding challenge.
          </p>

          {/* IMAGES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <img
              src="/Side.png"
              alt="Side view aircraft configuration"
              className="w-full rounded-xl border bg-gray-50"
            />
            <img
              src="/CAD.png"
              alt="Aircraft CAD model"
              className="w-full rounded-xl border bg-gray-50"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div>
              <h3 className="text-lg font-semibold mb-3">What?</h3>
              <ul className="list-disc ml-5 space-y-3 text-gray-700">
                <li>Designed and built a functional fixed-wing UAV within one week.</li>
                <li>Initial configuration exhibited poor stability.</li>
                <li>Reconfigured aircraft to a V-tail layout.</li>
                <li>Optimized structure for rapid fabrication.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">How?</h3>
              <ul className="list-disc ml-5 space-y-3 text-gray-700">
                <li>Primary CAD owner for the complete aircraft assembly.</li>
                <li>Made all major configuration decisions.</li>
                <li>Collaborated on sizing and balance decisions.</li>
                <li>Used foam construction to enable fast iteration.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Results</h3>
              <ul className="list-disc ml-5 space-y-3 text-gray-700">
                <li>Achieved stable, controlled flight.</li>
                <li>Successful takeoff and sustained flight (~40 seconds).</li>
                <li>Aircraft stabilized shortly after launch.</li>
                <li>Early landing chosen to reduce test risk.</li>
              </ul>
            </div>

          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-3">
              What I’d Improve With More Time
            </h3>
            <ul className="list-disc ml-5 space-y-2 text-gray-700 max-w-4xl">
              <li>Transition to stiffer, higher-quality materials.</li>
              <li>Improve rigidity and finish.</li>
              <li>Additional flight tuning and validation.</li>
            </ul>
          </div>

        </section>

        <p className="text-gray-400 italic">
          More projects coming soon.
        </p>

      </div>
    </main>
  );
}
