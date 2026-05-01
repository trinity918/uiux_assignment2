"use client";

import Section from "./Section";

const worked = [
  {
    title: "Single-page scroll flow",
    desc: "The decision to keep everything on one page was correct. It eliminated navigation dead-ends and let the content build momentum naturally. Bounce metrics were low among users who landed via direct link.",
  },
  {
    title: "Anchor-based navigation",
    desc: "Four nav links mapped directly to the four user questions. This clarity reduced confusion — every user knew exactly where they were and what came next.",
  },
  {
    title: "Above-the-fold prize visibility",
    desc: "Showing ₹1,00,000 immediately in the hero was the single most effective conversion signal. It answered the first and most important question before any interaction.",
  },
  {
    title: "Named contacts instead of forms",
    desc: "Displaying real names and phone numbers (not a contact form) created a sense of human accountability. Users reported feeling more comfortable asking questions.",
  },
  {
    title: "Domain-first content ordering",
    desc: "Placing domains before the About section aligned with participant mental models. The first question is always domain relevance, not organisational backstory.",
  },
];

const failed = [
  {
    title: "No search or filtering on domains",
    desc: "With only 4 domains, this wasn't critical. But as the event scales, participants with niche interests would benefit from domain comparison or filtering tools.",
  },
  {
    title: "No team-formation support",
    desc: "Many solo participants wanted a way to find teammates. The site had no mechanism for this — fully delegated to Unstop, which added friction for solo builders.",
  },
  {
    title: "Static prize structure with no FAQ",
    desc: "Prize breakdown, team size limits, and judging criteria generated repeated contact queries. A structured FAQ would have deflected this volume.",
  },
  {
    title: "No countdown timer",
    desc: "A live countdown to registration close or the event start would have created urgency without requiring any copy changes. Missed conversion opportunity.",
  },
];

const improvements = [
  "Add a live countdown timer to the hero section",
  "Build a team formation board or connect with Discord server",
  "Add an FAQ accordion section to pre-answer common queries",
  "Implement OG image generation for social sharing previews",
  "Add domain problem statement PDFs for download",
  "Create a past edition section to build multi-year credibility",
  "Consider a dark/light mode toggle for accessibility",
];

export default function LearningsSection() {
  return (
    <Section id="learnings" label="09 — Learnings">
      <h2
        className="font-bold uppercase leading-none tracking-tight"
        style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
      >
        Reflections
      </h2>
      <p className="text-xl leading-relaxed opacity-60 mt-8 max-w-3xl">
        Honest evaluation of what shipped, what misfired, and what would be
        built differently with more time and data.
      </p>

      {/* What worked / fell short — 2 col */}
      <div className="grid grid-cols-2 gap-16 mt-20 max-md:grid-cols-1">
        {/* What worked */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-4 h-4 bg-black" />
            <h3
              className="font-bold uppercase tracking-tight"
              style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }}
            >
              What Worked
            </h3>
          </div>
          <div className="border-2 border-black divide-y-2 divide-black">
            {worked.map((w) => (
              <div key={w.title} className="p-8">
                <h4 className="font-bold text-lg uppercase tracking-tight mb-3">
                  {w.title}
                </h4>
                <p className="text-lg leading-relaxed opacity-60">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What fell short */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-4 h-4" style={{ background: "#FF2D20" }} />
            <h3
              className="font-bold uppercase tracking-tight"
              style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }}
            >
              What Fell Short
            </h3>
          </div>
          <div
            className="border-2 divide-y-2"
            style={{ borderColor: "#FF2D20" }}
          >
            {failed.map((f) => (
              <div
                key={f.title}
                className="p-8"
                style={{ borderColor: "#FF2D20" }}
              >
                <h4
                  className="font-bold text-lg uppercase tracking-tight mb-3"
                  style={{ color: "#FF2D20" }}
                >
                  {f.title}
                </h4>
                <p className="text-lg leading-relaxed opacity-60">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* If I built it again */}
      <div className="mt-20 border-2 border-black p-12">
        <p className="mono text-sm uppercase tracking-widest opacity-40 mb-10">
          If built again — v2 improvements
        </p>
        <div className="grid grid-cols-2 gap-x-16 gap-y-6 max-md:grid-cols-1">
          {improvements.map((item, i) => (
            <div key={i} className="flex items-start gap-6">
              <span className="mono text-sm opacity-30 shrink-0 mt-0.5 w-8">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-lg leading-relaxed opacity-80">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
