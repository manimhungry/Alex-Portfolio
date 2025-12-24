export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-[center_35%]"
        style={{
          backgroundImage: "url('/Geisel.JPEG')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      {/* CONTENT */}
      <div className="relative z-10">
        {/* HEADER */}
        <header className="w-full px-8 py-5 flex items-center justify-between border-b border-white/10">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">
              Alex Pacheco Santiago
            </h1>
            <p className="text-sm text-gray-400">
              Mechanical Engineering – University of California San Diego
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-300">
            <a
              href="mailto:apsfin1@gmail.com"
              className="hover:text-white transition"
            >
              apsfin1@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/alex-pacheco-santiago-4b5021295/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline transition"
            >
              LinkedIn
            </a>

            <span className="text-gray-400">619-672-3154</span>
          </div>
        </header>

        {/* HERO */}
        <section className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Design. Build. Validate.
          </h2>

          <p className="mt-6 max-w-2xl text-gray-300">
            Mechanical Engineering student at UC San Diego with hands-on experience
            owning CAD-driven designs, fabricating hardware, and validating
            mechanical systems through testing and iteration.
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
      </div>
    </main>
  );
}
