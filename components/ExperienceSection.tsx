"use client";

import Section from "./Section";

const steps = [
  {
    step: "01",
    action: "Lands on Hero",
    trigger: "Instagram bio link / WhatsApp forward",
    decision: "Is this worth 24 hours of my time?",
    signal: "Prize pool + Event branding above the fold",
  },
  {
    step: "02",
    action: "Scans Domains",
    trigger: "Clicks #Domains nav or scrolls",
    decision: "Is my skill set relevant to any track?",
    signal: "4 domain cards with scope descriptions",
  },
  {
    step: "03",
    action: "Reads About",
    trigger: "Scrolls past domains",
    decision: "Is the organiser credible enough to commit?",
    signal: "Student-led initiative co-brand",
  },
  {
    step: "04",
    action: "Checks Team",
    trigger: "Clicks #Organising Team",
    decision: "Can I reach someone if I have questions?",
    signal: "Named contacts with phone numbers",
  },
  {
    step: "05",
    action: "Hits Register CTA",
    trigger: "Clicks Register Now button",
    decision: "Ready to commit — where do I go?",
    signal: "Redirects to Unstop listing",
  },
];

const interactions = [
  {
    element: "Navigation",
    behaviour:
      "Fixed top bar with smooth-scroll anchors. Four links = four user questions. No dropdown, no nesting.",
  },
  {
    element: "Primary CTA",
    behaviour:
      "Register Now button is the dominant interactive element. Styled with maximum contrast. Appears twice — hero and about section.",
  },
  {
    element: "Secondary CTA",
    behaviour:
      "Explore / scroll cue below the hero description. Reduces bounce for users who aren't immediately ready to register.",
  },
  {
    element: "Domain Cards",
    behaviour:
      "Each card has equal visual weight. No hover state tricks — information is available at a glance without interaction.",
  },
  {
    element: "Contact Section",
    behaviour:
      "Phone numbers are tap-to-call on mobile. Named individuals, not generic email addresses — reduces perceived friction.",
  },
];

export default function ExperienceSection() {
  return (
    <Section id="experience" label="06 — Experience & User Flow">
      <h2
        className="font-bold uppercase leading-none tracking-tight"
        style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
      >
        How a Participant<br />Moves Through the Site
      </h2>

      {/* User flow table */}
      <div className="mt-20 border-2 border-black overflow-x-auto">
        <table className="w-full border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b-2 border-black bg-black text-white">
              {["Step", "Action", "Trigger", "Decision Point", "UX Signal"].map((h) => (
                <th
                  key={h}
                  className="text-left py-6 px-8 mono text-sm uppercase tracking-widest font-normal"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {steps.map((s, i) => (
              <tr
                key={s.step}
                className={`border-b-2 border-black border-opacity-20 ${i % 2 === 0 ? "bg-white" : "bg-zinc-50"}`}
              >
                <td className="py-6 px-8 mono text-base font-bold" style={{ color: "#FF2D20" }}>
                  {s.step}
                </td>
                <td className="py-6 px-8 text-base font-bold uppercase tracking-tight">
                  {s.action}
                </td>
                <td className="py-6 px-8 text-base opacity-60 leading-snug">{s.trigger}</td>
                <td className="py-6 px-8 text-base opacity-80 leading-snug italic">{s.decision}</td>
                <td className="py-6 px-8 text-base opacity-70 leading-snug">{s.signal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Interaction breakdowns */}
      <div className="mt-24">
        <p className="mono text-sm uppercase tracking-widest opacity-40 mb-10">
          Interaction rationale — element by element
        </p>
        <div className="border-2 border-black divide-y-2 divide-black">
          {interactions.map((item) => (
            <div
              key={item.element}
              className="grid grid-cols-4 max-md:grid-cols-1"
            >
              <div className="col-span-1 py-8 px-8 border-r-2 border-black max-md:border-r-0 max-md:border-b-2 flex items-center">
                <h4 className="font-bold uppercase text-xl tracking-tight">
                  {item.element}
                </h4>
              </div>
              <div className="col-span-3 py-8 px-8 flex items-center">
                <p className="text-lg leading-relaxed opacity-70">{item.behaviour}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
