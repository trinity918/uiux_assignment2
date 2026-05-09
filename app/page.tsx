"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ContextSection from "@/components/ContextSection";
import ApproachSection from "@/components/ApproachSection";
import StructureSection from "@/components/StructureSection";
import InterfaceSection from "@/components/InterfaceSection";

import OutputSection from "@/components/OutputSection";
import ImpactSection from "@/components/ImpactSection";
import LearningsSection from "@/components/LearningsSection";
import Footer from "@/components/Footer";

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
            The existing university ERP portal was desktop-only, visually inconsistent, and required students to navigate 4–6 screens to access basic information like attendance, fees, or today's schedule. No unified design language existed across modules — each section felt like a separate product.
          </p>
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
              <p className="text-lg leading-relaxed opacity-80">
                The redesign unified all ERP modules under a single mobile-first interface built around the student's daily flow — login once, see everything relevant on the dashboard, drill into any module in one tap. A shared component library (cards, list rows, status chips) creates visual consistency across academics, accounts, and results.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                "Audit all existing screens for information hierarchy",
                "Define a single token set: colour, type scale, spacing",
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

        {/* Solution */}
        <div className="border-t-2 border-black pt-12">
          <p className="mono text-sm uppercase tracking-widest mb-4 opacity-50">Solution &amp; Outcome</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <p className="text-xl leading-relaxed opacity-80">
              The redesigned ERP consolidates six fragmented modules into one consistent mobile experience. A shared design token set — a single blue primary, neutral grays, and one type scale — ensures every screen feels like part of the same product. Navigation cost dropped from 4–6 taps to a maximum of 2.
            </p>
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
