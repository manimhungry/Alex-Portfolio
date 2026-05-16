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

type ProofImage = {
  type?: "image" | "video";
  src: string;
  alt: string;
  label: string;
  href: string;
  contain?: boolean;
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
    label: "Experience / Internships",
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
    title: "Experience / Internships",
    text: "CAD/BOM recovery, manufacturing support, and verification on production hardware.",
    href: "/experience",
  },
];

const proofImages: ProofImage[] = [
  {
    src: "/setup.jpg",
    alt: "Automated dispensing setup with robot stage and custom tray",
    label: "Nordson fixture workflow",
    href: "/projects#nordson",
  },
  {
    src: "/direct-drive-assembly.png",
    alt: "Direct-drive turret CAD assembly",
    label: "Direct-drive turret CAD",
    href: "/projects#direct-drive-turret",
    contain: true,
  },
  {
    type: "video",
    src: "/Final_Gif.mov",
    alt: "Leica hardware work video",
    label: "Leica hardware work",
    href: "/experience#cs2-cad-recovery",
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
          ? "inline-flex items-center justify-center rounded-full bg-sky-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-black/25 transition hover:-translate-y-0.5 hover:bg-sky-200"
          : "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-black/20 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-sky-300/40 hover:bg-sky-400/[0.10]"
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
      className="group rounded-3xl border border-white/10 bg-white/[0.055] p-5 text-left shadow-2xl shadow-black/25 backdrop-blur-md transition hover:-translate-y-1 hover:border-sky-300/40 hover:bg-white/[0.04]"
    >
      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">
        {item.eyebrow}
      </div>

      <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>

      <p className="mt-2 text-sm leading-relaxed text-gray-200 group-hover:text-gray-100">
        {item.text}
      </p>
    </Link>
  );
}

function ProofImageCard({ item, featured = false }: { item: ProofImage; featured?: boolean }) {
  return (
    <Link
      href={item.href}
      className={`group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/25 transition hover:-translate-y-1 hover:border-sky-300/40 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className={featured ? "relative h-72 md:h-[390px]" : "relative h-56 md:h-[250px]"}>
        {item.type === "video" ? (
          <video
            src={item.src}
            aria-label={item.alt}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
          />
        ) : (
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
            className={`transition duration-500 group-hover:scale-[1.025] ${
              item.contain ? "object-contain p-5" : "object-cover"
            }`}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white">
          {item.label}
        </div>
      </div>
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

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(8,11,18,0.74),_rgba(15,23,42,0.70)_42%,_rgba(8,11,18,0.96))]" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="w-full border-b border-white/10 bg-white/[0.06] px-6 py-5 shadow-xl shadow-black/20 backdrop-blur-md md:px-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <Link href="/" className="inline-block">
                <h1 className="text-2xl font-bold tracking-tight text-white">
                  Alex Pacheco Santiago
                </h1>
              </Link>

              <p className="mt-1 text-sm text-gray-200">
                Mechanical Engineering — UC San Diego
              </p>
            </div>

            <nav
              aria-label="Primary navigation"
              className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-200"
            >
              {headerLinks.map((item) => (
                <ContactItem key={item.label} item={item} />
              ))}
            </nav>
          </div>
        </header>

        <section className="flex flex-1 items-center px-6 py-16 md:px-10">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="text-left">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
                About Me
              </div>

              <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
                Hi, I&apos;m Alex.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-100 md:text-xl">
                I&apos;m from Escondido, California. I&apos;ve always loved science, math, and watching my dad solve practical problems with care.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-7 text-gray-200 md:text-lg">
                I&apos;m a Mechanical Engineering student at UC San Diego graduating in December 2026. I design, test, and validate hardware through the Wang Lab, Triton Robotics, and my hardware engineering internship at Leica Biosystems.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {heroButtons.map((item) => (
                  <HeroCTA key={item.label} item={item} />
                ))}
              </div>
            </div>

            <div>
              <div className="grid gap-4 md:grid-cols-2">
                <ProofImageCard item={proofImages[0]} featured />
                {proofImages.slice(1).map((item) => (
                  <ProofImageCard key={item.href} item={item} />
                ))}
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {featuredLinks.map((item) => (
                  <FeaturedCard key={item.href} item={item} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
