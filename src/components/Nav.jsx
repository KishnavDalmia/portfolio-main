import React from "react";
import { NAV_LINKS, PROFILE } from "@/data/profile";

export default function Nav() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="site-nav"
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-[#0B0B0C]/75 border-b border-white/5"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {/* Monogram + name */}
        <button
          data-testid="nav-logo"
          onClick={() => scrollTo("top")}
          className="flex items-center gap-4 group"
        >
          <span className="w-9 h-9 border border-white/30 flex items-center justify-center mono text-[11px] text-[#ECE6DA] group-hover:border-[#BFA46F] group-hover:text-[#BFA46F] transition-colors">
            KD
          </span>
          <span className="hidden sm:flex items-baseline gap-2">
            <span className="mono text-[12px] text-[#ECE6DA]">KISHNAV DALMIA</span>
            <span className="display-italic text-faint text-base">— portfolio</span>
          </span>
        </button>

        <div className="flex items-center gap-8">
          <div className="hidden lg:flex items-center gap-2 mono text-[11px] text-[#8A857C]">
            <span className="relative flex items-center justify-center">
              <span className="absolute w-2 h-2 rounded-full bg-[#7CE7A2] animate-ping opacity-60" />
              <span className="w-2 h-2 rounded-full bg-[#7CE7A2]" />
            </span>
            <span>AVAILABLE · <LiveClock /></span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                data-testid={`nav-link-${l.id}`}
                onClick={() => scrollTo(l.id)}
                className="mono text-[11px] text-[#8A857C] hover:text-[#ECE6DA] transition-colors"
              >
                {l.label.toUpperCase()}
              </button>
            ))}
          </nav>

          <a
            data-testid="nav-resume-btn"
            href={PROFILE.resumeUrl}
            download
            className="btn btn--outline !py-2 !px-4 !text-[11px] !gap-2"
          >
            Résumé
            <span aria-hidden>↓</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function LiveClock() {
  const [t, setT] = React.useState(getIST());
  React.useEffect(() => {
    const id = setInterval(() => setT(getIST()), 60000);
    return () => clearInterval(id);
  }, []);
  return <span>{t} IST</span>;
}

function getIST() {
  try {
    return new Date().toLocaleTimeString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  } catch {
    return "--:--";
  }
}
