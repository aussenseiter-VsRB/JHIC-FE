import { useState, useEffect } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import SkeletonLoad from "../../components/skeleton/skeletonLoad";
import "./css/berita.css";

const beritaData = [
  {
    id: 1,
    title: "SMK Yadika Soreang Raih Juara Lomba Kompetensi Siswa",
    date: "15 Juli 2026",
    category: "Prestasi",
    excerpt: "Siswa SMK Yadika Soreang berhasil meraih juara dalam lomba kompetensi siswa tingkat provinsi.",
    image: "/images/berita-1.jpg",
  },
  {
    id: 2,
    title: "Kerja Sama Industri dengan Perusahaan Teknologi Terkemuka",
    date: "10 Juli 2026",
    category: "Kerja Sama",
    excerpt: "SMK Yadika Soreang menjalin kerja sama dengan perusahaan teknologi untuk program magang siswa.",
    image: "/images/berita-2.jpg",
  },
  {
    id: 3,
    title: "Kunjungan Industri ke Bandung Techno Park",
    date: "5 Juli 2026",
    category: "Kegiatan",
    excerpt: "Siswa PPLG melakukan kunjungan industri untuk mempelajari teknologi terkini.",
    image: "/images/berita-3.jpg",
  },
  {
    id: 4,
    title: "Penerimaan Peserta Didik Baru 2026/2027 Dibuka",
    date: "1 Juli 2026",
    category: "PPDB",
    excerpt: "Pendaftaran PPDB SMK Yadika Soreang tahun ajaran 2026/2027 telah resmi dibuka.",
    image: "/images/berita-4.jpg",
  },
  {
    id: 5,
    title: "Workshop Digital Marketing untuk Siswa AKL",
    date: "28 Juni 2026",
    category: "Kegiatan",
    excerpt: "Siswa Akuntansi mendapatkan pelatihan digital marketing dari praktisi industri.",
    image: "/images/berita-5.jpg",
  },
  {
    id: 6,
    title: "Prestasi Siswa Perhotelan di Kompetisi Nasional",
    date: "20 Juni 2026",
    category: "Prestasi",
    excerpt: "Siswa program Perhotelan meraih medali emas dalam kompetisi tata boga nasional.",
    image: "/images/berita-6.jpg",
  },
];

const categoryColors: Record<string, string> = {
  Prestasi: "#2563EB",
  "Kerja Sama": "#0EA5E9",
  Kegiatan: "#1E3A5F",
  PPDB: "#6366F1",
};

function Berita() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [loading]);

  if (loading) {
    return <SkeletonLoad />;
  }

  return (
    <div className="berita">
      <div className="berita-header-section">
        <div className="berita-header-content">
          <span className="berita-badge">Berita Terkini</span>
          <h1 className="berita-title">Informasi & Pengumuman</h1>
          <p className="berita-subtitle">
            Ikuti perkembangan terbaru dari SMK Yadika Soreang
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
          <svg className="wave-scroll" viewBox="0 0 2880 120" fill="none" preserveAspectRatio="none" style={{ width: '200%', height: '80px' }}>
            <path d="M0,80 C320,120 420,40 720,80 C1020,120 1120,40 1440,80 C1760,120 1860,40 2160,80 C2460,120 2560,40 2880,80 L2880,120 L0,120 Z" fill="#F5F5F5" />
          </svg>
        </div>
      </div>

      <div className="berita-container">
        <div className="berita-grid">
          {beritaData.map((berita, i) => (
            <article key={berita.id} className={`berita-card reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="berita-card-image">
                <div className="berita-card-placeholder">
                  <span className="berita-card-placeholder-text">{berita.category}</span>
                </div>
                <span
                  className="berita-card-category"
                  style={{ background: categoryColors[berita.category] ?? "#2563EB" }}
                >
                  {berita.category}
                </span>
              </div>
              <div className="berita-card-content">
                <div className="berita-card-date">
                  <Calendar className="h-4 w-4" />
                  <span>{berita.date}</span>
                </div>
                <h3 className="berita-card-title">{berita.title}</h3>
                <p className="berita-card-excerpt">{berita.excerpt}</p>
                <span className="berita-card-link">
                  Baca Selengkapnya <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Berita;
