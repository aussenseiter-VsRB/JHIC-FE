import { ArrowRight, Download, Calendar, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

function PpdbHero() {
  return (
    <div className="ppdb-hero">
      <div className="ppdb-hero-orb ppdb-hero-orb--1" />
      <div className="ppdb-hero-orb ppdb-hero-orb--2" />
      <div className="ppdb-hero-orb ppdb-hero-orb--3" />
      <div className="ppdb-hero-dots" />

      <div className="ppdb-hero-inner">
        {/* ── LEFT: Text ── */}
        <div className="ppdb-hero-text">
          <motion.span
            className="ppdb-hero-badge"
            initial={{ opacity: 0, scale: 0.8, filter: "blur(6px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <span className="ppdb-hero-badge-dot" />
            
          </motion.span>

          <motion.h1
            className="ppdb-hero-headline"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          >
            Unggul Prestasi,
            <br />
            <span className="ppdb-hero-headline-accent">
              Siap Bersaing Global
            </span>
          </motion.h1>

          <motion.svg
            className="ppdb-hero-tali"
            viewBox="0 0 340 48"
            fill="none"
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <path
              className="ppdb-hero-tali-path"
              d="M4 38 C 40 38, 52 12, 96 12 C 140 12, 148 36, 192 36 C 236 36, 244 14, 288 14 C 310 14, 324 24, 336 28"
            />
            <circle className="ppdb-hero-tali-dot" cx="4" cy="38" r="2.5" />
            <circle className="ppdb-hero-tali-dot" cx="336" cy="28" r="2.5" />
          </motion.svg>

          <motion.p
            className="ppdb-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
          >
            <strong>Program Keahlian Teknologi, Bisnis & Sosial</strong> yang
            membekali siswa dengan kompetensi dunia kerja. Daftar sekarang dan
            raih masa depanmu di SMK Yadika Soreang.
          </motion.p>

          <motion.div
            className="ppdb-hero-cta"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
          >
            <a href="#daftar" className="ppdb-hero-btn ppdb-hero-btn--primary">
              Daftar Sekarang
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#brosur" className="ppdb-hero-btn ppdb-hero-btn--ghost">
              <Download className="h-4 w-4" />
              Unduh Brosur
            </a>
          </motion.div>
        </div>

        {/* ── RIGHT: Visual ── */}
        <div className="ppdb-hero-visual">
          {/* Segel / medali shape */}
          <motion.div
            className="ppdb-hero-segel"
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          >
            <svg viewBox="0 0 340 340" fill="none">
              <path
                d="M170 8 C 220 8, 268 28, 300 64 C 332 100, 348 148, 340 196 C 332 244, 304 284, 264 312 C 224 340, 180 348, 136 336 C 92 324, 52 296, 28 256 C 4 216, -4 168, 8 124 C 20 80, 56 36, 104 16 C 124 8, 148 8, 170 8 Z"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="2"
                opacity="0.35"
              />
              <path
                d="M170 24 C 214 24, 254 42, 284 74 C 314 106, 328 148, 322 192 C 316 236, 292 272, 256 296 C 220 320, 180 328, 142 318 C 104 308, 70 284, 48 250 C 26 216, 18 174, 26 134 C 34 94, 62 56, 104 36 C 124 26, 148 24, 170 24 Z"
                fill="#163228"
                opacity="0.5"
              />
              <circle
                cx="170"
                cy="170"
                r="110"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="0.8"
                strokeDasharray="4 6"
                opacity="0.2"
              />
            </svg>
          </motion.div>

          {/* Photo frame */}
          <motion.div
            className="ppdb-hero-photo-frame"
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
          >
            <div className="ppdb-hero-photo-placeholder">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span>Foto Sekolah</span>
            </div>
          </motion.div>

          {/* Floating info badge */}
          <motion.div
            className="ppdb-hero-info"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
          >
            <div className="ppdb-hero-info-icon">
              <Calendar className="h-[18px] w-[18px]" />
            </div>
            <div className="ppdb-hero-info-text">
              <span className="ppdb-hero-info-label">Penutupan</span>
              <span className="ppdb-hero-info-value">31 Agustus 2026</span>
            </div>
          </motion.div>

          {/* Chat bubble */}
          <motion.div
            className="ppdb-hero-chat"
            initial={{ opacity: 0, y: 10, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2, ease: EASE }}
          >
            <span className="ppdb-hero-chat-avatar">Y</span>
            <span className="ppdb-hero-chat-msg">
              Ada pertanyaan? Kami siap membantu!
            </span>
            <MessageCircle className="absolute -bottom-1 -left-1 h-3 w-3 text-[#232F72]" />
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="ppdb-hero-wave">
        <svg
          className="wave-scroll"
          viewBox="0 0 2880 120"
          fill="none"
          preserveAspectRatio="none"
          style={{ width: "200%", height: "80px" }}
        >
          <path
            d="M0,80 C320,120 420,40 720,80 C1020,120 1120,40 1440,80 C1760,120 1860,40 2160,80 C2460,120 2560,40 2880,80 L2880,120 L0,120 Z"
            fill="#F5F5F5"
          />
        </svg>
      </div>
    </div>
  );
}

export default PpdbHero;
