import { Play, ArrowRight, GraduationCap, Users, Award } from "lucide-react";
import { motion } from "motion/react";
import data from "./data/hero.json";

const EASE = [0.16, 1, 0.3, 1] as const;

const titleWords = data.title.split(" ");
const baseTitle = titleWords.slice(0, -1).join(" ");
const highlightedWord = titleWords[titleWords.length - 1];

function Hero() {
  return (
    <section className="home-hero-section">
      <div className="home-hero-orb home-hero-orb--1" />
      <div className="home-hero-orb home-hero-orb--2" />
      <div className="home-hero-orb home-hero-orb--3" />
      <div className="home-hero-dots" />

      <div className="home-hero-inner">
        {/* Left: Text */}
        <div className="home-hero-text">
          <motion.span
            className="home-hero-badge"
            initial={{ opacity: 0, scale: 0.8, filter: "blur(6px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            {data.subtitle}
          </motion.span>

          <motion.h1
            className="home-hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          >
            {baseTitle}{" "}
            <span className="home-hero-title-accent">{highlightedWord}</span>
          </motion.h1>

          <motion.p
            className="home-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
          >
            Mencetak lulusan kompeten, berkarakter, dan siap bersaing di dunia
            industri melalui pendidikan berkualitas.
          </motion.p>

          <motion.div
            className="home-hero-cta"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
          >
            <a
              href={data.ctaPrimary.href}
              className="home-hero-btn home-hero-btn--primary"
            >
              {data.ctaPrimary.label}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={data.ctaSecondary.href}
              className="home-hero-btn home-hero-btn--ghost"
            >
              <Play className="h-4 w-4" />
              {data.ctaSecondary.label}
            </a>
          </motion.div>
        </div>

        {/* Right: Visual */}
        <div className="home-hero-visual">
          {/* Decorative badge — Students Count */}
          <motion.div
            className="home-hero-badge-card home-hero-badge-card--students"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
          >
            <div className="home-hero-badge-card-icon">
              <Users className="h-5 w-5" />
            </div>
            <div className="home-hero-badge-card-text">
              <span className="home-hero-badge-card-value">1.200+</span>
              <span className="home-hero-badge-card-label">Siswa Aktif</span>
            </div>
          </motion.div>

          {/* Photo frame / Placeholder */}
          <motion.div
            className="home-hero-photo-frame"
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
          >
            <div className="home-hero-photo-placeholder">
              <GraduationCap className="h-12 w-12 text-white/30" />
              <span>SMK Yadika Soreang</span>
            </div>
          </motion.div>

          {/* Decorative badge — Achievement */}
          <motion.div
            className="home-hero-badge-card home-hero-badge-card--achievement"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: EASE }}
          >
            <div className="home-hero-badge-card-icon home-hero-badge-card-icon--gold">
              <Award className="h-5 w-5" />
            </div>
            <div className="home-hero-badge-card-text">
              <span className="home-hero-badge-card-value">50+</span>
              <span className="home-hero-badge-card-label">Prestasi Nasional</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 40px, currentColor 40px, currentColor 41px)`,
          }}
        />
      </div>

      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/[0.08] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-sky/[0.06] blur-[100px]" />

      <div className="relative z-10 mt-[40px] flex max-w-[800px] flex-col items-center text-center">

        <BlurText
          text={data.title}
          animateBy="words"
          direction="top"
          delay={150}
          className="font-heading text-[40px] font-extrabold leading-[1.08] tracking-tight text-white md:text-[64px]"
        />

        <p className="mt-6 max-w-[600px] font-body text-lg leading-relaxed text-white/55 animate-fade-in-up animate-delay-200 md:text-xl">
          Mencetak lulusan kompeten, berkarakter, dan siap bersaing di dunia industri melalui pendidikan berkualitas.
        </p>
      </div>

      <div className="relative z-10 mt-12 flex flex-col gap-4 animate-fade-in-up animate-delay-300 sm:flex-row">
        <a
          href={data.ctaPrimary.href}
          className="flex h-[60px] w-full items-center justify-center rounded-xl bg-blue px-8 font-poppins text-[16px] font-semibold text-white shadow-lg shadow-blue/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-dark hover:shadow-xl hover:shadow-blue/30 sm:w-[250px]"
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

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-pearl" style={{ clipPath: 'polygon(0 60%, 100% 0, 100% 100%, 0 100%)' }} />
      {/* Animated wave bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <svg className="wave-scroll" viewBox="0 0 2880 120" fill="none" preserveAspectRatio="none" style={{ width: '200%', height: '80px' }}>
          <path d="M0,80 C320,120 420,40 720,80 C1020,120 1120,40 1440,80 C1760,120 1860,40 2160,80 C2460,120 2560,40 2880,80 L2880,120 L0,120 Z" fill="#F5F5F5" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
