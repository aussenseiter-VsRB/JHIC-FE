import { Music, Camera, Trophy, BookOpen, Palette, Globe, Microscope, Theater, type LucideIcon } from "lucide-react";
import "./css/ekstrakulikuler.css";
import data from "./ekstrakulikuler.json";

const iconMap: Record<string, LucideIcon> = {
  Music, Camera, Trophy, BookOpen, Palette, Globe, Microscope, Theater,
};

interface KegiatanItem {
  id: number;
  name: string;
  description: string;
  icon: string;
  color: string;
}

function Ekstrakulikuler() {
  const kegiatanData: KegiatanItem[] = data.list;

  return (
    <div className="ekstrakulikuler">
      <div className="ekstrakulikuler-header-section">
        <div className="ekstrakulikuler-header-content">
          <h1 className="ekstrakulikuler-title">{data.header.title}</h1>
          <p className="ekstrakulikuler-subtitle">{data.header.subtitle}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden pointer-events-none wave-scroll-container">
          <svg className="wave-scroll" viewBox="0 0 2880 120" fill="none" preserveAspectRatio="none" style={{ width: '200%', height: '96px' }}>
            <path d="M0,60 C360,110 450,20 720,60 C990,100 1080,30 1440,60 C1800,90 1890,20 2160,60 C2430,100 2520,30 2880,60 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.3" />
            <path d="M0,75 C300,40 500,100 720,75 C940,50 1140,110 1440,75 C1740,40 1940,100 2160,75 C2380,50 2580,110 2880,75 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.6" />
            <path d="M0,90 C320,120 420,50 720,90 C1020,130 1120,60 1440,90 C1760,120 1860,50 2160,90 C2460,130 2560,60 2880,90 L2880,120 L0,120 Z" fill="#F5F5F5" />
          </svg>
        </div>
      </div>

      <div className="ekstrakulikuler-container">
        <div className="ekstrakulikuler-grid">
          {kegiatanData.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={item.id} className={`ekstrakulikuler-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="ekstrakulikuler-card-icon" style={{ background: `${item.color}15`, color: item.color }}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="ekstrakulikuler-card-name">{item.name}</h3>
                <p className="ekstrakulikuler-card-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Ekstrakulikuler;
