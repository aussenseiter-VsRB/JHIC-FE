import { Wifi, Monitor, BookOpen, Utensils, Building, FlaskConical, School, Users, Award } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import "./css/fasilitas.css";
import fasilitasData from "./fasilitas.json";

interface FasilitasItem {
  id: number;
  name: string;
  description: string;
  category: string;
  icon: string;
  color: string;
}

const iconMap: Record<string, LucideIcon> = {
  Monitor, BookOpen, Building, Utensils, Wifi,
};

const stats = [
  { icon: Building, value: "6+", label: "Fasilitas Unggulan", color: "#0EA5E9" },
  { icon: FlaskConical, value: "3+", label: "Laboratorium", color: "#8B5CF6" },
  { icon: School, value: "24", label: "Ruang Kelas", color: "#6366F1" },
  { icon: Users, value: "1000+", label: "Siswa Terfasilitasi", color: "#EC4899" },
  { icon: Award, value: "A", label: "Akreditasi", color: "#F59E0B" },
];

function Fasilitas() {
  return (
    <div className="fasilitas">
      <div className="fasilitas-header-section">
        <div className="fasilitas-header-content">
          <h1 className="fasilitas-title">Sarana & Prasarana</h1>
          <p className="fasilitas-subtitle">
            Fasilitas modern untuk mendukung proses belajar mengajar yang optimal
          </p>
        </div>
        <div className="wave-scroll-container">
          <svg className="wave-scroll" viewBox="0 0 2880 120" fill="none" preserveAspectRatio="none">
            <path d="M0,60 C360,110 450,20 720,60 C990,100 1080,30 1440,60 C1800,90 1890,20 2160,60 C2430,100 2520,30 2880,60 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.3" />
            <path d="M0,75 C300,40 500,100 720,75 C940,50 1140,110 1440,75 C1740,40 1940,100 2160,75 C2380,50 2580,110 2880,75 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.6" />
            <path d="M0,90 C320,120 420,50 720,90 C1020,130 1120,60 1440,90 C1760,120 1860,50 2160,90 C2460,130 2560,60 2880,90 L2880,120 L0,120 Z" fill="#F5F5F5" />
          </svg>
        </div>
      </div>

      <div className="fasilitas-stats-section reveal">
        <div className="fasilitas-stats-container">
          {stats.map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <div key={i} className="fasilitas-stat-card">
                <div className="fasilitas-stat-icon" style={{ background: `${stat.color}15`, color: stat.color }}>
                  <StatIcon className="h-6 w-6" />
                </div>
                <span className="fasilitas-stat-value" style={{ color: stat.color }}>{stat.value}</span>
                <span className="fasilitas-stat-label">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="fasilitas-container">
        <div className="fasilitas-grid">
          {fasilitasData.map((fasilitas: FasilitasItem, i: number) => {
            const Icon = iconMap[fasilitas.icon];
            return (
              <div key={fasilitas.id} className={`fasilitas-card reveal reveal-delay-${(i % 3) + 1}`}>
                <span className="fasilitas-card-category" style={{ background: `${fasilitas.color}15`, color: fasilitas.color }}>
                  {fasilitas.category}
                </span>
                <div className="fasilitas-card-icon" style={{ background: `${fasilitas.color}15`, color: fasilitas.color }}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="fasilitas-card-name">{fasilitas.name}</h3>
                <p className="fasilitas-card-desc">{fasilitas.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Fasilitas;