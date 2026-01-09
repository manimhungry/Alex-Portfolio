export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Geisel.JPEG')" }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      {/* CONTENT */}
      <div className="relative z-10">
        {/* HEADER (keep sizing; make links pop + consistent underline) */}
        <header className="w-full px-8 py-5 flex items-center justify-between border-b border-white/10">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">
              Alex Pacheco Santiago
            </h1>
            <p className="text-sm text-gray-200">
              Mechanical Engineering — UC San Diego
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-white-200">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-white/60 hover:decoration-white hover:text-white transition"
            >
              Resume
            </a>

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
              className="underline underline-offset-4 decoration-white/60 hover:decoration-white hover:text-white transition"
            >
              LinkedIn
            </a>

            <span className="text-gray-200">619-672-3154</span>
          </div>
        </header>

        {/* HERO */}
        <section className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Design. Build. Validate.
          </h2>

          {/* Cleaner subtext + subtle “pill” for readability (does NOT blur/compress Geisel image) */}
          <p className="mt-5 max-w-2xl rounded-xl bg-black/12 px-4 py-2 text-sm md:text-base text-gray-300 leading-relaxed text-center backdrop-blur-sm">
            Mechanical design from CAD to prototype to verification.
          </p>

          {/* HERO BUTTONS (make both white like you asked) */}
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <a
              href="/projects"
              className="rounded-xl bg-white px-7 py-3 text-black font-semibold hover:bg-gray-200 transition"
            >
              View Projects
            </a>

            <a
              href="/experience"
              className="rounded-xl bg-white px-7 py-3 text-black font-semibold hover:bg-gray-200 transition"
            >
              Experience
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
