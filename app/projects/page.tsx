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

        {/* PAGE HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-white">Projects</h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Metric-driven case studies focused on CAD ownership, prototyping, integration, and validation.
          </p>
        </div>

        {/* ========================================================= */}
        {/* TRITON ROBOTICS — DIRECT DRIVE TURRET */}
        {/* ========================================================= */}
        <section className="max-w-6xl mx-auto bg-white/95 text-gray-900 rounded-2xl shadow-lg px-10 py-10 mb-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl font-semibold mb-1">
                Triton Robotics — Direct Drive Turret
              </h2>
              <p className="text-gray-600">
                Mechanical Engineer (Primary CAD Owner) — CAD, DFM, Prototyping, Integration
              </p>
            </div>

            {/* KPI strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="rounded-xl bg-gray-50 ring-1 ring-gray-200 px-4 py-3">
                <div className="text-xs text-gray-500">Service time</div>
                <div className="text-lg font-semibold">15 → 9 min</div>
                <div className="text-xs text-gray-500">(-40%)</div>
              </div>
              <div className="rounded-xl bg-gray-50 ring-1 ring-gray-200 px-4 py-3">
                <div className="text-xs text-gray-500">Architecture</div>
                <div className="text-lg font-semibold">2:1 → Direct</div>
                <div className="text-xs text-gray-500">belt removed</div>
              </div>
              <div className="rounded-xl bg-gray-50 ring-1 ring-gray-200 px-4 py-3">
                <div className="text-xs text-gray-500">Iterations</div>
                <div className="text-lg font-semibold">~5 revs</div>
                <div className="text-xs text-gray-500">fit + stack-up</div>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "SOLIDWORKS",
              "3D Printing",
              "Waterjet",
              "Assembly + Integration",
              
              
            ].map((t) => (
              <span
                key={t}
                className="text-xs font-medium rounded-full bg-gray-100 ring-1 ring-gray-200 px-3 py-1"
              >
                {t}
              </span>
            ))}
          </div>

          {/* IMAGES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="relative aspect-video bg-gray-50 rounded-xl overflow-hidden ring-1 ring-gray-200">
              <Image
                src="/turret-overview.png"
                alt="Turret system overview"
                fill
                className="object-contain"
              />
            </div>

            <div className="relative aspect-video bg-gray-50 rounded-xl overflow-hidden ring-1 ring-gray-200">
              <Image
                src="/direct-drive-assembly.png"
                alt="Direct drive module assembly"
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

          {/* Content: only what companies care about */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-lg font-semibold mb-3">Problem</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Legacy belt/pulley drivetrain introduced backlash and maintenance overhead.</li>
                <li>Goal: simplify architecture while improving repeatability and serviceability.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Ownership</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Primary CAD owner for motor mount, bearing plate stack, and interfaces.</li>
                <li>Resolved slip-ring indexing/alignment and packaging constraints.</li>
                <li>Prototyped + iterated parts (~5 revisions) to close tolerance stack issues.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Outcome</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Converted drivetrain from 2:1 belt/pulley to direct drive.</li>
                <li>Reduced assembly/disassembly time 15 min → 9 min (-40%).</li>
                <li>Completed power-on + closed-loop validation and integrated into system.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* TRITON UAS — ONBOARDING AIRCRAFT */}
        {/* ========================================================= */}
        <section className="max-w-6xl mx-auto bg-white/95 text-gray-900 rounded-2xl shadow-lg px-10 py-10 mb-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl font-semibold mb-1">
                Triton UAS — Onboarding Aircraft
              </h2>
              <p className="text-gray-600">
                Lead Mechanical Engineer — CAD, Fabrication, Integration
              </p>
            </div>

            {/* KPI strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="rounded-xl bg-gray-50 ring-1 ring-gray-200 px-4 py-3">
                <div className="text-xs text-gray-500">Timeline</div>
                <div className="text-lg font-semibold">1 week</div>
                <div className="text-xs text-gray-500">rapid build</div>
              </div>
              <div className="rounded-xl bg-gray-50 ring-1 ring-gray-200 px-4 py-3">
                <div className="text-xs text-gray-500">Config</div>
                <div className="text-lg font-semibold">V-tail</div>
                <div className="text-xs text-gray-500">stability fix</div>
              </div>
              <div className="rounded-xl bg-gray-50 ring-1 ring-gray-200 px-4 py-3">
                <div className="text-xs text-gray-500">Flight</div>
                <div className="text-lg font-semibold">~40 s</div>
                <div className="text-xs text-gray-500">controlled</div>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "SOLIDWORKS",
              "Rapid prototyping",
              "Flight test",
              "Integration (motor/electronics)",
              "Iteration from test",
            ].map((t) => (
              <span
                key={t}
                className="text-xs font-medium rounded-full bg-gray-100 ring-1 ring-gray-200 px-3 py-1"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div>
              <img
                src="/CAD.png"
                alt="Aircraft CAD"
                className="w-full rounded-xl border border-gray-200 object-contain bg-gray-50"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">
                CAD defining geometry and configuration decisions
              </p>
            </div>

            <div>
              <img
                src="/Side.png"
                alt="Prototype aircraft"
                className="w-full rounded-xl border border-gray-200 object-contain bg-gray-50"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">
                Prototype built for rapid iteration
              </p>
            </div>
          </div>

          {/* Content: cut fluff */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
            <div>
              <h3 className="text-lg font-semibold mb-3">Problem</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Initial configuration showed poor stability during testing.</li>
                <li>Required a fast redesign under onboarding timeline constraints.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Ownership</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Primary CAD owner for full aircraft assembly.</li>
                <li>Drove major configuration changes based on observed flight behavior.</li>
                <li>Coordinated motor/electronics integration for test readiness.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Outcome</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Achieved stable, controlled flight with a V-tail configuration.</li>
                <li>Demonstrated sustained flight (~40 seconds) during validation run.</li>
                <li>Landed early by choice to reduce crash risk and preserve hardware.</li>
              </ul>
            </div>
          </div>

          {/* Video */}
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
              Flight validation after rapid iteration
            </p>
          </div>
        </section>

        {/* ========================================================= */}
        {/* BALL RETRIEVAL ROBOT — COMPETITIVE ROBOTICS */}
        {/* ========================================================= */}
        <section className="max-w-6xl mx-auto bg-white/95 text-gray-900 rounded-2xl shadow-lg px-10 py-10 mb-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl font-semibold mb-1">
                Ball Retrieval Robot — Competitive Robotics
              </h2>
              <p className="text-gray-600">
                Mechanical Engineer — CAD, Fabrication, Integration
              </p>
            </div>

            {/* KPI strip (your new metrics) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="rounded-xl bg-gray-50 ring-1 ring-gray-200 px-4 py-3">
                <div className="text-xs text-gray-500">Best throughput</div>
                <div className="text-lg font-semibold">20 balls</div>
                <div className="text-xs text-gray-500">in 15 s</div>
              </div>
              <div className="rounded-xl bg-gray-50 ring-1 ring-gray-200 px-4 py-3">
                <div className="text-xs text-gray-500">Run length</div>
                <div className="text-lg font-semibold">60 s</div>
                <div className="text-xs text-gray-500">competition</div>
              </div>
              <div className="rounded-xl bg-gray-50 ring-1 ring-gray-200 px-4 py-3">
                <div className="text-xs text-gray-500">Scoring</div>
                <div className="text-lg font-semibold">20 pts/ball</div>
                <div className="text-xs text-gray-500">max 400</div>
              </div>
              <div className="rounded-xl bg-gray-50 ring-1 ring-gray-200 px-4 py-3">
                <div className="text-xs text-gray-500">Reliability</div>
                <div className="text-lg font-semibold">8/10</div>
                <div className="text-xs text-gray-500">runs</div>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "Fusion 360",
              "AutoCAD",
              "3D Printing",
              "Laser cutting",
              "Press fits",
              "Bearings + gears",
              "Controller testing",
            ].map((t) => (
              <span
                key={t}
                className="text-xs font-medium rounded-full bg-gray-100 ring-1 ring-gray-200 px-3 py-1"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
              <img
                src="/Field.png"
                alt="Competition field layout"
                className="w-full object-contain"
              />
              <p className="text-sm text-gray-500 text-center py-2">
                Field + scoring constraints
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
              <img
                src="/CADR.png"
                alt="Robot CAD model"
                className="w-full object-contain"
              />
              <p className="text-sm text-gray-500 text-center py-2">
                CAD layout of drivetrain + mechanisms
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
              <img
                src="/Real.png"
                alt="Built robot hardware"
                className="w-full object-contain"
              />
              <p className="text-sm text-gray-500 text-center py-2">
                Fabricated robot hardware
              </p>
            </div>
          </div>

          {/* Content: keep it recruiter-relevant */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
            <div>
              <h3 className="text-lg font-semibold mb-3">Problem</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>60-second runs demanded high throughput without jams or resets.</li>
                <li>Objective: maximize scoring while maintaining repeatable performance.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Ownership</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Primary mechanical designer and CAD owner (Fusion 360 + AutoCAD).</li>
                <li>Designed mechanisms using bearings/gears to improve efficiency and consistency.</li>
                <li>Fabricated parts (laser cutting, press fits, 3D printing) and assembled system.</li>
                <li>Tuned performance through controller-driven practice runs.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Outcome</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li>Peak run: 20 balls in 15 seconds; max 20 balls achieved.</li>
                <li>Highest score in our section on best run (20 pts/ball).</li>
                <li>Reliability: successful runs ~8/10.</li>
                <li>Placed 6th of 12; eliminated by the eventual overall winner.</li>
              </ul>
            </div>
          </div>

          {/* Action video */}
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
              Competition run demonstrating throughput and repeatability
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
