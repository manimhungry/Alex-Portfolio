import Image from "next/image";
import Link from "next/link";

type ContactLink =
  | {
      label: string;
      href: string;
      external?: boolean;
    }
  | {
      label: string;
      href?: never;
      external?: never;
    };

type HeroButton = {
  label: string;
  href: string;
  primary?: boolean;
};

type FeaturedLink = {
  eyebrow: string;
  title: string;
  text: string;
  href: string;
};

const headerLinks: ContactLink[] = [
  { label: "Resume", href: "/Resume.pdf", external: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alex-pacheco-santiago-4b5021295/",
    external: true,
  },
  { label: "apsfin1@gmail.com", href: "mailto:apsfin1@gmail.com" },
  { label: "619-672-3154" },
];

const heroButtons: HeroButton[] = [
  {
    label: "View Projects",
    href: "/projects",
    primary: true,
  },
  {
    label: "Experience",
    href: "/experience",
  },
];

const featuredLinks: FeaturedLink[] = [
  {
    eyebrow: "Featured",
    title: "Automated Dispensing",
    text: "Fixture design, robot calibration, and 5 µL dispense validation.",
    href: "/projects#nordson",
  },
  {
    eyebrow: "Hardware",
    title: "Direct Drive Turret",
    text: "Belt-drive replacement, backlash reduction, and serviceability improvement.",
    href: "/projects#direct-drive-turret",
  },
  {
    eyebrow: "Leica",
    title: "Leica Biosystems",
    text: "CAD/BOM recovery, manufacturing support, and verification on production hardware.",
    href: "/experience",
  },
];

function ContactItem({ item }: { item: ContactLink }) {
  if (!item.href) {
    return <span>{item.label}</span>;
  }

  return (
    <a
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      className={
        item.external
          ? "underline decoration-white/40 underline-offset-4 transition hover:text-white hover:decoration-white"
          : "transition hover:text-white"
      }
    >
      {item.label}
    </a>
  );
}

function HeroCTA({ item }: { item: HeroButton }) {
  return (
    <Link
      href={item.href}
      className={
        item.primary
          ? "inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-2xl shadow-black/25 transition hover:-translate-y-0.5 hover:bg-blue-100"
          : "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white shadow-2xl shadow-black/20 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.1]"
      }
    >
      {item.label}
    </Link>
  );
}

function FeaturedCard({ item }: { item: FeaturedLink }) {
  return (
    <Link
      href={item.href}
      className="group rounded-3xl border border-white/10 bg-white/[0.055] p-5 text-left shadow-2xl shadow-black/20 backdrop-blur-md transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
    >
      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
        {item.eyebrow}
      </div>

      <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>

      <p className="mt-2 text-sm leading-relaxed text-gray-400 group-hover:text-gray-300">
        {item.text}
      </p>
    </Link>
  );
}

export default function Home() {
  return (
    <main id="main" className="relative min-h-screen overflow-hidden text-white">
      <Image
        src="/Geisel.JPEG"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(3,7,18,0.74),_rgba(3,7,18,0.66)_38%,_rgba(3,7,18,0.95))]" />

      <div className="relative z-10 flex min-h-screen flex-col">
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

            <nav
              aria-label="Primary navigation"
              className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-300"
            >
              {headerLinks.map((item) => (
                <ContactItem key={item.label} item={item} />
              ))}
            </nav>
          </div>
        </header>

        <section className="flex flex-1 items-center justify-center px-6 py-20 text-center md:px-10">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
              Design. Build. Validate.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl rounded-2xl border border-white/10 bg-black/25 px-5 py-3 text-base leading-relaxed text-gray-200 shadow-2xl shadow-black/20 backdrop-blur-md md:text-lg">
              Mechanical design from CAD to prototype to verification.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {heroButtons.map((item) => (
                <HeroCTA key={item.label} item={item} />
              ))}
            </div>

            <div className="mx-auto mt-14 grid max-w-4xl gap-4 md:grid-cols-3">
              {featuredLinks.map((item) => (
                <FeaturedCard key={item.href} item={item} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}