import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Pacheco Santiago | Mechanical Engineer",
  description:
    "Mechanical engineering portfolio focused on CAD, prototyping, robotics hardware, fixture design, manufacturing support, and validation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to main content
        </a>

        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}