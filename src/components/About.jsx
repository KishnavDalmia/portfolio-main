import React from "react";
import { PROFILE } from "@/data/profile";
import { SectionHead } from "@/components/Work";

const PRINCIPLES = [
  { k: "i",   t: "Ship narrow, ship often.", d: "Big rewrites are a tax on momentum. I prefer surgical, working pieces over architectural perfection." },
  { k: "ii",  t: "Design is a quiet contract.", d: "Every pixel makes a promise. I sweat type, spacing and motion until the product feels intentional." },
  { k: "iii", t: "Boring tech, considered ideas.", d: "Postgres, Python, sensible defaults. Save the novelty budget for the product, not the stack." },
];

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="py-28 md:py-36 bg-[#0E0E10] border-y border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <SectionHead index="ii" title={<>About <span className="display-italic text-[#BFA46F]">the work</span></>} caption="An engineer–designer hybrid, based in Kolkata." />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="display text-3xl md:text-4xl leading-[1.15] text-[#ECE6DA]">
              I'm <span className="display-italic text-[#BFA46F]">{PROFILE.firstName}</span> — a {PROFILE.tagline.toLowerCase()} based in {PROFILE.location}.
            </p>
            <p className="text-[16px] text-muted leading-[1.85] mt-8 font-light">
              {PROFILE.bio[0]} {PROFILE.bio[1]}
            </p>

            <div className="mt-10 border-l border-[#BFA46F]/50 pl-6 py-2">
              <div className="eyebrow !text-[10px] mb-2">Currently</div>
              <div className="text-[#ECE6DA] text-[15px]">Open to work</div>
              </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-white/8 border-y border-white/10">
              {PRINCIPLES.map((p) => (
                <li
                  key={p.k}
                  data-testid={`principle-${p.k}`}
                  className="grid grid-cols-12 gap-4 py-8 group"
                >
                  <div className="col-span-2 serif italic text-[#BFA46F] pt-1 text-lg">{p.k}.</div>
                  <div className="col-span-10">
                    <div className="display text-3xl leading-tight">{p.t}</div>
                    <p className="text-muted mt-3 text-[15px] leading-[1.75] font-light">{p.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
