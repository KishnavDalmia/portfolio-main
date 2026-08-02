import React from "react";
import { PROFILE, FOOTER_TEXTURE } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer data-testid="site-footer" className="relative overflow-hidden border-t border-white/5">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] bg-cover bg-center"
        style={{ backgroundImage: `url(${FOOTER_TEXTURE})` }}
      />
      <div aria-hidden className="absolute inset-0 bg-[#0B0B0C]/90" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 py-24">
        <div className="display text-[14vw] md:text-[10vw] leading-[0.92] text-[#ECE6DA]">
          Until <span className="display-italic text-[#BFA46F]">soon</span>.
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-white/10 pt-12">
          <div>
            <div className="eyebrow !text-[10px] mb-3">Email</div>
            <a
              data-testid="footer-email"
              href={`mailto:${PROFILE.email}`}
              className="text-[#ECE6DA] hover:text-[#BFA46F] transition-colors text-[15px]"
            >
              {PROFILE.email}
            </a>
          </div>
          <div>
            <div className="eyebrow !text-[10px] mb-3">Based in</div>
            <div className="text-[#ECE6DA] text-[15px]">{PROFILE.location}</div>
          </div>
          <div className="flex md:justify-end gap-6 items-start flex-wrap">
            {PROFILE.socials.map((s) => (
              <a
                key={s.label}
                data-testid={`footer-social-${s.label.toLowerCase()}`}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="serif italic text-[#ECE6DA] hover:text-[#BFA46F] transition-colors text-[15px]"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row md:items-center justify-between gap-3 eyebrow !text-[10px] text-faint">
          <div>© {year} {PROFILE.name} · All rights reserved</div>
          <div>Hand-crafted · No templates</div>
        </div>
      </div>
    </footer>
  );
}
