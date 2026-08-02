import React from "react";
import { SKILLS } from "@/data/profile";
import { SectionHead } from "@/components/Work";

const GROUPS = [
  { title: "Frontend",     items: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { title: "Backend",      items: ["Node.js", "Python", "FastAPI", "REST", "WebSockets"] },
  { title: "Data",         items: ["PostgreSQL", "MongoDB", "Prisma"] },
  { title: "Infra & Tools", items: ["Docker", "Vercel", "Figma"] },
];

export default function Stack() {
  return (
    <section id="stack" data-testid="stack-section" className="py-28 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <SectionHead index="iii" title={<>The <span className="display-italic text-[#BFA46F]">toolkit</span></>} caption="Tools I reach for when shipping." />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/8">
          {GROUPS.map((g) => (
            <div
              key={g.title}
              data-testid={`stack-group-${g.title.toLowerCase().replace(/\s+/g, '-').replace('&','and')}`}
              className="bg-[#0B0B0C] p-8 md:p-10 hover:bg-[#111113] transition-colors duration-500"
            >
              <div className="serif italic text-[#BFA46F] text-xl mb-6">{g.title}</div>
              <ul className="space-y-3">
                {g.items.map((it) => (
                  <li key={it} className="text-[#ECE6DA]/90 text-[15px] font-light flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#BFA46F]/60" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 eyebrow">
          And {SKILLS.length}+ more — always learning.
        </div>
      </div>
    </section>
  );
}
