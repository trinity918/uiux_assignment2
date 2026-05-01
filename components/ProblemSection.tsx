"use client";

import Section from "./Section";

export default function ProblemSection() {
  const problems = [
    "No central information hub",
    "Zero social proof or scale signal",
    "Registration friction via third-party only",
    "Domain scope unclear to applicants",
    "No team-formation pathway shown",
    "Event credibility hard to communicate",
  ];

  return (
    <Section id="problem" label="01 — The Problem" dark>
      {/* Big headline */}
      <h2
        className="font-bold uppercase leading-none tracking-tight text-white"
        style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
      >
        Student hackathons<br />die in the inbox.
      </h2>

      {/* Body + problems grid */}
      <div className="grid grid-cols-2 gap-24 mt-20 max-md:grid-cols-1 max-md:gap-16">
        <div className="flex flex-col gap-6">
          <p className="text-xl leading-relaxed text-white opacity-70">
            Before AIRAVAT 3.0, event discovery for college-level AI hackathons
            was fragmented. Teams relied on WhatsApp forwards, Instagram stories
            from society accounts, and last-minute word-of-mouth. Critical
            information — domains, problem scopes, prize structure, eligibility
            — lived across multiple posts, none authoritative.
          </p>
          <p className="text-xl leading-relaxed text-white opacity-70">
            The organising committee needed a single, canonical source of truth:
            a purpose-built website that could answer every participant question
            before it was asked, while projecting the credibility and scale of a
            national-level event.
          </p>
        </div>

        <div className="flex flex-col gap-0">
          <p className="mono text-sm uppercase tracking-widest text-white opacity-40 mb-6">
            Core Problems Identified
          </p>
          <div className="border-2 border-white border-opacity-30 divide-y divide-white divide-opacity-20">
            {problems.map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-6 px-8 py-6"
              >
                <span className="mono text-sm text-white opacity-30 shrink-0 w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg text-white opacity-80">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote */}
      <blockquote
        className="mt-24 border-l-4 pl-10 py-4"
        style={{ borderColor: "#FF2D20" }}
      >
        <p
          className="font-semibold text-white leading-snug"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
        >
          &ldquo;The interface had to do the job that a hundred Instagram stories
          couldn&apos;t — convert interest into registrations at scale.&rdquo;
        </p>
      </blockquote>
    </Section>
  );
}
