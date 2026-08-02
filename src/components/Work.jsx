import React from "react";
import { PROJECTS } from "@/data/profile";

export default function Work() {
  return (
    <section id="work" data-testid="work-section" className="py-28 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <SectionHead index="i" title={<>Selected <span className="display-italic text-[#BFA46F]">work</span></>} caption="A small selection — chosen for craft, not volume." />

        <div className="mt-20 space-y-24 md:space-y-32">
          {PROJECTS.map((p, idx) => (
            <ProjectRow key={p.id} project={p} reverse={idx % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, reverse }) {
  return (
    <article
      data-testid={`project-${project.id}`}
      className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
    >
      <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          data-testid={`project-image-${project.id}`}
          className="block border border-white/10 bg-[#111113] overflow-hidden group rounded-sm"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-[700ms]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/5 transition-colors duration-500" />
          </div>
        </a>
      </div>

      <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
        <div className="flex items-center justify-between eyebrow">
          <span>Project · No. {project.id}</span>
          <span className="text-faint">{project.year}</span>
        </div>

        <h3 className="display text-4xl md:text-5xl mt-5 leading-[1.05]">
          {project.title}
        </h3>

        <p className="text-[16px] text-[#ECE6DA]/85 leading-[1.75] mt-6 font-light">
          {project.summary}
        </p>

        <div className="mt-6 eyebrow !text-[10px]">{project.role}</div>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.stack.map((t) => (
            <span
              key={t}
              className="text-[11px] tracking-wider text-[#ECE6DA]/80 border border-white/12 px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          data-testid={`project-link-${project.id}`}
          className="inline-flex items-center gap-2 mt-9 serif italic text-[#BFA46F] hover:text-[#D6BC85] transition-colors text-lg"
        >
          Visit project
          <span aria-hidden>↗</span>
        </a>
      </div>
    </article>
  );
}

export function SectionHead({ index, title, caption }) {
  return (
    <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-white/10 pb-8">
      <div>
        <div className="eyebrow mb-4">— Chapter {index}</div>
        <h2 className="display text-5xl md:text-6xl">{title}</h2>
      </div>
      {caption && (
        <p className="serif italic text-muted max-w-sm text-lg leading-snug">{caption}</p>
      )}
    </header>
  );
}
