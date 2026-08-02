import React from "react";
import { PROFILE, HERO_BG } from "@/data/profile";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-28 pb-24 md:pt-36 md:pb-32 overflow-hidden min-h-[100vh] flex flex-col justify-center"
    >
      {/* Subtle background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-[0.08]"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-black/90" />

      <div className="max-w-[1500px] mx-auto px-6 md:px-10 w-full">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 md:mb-16 reveal-up">
          <div className="flex items-center gap-4 mono text-[11px] text-[#8A857C]">
            <span>PORTFOLIO</span>
            <span className="w-12 h-px bg-white/25" />
            <span>MMXXVI</span>
          </div>
          <div className="mono text-[11px] text-[#8A857C]">
            KOLKATA, IN / 22.5726° N · 88.3639° E
          </div>
        </div>
        
        <h1
          data-testid="hero-heading"
          aria-label={`${PROFILE.tagline}. ${PROFILE.name}.`}
          className="brutal text-[18vw] md:text-[15vw] lg:text-[13.2vw] text-[#ECE6DA] reveal-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="block mb-1">FULL STACK</span>
          <span className="block">
            DEVELOPER<span className="text-[#BFA46F]">.</span>
          </span>
        </h1>

        <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div
            className="md:col-span-5 reveal-up"
            style={{ animationDelay: "0.3s" }}
          >
            <p className="text-[16px] md:text-[17px] text-[#ECE6DA]/90 leading-[1.75] font-light max-w-md">
              {PROFILE.bio[0]}
            </p>
            <p className="text-[15px] text-muted leading-[1.75] mt-4 font-light max-w-md">
              {PROFILE.bio[1]}
            </p>
          </div>

          <div
            className="md:col-span-7 md:flex md:items-end md:justify-end reveal-up"
            style={{ animationDelay: "0.45s" }}
          >
            <div className="flex flex-wrap gap-3">
              <button type="button"
                data-testid="hero-cta-work"
                onClick={() => scrollTo("work")}
                className="btn btn--outline"
              >
                See selected work
                <span aria-hidden>↘</span>
              </button>
              <button type="button"
                data-testid="hero-cta-contact"
                onClick={() => scrollTo("contact")}
                className="btn btn--outline"
              >
                Get in touch
              </button>
              <a
                data-testid="hero-cta-resume"
                href={PROFILE.resumeUrl}
                download
                className="btn btn--gold"
              >
                Download résumé
                <span aria-hidden>↓</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 reveal-up" style={{ animationDelay: "0.6s" }}>
          <Meta k="Discipline" v="Design + Engineering" />
          <Meta k="Years shipping" v="01 +" />
          <Meta k="Current focus" v="Type-safe interfaces" />
          <Meta k="Status" v={<span className="text-[#7CE7A2]">Open to work</span>} />
        </div>
      </div>
    </section>
  );
}

function Meta({ k, v }) {
  return (
    <div>
      <div className="mono text-[10px] text-[#5C5852] mb-2">{k.toUpperCase()}</div>
      <div className="text-[14px] text-[#ECE6DA]">{v}</div>
    </div>
  );
}
