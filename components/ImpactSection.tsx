"use client";

import Section from "./Section";

export default function ImpactSection() {
  return (
    <Section id="impact" label="08 — Impact & Reach">
      <h2
        className="font-bold uppercase leading-none tracking-tight"
        style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
      >
        Impact & Reach
      </h2>
      <p className="text-xl leading-relaxed opacity-70 mt-8 max-w-3xl">
        The design and accessibility of the platform successfully converted interest
        into concrete participation, demonstrating measurable engagement metrics
        over its active lifecycle.
      </p>

      {/* Full-bleed analytics screenshots */}
      <div className="mt-20 -mx-6 md:-mx-12 border-y-2 border-black flex flex-col">
        <img
          src="/analytics1.png"
          alt="Platform Analytics — Overview"
          className="w-full h-auto block"
        />
        <img
          src="/analytics2.png"
          alt="Platform Analytics — Breakdown"
          className="w-full h-auto block border-t-2 border-black"
        />
      </div>

      {/* Metrics grid */}
      <div className="mt-20 grid grid-cols-3 border-2 border-black divide-x-2 divide-black max-md:grid-cols-1 max-md:divide-x-0 max-md:divide-y-2">
        <div className="p-12 flex flex-col gap-4">
          <h3
            className="font-bold"
            style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)" }}
          >
            500+
          </h3>
          <p className="mono text-sm uppercase tracking-widest opacity-50">Total Users Reached</p>
          <p className="text-lg leading-relaxed opacity-70 mt-2">
            The platform served as the central hub, reliably handling traffic spikes
            during the registration phase and actively engaging over 500 unique builders.
          </p>
        </div>

        <div className="p-12 flex flex-col gap-4 bg-zinc-50">
          <h3
            className="font-bold"
            style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)" }}
          >
            Multiple
          </h3>
          <p className="mono text-sm uppercase tracking-widest opacity-50">Countries Engaged</p>
          <p className="text-lg leading-relaxed opacity-70 mt-2">
            Vercel Edge network ensured fast load times, allowing the platform to reach
            and register participants beyond immediate geographic constraints.
          </p>
        </div>

        <div className="p-12 flex flex-col gap-4">
          <h3
            className="font-bold"
            style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)" }}
          >
            Sustained
          </h3>
          <p className="mono text-sm uppercase tracking-widest opacity-50">Post-event Traffic</p>
          <p className="text-lg leading-relaxed opacity-70 mt-2">
            The platform continued to receive steady organic traffic post-completion,
            establishing a strong digital footprint for future editions.
          </p>
        </div>
      </div>
    </Section>
  );
}
