import { Calendar, ArrowRight } from "lucide-react";
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
      </div>

      <div className="berita-container">
        <div className="berita-grid">
          {beritaData.map((berita) => (
            <article key={berita.id} className="berita-card">
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
