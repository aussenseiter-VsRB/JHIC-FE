import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Trophy, Medal, ArrowRight, CalendarDays } from "lucide-react";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import AnimatedNumber from "../../components/animated-number/AnimatedNumber";
import "./css/prestasi.css";
import { getBerita, type Berita } from "../berita/service/beritaApi";
import SkeletonPrestasi from "./components/skeleton/skeletonPrestasi";

const dateFormatter = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

function Prestasi() {
  const [achievements, setAchievements] = useState<Berita[]>([]);
  const [totalBerita, setTotalBerita] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    getBerita()
      .then((list) => {
        if (!cancelled) {
          setAchievements(list.filter((berita) => berita.is_achievement === true));
          setTotalBerita(list.length);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (loading) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [loading]);

  if (loading) {
    return <SkeletonPrestasi />;
  }

  const stats = [
    { number: `${achievements.length}+`, label: "Total Prestasi" },
    { number: `${totalBerita}+`, label: "Total Berita" },
  ];

  return (
    <div className="prestasi">
      <header className="prestasi-header-section">
        <div className="prestasi-header-glow-right" />

        <div className="prestasi-header-inner">
          <div className="prestasi-header-left reveal">
            <div className="prestasi-header-medal-wrap">
              <div className="prestasi-header-medal-card">
                <Medal size={72} />
                <span>PRESTASI</span>
              </div>
            </div>
          </div>

          <div className="prestasi-header-right reveal reveal-delay-2">
            <Breadcrumb
              items={[
                { label: "Beranda", to: "/" },
                { label: "Prestasi" },
              ]}
            />
            <h1 className="prestasi-title">Prestasi Siswa</h1>
            <p className="prestasi-subtitle">
              Kumpulan berita dan pencapaian membanggakan yang diraih oleh siswa-siswi SMK Yadika Soreang.
            </p>

            <div className="prestasi-header-stats">
              {stats.map((stat, idx) => (
                <div key={idx} className="prestasi-stat-item">
                  <span className="prestasi-stat-number"><AnimatedNumber value={stat.number} /></span>
                  <span className="prestasi-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="wave-scroll-container">
          <svg className="wave-scroll" viewBox="0 0 2880 120" fill="none" preserveAspectRatio="none">
            <path d="M0,60 C360,110 450,20 720,60 C990,100 1080,30 1440,60 C1800,110 1890,20 2160,60 C2430,100 2520,30 2880,60 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.3" />
            <path d="M0,75 C300,40 500,100 720,75 C940,50 1140,110 1440,75 C1740,40 1940,100 2160,75 C2380,50 2580,110 2880,75 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.6" />
            <path d="M0,90 C320,120 420,50 720,90 C1020,130 1120,60 1440,90 C1760,120 1860,50 2160,90 C2460,130 2560,60 2880,90 L2880,120 L0,120 Z" fill="#F5F5F5" />
          </svg>
        </div>
      </header>

      <div className="prestasi-container">
        {achievements.length > 0 ? (
          <div className="prestasi-grid">
            {achievements.map((berita) => (
              <Link key={berita.id} to={`/berita/${berita.id}`} className="prestasi-card">
                <div className="prestasi-card-banner">
                  <span className="prestasi-card-trophy"><Medal size={44} /></span>
                  <span className="prestasi-card-chip">PRESTASI</span>
                </div>
                <div className="prestasi-card-body">
                  <div className="prestasi-card-date">
                    <CalendarDays size={14} />
                    {dateFormatter.format(new Date(berita.created_at))}
                  </div>
                  <h3 className="prestasi-card-title">{berita.title}</h3>
                  <span className="prestasi-card-link">
                    Baca Selengkapnya <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="prestasi-empty">
            <Trophy size={40} />
            <h3 className="prestasi-empty-title">Belum ada prestasi</h3>
            <p className="prestasi-empty-desc">Tidak ada berita prestasi yang tersedia saat ini.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Prestasi;
