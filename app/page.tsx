export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <header className="w-full border-b border-white/10 px-8 py-4 flex items-center justify-between">
        {/* Left side */}
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight">
            Alex Pacheco Santiago
          </h1>
          <p className="text-sm text-gray-400">
            Mechanical Engineering – University of California San Diego
          </p>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-6 text-sm text-gray-300">
          <a
            href="mailto:apsfin1@gmail.com"
            className="hover:text-white transition"
          >
            apsfin1@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition underline"
          >
            LinkedIn
          </a>

          <span className="text-gray-400">
            619-672-3154
          </span>
        </div>
      </header>

      {/* HERO */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          Mechanical Engineering Portfolio
        </h2>

        <p className="mt-6 max-w-2xl text-gray-400">
          Aspiring mechanical engineer focused on mechanical design, CAD, and
          finite element analysis. Interested in real-world hardware systems and
          graduate-level engineering.
        </p>

        <div className="mt-10 flex gap-5">
          <a
            href="/projects"
            className="rounded-xl bg-white px-7 py-3 text-black font-semibold hover:bg-gray-200 transition"
          >
            View Projects
          </a>

          <a
            href="mailto:apsfin1@gmail.com"
            className="rounded-xl border border-white/30 px-7 py-3 hover:bg-white hover:text-black transition"
          >
            Contact
          </a>
        </div>
      </section>
    </main>
  );
}
