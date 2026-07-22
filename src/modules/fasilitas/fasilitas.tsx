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
          <span className="fasilitas-badge">Fasilitas</span>
          <h1 className="fasilitas-title">Sarana & Prasarana</h1>
          <p className="fasilitas-subtitle">
            Fasilitas modern untuk mendukung proses belajar mengajar yang optimal
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
          <svg className="wave-scroll" viewBox="0 0 2880 120" fill="none" preserveAspectRatio="none" style={{ width: '200%', height: '80px' }}>
            <path d="M0,80 C320,120 420,40 720,80 C1020,120 1120,40 1440,80 C1760,120 1860,40 2160,80 C2460,120 2560,40 2880,80 L2880,120 L0,120 Z" fill="#F5F5F5" />
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
