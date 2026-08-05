import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { Calendar, ArrowRight } from "lucide-react";
import SkeletonLoad from "./components/skeleton/skeletonLoad";
import AnimatedNumber from "../../components/animated-number/AnimatedNumber";
import SafeImage from "../../components/image/safe-image";
import beritaImg from "../../assets/berita-assets/berita-img.png";
import { getBerita, beritaToItem, type Berita as BeritaData, type BeritaItem } from "./service/beritaApi";
import beritaData from "./berita.json";
import "./css/berita.css";

const categoryColors: Record<string, string> = beritaData.categoryColors;

function Berita() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [apiData, setApiData] = useState<BeritaData[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    getBerita()
      .then((data) => {
        if (!cancelled) {
          setApiData(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          console.error("Failed to fetch berita:", err);
          setError(err instanceof Error ? err.message : "Unknown error");
          setLoading(false);
        }
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

  const [activePage, setActivePage] = useState(0);
  const cardsPerPage = 6;

  const sortedList = apiData
    ? [...apiData].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    : [];
  const beritaTerkiniList = sortedList.slice(0, 3).map(beritaToItem);
  const beritaSekolahList = sortedList.slice(3).map(beritaToItem);
  const totalPages = Math.ceil(beritaSekolahList.length / cardsPerPage);
  const pagedCards = beritaSekolahList.slice(activePage * cardsPerPage, activePage * cardsPerPage + cardsPerPage);

  if (loading) {
    return <SkeletonLoad />;
  }

  const header = beritaData.header;
  const titleWords = (header.title || "").split(" ");
  const baseTitle = titleWords.slice(0, -1).join(" ");
  const highlightedWord = titleWords[titleWords.length - 1];
  const readMoreText = beritaData.readMoreText || "Baca Selengkapnya";
  const totalBerita = apiData?.length ?? 0;
  const achievementCount = apiData?.filter((berita) => berita.is_achievement === true).length ?? 0;
  const stats = [
    { number: `${achievementCount}+`, label: "Prestasi Siswa" },
    { number: "30+", label: "Mitra Industri" },
    { number: `${totalBerita}+`, label: "Informasi Terverifikasi" },
  ];

  return (
    <div className="berita">
      <header className="berita-header-section">
        <div className="berita-header-glow-right"></div>
        <div className="berita-header-inner">
          <div className="berita-header-left reveal">
            <div className="berita-header-person-wrapper">
              {header.image ? (
                <SafeImage
                  src={header.image}
                  alt="Siswa SMK Yadika Soreang"
                  className="berita-header-person-img"
                />
              ) : (
                <img
                  src={beritaImg}
                  alt="Siswa SMK Yadika Soreang"
                  className="berita-header-person-img"
                />
              )}
            </div>
          </div>

          <div className="berita-header-right reveal reveal-delay-2">
            <h1 className="berita-title">
              {baseTitle}{" "}
              <span>{highlightedWord}</span>
            </h1>
            <p className="berita-subtitle">{header.subtitle}</p>

            <div className="berita-header-stats">
              {stats.map((stat: { number: string; label: string }, idx: number) => (
                <React.Fragment key={idx}>
                  <div className="stat-item">
                    <span className="stat-number"><AnimatedNumber value={stat.number} /></span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                  {idx < stats.length - 1 && <div className="stat-divider"></div>}
                </React.Fragment>
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

      <div className="berita-container">
        {error ? (
          <div className="berita-error">
            <p>Berita gagal dimuat. Silakan coba lagi nanti.</p>
          </div>
        ) : (
          <>
            <section className="berita-section">
          <div className="berita-section-header reveal">
            <h2 className="berita-section-title">{beritaData.beritaTerkini?.title || "BERITA TERKINI"}</h2>
            <span className="berita-section-accent" />
          </div>

          <div className="berita-list">
            {beritaTerkiniList.map((berita: BeritaItem, i: number) => {
              const isReverse = i % 2 === 1;

              return (
                <article
                  key={berita.id}
                  className={`berita-row ${isReverse ? "berita-row-reverse" : ""} reveal reveal-delay-${(i % 3) + 1}`}
                >
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

                    <Link to={`/berita/${berita.id}`} className="berita-btn-selengkapnya">
                      <span>{beritaData.beritaTerkini?.readMoreText || readMoreText}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <div className="berita-row-image">
                    <SafeImage src={berita.image} alt={berita.title} />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="berita-section">
          <div className="berita-section-header-flex reveal">
            <div>
              <h2 className="berita-section-title">{beritaData.beritaSekolah?.title || "BERITA SEKOLAH"}</h2>
              <span className="berita-section-accent" />
            </div>
          </div>

          <div className="berita-grid-wrapper">
            <button
              className="berita-nav-arrow"
              onClick={() => setActivePage((p) => Math.max(0, p - 1))}
              disabled={activePage === 0}
              aria-label="Previous Page"
            >
              <ArrowRight className="h-6 w-6 rotate-180" />
            </button>

            <div className="berita-grid" key={activePage}>
              {pagedCards.map((berita: BeritaItem) => (
                <article key={berita.id} className="berita-card">
                  <div className="berita-card-image">
                    <SafeImage src={berita.image} alt={berita.title} className="berita-card-img" />
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
                    <Link to={`/berita/${berita.id}`} className="berita-card-link">
                      {readMoreText} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
              {Array.from({ length: cardsPerPage - pagedCards.length }, (_, i) => (
                <div key={`filler-${i}`} className="berita-card berita-card--filler" aria-hidden="true">
                  <div className="berita-card-image" />
                  <div className="berita-card-content" />
                </div>
              ))}
            </div>

            <button
              className="berita-nav-arrow"
              onClick={() => setActivePage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={activePage === totalPages - 1}
              aria-label="Next Page"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>

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
      </>
        )}
      </div>
    </div>
  );
}

export default Berita;
