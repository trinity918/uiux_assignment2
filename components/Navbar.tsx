"use client";

export default function Navbar() {
  return (
    <nav
      className="w-full bg-black text-white border-b border-white flex justify-between items-center"
      style={{
        paddingLeft: "var(--section-px)",
        paddingRight: "var(--section-px)",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <span className="font-bold uppercase tracking-widest text-lg">SHREESH PATIL</span>
      <div className="flex gap-8">
        <a href="#portfolio-header" className="mono text-base uppercase tracking-widest hover:underline focus:underline">Home</a>
        <a href="#about" className="mono text-base uppercase tracking-widest hover:underline focus:underline">About</a>
        <a href="#projects" className="mono text-base uppercase tracking-widest hover:underline focus:underline">Projects</a>
        <a href="#experience" className="mono text-base uppercase tracking-widest hover:underline focus:underline">Experience</a>
        <a href="#contact" className="mono text-base uppercase tracking-widest hover:underline focus:underline">Contact</a>
      </div>
    </nav>
  );
}