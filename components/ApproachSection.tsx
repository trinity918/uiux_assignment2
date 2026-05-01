"use client";

import Section from "./Section";

const decisions = [
  {
    number: "01",
    title: "Single-Page Architecture",
    rationale:
      "Multi-page navigation would fracture attention on a site where users had a single goal: register or leave. A vertical, scroll-driven SPA let information unfold with momentum.",
    tradeoff: "SEO depth vs. conversion focus — chose conversion.",
  },
  {
    number: "02",
    title: "Anchor-Based Navigation",
    rationale:
      "Four nav links (Domains, About, Team, Contact) map to the exact four questions every potential participant has. No friction, no dead ends.",
    tradeoff: "Simple but brittle at scale — acceptable for an event site.",
  },
  {
    number: "03",
    title: "Domain-First Content Hierarchy",
    rationale:
      "Domains are the primary decision filter. Healthcare, FinTech, Social, Sustainability — participants self-select here. Showing domains before the About section mirrors the user's mental model.",
    tradeoff:
      "Assumes users understand AI domain scope — copy carries the weight.",
  },
  {
    number: "04",
    title: "External Registration Delegate",
    rationale:
      "Unstop handles identity, team formation, and payment. The site's CTA links directly to the Unstop listing, removing the need to build auth, forms, or a backend.",
    tradeoff:
      "Loss of first-party registration data — worth the speed of build.",
  },
  {
    number: "05",
    title: "Brutalist / Block Visual Theme",
    rationale:
      "The pixel-and-block metaphor aligned with the hackathon's stated theme of assembling ideas. Visual language reinforces conceptual framing.",
    tradeoff:
      "Novelty has a short half-life — needed to be executed well or not at all.",
  },
];

export default function ApproachSection() {
  return (
    <Section id="approach" label="03 — Approach" dark>
      <h2
        className="font-bold uppercase leading-none tracking-tight text-white"
        style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
      >
        Why It Was Built
        <br />
        This Way
      </h2>
      <p className="text-xl leading-relaxed text-white opacity-60 mt-8 max-w-3xl">
        Every design decision on AIRAVAT 3.0 was a deliberate trade-off between
        speed-to-ship, participant conversion, and communicating organisational
        credibility — with a zero budget and a two-week deadline.
      </p>

      {/* Decision table */}
      <div className="mt-20 border-2 border-white border-opacity-30 divide-y-2 divide-white divide-opacity-20">
        {/* Header row */}
        <div className="grid grid-cols-12 bg-white bg-opacity-10 max-md:hidden">
          <div className="col-span-1 px-8 py-5">
            <span className="mono text-xs uppercase tracking-widest text-white opacity-40">
              #
            </span>
          </div>
          <div className="col-span-3 px-8 py-5">
            <span className="mono text-xs uppercase tracking-widest text-white opacity-40">
              Decision
            </span>
          </div>
          <div className="col-span-5 px-8 py-5">
            <span className="mono text-xs uppercase tracking-widest text-white opacity-40">
              Rationale
            </span>
          </div>
          <div className="col-span-3 px-8 py-5">
            <span className="mono text-xs uppercase tracking-widest text-white opacity-40">
              Trade-off
            </span>
          </div>
        </div>

        {decisions.map((d) => (
          <div
            key={d.number}
            className="grid grid-cols-12 hover:bg-white hover:bg-opacity-5 transition-colors duration-150 max-md:grid-cols-1"
          >
            <div className="col-span-1 px-8 py-8 flex items-start max-md:pb-0">
              <span className="mono text-3xl font-bold text-white opacity-20">
                {d.number}
              </span>
            </div>
            <div className="col-span-3 px-8 py-8 flex items-start max-md:pt-3 max-md:pb-2">
              <h3 className="text-xl font-bold text-white uppercase tracking-tight leading-snug">
                {d.title}
              </h3>
            </div>
            <div className="col-span-5 px-8 py-8 flex items-start max-md:pb-2">
              <p className="text-lg leading-relaxed text-white opacity-70">
                {d.rationale}
              </p>
            </div>
            <div className="col-span-3 px-8 py-8 flex items-start border-l-2 border-white border-opacity-10 max-md:border-l-0 max-md:border-t border-opacity-10 max-md:pt-3">
              <p className="mono text-sm text-white opacity-40 leading-relaxed">
                ↳ {d.tradeoff}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
