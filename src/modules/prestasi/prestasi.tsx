import { useState } from "react";
import { Search, Trophy, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import "./css/prestasi.css";
import data from "./prestasi.json";

interface Achievement {
  id: string;
  title: string;
  student: string;
  class: string;
  category: string;
  level: string;
  year: string;
  award: string;
  description: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w.charAt(0))
    .join("")
    .toUpperCase();
}

function Prestasi() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const filteredAchievements = data.achievements.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.student.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.award.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory =
      selectedCategory === "Semua" || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="prestasi">
      {/* Header Section */}
      <div className="prestasi-header-section">
        <div className="prestasi-header-content">
          <h1 className="prestasi-title">Galeri Prestasi Siswa</h1>
          <p className="prestasi-subtitle">
            Apresiasi atas dedikasi, kerja keras, dan prestasi membanggakan yang diraih oleh siswa-siswi SMK Yadika Soreang.
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="prestasi-stats-grid">
        {data.stats.map((stat, i) => (
          <div key={i} className="prestasi-stat-card">
            <span className="prestasi-stat-number">{stat.value}</span>
            <span className="prestasi-stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Controls Section (Search & Filter) */}
      <div className="prestasi-container">
        <div className="prestasi-controls">
          <div className="prestasi-search-wrapper">
            <Search className="prestasi-search-icon" size={18} />
            <input
              type="text"
              placeholder="Cari prestasi, nama siswa..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="prestasi-search-input"
            />
          </div>

          <div className="prestasi-tabs">
            {data.categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`prestasi-tab-btn ${selectedCategory === cat ? "prestasi-tab-btn--active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Items */}
        {filteredAchievements.length > 0 ? (
          <div className="prestasi-grid">
            {filteredAchievements.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedAchievement(item)}
                className="prestasi-card"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedAchievement(item);
                  }
                }}
              >
                <div className="prestasi-card-banner">
                  <span className="prestasi-badge-level">{item.level}</span>
                  <span className="prestasi-badge-award">{item.award}</span>
                </div>
                <div className="prestasi-card-body">
                  <h3 className="prestasi-card-title">{item.title}</h3>
                  <div className="prestasi-card-meta">
                    <span className="prestasi-card-student">{item.student}</span>
                    <span className="prestasi-card-class">{item.class} • {item.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="prestasi-empty">
            <Trophy size={40} className="mx-auto mb-3 text-slate" />
            <h4 className="prestasi-empty-title">Tidak ada prestasi ditemukan</h4>
            <p className="m-0 text-sm">Coba gunakan kata kunci pencarian atau kategori filter lainnya.</p>
          </div>
        )}
      </div>

      {/* Modal Popup (AnimatePresence for smooth open/close) */}
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            className="prestasi-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAchievement(null)}
          >
            <motion.div
              className="prestasi-modal-card"
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedAchievement(null)}
                className="prestasi-modal-close-btn"
                aria-label="Tutup Detail"
              >
                <X size={18} />
              </button>

              <div className="prestasi-modal-header">
                <div className="prestasi-modal-meta-row">
                  <span className="prestasi-modal-badge prestasi-modal-badge--level">
                    Tingkat {selectedAchievement.level}
                  </span>
                  <span className="prestasi-modal-badge prestasi-modal-badge--award">
                    {selectedAchievement.award}
                  </span>
                </div>
                <h2 className="prestasi-modal-title">{selectedAchievement.title}</h2>
              </div>

              <div className="prestasi-modal-body">
                <div className="prestasi-modal-section-title">Peraih Penghargaan</div>
                <div className="prestasi-modal-student-info">
                  <div className="prestasi-modal-student-avatar">
                    <span>{getInitials(selectedAchievement.student)}</span>
                  </div>
                  <div>
                    <span className="prestasi-modal-student-name">
                      {selectedAchievement.student}
                    </span>
                    <span className="prestasi-modal-student-class">
                      {selectedAchievement.class} • Angkatan/Tahun {selectedAchievement.year}
                    </span>
                  </div>
                </div>

                <div className="prestasi-modal-section-title">Detail Pencapaian</div>
                <p className="prestasi-modal-desc">{selectedAchievement.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Prestasi;
