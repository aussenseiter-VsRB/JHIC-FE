import { Building2, Briefcase, Handshake, BookOpen, UserCheck, Award, Factory } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import "./css/hubin.css";
import data from "./hubin.json";

const iconMap: Record<string, LucideIcon> = {
  Briefcase, Building2, Award, BookOpen, UserCheck, Handshake,
};

interface ProgramItem {
  id: number;
  name: string;
  description: string;
  icon: string;
  color: string;
}

interface MitraItem {
  id: number;
  name: string;
  address: string;
  focus: string;
}

interface StatItem {
  number: string;
  label: string;
}

function Hubin() {
  const programs: ProgramItem[] = data.programs;
  const mitra: MitraItem[] = data.mitra;
  const stats: StatItem[] = data.stats;

  return (
    <div className="hubin">
      <div className="hubin-header-section">
        <div className="hubin-header-content">
          <h1 className="hubin-title font-heading">{data.header.title}</h1>
          <p className="hubin-subtitle font-body">{data.header.subtitle}</p>

          <div className="hubin-stats">
            {stats.map((stat, i) => (
              <div key={i} className="hubin-stat reveal">
                <span className="hubin-stat-number font-heading">{stat.number}</span>
                <span className="hubin-stat-label font-body">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden pointer-events-none wave-scroll-container">
          <svg className="wave-scroll" viewBox="0 0 2880 120" fill="none" preserveAspectRatio="none" style={{ width: '200%', height: '96px' }}>
            <path d="M0,60 C360,110 450,20 720,60 C990,100 1080,30 1440,60 C1800,90 1890,20 2160,60 C2430,100 2520,30 2880,60 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.3" />
            <path d="M0,75 C300,40 500,100 720,75 C940,50 1140,110 1440,75 C1740,40 1940,100 2160,75 C2380,50 2580,110 2880,75 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.6" />
            <path d="M0,90 C320,120 420,50 720,90 C1020,130 1120,60 1440,90 C1760,120 1860,50 2160,90 C2460,130 2560,60 2880,90 L2880,120 L0,120 Z" fill="#F5F5F5" />
          </svg>
        </div>
      </div>

      <div className="hubin-container">
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

          <div className="hubin-mitra-grid">
            {mitra.map((item, i) => (
              <div key={item.id} className={`hubin-mitra-card reveal reveal-delay-${(i % 4) + 1}`}>
                <div className="hubin-mitra-icon">
                  <Factory className="h-5 w-5" />
                </div>
                <h3 className="hubin-mitra-name font-heading">{item.name}</h3>
                <p className="hubin-mitra-detail font-body">{item.address}</p>
                <p className="hubin-mitra-detail font-body" style={{ color: '#2563EB', marginTop: 8 }}>{item.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hubin;
