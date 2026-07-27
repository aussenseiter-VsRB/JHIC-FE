import { Play } from "lucide-react";
import data from "./data/hero.json";

const titleWords = data.title.split(" ");
const baseTitle = titleWords.slice(0, -1).join(" ");
const highlightedWord = titleWords[titleWords.length - 1];

function Hero() {
  return (
    <section className="home-hero-section">
      <div className="home-hero-glow-right" />

      <div className="relative z-10 flex max-w-[800px] flex-col items-center justify-center text-center">
        <span className="home-hero-badge">{data.subtitle}</span>

        <h1 className="home-hero-title">
          {baseTitle}{" "}
          <span className="home-hero-title-accent">{highlightedWord}</span>
        </h1>

        <p className="home-hero-subtitle">
          Mencetak lulusan kompeten, berkarakter, dan siap bersaing di dunia
          industri melalui pendidikan berkualitas.
        </p>

        <div className="home-hero-cta">
          <a
            href={data.ctaPrimary.href}
            className="flex h-[56px] w-full items-center justify-center rounded-xl bg-blue px-8 font-poppins text-[15px] font-semibold text-white shadow-lg shadow-blue/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-dark hover:shadow-xl hover:shadow-blue/30 sm:w-[240px]"
          >
            {data.ctaPrimary.label}
          </a>

          <a
            href={data.ctaSecondary.href}
            className="flex h-[56px] w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-8 font-poppins text-[15px] font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.08] sm:w-[240px]"
          >
            <Play className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            {data.ctaSecondary.label}
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden pointer-events-none">
        <svg
          className="wave-scroll"
          viewBox="0 0 2880 120"
          fill="none"
          preserveAspectRatio="none"
          style={{ width: "200%", height: "96px" }}
        >
          <path
            d="M0,60 C360,110 450,20 720,60 C990,100 1080,30 1440,60 C1800,90 1890,20 2160,60 C2430,100 2520,30 2880,60 L2880,120 L0,120 Z"
            fill="#F5F5F5"
            opacity="0.3"
          />
          <path
            d="M0,75 C300,40 500,100 720,75 C940,50 1140,110 1440,75 C1740,40 1940,100 2160,75 C2380,50 2580,110 2880,75 L2880,120 L0,120 Z"
            fill="#F5F5F5"
            opacity="0.6"
          />
          <path
            d="M0,90 C320,120 420,50 720,90 C1020,130 1120,60 1440,90 C1760,120 1860,50 2160,90 C2460,130 2560,60 2880,90 L2880,120 L0,120 Z"
            fill="#F5F5F5"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
