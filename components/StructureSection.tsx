"use client";

import Section from "./Section";

const wireframeBlocks = [
  { label: "NAV", height: "h-14", cols: "col-span-12", accent: false },
  { label: "HERO — Title + CTA + Prize", height: "h-44", cols: "col-span-12", accent: true },
  { label: "DOMAIN 01 — Healthcare", height: "h-28", cols: "col-span-6", accent: false },
  { label: "DOMAIN 02 — FinTech", height: "h-28", cols: "col-span-6", accent: false },
  { label: "DOMAIN 03 — Social Cause", height: "h-28", cols: "col-span-6", accent: false },
  { label: "DOMAIN 04 — Sustainability", height: "h-28", cols: "col-span-6", accent: false },
  { label: "ABOUT — Event Description", height: "h-40", cols: "col-span-8", accent: false },
  { label: "REGISTER CTA", height: "h-40", cols: "col-span-4", accent: true },
  { label: "ORGANISING TEAM — Student Committee", height: "h-32", cols: "col-span-12", accent: false },
  { label: "CONTACT DETAILS", height: "h-24", cols: "col-span-12", accent: false },
];

const principles = [
  {
    title: "F-Pattern Reading",
    desc: "Hero content spans full width to capture horizontal scan. Domain cards split into 2-column grid to support the natural drop in reading attention.",
  },
  {
    title: "Progressive Disclosure",
    desc: "Prize and CTA appear immediately in the hero. Domain detail only reveals on scroll. Team and contact are last — for already-committed visitors.",
  },
  {
    title: "Visual Weight Hierarchy",
    desc: "Title size is maximal. Section headings use consistent scale reduction. Body copy sits at exactly the right opacity to feel informative, not overwhelming.",
  },
  {
    title: "Anchor Grid",
    desc: "Nav links are pure scroll anchors. The information architecture mirrors the navigation — what you click is literally what you see next.",
  },
];

export default function StructureSection() {
  return (
    <Section id="structure" label="04 — Structure">
      <h2
        className="font-bold uppercase leading-none tracking-tight"
        style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
      >
        Layout Logic &<br />Information Architecture
      </h2>

      <div className="grid grid-cols-2 gap-20 mt-20 max-md:grid-cols-1 max-md:gap-16">
        {/* Wireframe diagram */}
        <div>
          <p className="mono text-sm uppercase tracking-widest opacity-40 mb-8">
            Page wireframe — scroll flow
          </p>
          <div className="border-2 border-black p-6">
            <div className="grid grid-cols-12 gap-2">
              {wireframeBlocks.map((b, i) => (
                <div
                  key={i}
                  className={`${b.cols} ${b.height} border-2 flex items-center justify-center max-md:col-span-12`}
                  style={{
                    borderColor: b.accent ? "#FF2D20" : "#000",
                    background: b.accent ? "rgba(255,45,32,0.08)" : "rgba(0,0,0,0.03)",
                  }}
                >
                  <span
                    className="mono text-xs uppercase tracking-widest text-center px-2 leading-tight opacity-60"
                    style={{ color: b.accent ? "#FF2D20" : "#000" }}
                  >
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <p className="mono text-xs opacity-30 mt-4">
            ↳ Each row represents a distinct scroll section. Red = primary conversion point.
          </p>
        </div>

        {/* Layout principles */}
        <div className="flex flex-col gap-10">
          <p className="mono text-sm uppercase tracking-widest opacity-40">
            Layout principles applied
          </p>
          {principles.map((p) => (
            <div key={p.title} className="border-l-4 border-black pl-8 py-2">
              <h4 className="font-bold uppercase text-xl tracking-tight mb-3">
                {p.title}
              </h4>
              <p className="text-lg leading-relaxed opacity-60">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
