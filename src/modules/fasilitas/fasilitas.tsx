import { useState } from "react";
import { Building2, ArrowLeft, ArrowRight } from "lucide-react";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import "./css/fasilitas.css";
import fasilitasData from "./fasilitas.json";
import heroImage from "../../assets/hero.png";

interface FasilitasItem {
  id: number;
  name: string;
  description: string;
  photo: string;
}

const stats = [
  { value: "6+", label: "Fasilitas Unggulan", color: "#0EA5E9" },
  { value: "3+", label: "Laboratorium", color: "#8B5CF6" },
  { value: "24", label: "Ruang Kelas", color: "#6366F1" },
];

const PER_PAGE = 6;

function FasilitasCard({ item, delay }: { item: FasilitasItem; delay: number }) {
  const [photoError, setPhotoError] = useState(false);

  return (
    <div className={`fasilitas-card reveal reveal-delay-${delay}`}>
      <div className="fasilitas-card-photo">
        <img
          src={photoError ? heroImage : item.photo}
          alt={`Foto ${item.name}`}
          loading="lazy"
          onError={() => setPhotoError(true)}
        />
      </div>
      <div className="fasilitas-card-body">
        <h3 className="fasilitas-card-name">{item.name}</h3>
        <p className="fasilitas-card-desc">{item.description}</p>
      </div>
    </div>
  );
}

function Fasilitas() {
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = Math.ceil(fasilitasData.length / PER_PAGE);
  const pages = Array.from({ length: pageCount }, (_, i) =>
    fasilitasData.slice(i * PER_PAGE, i * PER_PAGE + PER_PAGE)
  );
  const goToPage = (page: number) => setCurrentPage(Math.min(Math.max(page, 0), pageCount - 1));

  return (
    <div className="fasilitas">
      <div className="fasilitas-header-section">
        <div className="fasilitas-header-inner">
          <div className="fasilitas-header-text">
            <Breadcrumb
              items={[
                { label: "Fasilitas" },
                { label: "Fasilitas Umum" },
              ]}
            />
            <h1 className="fasilitas-title">Sarana &amp; Prasarana</h1>
            <p className="fasilitas-subtitle">
              Fasilitas modern untuk mendukung proses belajar mengajar yang optimal
            </p>
            <button
              type="button"
              className="fasilitas-explore-btn"
              onClick={() => document.getElementById("fasilitas-konten")?.scrollIntoView({ behavior: "smooth" })}
            >
              Jelajahi Fasilitas
              <ArrowRight className="fasilitas-explore-icon" />
            </button>
          </div>

          <div className="fasilitas-header-visual">
            <div className="fasilitas-photo-placeholder">
              <Building2 className="fasilitas-photo-icon" />
              <span className="fasilitas-photo-label">Foto Sarana &amp; Prasarana</span>
            </div>
          </div>
        </div>

        <div className="fasilitas-header-stats">
          {stats.map((stat) => (
            <div key={stat.label} className="fasilitas-header-stat">
              <span className="fasilitas-header-stat-value" style={{ color: stat.color }}>{stat.value}</span>
              <span className="fasilitas-header-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="wave-scroll-container">
          <svg className="wave-scroll" viewBox="0 0 2880 120" fill="none" preserveAspectRatio="none">
            <path d="M0,60 C360,110 450,20 720,60 C990,100 1080,30 1440,60 C1800,110 1890,20 2160,60 C2430,100 2520,30 2880,60 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.3" />
            <path d="M0,75 C300,40 500,100 720,75 C940,50 1140,110 1440,75 C1740,40 1940,100 2160,75 C2380,50 2580,110 2880,75 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.6" />
            <path d="M0,90 C320,120 420,50 720,90 C1020,130 1120,60 1440,90 C1760,120 1860,50 2160,90 C2460,130 2560,60 2880,90 L2880,120 L0,120 Z" fill="#F5F5F5" />
          </svg>
        </div>
      </div>

      <div id="fasilitas-konten" className="fasilitas-container">
        <div className="fasilitas-carousel">
          <div className="fasilitas-carousel-viewport">
            <div
              className="fasilitas-carousel-track"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {pages.map((pageItems, pageIndex) => (
                <div key={pageIndex} className="fasilitas-carousel-page">
                  <div className="fasilitas-grid">
                    {pageItems.map((fasilitas: FasilitasItem, i: number) => (
                      <FasilitasCard key={fasilitas.id} item={fasilitas} delay={(i % 3) + 1} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {pageCount > 1 && (
            <div className="fasilitas-carousel-nav">
              <button
                type="button"
                className="fasilitas-carousel-btn"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 0}
                aria-label="Halaman sebelumnya"
              >
                <ArrowLeft className="fasilitas-carousel-btn-icon" />
              </button>
              <div className="fasilitas-carousel-dots" role="tablist" aria-label="Navigasi halaman">
                {pages.map((_, pageIndex) => (
                  <button
                    key={pageIndex}
                    type="button"
                    role="tab"
                    className={`fasilitas-carousel-dot ${pageIndex === currentPage ? "fasilitas-carousel-dot--active" : ""}`}
                    onClick={() => goToPage(pageIndex)}
                    aria-label={`Halaman ${pageIndex + 1}`}
                    aria-selected={pageIndex === currentPage}
                  />
                ))}
              </div>
              <button
                type="button"
                className="fasilitas-carousel-btn"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === pageCount - 1}
                aria-label="Halaman berikutnya"
              >
                <ArrowRight className="fasilitas-carousel-btn-icon" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Fasilitas;
