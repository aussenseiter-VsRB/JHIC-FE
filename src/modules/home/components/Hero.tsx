import { ArrowRight, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import data from "../data/hero.json";
import heroImg from "../../../assets/homepages-assets/hero-img.png";
import placeholder from "../../../assets/placeholder.svg";
import AnimatedNumber from "../../../components/animated-number/AnimatedNumber";

const EASE = [0.16, 1, 0.3, 1] as const;

const titleWords = data.title.split(" ");
const baseTitle = titleWords.slice(0, -1).join(" ");
const highlightedWord = titleWords[titleWords.length - 1];

const stats = [
  { number: "3", label: "Program Keahlian" },
  { number: "30+", label: "Mitra Industri" },
  { number: "100%", label: "Lulus Siap Kerja" },
];

function Hero() {
  return (
    <section className="home-hero">
      <div className="home-hero-orb home-hero-orb--1" />
      <div className="home-hero-orb home-hero-orb--2" />
      <div className="home-hero-orb home-hero-orb--3" />
      <div className="home-hero-dots" />

      <div className="home-hero-inner">
        <div className="home-hero-content">
        

          <motion.h1
            className="font-heading home-hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          >
            {baseTitle}
            <br />
            <span className="home-hero-title-highlight">{highlightedWord}</span>
          </motion.h1>

          <motion.svg
            className="home-hero-tali"
            viewBox="0 0 320 36"
            fill="none"
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <path
              className="home-hero-tali-path"
              d="M3 28 C 44 30, 52 10, 96 12 C 140 14, 146 30, 190 28 C 234 26, 244 12, 288 14 C 300 14, 306 18, 317 20"
            />
            <circle className="home-hero-tali-dot home-hero-tali-dot--s" cx="3" cy="28" r="2.5" />
            <circle className="home-hero-tali-dot home-hero-tali-dot--e" cx="317" cy="20" r="2.5" />
            <defs>
              <linearGradient id="homeTaliGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#38BDF8" />
              </linearGradient>
            </defs>
          </motion.svg>

          <motion.p
            className="font-body home-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
          >
            Mencetak lulusan kompeten, berkarakter, dan siap bersaing di dunia
            industri melalui pendidikan berkualitas.
          </motion.p>

          <motion.div
            className="home-hero-cta-group"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
          >
            <Link
              to={data.ctaPrimary.href}
              className="font-poppins home-hero-cta home-hero-cta--primary"
            >
              {data.ctaPrimary.label}
              <ArrowRight className="home-hero-cta-icon" />
            </Link>
            <Link
              to={data.ctaSecondary.href}
              className="font-poppins home-hero-cta home-hero-cta--secondary"
            >
              <GraduationCap className="home-hero-cta-icon home-hero-cta-icon--flat" />
              {data.ctaSecondary.label}
            </Link>
          </motion.div>

          <motion.div
            className="home-hero-stats"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
          >
            {stats.map((stat, i) => (
              <div className="home-hero-stat-block" key={stat.label}>
                <span className="home-hero-stat-num">
                  <AnimatedNumber value={stat.number} />
                </span>
                <span className="home-hero-stat-label">{stat.label}</span>
                {i < stats.length - 1 && <span className="home-hero-stat-divider" />}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="home-hero-visual">
          <div className="home-hero-photo-ring" aria-hidden="true" />
          <motion.div
            className="home-hero-photo-frame"
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
          >
            <img
              src={heroImg}
              alt="SMK Yadika Soreang"
              className="home-hero-photo"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.src = placeholder;
              }}
            />
          </motion.div>
        </div>
      </div>

      <div className="home-hero-glow home-hero-glow--blue" />
      <div className="home-hero-glow home-hero-glow--sky" />

      <div className="wave-scroll-container">
        <svg className="wave-scroll" viewBox="0 0 2880 120" fill="none" preserveAspectRatio="none">
          <path d="M0,60 C360,110 450,20 720,60 C990,100 1080,30 1440,60 C1800,110 1890,20 2160,60 C2430,100 2520,30 2880,60 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.3" />
          <path d="M0,75 C300,40 500,100 720,75 C940,50 1140,110 1440,75 C1740,40 1940,100 2160,75 C2380,50 2580,110 2880,75 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.6" />
          <path d="M0,90 C320,120 420,50 720,90 C1020,130 1120,60 1440,90 C1760,120 1860,50 2160,90 C2460,130 2560,60 2880,90 L2880,120 L0,120 Z" fill="#F5F5F5" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;