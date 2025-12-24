export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold text-center">
        Alex Pacheco Santiago
      </h1>

      <p className="mt-4 text-lg md:text-xl text-gray-300 text-center">
        Mechanical Engineering @ UC San Diego
      </p>

      <p className="mt-6 max-w-2xl text-center text-gray-400">
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
    </main>
  );
}
