import { Play, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import data from "../data/hero.json";
import heroImg from "../../../assets/hero.png";

const EASE = [0.16, 1, 0.3, 1] as const;

const titleWords = data.title.split(" ");
const baseTitle = titleWords.slice(0, -1).join(" ");
const highlightedWord = titleWords[titleWords.length - 1];

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
            {baseTitle}{" "}
            <span className="home-hero-title-highlight">{highlightedWord}</span>
          </motion.h1>

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
            <a
              href={data.ctaSecondary.href}
              className="font-poppins home-hero-cta home-hero-cta--secondary"
            >
              <Play className="home-hero-cta-icon" />
              {data.ctaSecondary.label}
            </a>
          </motion.div>
        </div>

        <div className="home-hero-visual">
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
