import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

import Breadcrumb from "../../../components/breadcrumb/breadcrumb";
import { jurusanData } from "../data";
import jurusanPplg from "../../../assets/jurusan-pplg.svg";
import jurusanHtl from "../../../assets/jurusan-htl.svg";
import jurusanAk from "../../../assets/jurusan-ak.svg";

const EASE = [0.16, 1, 0.3, 1] as const;

const jurusanImages: Record<string, string> = {
  PPLG: jurusanPplg,
  HOTEL: jurusanHtl,
  AKL: jurusanAk,
};

interface JurusanHeroSliderProps {
  onAccentChange?: (accentColor: string) => void;
}

const containerVariants = {
  enter: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  center: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  exit: { transition: { staggerChildren: 0.04 } },
};

const childVariants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25, ease: EASE } },
};

function JurusanHeroSlider({ onAccentChange }: JurusanHeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  }, [activeIndex]);

  const goToNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % jurusanData.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext]);

  const slide = jurusanData[activeIndex];
  const slideImage = jurusanImages[slide.code];

  useEffect(() => {
    onAccentChange?.(slide.theme.accent);
  }, [onAccentChange, slide.theme.accent]);

  const sliderStyle = {
    "--slider-accent": slide.theme.accent,
    "--slider-accent-bg": slide.theme.accentBg,
    "--slider-gradient-from": slide.theme.gradientFrom,
    "--slider-gradient-to": slide.theme.gradientTo,
  } as React.CSSProperties;

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 50 : -50, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -50 : 50, opacity: 0 }),
  };

  return (
    <div
      className="jurusan-hero-slider"
      style={sliderStyle}
    >
      <div className="jurusan-hero-orb jurusan-hero-orb--1" />
      <div className="jurusan-hero-orb jurusan-hero-orb--2" />
      <div className="jurusan-hero-orb jurusan-hero-orb--3" />
      <div className="jurusan-hero-dots-overlay" />
      <div className="jurusan-hero-glow" />

      <div className="jurusan-hero-inner">
        <div className="jurusan-hero-content">
          <Breadcrumb
            items={[
              { label: "Program" },
              { label: "Jurusan" },
            ]}
          />
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={slide.code}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: EASE }}
            >
              <motion.div
                variants={containerVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="jurusan-hero-text-group"
              >
                <motion.span
                  className="jurusan-hero-label"
                  variants={childVariants}
                >
                  <span className="jurusan-hero-label-dot" style={{ background: slide.theme.accent }} />
                  Program Keahlian
                </motion.span>
                <motion.h1 className="jurusan-hero-title" variants={childVariants}>
                  {slide.name}
                </motion.h1>
                <motion.p className="jurusan-hero-desc" variants={childVariants}>
                  {slide.description}
                </motion.p>
                <motion.p className="jurusan-hero-tagline" variants={childVariants}>
                  Kompeten, Siap Kerja, Berkarakter
                </motion.p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="jurusan-hero-visual">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={slide.code}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: EASE }}
              className="jurusan-hero-image-wrap"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <img
                src={slideImage}
                alt={slide.name}
                className="jurusan-hero-image"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="jurusan-hero-controls">
        <div className="jurusan-hero-segment">
          {jurusanData.map((j, i) => (
            <button
              key={j.slug}
              className="jurusan-hero-segment-btn"
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${j.code}`}
            >
              {i === activeIndex && (
                <motion.span
                  className="jurusan-hero-segment-indicator"
                  layoutId="segment-active"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="jurusan-hero-segment-label">{j.code}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="wave-scroll-container">
        <svg className="wave-scroll" viewBox="0 0 2880 120" fill="none" preserveAspectRatio="none">
          <path d="M0,60 C360,110 450,20 720,60 C990,100 1080,30 1440,60 C1800,110 1890,20 2160,60 C2430,100 2520,30 2880,60 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.3" />
          <path d="M0,75 C300,40 500,100 720,75 C940,50 1140,110 1440,75 C1740,40 1940,100 2160,75 C2380,50 2580,110 2880,75 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.6" />
          <path d="M0,90 C320,120 420,50 720,90 C1020,130 1120,60 1440,90 C1760,120 1860,50 2160,90 C2460,130 2560,60 2880,90 L2880,120 L0,120 Z" fill="#F5F5F5" />
        </svg>
      </div>
    </div>
  );
}

export default JurusanHeroSlider;
