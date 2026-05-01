"use client";

import Section from "./Section";

const designTokens = [
  { token: "Typeface", value: "System-ui / Brutalist heading stack" },
  { token: "H1 size", value: "Responsive clamp — ~64–160px" },
  { token: "Background", value: "#0A0A0A (near-black)" },
  { token: "Primary text", value: "#FFFFFF" },
  { token: "Accent", value: "#FF2D20 — retro-red interactive highlights" },
  { token: "Border radius", value: "0px — sharp, blocky everywhere" },
  { token: "Grid", value: "Full-width sections, 12-col internal layout" },
  { token: "Nav position", value: "Fixed top, transparent blur fallback" },
];

export default function InterfaceSection() {
  return (
    <Section id="interface" label="05 — Interface" dark>
      <h2
        className="font-bold uppercase leading-none tracking-tight text-white"
        style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
      >
        The Interface
      </h2>
      <p className="text-xl leading-relaxed text-white opacity-60 mt-8 max-w-3xl">
        Rendered at{" "}
        <a
          href="https://airavat-3.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-white hover:opacity-100 opacity-80"
          style={{ textDecorationColor: "#FF2D20" }}
        >
          airavat-3.vercel.app
        </a>
        . Deployed on Vercel. Built with Next.js and Tailwind CSS.
      </p>

      {/* Full-bleed screenshots — flush to section edges */}
      <div className="mt-20 -mx-6 md:-mx-12 flex flex-col border-y-2 border-white">
        <img
          src="/home.png"
          alt="Hero Screen"
          className="w-full h-auto block"
        />
        <img
          src="/domains.png"
          alt="Domains Screen"
          className="w-full h-auto block border-t-2 border-white"
        />
        <img
          src="/about.png"
          alt="About Screen"
          className="w-full h-auto block border-t-2 border-white"
        />
        <img
          src="/organising committee.png"
          alt="Organising Team Screen"
          className="w-full h-auto block border-t-2 border-white"
        />
      </div>

      {/* Design token table */}
      <div className="mt-20">
        <p className="mono text-sm uppercase tracking-widest text-white opacity-40 mb-10">
          Design tokens observed
        </p>
        <div className="border-2 border-white border-opacity-30 divide-y-2 divide-white divide-opacity-10">
          {designTokens.map((t) => (
            <div
              key={t.token}
              className="grid grid-cols-2 max-md:grid-cols-1"
            >
              <div className="py-6 px-8 border-r-2 border-white border-opacity-10 max-md:border-r-0 max-md:border-b max-md:pb-2">
                <p className="mono text-sm uppercase tracking-widest text-white opacity-40">
                  {t.token}
                </p>
              </div>
              <div className="py-6 px-8">
                <p className="mono text-base text-white opacity-80">{t.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
