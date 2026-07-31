import { useEffect, useRef, useState, useCallback } from "react";
import { type LucideIcon } from "lucide-react";
import {
  Music, Music2, Camera, Trophy, BookOpen, Palette,
  Globe, Globe2, Microscope, Theater, Cross, Dumbbell,
  Footprints, Swords, Shield, ShieldCheck, CookingPot,
  HeartHandshake, Pen, Calculator, Monitor, Cpu,
  HeartPulse, TrendingUp, Volleyball, CalendarDays, Clock, User,
} from "lucide-react";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import AnimatedCounter from "./components/AnimatedCounter";
import "./css/ekstrakurikuler.css";
import data from "./ekstrakurikuler.json";

const iconMap: Record<string, LucideIcon> = {
  Music, Music2, Camera, Trophy, BookOpen, Palette,
  Globe, Globe2, Microscope, Theater, Cross, Dumbbell,
  Footprints, Swords, Shield, ShieldCheck, CookingPot,
  HeartHandshake, Pen, Calculator, Monitor, Cpu,
  HeartPulse, TrendingUp, Volleyball,
};

interface KegiatanItem {
  id: number;
  name: string;
  description: string;
  icon: string;
  color: string;
  category: string;
  day: string;
  time: string;
  coach: string;
}

function Ekstrakurikuler() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
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
      <div className="ekstrakurikuler-header-section">
        <div className="ekstrakurikuler-header-content">
          <Breadcrumb
            items={[
              { label: "Program" },
              { label: "Ekstrakurikuler" },
            ]}
            className="justify-center"
          />
          <h1 className="ekstrakurikuler-title">{data.header.title}</h1>
          <p className="ekstrakurikuler-subtitle">{data.header.subtitle}</p>
        </div>
        <div className="wave-scroll-container">
          <svg className="wave-scroll" viewBox="0 0 2880 120" fill="none" preserveAspectRatio="none" style={{ width: '200%', height: '96px' }}>
            <path d="M0,60 C360,110 450,20 720,60 C990,100 1080,30 1440,60 C1800,90 1890,20 2160,60 C2430,100 2520,30 2880,60 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.3" />
            <path d="M0,75 C300,40 500,100 720,75 C940,50 1140,110 1440,75 C1740,40 1940,100 2160,75 C2380,50 2580,110 2880,75 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.6" />
            <path d="M0,90 C320,120 420,50 720,90 C1020,130 1120,60 1440,90 C1760,120 1860,50 2160,90 C2460,130 2560,60 2880,90 L2880,120 L0,120 Z" fill="#F5F5F5" />
          </svg>
        </div>
      </div>

      <div className="ekstrakurikuler-stats">
        {data.stats.map((stat) => (
          <div key={stat.key} className="ekstrakurikuler-stat-card reveal">
            <span className="ekstrakurikuler-stat-number">
              <AnimatedCounter end={stat.value} suffix="+" />
            </span>
            <span className="ekstrakurikuler-stat-label">{stat.label}</span>
          </div>
        ))}
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

        <div ref={gridRef} key={animKey} className="ekstrakurikuler-grid">
          {filteredData.map((item, i) => {
            const Icon = iconMap[item.icon];
            if (!Icon) return null;
            return (
              <div
                key={item.id}
                className={`ekstrakurikuler-card reveal reveal-delay-${(i % 3) + 1}`}
                style={{ "--card-accent": item.color } as React.CSSProperties}
              >
                <div className="ekstrakurikuler-card-icon" style={{ background: `${item.color}15`, color: item.color }}>
                  <Icon />
                </div>
                <h3 className="ekstrakurikuler-card-name">{item.name}</h3>
                <p className="ekstrakurikuler-card-desc">{item.description}</p>
                <div className="ekstrakurikuler-card-meta">
                  <span className="ekstrakurikuler-card-meta-item">
                    <CalendarDays />
                    {item.day}
                  </span>
                  <span className="ekstrakurikuler-card-meta-item">
                    <Clock />
                    {item.time}
                  </span>
                  <span className="ekstrakurikuler-card-meta-item">
                    <User />
                    {item.coach}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Ekstrakurikuler;
