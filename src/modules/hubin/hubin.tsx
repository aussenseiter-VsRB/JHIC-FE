import { useState, useEffect, useRef } from "react";
import { Building2, Briefcase, Handshake, BookOpen, UserCheck, Award, Factory, Building, Cog, ShieldCheck, Code, Headphones, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import AnimatedNumber from "../../components/animated-number/AnimatedNumber";
import "./css/hubin.css";
import data from "./hubin.json";

const iconMap: Record<string, LucideIcon> = {
  Briefcase, Building2, Award, BookOpen, UserCheck, Handshake, Factory, Building, Cog, ShieldCheck, Code, Headphones,
};

interface ProgramItem {
  id: number;
  name: string;
  description: string;
  icon: string;
  color: string;
}

interface AlurItem {
  id: number;
  step: string;
  name: string;
  description: string;
}

interface MitraItem {
  id: number;
  name: string;
  address: string;
  focus: string;
  icon: string;
}

interface StatItem {
  number: string;
  label: string;
}

interface CtaItem {
  title: string;
  description: string;
  button: string;
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let observer: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;

    function observeReveal() {
      const container = ref.current;
      if (!container) return;
      if (!observer) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                observer?.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.15 },
        );
      }
      container.querySelectorAll<HTMLElement>(".reveal:not(.revealed)").forEach((t) => observer?.observe(t));
    }

    observeReveal();

    mutationObserver = new MutationObserver(observeReveal);
    mutationObserver.observe(el, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      mutationObserver?.disconnect();
    };
  }, []);

  return ref;
}

function Hubin() {
  const programs: ProgramItem[] = data.programs;
  const mitra: MitraItem[] = data.mitra;
  const stats: StatItem[] = data.stats;
  const alur: AlurItem[] = data.alur;
  const cta: CtaItem = data.cta;
  const [filter, setFilter] = useState("Semua");
  const sectionRef = useReveal();

  const focusSet = Array.from(new Set(mitra.map((m) => m.focus)));
  const filteredMitra = filter === "Semua" ? mitra : mitra.filter((m) => m.focus === filter);

  return (
    <div className="hubin">
      <div className="hubin-header-section">
        <div className="hubin-header-inner">
          <div className="hubin-header-text">
            <Breadcrumb
              items={[
                { label: "Tentang Kami" },
                { label: "Hubungan Industri" },
              ]}
              className="justify-center md:justify-start"
            />
            <h1 className="hubin-title font-heading">{data.header.title}</h1>
            <p className="hubin-subtitle font-body">{data.header.subtitle}</p>

            <button className="hubin-explore-btn font-poppins" onClick={() => document.getElementById("hubin-content")?.scrollIntoView({ behavior: "smooth" })}>
              Jelajahi
              <ArrowRight className="hubin-explore-icon" />
            </button>

            <div className="hubin-stats">
              {stats.map((stat, i) => (
                <div key={i} className="hubin-stat reveal">
                  <span className="hubin-stat-number font-heading"><AnimatedNumber value={stat.number} /></span>
                  <span className="hubin-stat-label font-body">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hubin-header-visual">
            <div className="hubin-photo-placeholder">
              <Building2 className="hubin-photo-icon" />
              <span className="hubin-photo-label font-body">Foto Hubungan Industri</span>
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

      <div id="hubin-content" className="hubin-container" ref={sectionRef}>

        <div className="hubin-section">
          <div className="hubin-section-header reveal">
            <h2 className="hubin-section-title font-heading">Proses Hubungan Industri</h2>
            <span className="hubin-section-accent" />
          </div>

          <div className="hubin-alur">
            {alur.map((item, i) => (
              <div key={item.id} className={`hubin-alur-item reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="hubin-alur-step">
                  <span className="hubin-alur-number font-heading">{item.step}</span>
                  {i < alur.length - 1 && <div className="hubin-alur-line" />}
                </div>
                <div className="hubin-alur-content">
                  <h3 className="hubin-alur-name font-heading">{item.name}</h3>
                  <p className="hubin-alur-desc font-body">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hubin-section">
          <div className="hubin-section-header reveal">
            
            <h2 className="hubin-section-title font-heading">Program Hubin</h2>
            <span className="hubin-section-accent" />
          </div>

          <div className="hubin-grid">
            {programs.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <div key={item.id} className={`hubin-card reveal reveal-delay-${(i % 3) + 1}`} style={{ "--card-accent": item.color } as React.CSSProperties}>
                  <div className="hubin-card-icon" style={{ background: `${item.color}15`, color: item.color }}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="hubin-card-name font-heading">{item.name}</h3>
                  <p className="hubin-card-desc font-body">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="hubin-section">
          <div className="hubin-section-header reveal">
            <h2 className="hubin-section-title font-heading">Mitra Industri</h2>
            <span className="hubin-section-accent" />
          </div>

          <div className="hubin-mitra-filter reveal">
            <button
              className={`hubin-filter-btn font-body ${filter === "Semua" ? "hubin-filter-btn--active" : ""}`}
              onClick={() => setFilter("Semua")}
            >
              Semua
            </button>
            {focusSet.map((f) => (
              <button
                key={f}
                className={`hubin-filter-btn font-body ${filter === f ? "hubin-filter-btn--active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="hubin-mitra-grid">
            {filteredMitra.map((item, i) => {
              const MitraIcon = iconMap[item.icon] || Factory;
              return (
                <div key={item.id} className={`hubin-mitra-card reveal reveal-delay-${(i % 4) + 1}`}>
                  <div className="hubin-mitra-icon">
                    <MitraIcon className="h-5 w-5" />
                  </div>
                  <h3 className="hubin-mitra-name font-heading">{item.name}</h3>
                  <p className="hubin-mitra-detail font-body">{item.address}</p>
                  <p className="hubin-mitra-detail hubin-mitra-focus font-body">{item.focus}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="hubin-cta-section">
        <div className="hubin-cta-container">
          <h2 className="hubin-cta-title font-heading">{cta.title}</h2>
          <p className="hubin-cta-desc font-body">{cta.description}</p>
          <button className="hubin-cta-button font-poppins">
            {cta.button}
            <ArrowRight className="hubin-cta-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hubin;
