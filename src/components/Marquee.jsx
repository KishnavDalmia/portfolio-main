import React from "react";
import { SKILLS } from "@/data/profile";

export default function Marquee() {
  const items = [...SKILLS, ...SKILLS];
  return (
    <section
      data-testid="marquee-section"
      aria-label="Skills marquee"
      className="border-y border-white/5 bg-[#0E0E10] overflow-hidden"
    >
      <div className="flex marquee-track py-6 whitespace-nowrap">
        {items.map((s, i) => (
          <span
            key={i}
            className="serif italic font-light text-2xl md:text-3xl text-[#ECE6DA]/85 mx-10 flex items-center gap-10"
          >
            {s}
            <span className="text-[#BFA46F] not-italic text-base">—</span>
          </span>
        ))}
      </div>
    </section>
  );
}
