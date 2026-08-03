import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import EkstrakurikulerPhoto from "./components/EkstrakurikulerPhoto";
import heroImage from "../../assets/hero.png";
import "./css/ekstrakurikuler.css";
import data from "./ekstrakurikuler.json";

interface KegiatanItem {
  id: number;
  name: string;
  slug: string;
  description: string;
  category: string;
  photo: string;
}

function Ekstrakurikuler() {
  const containerRef = useRef<HTMLDivElement>(null);
  const kegiatanData: KegiatanItem[] = data.list;
  const [activeCategory, setActiveCategory] = useState("all");
  const [animKey, setAnimKey] = useState(0);

  const filteredData = activeCategory === "all"
    ? kegiatanData
    : kegiatanData.filter((item) => item.category === activeCategory);

  const handleFilter = useCallback((key: string) => {
    setActiveCategory(key);
    setAnimKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const parent = containerRef.current;
    if (!parent) return;

    const els = parent.querySelectorAll<HTMLElement>(".reveal.revealed");
    els.forEach((el) => el.classList.remove("revealed"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    const newEls = parent.querySelectorAll<HTMLElement>(".reveal:not(.revealed)");
    newEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredData, animKey]);

  return (
    <div className="ekstrakurikuler">
      <div className="ekstrakurikuler-hero">
        <div className="ekstrakurikuler-hero-orb ekstrakurikuler-hero-orb--1" />
        <div className="ekstrakurikuler-hero-orb ekstrakurikuler-hero-orb--2" />
        <div className="ekstrakurikuler-hero-orb ekstrakurikuler-hero-orb--3" />
        <div className="ekstrakurikuler-hero-dots-overlay" />
        <div className="ekstrakurikuler-hero-glow" />

        <div className="ekstrakurikuler-hero-inner">
          <div className="ekstrakurikuler-hero-content">
            <Breadcrumb
              items={[
                { label: "Program" },
                { label: "Ekstrakurikuler" },
              ]}
            />
            <div className="ekstrakurikuler-hero-label">
              <div className="ekstrakurikuler-hero-label-dot" />
              Kegiatan Ekstrakurikuler
            </div>
            <h1 className="ekstrakurikuler-hero-title">{data.header.title}</h1>
            <p className="ekstrakurikuler-hero-desc">{data.header.subtitle}</p>
            <p className="ekstrakurikuler-hero-tagline">{data.header.tagline}</p>
          </div>

          <div className="ekstrakurikuler-hero-visual">
            <div className="ekstrakurikuler-hero-image-wrap">
              <img
                src={heroImage}
                alt="Kegiatan Ekstrakurikuler"
                className="ekstrakurikuler-hero-image"
              />
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
      </div>

      <div ref={containerRef} className="ekstrakurikuler-container">
        <div className="ekstrakurikuler-filter">
          {data.categories.map((cat) => (
            <button
              key={cat.key}
              className={`ekstrakurikuler-filter-btn ${activeCategory === cat.key ? "active" : ""}`}
              onClick={() => handleFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="ekstrakurikuler-count">
          Menampilkan {filteredData.length} kegiatan
        </div>

        <div key={animKey} className="ekstrakurikuler-grid">
          {filteredData.map((item, i) => (
            <div
              key={item.id}
              className={`ekstrakurikuler-card reveal reveal-delay-${(i % 3) + 1}`}
            >
              <div className="ekstrakurikuler-card-photo">
                <EkstrakurikulerPhoto
                  src={item.photo}
                  alt={`Foto ${item.name}`}
                  name={item.name}
                  className="ekstrakurikuler-card-photo-img"
                />
              </div>
              <div className="ekstrakurikuler-card-body">
                <h3 className="ekstrakurikuler-card-name">{item.name}</h3>
                <p className="ekstrakurikuler-card-desc">{item.description}</p>
                <Link
                  to={`/ekstrakurikuler/${item.slug}`}
                  className="ekstrakurikuler-card-btn"
                >
                  Lihat
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ekstrakurikuler;
