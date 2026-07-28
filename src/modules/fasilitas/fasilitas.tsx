import { Wifi, Monitor, BookOpen, Utensils, Building } from "lucide-react";
import "./css/fasilitas.css";

const fasilitasData = [
  {
    id: 1,
    name: "Lab Komputer",
    description: "Laboratorium komputer dengan perangkat terkini untuk praktikum pemrograman dan desain.",
    icon: Monitor,
    color: "#0EA5E9",
  },
  {
    id: 2,
    name: "Perpustakaan",
    description: "Perpustakaan lengkap dengan koleksi buku referensi dan akses digital.",
    icon: BookOpen,
    color: "#2563EB",
  },
  {
    id: 3,
    name: "Ruang Kelas Modern",
    description: "Ruang kelas dengan fasilitas AC dan proyektor untuk pembelajaran optimal.",
    icon: Building,
    color: "#6366F1",
  },
  {
    id: 4,
    name: "Kantin Sehat",
    description: "Kantin dengan standar kebersihan tinggi dan menu makanan bergizi.",
    icon: Utensils,
    color: "#EC4899",
  },
  {
    id: 5,
    name: "Lab Perhotelan",
    description: "Laboratorium perhotelan lengkap untuk praktik front office dan housekeeping.",
    icon: Building,
    color: "#8B5CF6",
  },
  {
    id: 6,
    name: "Akses WiFi",
    description: "Akses internet nirkabel cepat di seluruh area sekolah.",
    icon: Wifi,
    color: "#14B8A6",
  },
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
        <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden pointer-events-none wave-scroll-container">
          <svg className="wave-scroll" viewBox="0 0 2880 120" fill="none" preserveAspectRatio="none" style={{ width: '200%', height: '96px' }}>
            <path d="M0,60 C360,110 450,20 720,60 C990,100 1080,30 1440,60 C1800,90 1890,20 2160,60 C2430,100 2520,30 2880,60 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.3" />
            <path d="M0,75 C300,40 500,100 720,75 C940,50 1140,110 1440,75 C1740,40 1940,100 2160,75 C2380,50 2580,110 2880,75 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.6" />
            <path d="M0,90 C320,120 420,50 720,90 C1020,130 1120,60 1440,90 C1760,120 1860,50 2160,90 C2460,130 2560,60 2880,90 L2880,120 L0,120 Z" fill="#F5F5F5" />
          </svg>
        </div>
      </div>

      <div className="fasilitas-container">
        <div className="fasilitas-grid">
          {fasilitasData.map((fasilitas, i) => {
            const Icon = fasilitas.icon;
            return (
              <div key={fasilitas.id} className={`fasilitas-card reveal reveal-delay-${(i % 3) + 1}`}>
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
