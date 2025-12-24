export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black text-white flex flex-col items-center justify-center px-6">
      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Alex Pacheco Santiago
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Mechanical Engineering @ UC San Diego
        </p>

        <p className="mt-6 max-w-2xl text-gray-400">
          Aspiring mechanical engineer focused on mechanical design, CAD, and
          finite element analysis. Interested in real-world hardware systems and
          graduate-level engineering.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            View Projects
          </a>

          <a
            href="mailto:apsfin1@gmail.com"
            className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
          >
            Contact
          </a>
        </div>

        {/* SCROLL HINT */}
        <div className="mt-20 text-gray-500 text-sm animate-bounce">
          ↓ Scroll
        </div>
      </section>

      {/* PROJECTS PLACEHOLDER */}
      <section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      >
        <h2 className="text-3xl md:text-4xl font-semibold">
          Projects
        </h2>

        <p className="mt-4 text-gray-400 max-w-xl">
          Engineering projects focused on analysis, design, and validation.
          Detailed case studies coming next.
        </p>
      </section>
    </main>
  );
}
