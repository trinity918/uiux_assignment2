"use client";

import Section from "./Section";

const users = [
  {
    type: "Primary User",
    name: "The Builder",
    desc: "Engineering/CS student, 18–22, looking for hackathon credibility signals before investing time registering. Scans fast, decides in seconds.",
    needs: ["Clear prize & timeline", "Domain relevance", "Credibility markers"],
  },
  {
    type: "Secondary User",
    name: "The Team Lead",
    desc: "Already registered on Unstop, uses site as reference to brief teammates. Needs domain scope depth and organiser contacts.",
    needs: ["Domain detail", "Contact access", "FAQ-style clarity"],
  },
  {
    type: "Tertiary User",
    name: "The Evaluator",
    desc: "Faculty advisor or corporate mentor evaluating whether to sponsor or mentor. Looks for organisational legitimacy and past credibility.",
    needs: ["Organiser credentials", "Event branding", "Professional presentation"],
  },
];

const assumptions = [
  "Most traffic arrives via mobile — Instagram bio links, WhatsApp",
  "First-visit bounce rate would be high without strong above-the-fold signal",
  "Unstop handles full registration; site's job is to qualify and convert intent",
  "Users spend < 15 seconds deciding whether to read further",
  "Domain names alone aren't self-explanatory — context copy is critical",
];

export default function ContextSection() {
  return (
    <Section id="context" label="02 — Context & Users">
      <h2
        className="font-bold uppercase leading-none tracking-tight"
        style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
      >
        Who Lands Here<br />& Why It Matters
      </h2>

      {/* User profiles — full width 3-col */}
      <div className="grid grid-cols-3 mt-20 border-2 border-black divide-x-2 divide-black max-md:grid-cols-1 max-md:divide-x-0 max-md:divide-y-2">
        {users.map((u) => (
          <div key={u.type} className="p-10">
            <p className="mono text-sm uppercase tracking-widest opacity-40 mb-4">
              {u.type}
            </p>
            <h3
              className="font-bold uppercase mb-6"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
            >
              {u.name}
            </h3>
            <p className="text-lg leading-relaxed opacity-70 mb-8">{u.desc}</p>
            <div className="flex flex-col gap-3">
              {u.needs.map((n) => (
                <div key={n} className="flex items-center gap-3">
                  <span
                    className="w-2.5 h-2.5 shrink-0"
                    style={{ background: "#FF2D20" }}
                  />
                  <span className="mono text-sm uppercase tracking-wide">{n}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Assumptions */}
      <div className="mt-24 grid grid-cols-2 gap-24 max-md:grid-cols-1 max-md:gap-16">
        <div>
          <h3
            className="font-bold uppercase tracking-tight mb-4"
            style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }}
          >
            Design Assumptions
          </h3>
          <p className="text-lg opacity-50 leading-relaxed">
            Research constraints meant assumptions had to be made. These shaped
            every layout and copy decision.
          </p>
        </div>
        <div className="flex flex-col gap-0 border-2 border-black divide-y-2 divide-black">
          {assumptions.map((a, i) => (
            <div key={i} className="flex items-start gap-6 px-8 py-6">
              <span className="mono text-sm opacity-30 shrink-0 mt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-lg leading-relaxed opacity-80">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
