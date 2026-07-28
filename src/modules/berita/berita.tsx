import React, { useState, useEffect } from "react";
import { Calendar, ArrowRight, User, Newspaper } from "lucide-react";
import SkeletonLoad from "../../components/skeleton/skeletonLoad";
import beritaData from "./berita.json";
import "./css/berita.css";

interface BeritaItem {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
}

interface StatItem {
  number: string;
  label: string;
}

const categoryColors: Record<string, string> = beritaData.categoryColors;

function Berita() {
  const [loading, setLoading] = useState(true);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
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

  const handleImageError = (id: number) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const [showAllTerkini, setShowAllTerkini] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const cardsPerPage = 6;

  const beritaSekolahList = beritaData.beritaSekolah?.list || [];
  const totalPages = Math.ceil(beritaSekolahList.length / cardsPerPage);
  const pagedCards = beritaSekolahList.slice(activePage * cardsPerPage, activePage * cardsPerPage + cardsPerPage);

  const initialTerkiniCount = 3;
  const displayedTerkiniList = showAllTerkini
    ? beritaData.beritaTerkini?.list || []
    : (beritaData.beritaTerkini?.list || []).slice(0, initialTerkiniCount);

  if (loading) {
    return <SkeletonLoad />;
  }

  // Format header title to highlight the last word with gradient
  const titleWords = (beritaData.header.title || "").split(" ");
  const baseTitle = titleWords.slice(0, -1).join(" ");
  const highlightedWord = titleWords[titleWords.length - 1];

  return (
    <div className="berita">
      {/* Header Banner (2-Column Premium Layout with Rich Decorative Elements) */}
      <div className="berita-header-section">
        {/* Glow Spheres in background */}
        <div className="berita-header-glow-right"></div>
        
        <div className="berita-header-inner">
          {/* Left: Person Placeholder + Floating Badges */}
          <div className="berita-header-left reveal">
            {/* Top Right Floating Badge */}
            {beritaData.header.floatingBadges?.topRight && (
              <div className="floating-badge floating-badge-tr">
                <div className="badge-icon-box">
                  <Newspaper className="h-4 w-4" />
                </div>
                <div>
                  <span className="badge-text-title">{beritaData.header.floatingBadges.topRight.title}</span>
                  <span className="badge-text-value">{beritaData.header.floatingBadges.topRight.value}</span>
                </div>
              </div>
            )}

            {/* Bottom Left Floating Badge */}
            {beritaData.header.floatingBadges?.bottomLeft && (
              <div className="floating-badge floating-badge-bl">
                <div className="badge-pulse-dot"></div>
                <div>
                  <span className="badge-text-value">{beritaData.header.floatingBadges.bottomLeft.status}</span>
                  <span className="badge-text-title">{beritaData.header.floatingBadges.bottomLeft.detail}</span>
                </div>
              </div>
            )}

            {/* Glassmorphic Portal / Card Frame */}
            <div className="berita-header-person-wrapper">
              {beritaData.header.image ? (
                <img
                  src={beritaData.header.image}
                  alt="Siswa SMK Yadika Soreang"
                  className="berita-header-person-img"
                />
              ) : (
                <div className="berita-header-person-placeholder">
                  {/* Decorative corner brackets */}
                  <div className="placeholder-corner placeholder-corner-tl"></div>
                  <div className="placeholder-corner placeholder-corner-tr"></div>
                  <div className="placeholder-corner placeholder-corner-bl"></div>
                  <div className="placeholder-corner placeholder-corner-br"></div>
                  
                  <User className="h-16 w-16 mb-4 text-sky/60 animate-pulse" />
                  <span className="text-xs font-semibold tracking-widest text-sky/80 uppercase font-poppins mb-1">
                    Ready for Photo
                  </span>
                  <span className="text-[10px] opacity-40 font-medium font-body uppercase">
                    Full-Length PNG Cutout
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Header Title, Subtitle, & Quick Stats */}
          <div className="berita-header-right reveal reveal-delay-2">
            
            <h1 className="berita-title">
              {baseTitle}{" "}
              <span>{highlightedWord}</span>
            </h1>
            
            <p className="berita-subtitle">{beritaData.header.subtitle}</p>

            {/* Quick Stats Row */}
            {beritaData.header.stats && beritaData.header.stats.length > 0 && (
              <div className="berita-header-stats">
                {beritaData.header.stats.map((stat: StatItem, idx: number) => (
                  <React.Fragment key={idx}>
                    <div className="stat-item">
                      <span className="stat-number">{stat.number}</span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                    {idx < beritaData.header.stats.length - 1 && <div className="stat-divider"></div>}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Layered Wave Animation Bottom */}
        <svg className="wave-scroll" viewBox="0 0 2880 120" fill="none" preserveAspectRatio="none" style={{ width: '200%', height: '96px' }}>
          <path d="M0,60 C360,110 450,20 720,60 C990,100 1080,30 1440,60 C1800,90 1890,20 2160,60 C2430,100 2520,30 2880,60 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.3" />
          <path d="M0,75 C300,40 500,100 720,75 C940,50 1140,110 1440,75 C1740,40 1940,100 2160,75 C2380,50 2580,110 2880,75 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.6" />
          <path d="M0,90 C320,120 420,50 720,90 C1020,130 1120,60 1440,90 C1760,120 1860,50 2160,90 C2460,130 2560,60 2880,90 L2880,120 L0,120 Z" fill="#F5F5F5" />
        </svg>
      </div>

      {/* Main Content Area */}
      <div className="berita-container">
        
        {/* Section: Berita Terkini */}
        <section className="berita-section">
          <div className="berita-section-header reveal">
            <h2 className="berita-section-title">{beritaData.beritaTerkini?.title || "BERITA TERKINI"}</h2>
            <span className="berita-section-accent" />
          </div>

          <div className="berita-list">
            {displayedTerkiniList.map((berita: BeritaItem, i: number) => {
              const isReverse = i % 2 === 1;
              const hasImgError = imgErrors[berita.id];

              return (
                <article
                  key={berita.id}
                  className={`berita-row ${isReverse ? "berita-row-reverse" : ""} reveal reveal-delay-${(i % 3) + 1}`}
                >
                  {/* Content Box */}
                  <div className="berita-row-content">
                    <div className="berita-meta">
                      <span
                        className="berita-category-badge"
                        style={{ background: categoryColors[berita.category] ?? "#2563EB" }}
                      >
                        {berita.category}
                      </span>
                      <div className="berita-date">
                        <Calendar className="h-4 w-4" />
                        <span>{berita.date}</span>
                      </div>
                    </div>

                    <h3 className="berita-item-title">{berita.title}</h3>
                    <p className="berita-item-excerpt">{berita.excerpt}</p>

                    <button className="berita-btn-selengkapnya">
                      <span>{beritaData.beritaTerkini?.readMoreText || "BACA SELENGKAPNYA"}</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Image Box */}
                  <div className="berita-row-image">
                    {!hasImgError && berita.image ? (
                      <img
                        src={berita.image}
                        alt={berita.title}
                        onError={() => handleImageError(berita.id)}
                      />
                    ) : (
                      <div className="berita-image-placeholder">
                        <span className="berita-image-placeholder-text">GAMBAR</span>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Tombol Lihat Selengkapnya jika berita terkini lebih banyak dari batas awal */}
          {(beritaData.beritaTerkini?.list.length || 0) > initialTerkiniCount && (
            <div className="berita-load-more-container reveal">
              <button
                className="berita-btn-load-more"
                onClick={() => setShowAllTerkini(!showAllTerkini)}
              >
                <span>{showAllTerkini ? "Tampilkan Lebih Sedikit" : "Lihat Selengkapnya Berita Terkini"}</span>
                <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${showAllTerkini ? "rotate-[-90deg]" : "rotate-90"}`} />
              </button>
            </div>
          )}
        </section>

        <section className="berita-section">
          <div className="berita-section-header-flex reveal">
            <div>
              <h2 className="berita-section-title">{beritaData.beritaSekolah?.title || "BERITA SEKOLAH"}</h2>
              <span className="berita-section-accent" />
            </div>
            <div className="berita-pagination">
              <button
                className="slider-btn"
                onClick={() => setActivePage((p) => Math.max(0, p - 1))}
                disabled={activePage === 0}
                aria-label="Previous Page"
              >
                <ArrowRight className="h-5 w-5 rotate-180" />
              </button>
              <button
                className="slider-btn"
                onClick={() => setActivePage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={activePage === totalPages - 1}
                aria-label="Next Page"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="berita-grid" key={activePage}>
            {pagedCards.map((berita: BeritaItem) => (
              <article key={berita.id} className="berita-card">
                <div className="berita-card-image">
                  <div className="berita-card-placeholder">
                    <span className="berita-card-placeholder-text">{berita.category}</span>
                  </div>
                  <span
                    className="berita-card-category"
                    style={{ background: categoryColors[berita.category] ?? "#2563EB" }}
                  >
                    {berita.category}
                  </span>
                </div>
                <div className="berita-card-content">
                  <div className="berita-card-date">
                    <Calendar className="h-4 w-4" />
                    <span>{berita.date}</span>
                  </div>
                  <h3 className="berita-card-title">{berita.title}</h3>
                  <p className="berita-card-excerpt">{berita.excerpt}</p>
                  <span className="berita-card-link">
                    {beritaData.readMoreText || "Baca Selengkapnya"} <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="berita-slider-dots">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`berita-slider-dot ${i === activePage ? "berita-slider-dot--active" : ""}`}
                onClick={() => setActivePage(i)}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Berita;
