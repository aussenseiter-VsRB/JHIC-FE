import { Wrench, Cpu, Syringe, Stethoscope, ChefHat, Building, Hammer } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import "./css/fasilitas-jurusan.css";
import fasilitasJurusanData from "./fasilitas-jurusan.json";

const iconMap: Record<string, LucideIcon> = {
  Wrench, Cpu, Syringe, Stethoscope, ChefHat, Building, Hammer,
};

function FasilitasJurusan() {
  return (
    <div className="fasilitas-jurusan">
      <div className="fasilitas-jurusan-header-section">
        <div className="fasilitas-jurusan-header-content">
          <h1 className="fasilitas-jurusan-title">Fasilitas Jurusan</h1>
          <p className="fasilitas-jurusan-subtitle">
            Perlengkapan dan fasilitas khusus untuk setiap program keahlian
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

      <div className="fasilitas-jurusan-container">
        <div className="fasilitas-jurusan-grid">
          {fasilitasJurusanData.map((item: { id: number; name: string; description: string; icon: string; color: string }, i) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={item.id} className={`fasilitas-jurusan-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="fasilitas-jurusan-card-icon" style={{ background: `${item.color}15`, color: item.color }}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="fasilitas-jurusan-card-name">{item.name}</h3>
                <p className="fasilitas-jurusan-card-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FasilitasJurusan;
