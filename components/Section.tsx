"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionProps {
  id?: string;
  label?: string;
  className?: string;
  children: React.ReactNode;
  noBorder?: boolean;
  dark?: boolean;
}

export default function Section({
  id,
  label,
  className = "",
  children,
  noBorder = false,
  dark = false,
}: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id={id}
      ref={ref}
      className={`w-full ${dark ? "bg-black text-white" : "bg-white text-black"} ${
        !noBorder ? "border-t-2 border-current" : ""
      } ${className}`}
      style={{ borderColor: dark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: "100%",
          paddingLeft: "var(--section-px)",
          paddingRight: "var(--section-px)",
          paddingTop: "var(--section-py)",
          paddingBottom: "var(--section-py)",
        }}
      >
        {label && (
          <p className="mono text-sm uppercase tracking-widest mb-12 opacity-40">
            {label}
          </p>
        )}
        {children}
      </motion.div>
    </section>
  );
}
