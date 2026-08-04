import { Link } from "react-router";
import { House, FileText, BookOpen, Building2, ArrowRight } from "lucide-react";
import "./css/not-found.css";

const quickLinks = [
  { label: "Program Keahlian", to: "/jurusan", icon: BookOpen },
  { label: "Berita Terkini", to: "/berita", icon: FileText },
  { label: "Fasilitas", to: "/fasilitas", icon: Building2 },
];

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-hero">
        <div className="not-found-orb not-found-orb--1" />
        <div className="not-found-orb not-found-orb--2" />
        <div className="not-found-dots" />

        <div className="not-found-inner">
          <p className="not-found-badge">Error 404</p>
          <h1 className="font-heading not-found-code">404</h1>
          <h2 className="font-heading not-found-title">Halaman Tidak Ditemukan</h2>
          <p className="font-body not-found-desc">
            Halaman yang Anda cari mungkin telah dipindahkan, dihapus, atau tidak
            pernah ada. Periksa kembali alamatnya atau jelajahi halaman lain di
            situs kami.
          </p>

          <div className="not-found-actions">
            <Link to="/" className="not-found-btn not-found-btn--primary">
              <House className="not-found-btn-icon" />
              Kembali ke Beranda
            </Link>
            <Link to="/ppdb" className="not-found-btn not-found-btn--ghost">
              <FileText className="not-found-btn-icon" />
              Info PPDB
            </Link>
          </div>
        </div>

        <div className="wave-scroll-container">
          <svg className="wave-scroll" viewBox="0 0 2880 120" fill="none" preserveAspectRatio="none">
            <path d="M0,60 C360,110 450,20 720,60 C990,100 1080,30 1440,60 C1800,110 1890,20 2160,60 C2430,100 2520,30 2880,60 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.3" />
            <path d="M0,75 C300,40 500,100 720,75 C940,50 1140,110 1440,75 C1740,40 1940,100 2160,75 C2380,50 2580,110 2880,75 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.6" />
            <path d="M0,90 C320,120 420,50 720,90 C1020,130 1120,60 1440,90 C1760,120 1860,50 2160,90 C2460,130 2560,60 2880,90 L2880,120 L0,120 Z" fill="#F5F5F5" />
          </svg>
        </div>
      </div>

      <div className="not-found-links">
        <div className="not-found-links-inner">
          <h2 className="font-heading not-found-links-title">
            Halaman Lain yang Mungkin Anda Cari
          </h2>
          <div className="not-found-links-grid">
            {quickLinks.map((link) => (
              <Link key={link.to} to={link.to} className="not-found-link-card">
                <link.icon className="not-found-link-icon" />
                <span className="font-body not-found-link-label">{link.label}</span>
                <ArrowRight className="not-found-link-arrow" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

