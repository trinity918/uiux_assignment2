"use client";

import { ExternalLink } from "lucide-react";
import Section from "./Section";

const features = [
  {
    id: "F01",
    title: "Responsive Single-Page Layout",
    desc: "Fully fluid from 320px to 4K. Navigation collapses gracefully on mobile. Domain cards reflow to single-column without layout breaks.",
    tag: "Core",
  },
  {
    id: "F02",
    title: "Four AI Domain Tracks",
    desc: "Healthcare, FinTech, Social Cause, Sustainability. Each with standalone scope descriptions that answer the participant question: can I build something relevant here?",
    tag: "Content",
  },
  {
    id: "F03",
    title: "Dual-CTA Architecture",
    desc: "Register Now appears in the hero and in the about section, ensuring every scroll depth has a conversion point. Explore anchor reduces bounce on undecided visitors.",
    tag: "Conversion",
  },
  {
    id: "F04",
    title: "Organiser Credibility Section",
    desc: "National-level hackathon and student-led co-branding. Named team members with direct phone contacts. Eliminates the 'who is behind this?' objection.",
    tag: "Trust",
  },
  {
    id: "F05",
    title: "Zero-Backend Registration",
    desc: "All registration logic delegated to Unstop. The site serves as a qualification and intent layer — zero auth, zero forms, zero backend maintenance.",
    tag: "Architecture",
  },
  {
    id: "F06",
    title: "Vercel Edge Deployment",
    desc: "Static-first rendering via Next.js. Global CDN via Vercel Edge Network. Sub-second load times globally — critical for a campaign where first impressions are make-or-break.",
    tag: "Performance",
  },
];

export default function OutputSection() {
  return (
    <Section id="output" label="07 — Output & Delivered Features" dark>
      {/* Heading + live link */}
      <div className="flex items-start justify-between gap-8 flex-wrap">
        <h2
          className="font-bold uppercase leading-none tracking-tight text-white"
          style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
        >
          What Was<br />Delivered
        </h2>

        <a
          href="https://airavat-3.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 border-2 px-8 py-5 text-black font-bold uppercase tracking-tight text-base hover:opacity-90 transition-opacity shrink-0"
          style={{ background: "#FF2D20", borderColor: "#FF2D20" }}
        >
          <span>View Live Site</span>
          <ExternalLink size={18} />
        </a>
      </div>

      <p className="text-xl leading-relaxed text-white opacity-60 mt-8 max-w-3xl">
        The production site at{" "}
        <span className="text-white opacity-100 font-mono">airavat-3.vercel.app</span>{" "}
        was shipped within two weeks of brief. It served as the official event
        portal for AIRAVAT 3.0 — driving registrations from across India.
      </p>

      {/* Feature grid — 3 col */}
      <div className="mt-20 grid grid-cols-3 gap-0 border-2 border-white border-opacity-30 max-md:grid-cols-1">
        {features.map((f) => (
          <div
            key={f.id}
            className="p-10 border border-white border-opacity-10 hover:bg-white hover:bg-opacity-5 transition-colors duration-150 flex flex-col gap-6"
          >
            <div className="flex items-center justify-between">
              <span className="mono text-sm text-white opacity-30">{f.id}</span>
              <span
                className="mono text-sm px-4 py-2 border text-white"
                style={{ borderColor: "rgba(255,255,255,0.3)" }}
              >
                {f.tag}
              </span>
            </div>
            <h3 className="font-bold uppercase text-xl tracking-tight text-white leading-snug">
              {f.title}
            </h3>
            <p className="text-lg leading-relaxed text-white opacity-60">
              {f.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Result callout */}
      <div
        className="mt-20 border-2 p-14 grid grid-cols-3 gap-12 max-md:grid-cols-1"
        style={{ borderColor: "#FF2D20" }}
      >
        {[
          { val: "2 weeks", label: "Design to deploy" },
          { val: "500+", label: "Targeted participants" },
          { val: "4 domains", label: "Covered tracks" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <p
              className="font-bold"
              style={{ color: "#FF2D20", fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
            >
              {s.val}
            </p>
            <p className="mono text-sm uppercase tracking-widest text-white opacity-50 mt-3">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
