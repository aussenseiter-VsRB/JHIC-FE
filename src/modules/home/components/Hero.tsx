import { Play, ArrowRight, Users, Award } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import data from "./data/hero.json";
import heroImg from "../../../assets/hero.png";

const EASE = [0.16, 1, 0.3, 1] as const;

const titleWords = data.title.split(" ");
const baseTitle = titleWords.slice(0, -1).join(" ");
const highlightedWord = titleWords[titleWords.length - 1];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#1A365D] px-6 pb-40 pt-[140px] max-lg:pb-36 max-lg:pt-28 max-md:pb-28 max-md:pt-24 max-sm:pb-24 max-sm:pt-20">
      <div className="home-hero-orb home-hero-orb--1" />
      <div className="home-hero-orb home-hero-orb--2" />
      <div className="home-hero-orb home-hero-orb--3" />
      <div className="home-hero-dots" />

      <div className="relative z-10 mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">

          <motion.h1
            className="font-heading mb-5 text-[clamp(2.2rem,4vw,3.75rem)] font-extrabold leading-[1.12] -tracking-[0.03em] text-white max-lg:text-[clamp(1.85rem,3.8vw,3rem)] max-md:text-[2.5rem] max-sm:text-[1.75rem]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          >
            {baseTitle}{" "}
            <span className="inline-block bg-gradient-to-r from-[#60A5FA] to-[#2563EB] bg-clip-text pb-[0.15em] pr-[0.05em] text-transparent">{highlightedWord}</span>
          </motion.h1>

          <motion.p
            className="mb-8 max-w-[480px] font-body text-[1.05rem] leading-[1.7] text-[rgba(241,245,249,0.65)] max-sm:text-[0.92rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
          >
            Mencetak lulusan kompeten, berkarakter, dan siap bersaing di dunia
            industri melalui pendidikan berkualitas.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3.5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
          >
            <Link
              to={data.ctaPrimary.href}
              className="group inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-7 py-3.5 font-poppins text-[0.88rem] font-semibold text-white no-underline shadow-[0_4px_20px_rgba(37,99,235,0.3)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-[0_8px_32px_rgba(37,99,235,0.4)] max-sm:px-[22px] max-sm:py-3 max-sm:text-[0.82rem]"
            >
              {data.ctaPrimary.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5" />
            </Link>
            <a
              href={data.ctaSecondary.href}
              className="group inline-flex items-center gap-2 rounded-xl border-[1.5px] border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.04)] px-7 py-3.5 font-poppins text-[0.88rem] font-semibold text-white no-underline backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-[rgba(255,255,255,0.35)] hover:bg-[rgba(255,255,255,0.08)] max-sm:px-[22px] max-sm:py-3 max-sm:text-[0.82rem]"
            >
              <Play className="h-4 w-4" />
              {data.ctaSecondary.label}
            </a>
          </motion.div>
        </div>

        <div className="relative flex min-h-[420px] items-center justify-center max-md:min-h-[280px] max-md:overflow-hidden max-sm:min-h-[240px]">
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

          <motion.div
            className="home-hero-photo-frame"
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
          >
            <img
              src={heroImg}
              alt="SMK Yadika Soreang"
              className="home-hero-photo"
            />
          </motion.div>

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

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/[0.08] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-sky/[0.06] blur-[100px]" />

      <div className="wave-scroll-container absolute bottom-0 left-0 right-0 h-24 overflow-hidden pointer-events-none">
        <svg className="wave-scroll" viewBox="0 0 2880 120" fill="none" preserveAspectRatio="none" style={{ width: '200%', height: '96px' }}>
          <path d="M0,60 C360,110 450,20 720,60 C990,100 1080,30 1440,60 C1800,90 1890,20 2160,60 C2430,100 2520,30 2880,60 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.3" />
          <path d="M0,75 C300,40 500,100 720,75 C940,50 1140,110 1440,75 C1740,40 1940,100 2160,75 C2380,50 2580,110 2880,75 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.6" />
          <path d="M0,90 C320,120 420,50 720,90 C1020,130 1120,60 1440,90 C1760,120 1860,50 2160,90 C2460,130 2560,60 2880,90 L2880,120 L0,120 Z" fill="#F5F5F5" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
