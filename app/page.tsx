import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main id="main" className="relative min-h-screen overflow-hidden text-white">
      {/* Background image */}
      <Image
        src="/Geisel.JPEG"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(3,7,18,0.74),_rgba(3,7,18,0.66)_38%,_rgba(3,7,18,0.95))]" />

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Header */}
        <header className="w-full border-b border-white/10 bg-black/20 px-6 py-5 backdrop-blur-md md:px-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <Link href="/" className="inline-block">
                <h1 className="text-2xl font-bold tracking-tight text-white">
                  Alex Pacheco Santiago
                </h1>
              </Link>

              <p className="mt-1 text-sm text-gray-300">
                Mechanical Engineering — UC San Diego
              </p>
            </div>

            <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-300">
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-white/40 underline-offset-4 transition hover:text-white hover:decoration-white"
              >
                Resume
              </a>

              <a
                href="mailto:apsfin1@gmail.com"
                className="transition hover:text-white"
              >
                apsfin1@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/alex-pacheco-santiago-4b5021295/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-white/40 underline-offset-4 transition hover:text-white hover:decoration-white"
              >
                LinkedIn
              </a>

              <span>619-672-3154</span>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section className="flex flex-1 items-center justify-center px-6 py-20 text-center md:px-10">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
              Design. Build. Validate.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl rounded-2xl border border-white/10 bg-black/25 px-5 py-3 text-base leading-relaxed text-gray-200 shadow-2xl shadow-black/20 backdrop-blur-md md:text-lg">
              Mechanical design from CAD to prototype to verification.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/projects"
                className="rounded-2xl bg-white px-7 py-3 text-sm font-semibold text-black shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-gray-200"
              >
                View Projects
              </Link>

              <Link
                href="/experience"
                className="rounded-2xl bg-white px-7 py-3 text-sm font-semibold text-black shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-gray-200"
              >
                Experience
              </Link>
            </div>

            {/* Feature cards */}
            <div className="mx-auto mt-14 grid max-w-4xl gap-4 md:grid-cols-3">
              <Link
                href="/projects#nordson"
                className="group rounded-3xl border border-white/10 bg-white/[0.055] p-5 text-left shadow-2xl shadow-black/20 backdrop-blur-md transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
                  Featured
                </div>

                <h3 className="mt-3 text-lg font-semibold text-white">
                  Automated Dispensing
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-400 group-hover:text-gray-300">
                  Fixture design, robot calibration, and 5 µL dispense validation.
                </p>
              </Link>

              <Link
                href="/projects#direct-drive-turret"
                className="group rounded-3xl border border-white/10 bg-white/[0.055] p-5 text-left shadow-2xl shadow-black/20 backdrop-blur-md transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
                  Hardware
                </div>

                <h3 className="mt-3 text-lg font-semibold text-white">
                  Direct Drive Turret
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-400 group-hover:text-gray-300">
                  Belt-drive replacement, backlash reduction, and serviceability improvement.
                </p>
              </Link>

              <Link
                href="/experience"
                className="group rounded-3xl border border-white/10 bg-white/[0.055] p-5 text-left shadow-2xl shadow-black/20 backdrop-blur-md transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
                  Leica
                </div>

                <h3 className="mt-3 text-lg font-semibold text-white">
                  Leica Biosystems
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-400 group-hover:text-gray-300">
                  CAD/BOM recovery, manufacturing support, and verification on production hardware.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}