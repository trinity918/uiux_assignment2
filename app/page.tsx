"use client";

import ApproachSection from "@/components/ApproachSection";
import ContextSection from "@/components/ContextSection";
import Hero from "@/components/Hero";
import InterfaceSection from "@/components/InterfaceSection";
import Navbar from "@/components/Navbar";
import ProblemSection from "@/components/ProblemSection";
import StructureSection from "@/components/StructureSection";

import Footer from "@/components/Footer";
import ImpactSection from "@/components/ImpactSection";
import LearningsSection from "@/components/LearningsSection";
import OutputSection from "@/components/OutputSection";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* PORTFOLIO HEADER */}
      <section
        id="portfolio-header"
        className="w-full bg-black text-white"
        style={{
          paddingLeft: "var(--section-px)",
          paddingRight: "var(--section-px)",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <div>
          <p className="mono text-base uppercase tracking-widest mb-4 opacity-50">Portfolio</p>
          <h1
            className="font-bold uppercase leading-none tracking-tighter text-white"
            style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}
          >
            SHREESH PATIL
          </h1>
          <h2 className="mono text-2xl uppercase tracking-widest mt-6 mb-6 opacity-80">
            COMPUTER ENGINEER / UI-UX / SYSTEM DESIGN
          </h2>
          <p className="text-xl leading-relaxed text-white font-normal" style={{ opacity: 0.85 }}>
            Building scalable systems and brutalist UX for real-world impact.
          </p>
        </div>
      </section>
      {/* ABOUT SECTION */}
      <section
        id="about"
        className="w-full bg-black text-white"
        style={{
          paddingLeft: "var(--section-px)",
          paddingRight: "var(--section-px)",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-stretch">
          {/* Left editorial statement */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <p className="mono text-base uppercase tracking-widest mb-6 opacity-50">About</p>
              <p className="text-xl font-normal mb-8" style={{ opacity: 0.85 }}>
                Computer engineer focused on systems, security, and UX.
              </p>
              <p className="font-bold text-2xl uppercase tracking-tight leading-snug">
                I design <span className="border-b-2 border-white pb-1">clean, structured</span> digital experiences.
              </p>
            </div>
          </div>
          {/* Right visual blocks */}
          <div className="flex-1 flex flex-col gap-8 justify-center">
            <div className="border-2 border-white p-8">
              <p className="mono text-lg uppercase tracking-widest opacity-80">
                Systems-first thinking
              </p>
            </div>
            <div className="border-2 border-white p-8">
              <p className="mono text-lg uppercase tracking-widest opacity-80">
                Security-focused design
              </p>
            </div>
            <div className="border-2 border-white p-8">
              <p className="mono text-lg uppercase tracking-widest opacity-80">
                Performance-aware engineering
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS LABEL */}
      <section
        id="projects"
        className="w-full bg-black text-white"
        style={{
          paddingLeft: "var(--section-px)",
          paddingRight: "var(--section-px)",
          paddingTop: "3rem",
          paddingBottom: "1.5rem",
        }}
      >
        <p className="mono text-base uppercase tracking-widest mb-2 opacity-50">Projects</p>
        <h3 className="mono text-lg uppercase tracking-widest mb-8 opacity-80">UX CASE STUDY — ERP REDESIGN</h3>
      </section>

      {/* ERP PROJECT SECTION */}
      <section
        id="erp"
        className="w-full bg-white text-black"
        style={{
          paddingLeft: "var(--section-px)",
          paddingRight: "var(--section-px)",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <p className="mono text-base uppercase tracking-widest mb-2 opacity-50">ERP UI/UX Redesign</p>
        <h2
          className="font-bold uppercase leading-none tracking-tighter"
          style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
        >
          ERP UI/UX REDESIGN
        </h2>

        {/* Problem */}
        <div className="mb-16 mt-6">
          <p className="mono text-sm uppercase tracking-widest mb-4 opacity-50">Problem</p>
          <p className="text-xl leading-relaxed mb-6 opacity-80" style={{ maxWidth: "72ch" }}>
            The existing university ERP portal was desktop-only, visually inconsistent, and required students to navigate 4–6 screens to access basic information like attendance, fees, or today&apos;s schedule. No unified design language existed across modules — each section felt like a separate product.
          </p>
          <p className="text-lg leading-relaxed mb-6 opacity-70" style={{ maxWidth: "72ch" }}>
            Students needed to switch between three disconnected modules — academics, accounts, and examination — each with its own login flow, navigation pattern, and visual language. Core daily tasks like checking attendance or viewing fee dues required multiple redirects and re-authentication steps, creating unnecessary friction for routine use.
          </p>
          <p className="text-lg leading-relaxed mb-8 opacity-70" style={{ maxWidth: "72ch" }}>
            The information hierarchy within each module was inconsistent. Primary actions competed visually with secondary ones, and dense data tables were presented without summarisation or prioritisation. There was no mobile-responsive layout, making the system difficult to use on smartphones — the primary device for most students. Duplicated workflows across modules (e.g., separate fee views in both the accounts and examination portals) added confusion without adding value.
          </p>
          <div className="flex flex-col gap-3 mb-8" style={{ maxWidth: "64ch" }}>
            {[
              "Fragmented access across attendance, academic records, fee payments, results, and timetables",
              "Inconsistent navigation patterns — each module behaved like a standalone application",
              "No mobile-first experience; the portal was unusable on smaller screens",
              "Poor information hierarchy with data-heavy pages and no clear visual priority",
              "Duplicated workflows forcing students to re-enter the same context in multiple places",
              "Repeated login prompts and session timeouts disrupting daily usage",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="mono text-sm opacity-40 pt-1">—</span>
                <p className="text-base leading-relaxed opacity-80">{point}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t-2 border-black mt-8">
            {[
              { label: "4–6 taps", sub: "to reach any key info" },
              { label: "0 mobile screens", sub: "in the original system" },
              { label: "3 separate codebases", sub: "for academics, accounts & results" },
            ].map((stat) => (
              <div key={stat.label} className="border-b-2 md:border-b-0 md:border-r-2 border-black py-6 pr-8">
                <p className="font-bold text-4xl uppercase tracking-tight">{stat.label}</p>
                <p className="mono text-sm mt-2 opacity-60 uppercase tracking-widest">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Approach */}
        <div className="mb-16 border-t-2 border-black pt-12">
          <p className="mono text-sm uppercase tracking-widest mb-4 opacity-50">Approach</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="font-bold text-2xl uppercase tracking-tight leading-snug mb-4">
                One system. One language. One tap to anything.
              </p>
              <p className="text-lg leading-relaxed opacity-80 mb-4">
                The redesign unified all ERP modules under a single mobile-first interface built around the student&apos;s daily flow — login once, see everything relevant on the dashboard, drill into any module in one tap. A shared component library (cards, list rows, status chips) creates visual consistency across academics, accounts, and results.
              </p>
              <p className="text-lg leading-relaxed opacity-70">
                The process began with a full interface audit of the existing system — cataloguing every screen, navigation pattern, and interaction. This was followed by an information architecture review to understand how data was structured and surfaced across modules. Workflow mapping helped identify where students encountered the most friction, and a component inventory revealed the extent of visual inconsistency between sections.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                "Audit all existing screens for information hierarchy and navigation patterns",
                "Review information architecture and identify redundant or fragmented workflows",
                "Map student task flows for the five most common daily interactions",
                "Build a component inventory and define a unified design token set",
                "Redesign each module as a card-based, scrollable mobile view",
                "Introduce a persistent bottom nav for zero-cost navigation",
                "Validate with student walkthroughs on 5 core tasks",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 border-b border-black pb-4">
                  <span className="mono text-sm opacity-40 pt-1">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-base leading-snug opacity-80">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-base leading-relaxed opacity-70">
                A unified design system was created to replace the ad hoc styling that had accumulated across modules. Defining a single token set — one primary colour, a consistent type scale, and standardised spacing units — meant every new screen could be built from the same foundation, reducing design debt and ensuring visual coherence without additional effort per module.
              </p>
            </div>
            <div>
              <p className="text-base leading-relaxed opacity-70">
                Card-based layouts were chosen because they map naturally to the way students scan academic information: one card per subject, one card per fee item, one card per notice. Mobile-first navigation was prioritised to reduce the number of taps required for routine tasks. The goal was to make attendance, timetable, and fee status reachable within two interactions from the home screen, matching the mental model students already had from consumer apps.
              </p>
            </div>
          </div>
        </div>

        {/* Design Journey */}
        <div className="mb-16 border-t-2 border-black pt-12">
          <p className="mono text-sm uppercase tracking-widest mb-12 opacity-50">Design Journey</p>

          {/* Discovery & Audit */}
          <div className="mb-12">
            <p className="font-bold text-xl uppercase tracking-tight mb-4">Discovery &amp; Audit</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <p className="text-base leading-relaxed opacity-70">
                The process started with a structured review of the existing ERP portal. Every screen was catalogued — login flows, module landing pages, data tables, and settings panels. The goal was to understand what the system was actually asking students to do, not what it was designed to do in theory.
              </p>
              <p className="text-base leading-relaxed opacity-70">
                The audit revealed that the portal had grown organically over time, with each module developed independently. Navigation labels were inconsistent, iconography varied between sections, and the same action (e.g., viewing a fee receipt) was accessible through different paths depending on which module the student entered from.
              </p>
            </div>
          </div>

          {/* User Pain Points */}
          <div className="mb-12 border-t border-black pt-10">
            <p className="font-bold text-xl uppercase tracking-tight mb-4">User Pain Points</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <p className="text-base leading-relaxed opacity-70">
                Walkthrough-based evaluations with students identified that attendance, timetable, fees, and results were the four most frequently accessed sections — yet none were reachable from a single consolidated view. Students routinely opened multiple browser tabs or logged into the portal two to three times per session to complete tasks that should have been a single flow.
              </p>
              <p className="text-base leading-relaxed opacity-70">
                Scenario testing surfaced a consistent pattern: students preferred dashboard-based navigation where key information was summarised upfront, rather than navigating through module-level menus to locate data. The existing module-based structure forced users to know where information was stored rather than letting the interface surface it contextually. Repeated login prompts and unclear session states added to the cognitive load.
              </p>
            </div>
          </div>

          {/* Information Architecture */}
          <div className="mb-12 border-t border-black pt-10">
            <p className="font-bold text-xl uppercase tracking-tight mb-4">Information Architecture</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <p className="text-base leading-relaxed opacity-70">
                The existing system was structured around administrative modules — Academics, Accounts, Examination — which reflected the backend organisation but not the student&apos;s mental model. The redesign reorganised content around tasks and frequency of access. High-priority items (today&apos;s timetable, pending fees, recent results) were elevated to the dashboard level. Lower-frequency items were moved one level deeper.
              </p>
              <p className="text-base leading-relaxed opacity-70">
                Navigation depth was reduced by collapsing redundant intermediate screens. In the original system, viewing a subject&apos;s attendance required three navigations: module selection, academic year selection, then subject selection. The redesigned flow surfaced attendance by subject directly from the dashboard, reachable in one tap. Most daily tasks were brought within two interactions from the home screen.
              </p>
            </div>
          </div>

          {/* Design System */}
          <div className="mb-12 border-t border-black pt-10">
            <p className="font-bold text-xl uppercase tracking-tight mb-4">Design System</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <p className="text-base leading-relaxed opacity-70">
                A minimal design system was established before any screen was redesigned. The token set included a single blue primary colour for interactive elements, a neutral gray scale for backgrounds and borders, and a two-weight type scale (regular and bold) to enforce hierarchy without introducing visual noise. Spacing was standardised to an 8px base grid, ensuring consistent density across all screens.
              </p>
              <p className="text-base leading-relaxed opacity-70">
                The component set was deliberately small: a card container, a list row, a status chip (Pending / Active / Completed), a section header, and a bottom navigation bar. Keeping the component count low reduced decision fatigue during design and made implementation more predictable. Every screen in the redesign is composed from this set, ensuring visual coherence without requiring per-screen design decisions.
              </p>
            </div>
          </div>

          {/* Wireframing */}
          <div className="mb-12 border-t border-black pt-10">
            <p className="font-bold text-xl uppercase tracking-tight mb-4">Wireframing</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <p className="text-base leading-relaxed opacity-70">
                Low-fidelity wireframes were created for the six primary screens: login, home, dashboard, results, account summary, and timetable. Each wireframe focused on layout and content priority rather than visual design, making it easier to evaluate the information hierarchy in isolation before applying colour and typography.
              </p>
              <p className="text-base leading-relaxed opacity-70">
                The wireframing phase surfaced several layout decisions that were carried into the final design: the identity card at the top of the home screen to confirm the logged-in context, the tab row on the results screen to avoid deep scrolling, and the toggle filter on the account summary to separate pending and paid items without requiring a separate screen.
              </p>
            </div>
          </div>

          {/* Prototype Validation */}
          <div className="border-t border-black pt-10">
            <p className="font-bold text-xl uppercase tracking-tight mb-4">Prototype Validation</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <p className="text-base leading-relaxed opacity-70">
                Task-oriented reviews were conducted using a click-through prototype covering five common student tasks: checking today&apos;s timetable, viewing attendance for a specific subject, checking fee dues, looking up a recent test result, and finding the notice board. These scenarios were chosen because they represented the highest-frequency use cases identified during the audit.
              </p>
              <p className="text-base leading-relaxed opacity-70">
                Feedback sessions with students highlighted a few navigation adjustments — most notably, making the bottom navigation labels more descriptive and ensuring the dashboard scroll didn&apos;t bury critical information below the fold on smaller screen sizes. Both were addressed in the final screens. The overall response confirmed that the unified dashboard approach significantly reduced the time required to locate information compared to the original module-based structure.
              </p>
            </div>
          </div>
        </div>

        {/* Design Decisions */}
        <div className="mb-16 border-t-2 border-black pt-12">
          <p className="mono text-sm uppercase tracking-widest mb-8 opacity-50">Design Decisions</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {[
              {
                title: "Persistent Bottom Navigation",
                body: "A fixed bottom navigation bar keeps the four primary sections — Home, Academics, Accounts, and Examination — always accessible without requiring the student to navigate back to a root screen. This eliminates a full navigation layer and ensures orientation is always clear, regardless of how deep into a module the user has gone.",
              },
              {
                title: "Unified Dashboard",
                body: "Rather than routing students through a module selector on every session, the dashboard surfaces the most relevant information upfront: today&apos;s schedule, attendance status, pending fees, and recent results. This matches the way students actually use the system — checking a few key things quickly — rather than forcing a deliberate navigation decision each time.",
              },
              {
                title: "Standardised Card Components",
                body: "All data — whether a subject entry, a fee line item, or an assignment row — is displayed using the same card container. This means students only need to learn one interaction pattern. Cards are scannable, support consistent status indicators, and adapt well to varying content lengths without breaking the layout.",
              },
              {
                title: "Consistent Spacing System",
                body: "An 8px base grid was applied across all screens to create a predictable visual rhythm. Consistent spacing reduces the cognitive effort of parsing a new screen, because the eye learns to expect where content will be positioned. It also prevented the density issues present in the original design, where data was packed without breathing room.",
              },
              {
                title: "Shared Status Indicators",
                body: "Status chips — Pending, Active, Submitted, Completed — use a consistent visual treatment across all modules. Whether a student is viewing a fee item or an assignment, the same chip colour and label convention applies. This reduces the learning curve when switching between sections and prevents misinterpretation of state.",
              },
              {
                title: "Mobile-First Responsive Layouts",
                body: "Every screen was designed for a 390px viewport first, then adapted upward. This ensured that the core interactions — tap targets, scroll behaviour, and content priority — were optimised for the context where most students would actually use the system, rather than retrofitting a desktop design to smaller screens.",
              },
            ].map((decision, i) => (
              <div key={i} className="border-b border-r-0 md:odd:border-r border-black p-8">
                <p className="font-bold text-base uppercase tracking-tight mb-3">{decision.title}</p>
                <p className="text-sm leading-relaxed opacity-70">{decision.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Screens */}
        <div className="border-t-2 border-black pt-12 mb-16">
          <p className="mono text-sm uppercase tracking-widest mb-12 opacity-50">Screens</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                src: "/login.png",
                caption: "01 — Login",
                note: "Clean student login with institutional branding, password visibility toggle, and app store links. Removes unnecessary fields from the legacy web form.",
              },
              {
                src: "/home (2).png",
                caption: "02 — Home",
                note: "Module launcher with user identity card at the top. Four primary modules (Academics, Accounts, Feedback, Examination) reachable in a single tap.",
              },
              {
                src: "/dashboard1.png",
                caption: "03 — Dashboard",
                note: "Unified overview: live GPA, today's class schedule with room numbers, and a notice board. Replaces the legacy multi-page information scatter.",
              },
              {
                src: "/dashboard2.png",
                caption: "04 — Dashboard (cont.)",
                note: "Scrolled state reveals upcoming assignments with due dates and submission status chips — Pending, Submitted — so students never miss a deadline.",
              },
              {
                src: "/results.png",
                caption: "05 — Results",
                note: "Test results view with score summary, time spent, and per-subject breakdown bars. Tab row (Overview / Questions / Analytics) lets students drill deeper.",
              },
              {
                src: "/accountsummary.png",
                caption: "06 — Account Summary",
                note: "Fee dashboard shows total dues vs paid at a glance. Pending/Paid toggle filters itemised rows (Tuition Fee, Lab Fee) with due dates and amounts highlighted in red.",
              },
            ].map((img) => (
              <div key={img.src} className="flex flex-col">
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full object-contain"
                  style={{ background: "none", borderRadius: 0, boxShadow: "none" }}
                />
                <p className="mono text-sm mt-4 mb-2 font-bold uppercase tracking-widest">{img.caption}</p>
                <p className="text-sm leading-relaxed opacity-70">{img.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution & Outcome */}
        <div className="mb-16 border-t-2 border-black pt-12">
          <p className="mono text-sm uppercase tracking-widest mb-4 opacity-50">Solution &amp; Outcome</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-xl leading-relaxed opacity-80 mb-6">
                The redesigned ERP consolidates six fragmented modules into one consistent mobile experience. A shared design token set — a single blue primary, neutral grays, and one type scale — ensures every screen feels like part of the same product. Navigation cost dropped from 4–6 taps to a maximum of 2.
              </p>
              <p className="text-lg leading-relaxed opacity-70 mb-4">
                Navigation depth was reduced by restructuring the information architecture around student tasks rather than administrative modules. The most-accessed information — timetable, attendance, fees, and results — is now surfaced at the dashboard level, eliminating the intermediate module selection step that previously added friction to every session.
              </p>
              <p className="text-lg leading-relaxed opacity-70 mb-4">
                Discoverability improved significantly by replacing module-level menus with a dashboard that proactively surfaces relevant content. Students no longer need to know where a piece of information lives in the system — the interface presents it in context, reducing the time spent searching and the number of navigations required per session.
              </p>
              <p className="text-lg leading-relaxed opacity-70">
                The unified visual language means students encounter the same card structure, status chips, and spacing conventions across every module. This consistency reduces the learning curve when moving between sections and creates a coherent experience that feels like a single, considered product rather than a collection of disconnected tools.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              {[
                { label: "≤ 2 taps", sub: "to any information from home" },
                { label: "1 design system", sub: "shared across all modules" },
                { label: "Mobile-first", sub: "100% of screens designed for phones" },
              ].map((s) => (
                <div key={s.label} className="border-l-4 border-black pl-6">
                  <p className="font-bold text-2xl uppercase tracking-tight">{s.label}</p>
                  <p className="mono text-sm mt-1 opacity-60 uppercase tracking-widest">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Validation */}
        <div className="border-t-2 border-black pt-12">
          <p className="mono text-sm uppercase tracking-widest mb-4 opacity-50">Validation</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-xl leading-relaxed opacity-80 mb-6">
                The redesigned flows were evaluated through walkthrough-based sessions focused on the five most common student tasks. Participants were asked to complete each task on the prototype without guidance, which surfaced navigation ambiguities and layout issues that weren&apos;t visible during design review.
              </p>
              <p className="text-lg leading-relaxed opacity-70">
                Task-oriented reviews confirmed that the bottom navigation and dashboard structure met the target of reaching any primary information within two interactions. Scenario testing with different screen sizes validated that the mobile-first layouts held up across a range of devices without content overflow or tap target issues.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { method: "Walkthrough-based evaluations", detail: "Unguided task completion on a click-through prototype to identify navigation friction." },
                { method: "Task-oriented reviews", detail: "Five core tasks tested: timetable, attendance, fees, results, and notices." },
                { method: "Scenario testing", detail: "Real student contexts used to verify the dashboard prioritisation model." },
                { method: "Feedback sessions with students", detail: "Open-ended discussion after task completion to capture qualitative impressions and missing context." },
              ].map((v, i) => (
                <div key={i} className="border-b border-black pb-4">
                  <p className="font-bold text-sm uppercase tracking-tight mb-1">{v.method}</p>
                  <p className="text-sm leading-relaxed opacity-60">{v.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AIRAVAT CASE STUDY LABEL */}
      <section
        id="airavat-label"
        className="w-full bg-black text-white"
        style={{
          paddingLeft: "var(--section-px)",
          paddingRight: "var(--section-px)",
          paddingTop: "3rem",
          paddingBottom: "1.5rem",
        }}
      >
        <p className="mono text-base uppercase tracking-widest mb-2 opacity-50">Projects</p>
        <h3 className="mono text-lg uppercase tracking-widest mb-8 opacity-80">UX CASE STUDY — AIRAVAT</h3>
      </section>

      {/* AIRAVAT CASE STUDY (UNCHANGED) */}
      <Hero />
      <ProblemSection />
      <ContextSection />
      <ApproachSection />
      <StructureSection />
      <InterfaceSection />

      <OutputSection />
      <ImpactSection />
      <LearningsSection />

      {/* PROSCRIPT CASE STUDY LABEL */}
      <section
        id="proscript-label"
        className="w-full bg-black text-white"
        style={{
          paddingLeft: "var(--section-px)",
          paddingRight: "var(--section-px)",
          paddingTop: "3rem",
          paddingBottom: "1.5rem",
        }}
      >
        <p className="mono text-base uppercase tracking-widest mb-2 opacity-50">Projects</p>
        <h3 className="mono text-lg uppercase tracking-widest mb-8 opacity-80">HEALTHCARE AI PLATFORM — PROSCRIPT</h3>
      </section>

      {/* PROSCRIPT PROJECT SECTION */}
      <section
        id="proscript"
        className="w-full bg-white text-black"
        style={{
          paddingLeft: "var(--section-px)",
          paddingRight: "var(--section-px)",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        {/* Header */}
        <p className="mono text-base uppercase tracking-widest mb-2 opacity-50">Healthcare AI Platform · 2025</p>
        <h2
          className="font-bold uppercase leading-none tracking-tighter"
          style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
        >
          PROSCRIPT
        </h2>
        <p className="mono text-lg mt-4 mb-12 opacity-70">
          Full-Stack + Machine Learning · AI-Driven Prescription Assistant
        </p>

        {/* 01 — The Problem */}
        <div className="mb-16 border-t-2 border-black pt-12">
          <p className="mono text-sm uppercase tracking-widest mb-4 opacity-50">01 — The Problem</p>
          <p className="font-bold text-2xl uppercase tracking-tight leading-snug mb-6" style={{ maxWidth: "52ch" }}>
            Medical information shouldn&apos;t be lost in handwriting.
          </p>
          <p className="text-xl leading-relaxed mb-6 opacity-80" style={{ maxWidth: "72ch" }}>
            Traditional prescriptions often contain handwritten notes, abbreviated drug names, and fragmented medical information that can be difficult for patients to understand. Important medication instructions, dosage details, and potential risks are frequently buried within unstructured documents.
          </p>
          <p className="text-lg leading-relaxed mb-6 opacity-70" style={{ maxWidth: "72ch" }}>
            Patients may also struggle to identify whether prescribed medicines conflict with existing treatments or whether recommendations are relevant to their demographic profile. Without a structured interpretation layer, prescription data remains inaccessible to the people who need it most.
          </p>
          <p className="text-lg leading-relaxed mb-8 opacity-70" style={{ maxWidth: "72ch" }}>
            The challenge was to create a system capable of converting raw prescription data into structured, understandable, and actionable medical insights — while maintaining safety by flagging potential risks before they become problems.
          </p>
          <div className="flex flex-col gap-3" style={{ maxWidth: "64ch" }}>
            {[
              "Handwritten prescriptions difficult to interpret without clinical training",
              "Medical information stored in unstructured formats with no machine-readable layer",
              "Potential drug interaction risks often overlooked during manual review",
              "Limited contextual guidance available for patients post-consultation",
              "Prescription review processes remain time-consuming for both patients and staff",
              "Lack of personalised recommendation support based on patient demographics",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="mono text-sm opacity-40 pt-1">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-base leading-relaxed opacity-80">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 02 — Objectives */}
        <div className="mb-16 border-t-2 border-black pt-12">
          <p className="mono text-sm uppercase tracking-widest mb-8 opacity-50">02 — Objectives</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {[
              { num: "01", text: "Extract text from prescription images using OCR" },
              { num: "02", text: "Structure medical information automatically from raw input" },
              { num: "03", text: "Detect dosage inconsistencies and potential drug conflicts" },
              { num: "04", text: "Generate contextual medical assistance via LLM integration" },
              { num: "05", text: "Improve accessibility of prescription information for patients" },
              { num: "06", text: "Support patient-specific recommendations using similarity matching" },
            ].map((obj) => (
              <div key={obj.num} className="border-b border-r-0 md:odd:border-r border-black p-6 flex items-start gap-4">
                <span className="mono text-sm opacity-40 pt-1 shrink-0">{obj.num}</span>
                <p className="text-base leading-snug opacity-80">{obj.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 03 — Approach */}
        <div className="mb-16 border-t-2 border-black pt-12">
          <p className="mono text-sm uppercase tracking-widest mb-4 opacity-50">03 — Approach</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="font-bold text-2xl uppercase tracking-tight leading-snug mb-4">
                Six phases. One unified prescription pipeline.
              </p>
              <p className="text-lg leading-relaxed opacity-80 mb-4">
                PROSCRIPT was built in structured phases, each layer adding intelligence on top of the last. OCR converts raw images into text; NLP normalises that text into medical entities; retrieval and rule engines validate safety; and a large language model provides contextual assistance — all within a single API-backed workflow.
              </p>
              <p className="text-lg leading-relaxed opacity-70">
                The decision to separate each processing stage into an independent service made the system easier to test and iterate. Each phase could be validated in isolation before integrating into the full pipeline, reducing the surface area for bugs in a domain where accuracy is critical.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                "Phase 01 — OCR pipeline using EasyOCR for prescription image digitization",
                "Phase 02 — Medical text processing and normalisation of extracted content",
                "Phase 03 — TF-IDF vectorization and demographic-aware patient similarity matching",
                "Phase 04 — Rule-based validation engine for dosage and medication conflict detection",
                "Phase 05 — Llama 3 integration for contextual medical query understanding",
                "Phase 06 — Full-stack deployment with secure API communication and database integration",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 border-b border-black pb-4">
                  <span className="mono text-sm opacity-40 pt-1 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-base leading-snug opacity-80">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 04 — System Architecture */}
        <div className="mb-16 border-t-2 border-black pt-12">
          <p className="mono text-sm uppercase tracking-widest mb-8 opacity-50">04 — System Architecture</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              { layer: "Frontend", stack: "React" },
              { layer: "Backend", stack: "Node.js · Express.js" },
              { layer: "AI Services", stack: "FastAPI · Llama 3 · TensorFlow" },
              { layer: "Data Layer", stack: "MongoDB" },
              { layer: "Document Processing", stack: "EasyOCR" },
              { layer: "Recommendation Engine", stack: "TF-IDF Vectorization · Similarity Matching" },
            ].map((item) => (
              <div key={item.layer} className="border-b border-r-0 md:[&:nth-child(3n)]:border-r-0 md:border-r border-black p-6">
                <p className="mono text-xs uppercase tracking-widest mb-2 opacity-50">{item.layer}</p>
                <p className="font-bold text-base uppercase tracking-tight">{item.stack}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 05 — Key Features */}
        <div className="mb-16 border-t-2 border-black pt-12">
          <p className="mono text-sm uppercase tracking-widest mb-8 opacity-50">05 — Key Features</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-6">
              {[
                {
                  title: "Intelligent Prescription Parsing",
                  body: "EasyOCR extracts raw text from uploaded prescription images. A normalisation layer then maps abbreviated drug names, dosage notations, and clinical shorthand to structured medical entities that downstream services can process reliably.",
                },
                {
                  title: "Drug Interaction Detection",
                  body: "A rule-based validation engine cross-references extracted medications against known interaction patterns. Conflicting drug combinations are flagged with contextual explanations, giving users actionable information rather than a raw warning.",
                },
                {
                  title: "Dosage Conflict Analysis",
                  body: "Extracted dosage values are validated against standard reference ranges for each identified medication. Anomalies — whether unusually high doses or incompatible combinations — are surfaced before the prescription is processed further.",
                },
              ].map((f) => (
                <div key={f.title} className="border-b border-black pb-6">
                  <p className="font-bold text-base uppercase tracking-tight mb-2">{f.title}</p>
                  <p className="text-sm leading-relaxed opacity-70">{f.body}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-6">
              {[
                {
                  title: "Contextual Medical Assistance",
                  body: "Llama 3 is integrated as a conversational layer over the structured prescription data. Patients can ask natural language questions about their prescriptions — dosage timing, side effect profiles, dietary restrictions — and receive grounded, context-aware responses.",
                },
                {
                  title: "Patient Similarity Matching",
                  body: "TF-IDF vectorization of symptom and demographic data enables retrieval of comparable patient profiles from the database. This supports personalised recommendation generation without requiring large-scale clinical data, using structural similarity as a proxy for relevance.",
                },
                {
                  title: "Structured Medical Records",
                  body: "All parsed prescription data is stored in MongoDB as structured documents — medications, dosages, instructions, flagged interactions — making records searchable, auditable, and ready for downstream processing or export.",
                },
              ].map((f) => (
                <div key={f.title} className="border-b border-black pb-6">
                  <p className="font-bold text-base uppercase tracking-tight mb-2">{f.title}</p>
                  <p className="text-sm leading-relaxed opacity-70">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 06 — Challenges */}
        <div className="mb-16 border-t-2 border-black pt-12">
          <p className="mono text-sm uppercase tracking-widest mb-8 opacity-50">06 — Challenges</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "OCR Variability",
                body: "Prescription images varied significantly in quality, handwriting style, and formatting. Pre-processing steps — contrast normalisation, skew correction, and noise reduction — were added to improve EasyOCR accuracy across diverse input conditions.",
              },
              {
                title: "Medical Text Normalisation",
                body: "Clinical abbreviations, brand name vs. generic name mismatches, and non-standard dosage notation required a dedicated normalisation layer before any downstream analysis could be performed reliably.",
              },
              {
                title: "Retrieval vs. Rule-Based Balance",
                body: "Balancing retrieval-based patient similarity recommendations with deterministic rule-based medical validation required iterative refinement. The two systems operate on different data representations and needed careful interface design to avoid conflicting outputs.",
              },
              {
                title: "System Integration Complexity",
                body: "Integrating OCR, machine learning pipelines, and LLM-based assistance into a unified workflow across React, Node.js, FastAPI, and MongoDB demanded careful API contract design and extensive end-to-end testing to ensure consistent data flow.",
              },
            ].map((c, i) => (
              <div key={i} className="border-b border-black pb-6">
                <p className="font-bold text-base uppercase tracking-tight mb-2">{c.title}</p>
                <p className="text-sm leading-relaxed opacity-70">{c.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 07 — Outcome */}
        <div className="mb-16 border-t-2 border-black pt-12">
          <p className="mono text-sm uppercase tracking-widest mb-4 opacity-50">07 — Outcome</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-xl leading-relaxed opacity-80 mb-6">
                PROSCRIPT demonstrates how OCR, machine learning, retrieval systems, and large language models can work together to improve prescription understanding and medication safety.
              </p>
              <p className="text-lg leading-relaxed opacity-70 mb-4">
                The platform successfully transforms fragmented prescription information into a structured workflow that supports interpretation, validation, and contextual assistance — replacing a manual, error-prone process with an automated pipeline that surfaces the right information at each step.
              </p>
              <p className="text-lg leading-relaxed opacity-70">
                By separating concerns across six discrete processing phases, the system remains extensible. Each layer can be improved or swapped independently as better models or data sources become available, without requiring changes to the full stack.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                "OCR-Powered Prescription Analysis",
                "TF-IDF Recommendation Engine",
                "Drug Interaction Detection",
                "Llama 3 Medical Assistant",
                "Full-Stack Architecture",
                "Healthcare-Focused AI Solution",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 border-b border-black pb-4">
                  <span className="mono text-sm opacity-40 pt-1">—</span>
                  <p className="text-base leading-snug opacity-80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Demo Link */}
        <div className="border-t-2 border-black pt-12">
          <p className="mono text-sm uppercase tracking-widest mb-8 opacity-50">Project Demo</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://drive.google.com/file/d/1n4mCtjODZFh08ghiahxJgHIW2q7YqTQx/view"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black px-8 py-4 mono text-sm uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-colors duration-200"
            >
              View Demo →
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section
        id="experience"
        className="w-full bg-black text-white"
        style={{
          paddingLeft: "var(--section-px)",
          paddingRight: "var(--section-px)",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <p className="mono text-base uppercase tracking-widest mb-2 opacity-50">Experience</p>
        <h2
          className="font-bold uppercase leading-none tracking-tighter text-white"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          WORK & LEADERSHIP
        </h2>

        {/* Transpure */}
        <div className="border-t-2 border-white mt-12 pt-10">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-6">
            <div>
              <p className="font-bold text-xl uppercase tracking-tight">SPTBI (Transpure) — Software Testing &amp; Development Intern</p>
              <p className="mono text-sm opacity-50 uppercase tracking-widest mt-1">Spring Boot · Postman · API Testing</p>
            </div>
            <p className="mono text-sm opacity-50 uppercase tracking-widest whitespace-nowrap">Sept 2025</p>
          </div>
          <div className="flex flex-col gap-3">
            {[
              "Automated API testing workflows using Postman, reducing manual testing time for backend feature integrations.",
              "Engineered Spring Boot modules including a dynamic online form generator that streamlined remittance workflows.",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="mono text-sm opacity-40 pt-1">—</span>
                <p className="text-base leading-relaxed opacity-80">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* IEEE */}
        <div className="border-t-2 border-white mt-12 pt-10">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-6">
            <div>
              <p className="font-bold text-xl uppercase tracking-tight">IEEE Computer Society, SPIT — Vice Chairperson</p>
              <p className="mono text-sm opacity-50 uppercase tracking-widest mt-1">Leadership · Events · Sponsorship</p>
            </div>
            <p className="mono text-sm opacity-50 uppercase tracking-widest whitespace-nowrap">Sept 2025 – Present</p>
          </div>
          <div className="flex flex-col gap-3">
            {[
              "Spearheading marketing and sponsorship strategies for Airavat 3.0, a national-level AI hackathon.",
              "Organised the International Quantum Computing Conclave, coordinating logistics for leading researchers from IIT Madras and C-DAC to strengthen campus research culture.",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="mono text-sm opacity-40 pt-1">—</span>
                <p className="text-base leading-relaxed opacity-80">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINEERING PROJECTS */}
      <section
        id="eng-projects"
        className="w-full bg-white text-black"
        style={{
          paddingLeft: "var(--section-px)",
          paddingRight: "var(--section-px)",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <p className="mono text-base uppercase tracking-widest mb-2 opacity-50">Engineering</p>
        <h2
          className="font-bold uppercase leading-none tracking-tighter"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          PROJECTS
        </h2>

        <div className="flex flex-col mt-12">
          {[
            {
              title: "ZeroVault",
              sub: "ZKP-Based Password Manager · Flask, MERN, AES, Schnorr ZKP · Oct 2025",
              points: [
                "Zero-Knowledge Proof based password manager enabling secure, passwordless authentication.",
                "Schnorr protocol for ZK authentication without revealing secrets; AES-256 client-side encryption so no plaintext password ever leaves the device.",
                "Modular Flask backend for ZKP verification and encrypted vault handling, integrated with MongoDB.",
              ],
            },
            {
              title: "File Vault",
              sub: "Secure File Storage & Management · Go, React (Vite), PostgreSQL, Nginx · Dec 2025",
              points: [
                "Dockerized full-stack file vault using Go, React, PostgreSQL, and Nginx for secure auth, upload, sharing, and storage.",
                "SHA-256 deduplication with a trie-based directory structure for O(log n) lookups at scale.",
                "System security via JWT, bcrypt, rate limiting, audit logs, protected links, and CORS policies.",
              ],
            },
            {
              title: "InsureIllm",
              sub: "Knowledge Assistant · RAG, GPT-4o-mini, Chroma · Sept 2025",
              points: [
                "Internal Q&A assistant using a RAG pipeline with semantic chunking and Chroma embeddings.",
                "Gradio chat UI with GPT-4o-mini for low-cost, high-accuracy contextual responses.",
                "Improved retrieval quality using reranking, query rewriting, and MRR/nDCG evaluation.",
              ],
            },
            {
              title: "Proscript",
              sub: "AI-Driven Prescription Assistant · React, FastAPI, TensorFlow, OpenAI · Apr 2025",
              points: [
                "Processed unstructured symptom data using TF-IDF vectorisation and standardised patient demographics for similarity matching.",
                "Flagged risky drug interactions using rule-based analysis and OCR-based prescription parsing.",
              ],
            },
          ].map((proj, idx) => (
            <div key={proj.title} className="border-t-2 border-black pt-10 pb-10">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-5">
                <p className="font-bold text-2xl uppercase tracking-tight">{proj.title}</p>
                <p className="mono text-sm opacity-50 uppercase tracking-widest">{proj.sub}</p>
              </div>
              <div className="flex flex-col gap-3">
                {proj.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="mono text-sm opacity-40 pt-1">—</span>
                    <p className="text-base leading-relaxed opacity-80">{pt}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
