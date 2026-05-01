"use client";

import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white" style={{ borderTop: "2px solid white" }}>
      {/* Top CTA band */}
      <div
        className="w-full flex items-center justify-between flex-wrap gap-10"
        style={{
          paddingLeft: "var(--section-px)",
          paddingRight: "var(--section-px)",
          paddingTop: "6rem",
          paddingBottom: "6rem",
          borderBottom: "2px solid rgba(255,255,255,0.2)",
        }}
      >
        <div>
          <p className="mono text-sm uppercase tracking-widest text-white mb-4" style={{ opacity: 0.4 }}>
            See the live product
          </p>
          <h2
            className="font-bold uppercase text-white leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            AIRAVAT 3.0 →
          </h2>
        </div>
        <a
          href="https://airavat-3.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 border-2 border-white text-white font-bold uppercase tracking-tight text-base hover:bg-white hover:text-black transition-colors duration-150 shrink-0"
          style={{ padding: "1.25rem 2.5rem" }}
        >
          <span>Visit Site</span>
          <ExternalLink size={18} />
        </a>
      </div>

      {/* Bottom bar */}
      <div
        className="w-full flex items-center justify-between flex-wrap gap-6"
        style={{
          paddingLeft: "var(--section-px)",
          paddingRight: "var(--section-px)",
          paddingTop: "2.5rem",
          paddingBottom: "2.5rem",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div className="flex flex-col gap-2">
          <p className="mono text-xs text-white uppercase tracking-widest" style={{ opacity: 0.4 }}>
            Case Study authored by
          </p>
          <p className="mono text-base text-white" style={{ opacity: 0.8 }}>
            Shreesh Patil — Lead Designer, Organizing Committee
          </p>
        </div>

        <div className="flex flex-col gap-2 text-right max-md:text-left">
          <p className="mono text-xs text-white uppercase tracking-widest" style={{ opacity: 0.4 }}>
            Credits
          </p>
          <p className="mono text-base text-white" style={{ opacity: 0.6 }}>
            National-Level AI Hackathon Team
          </p>
        </div>
      </div>

      {/* Final bar */}
      <div
        className="w-full flex items-center justify-between flex-wrap gap-4"
        style={{
          paddingLeft: "var(--section-px)",
          paddingRight: "var(--section-px)",
          paddingTop: "1.25rem",
          paddingBottom: "1.25rem",
        }}
      >
        <p className="mono text-sm text-white uppercase tracking-widest" style={{ opacity: 0.2 }}>
          AIRAVAT 3.0 · UX Case Study · 2024
        </p>
        <p className="mono text-sm text-white" style={{ opacity: 0.2 }}>
          Built with Next.js · Tailwind CSS · Framer Motion
        </p>
      </div>
    </footer>
  );
}
