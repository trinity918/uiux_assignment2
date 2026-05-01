"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="w-full bg-black text-white relative flex flex-col"
      style={{ borderBottom: "2px solid white" }}
    >
      {/* Nav bar */}
      <nav
        className="w-full flex items-center justify-between"
        style={{
          borderBottom: "2px solid white",
          paddingLeft: "var(--section-px)",
          paddingRight: "var(--section-px)",
          paddingTop: "1.25rem",
          paddingBottom: "1.25rem",
        }}
      >
        <span className="mono text-sm uppercase tracking-widest text-white opacity-50">
          UX / Case Study / 2026
        </span>
        <a
          href="https://airavat-3.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="mono text-sm uppercase tracking-widest text-white border-2 border-white hover:bg-white hover:text-black transition-colors duration-150"
          style={{ padding: "0.75rem 1.5rem" }}
        >
          Live Site ↗
        </a>
      </nav>

      {/* Main hero content */}
      <div
        className="w-full"
        style={{
          paddingLeft: "var(--section-px)",
          paddingRight: "var(--section-px)",
          paddingTop: "4rem",
          paddingBottom: "0",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Oversize title */}
          <h1
            className="font-bold leading-none tracking-tighter text-white uppercase"
            style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}
          >
            AIR<span style={{ color: "#FF2D20" }}>AVA</span>T
          </h1>

          {/* Subtitle row — full width grid */}
          <div
            className="grid grid-cols-3 max-md:grid-cols-1"
            style={{
              marginTop: "2.5rem",
              border: "2px solid white",
              borderLeft: "none",
              borderRight: "none",
              borderCollapse: "collapse",
            }}
          >
            <div
              className="flex items-center"
              style={{ padding: "1.25rem 2rem", borderRight: "2px solid white" }}
            >
              <span className="mono text-base uppercase tracking-widest text-white">
                A UX Case Study
              </span>
            </div>
            <div
              className="flex items-center"
              style={{
                padding: "1.25rem 2rem",
                background: "#FF2D20",
                borderRight: "2px solid white",
              }}
            >
              <span className="mono text-base uppercase tracking-widest text-white font-bold">
                Hackathon Platform
              </span>
            </div>
            <div className="flex items-center" style={{ padding: "1.25rem 2rem" }}>
              <span className="mono text-base uppercase tracking-widest text-white">
                Student-led Initiative · 2026
              </span>
            </div>
          </div>
        </motion.div>

        {/* Description + stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-3 max-md:grid-cols-1"
          style={{
            marginTop: "0",
            borderLeft: "none",
            borderRight: "none",
            borderBottom: "2px solid white",
            borderTop: "none",
          }}
        >
          {/* Description */}
          <div
            className="col-span-2 max-md:col-span-1"
            style={{ padding: "3rem 2rem", borderRight: "2px solid white" }}
          >
            <p className="text-xl leading-relaxed text-white font-normal" style={{ opacity: 0.85 }}>
              A deep-dive into designing AIRAVAT 3.0 — a national-level 24-hour
              AI hackathon platform hosted as a student-led initiative. This case
              study dissects every design decision: from information architecture
              to the interface that mobilised over 500+ participants.
            </p>
            <a
              href="#problem"
              className="inline-flex items-center gap-4 text-white border-2 border-white hover:bg-white hover:text-black transition-colors duration-150"
              style={{ marginTop: "2.5rem", padding: "1rem 2rem" }}
            >
              <span className="mono text-sm uppercase tracking-widest font-bold">
                Begin Reading
              </span>
              <ArrowDown size={18} />
            </a>
          </div>

          {/* Stats column */}
          <div className="col-span-1 flex flex-col max-md:col-span-1" style={{ borderTop: "none" }}>
            {[
              { val: "₹1,00,000", label: "Prize Pool" },
              { val: "24 HRS", label: "Hackathon Duration" },
              { val: "4 DOMAINS", label: "AI Tracks" },
            ].map((s, i) => (
              <div
                key={s.label}
                className="flex-1 flex flex-col justify-center"
                style={{
                  padding: "2rem",
                  borderTop: i > 0 ? "2px solid white" : "none",
                }}
              >
                <p className="text-4xl font-bold text-white">{s.val}</p>
                <p
                  className="mono text-sm uppercase tracking-widest text-white mt-2"
                  style={{ opacity: 0.4 }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
