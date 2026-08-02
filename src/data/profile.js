export const PROFILE = {
  name: "Kishnav Dalmia",
  firstName: "Kishnav",
  lastName: "Dalmia",
  tagline: "Full Stack Developer",
  location: "Kolkata, India",
  timezone: "IST · UTC+5:30",
  email: "kishnavdalmia@gmail.com",
  bio: [
    "I design and engineer considered web products end-to-end — from typed APIs to interfaces that feel deliberate rather than templated.",
    "Lately I'm preoccupied with restraint: products that say more by doing less.",
  ],
  socials: [
    { label: "GitHub", handle: "@kishnavdalmia", href: "https://github.com/KishnavDalmia/" },
    { label: "LinkedIn", handle: "in/kishnav-dalmia", href: "https://www.linkedin.com/in/kishnav-dalmia-011506216/" },
    { label: "Email", handle: "kishnavdalmia@gmail.com", href: "mailto:kishnavdalmia@gmail.com" },
  ],
  resumeUrl: "https://drive.google.com/file/d/1i51DHYiGFX0GnTrpNAfEFP-RQZQQoyBH/view?usp=sharing",
};

export const PROJECTS = [
  {
    id: "01",
    year: "2025",
    title: "TripVerse — Collaborative Travel Planning Platform",
    summary:
      "Real-time collaborative trip planning with friends — day-by-day itineraries, automatic expense splitting ledger, and debounced companion search for stress-free group travel.",
    stack: ["React", "ExpressJS", "Node.js", "MongoDB", "TailwindCSS"],
    role: "Web Developer",
    link: "https://github.com/KishnavDalmia/TripVerse",
    image: "/trip1.png",
  },
  {
    id: "02",
    year: "2024",
    title: "MoneyBall — Options Strategy Backtesting and Analytics Console",
    summary:
      "Options strategy builder with multi-leg configuration, Black-Scholes Greeks pricing, NSE market data, and a backtesting engine tracking returns, drawdown, Sharpe ratio, and win rate.",
    stack: ["React", "ExpressJS", "Node.js", "MongoDB", "TailwindCSS"],
    role: "Creator",
    link: "https://github.com/KishnavDalmia/MoneyBall",
    image: "/moneyball-strattest.png",
  },
];

export const SKILLS = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "Tailwind",
  "Docker", "WebSockets",
];

export const NAV_LINKS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

export const HERO_BG =
  "https://images.unsplash.com/photo-1744479039662-b4bd430a29ca?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHwzfHxLb2xrYXRhJTIwYXJjaGl0ZWN0dXJlJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfHx8fDE3Nzk5MDE4NTh8MA&ixlib=rb-4.1.0&q=85";
export const FOOTER_TEXTURE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E";
