import { Wifi, Monitor, BookOpen, Utensils, Building, Dumbbell } from "lucide-react";
import "./css/fasilitas.css";

const fasilitasData = [
  {
    id: 1,
    name: "Lab Komputer",
    description: "Laboratorium komputer dengan perangkat terkini untuk praktikum pemrograman dan desain.",
    icon: Monitor,
    color: "#0D9488",
  },
  {
    id: 2,
    name: "Perpustakaan",
    description: "Perpustakaan lengkap dengan koleksi buku referensi dan akses digital.",
    icon: BookOpen,
    color: "#F59E0B",
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
      </div>

      <div className="fasilitas-container">
        <div className="fasilitas-grid">
          {fasilitasData.map((fasilitas) => {
            const Icon = fasilitas.icon;
            return (
              <div key={fasilitas.id} className="fasilitas-card">
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
