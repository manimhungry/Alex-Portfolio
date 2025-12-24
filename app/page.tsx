export default function Home() {
  return (
    <main className="min-h-screen text-white">
      {/* HEADER */}
      <header className="relative z-20 w-full border-b border-white/10 px-8 py-4 flex items-center justify-between bg-black/70 backdrop-blur">
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
            href="https://www.linkedin.com/in/alex-pacheco-santiago-4b5021295/"
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
      <section
        className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Mechanical Engineering @ UC San Diego
          </h2>

          <p className="mt-6 text-lg text-gray-300">
            I’m a Mechanical Engineering student at UC San Diego with hands-on
            experience in design, manufacturing, and validation of mechanical
            systems, graduating this summer.
          </p>

          <div className="mt-10 flex justify-center gap-5">
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
        </div>
      </section>
    </main>
  );
}
