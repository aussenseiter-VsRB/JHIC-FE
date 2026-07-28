import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { jurusanData } from "../data";

function JurusanHeroSlider() {
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

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + jurusanData.length) % jurusanData.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext]);

  const slide = jurusanData[activeIndex];

  const sliderStyle = {
    "--slider-accent": slide.theme.accent,
    "--slider-accent-bg": slide.theme.accentBg,
    "--slider-gradient-from": slide.theme.gradientFrom,
    "--slider-gradient-to": slide.theme.gradientTo,
  } as React.CSSProperties;

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
    }),
  };

  return (
    <div
      className="jurusan-hero-slider"
      style={sliderStyle}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="jurusan-hero-glow" />

      <div className="jurusan-hero-content">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={slide.code}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="jurusan-badge" style={{ color: slide.theme.accent, borderColor: `${slide.theme.accent}4D`, background: `${slide.theme.accent}1A` }}>
              {slide.code}
            </span>
            <h1 className="jurusan-hero-title">{slide.name}</h1>
            <p className="jurusan-hero-desc">{slide.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="jurusan-hero-visual">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={slide.code}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="jurusan-hero-placeholder"
          />
        </AnimatePresence>
      </div>

      <div className="jurusan-hero-controls">
        <div className="jurusan-hero-dots">
          {jurusanData.map((j, i) => (
            <button
              key={j.slug}
              className={`jurusan-hero-dot ${i === activeIndex ? "jurusan-hero-dot-active" : ""}`}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${j.code}`}
            />
          ))}
        </div>
        <div className="jurusan-hero-arrows">
          <button className="jurusan-hero-arrow-btn" onClick={goToPrev} aria-label="Previous slide">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="jurusan-hero-arrow-btn" onClick={goToNext} aria-label="Next slide">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="wave-scroll-container">
        <svg className="wave-scroll" viewBox="0 0 2880 120" fill="none" preserveAspectRatio="none">
          <path d="M0,60 C360,110 450,20 720,60 C990,100 1080,30 1440,60 C1800,90 1890,20 2160,60 C2430,100 2520,30 2880,60 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.3" />
          <path d="M0,75 C300,40 500,100 720,75 C940,50 1140,110 1440,75 C1740,40 1940,100 2160,75 C2380,50 2580,110 2880,75 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.6" />
          <path d="M0,90 C320,120 420,50 720,90 C1020,130 1120,60 1440,90 C1760,120 1860,50 2160,90 C2460,130 2560,60 2880,90 L2880,120 L0,120 Z" fill="#F5F5F5" />
        </svg>
      </div>
    </div>
  );
}

export default JurusanHeroSlider;
