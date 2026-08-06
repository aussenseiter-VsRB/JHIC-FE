import { ArrowUpRight, CheckCircle2, GraduationCap } from "lucide-react";
import { Link } from "react-router";

function CtaSection() {
  return (
    <section className="home-cta">
      <div className="home-cta-container">
        <div className="reveal home-cta-banner">
          <svg
            className="home-cta-pattern-svg"
            viewBox="0 0 1200 420"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <circle cx="1080" cy="40" r="120" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />
            <circle cx="1080" cy="40" r="86" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
            <circle cx="80" cy="380" r="90" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
            <circle cx="80" cy="380" r="60" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
            <rect x="20" y="20" width="72" height="72" rx="10" transform="rotate(45 56 56)" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
            <rect x="1116" y="296" width="52" height="52" rx="8" transform="rotate(45 1142 322)" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
            <rect x="600" y="356" width="26" height="26" rx="6" transform="rotate(30 613 369)" fill="rgba(255,255,255,0.12)" />
            <path d="M250 60 L290 132 L210 132 Z" fill="rgba(255,255,255,0.1)" />
            <path d="M950 360 L1000 282 L1050 360 Z" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="2" />
            <path d="M430 42 L455 72 L430 102 L405 72 Z" fill="rgba(255,255,255,0.14)" />
            <path d="M780 382 L800 350 L820 382 L800 414 Z" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="2" />
            <path d="M540 300 v36 M522 318 h36" stroke="rgba(255,255,255,0.18)" strokeWidth="3" strokeLinecap="round" />
            <circle cx="160" cy="185" r="5" fill="rgba(255,255,255,0.22)" />
            <circle cx="1035" cy="175" r="4" fill="rgba(255,255,255,0.2)" />
            <circle cx="330" cy="330" r="4" fill="rgba(255,255,255,0.16)" />
            <circle cx="1180" cy="180" r="7" fill="rgba(255,255,255,0.14)" />
          </svg>

          <div className="home-cta-content">
            <div className="home-cta-badge">
              <GraduationCap className="home-cta-badge-icon" />
            </div>

            <h2 className="font-heading home-cta-title">
              <span className="home-cta-title-line home-cta-title-line--1">
                Siap Bergabung dengan
              </span>
              <span className="home-cta-title-line home-cta-title-line--2">
                SMK Yadika Soreang?
              </span>
              <Link to="/spmb" className="font-poppins home-cta-button">
                Daftar Sekarang
                <ArrowUpRight className="home-cta-button-icon" />
              </Link>
            </h2>

            <div className="home-cta-check">
              <span className="home-cta-check-item">
                <CheckCircle2 className="home-cta-check-icon" />
                Akreditasi Unggul
              </span>
              <span className="home-cta-check-item">
                <CheckCircle2 className="home-cta-check-icon" />
                Fasilitas Lengkap
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
