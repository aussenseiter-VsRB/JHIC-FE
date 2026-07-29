import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft, BookOpen, Briefcase, Award, GraduationCap, CheckCircle, ArrowRight,
  Code, BarChart3, Hotel,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Breadcrumb from "../../../components/breadcrumb/breadcrumb";
import { getJurusanBySlug } from "../data";
import "../css/jurusan.css";

const jurusanIcon: Record<string, LucideIcon> = {
  PPLG: Code,
  AKL: BarChart3,
  HOTEL: Hotel,
};

function PageJurusanDetail() {
  const { slug } = useParams<{ slug: string }>();
  const jurusan = getJurusanBySlug(slug ?? "");

  if (!jurusan) {
    return (
      <div className="jurusan-specific">
        <div className="jurusan-specific-header">
          <Link to="/jurusan" className="jurusan-back">
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Program Keahlian
          </Link>
          <h1 className="jurusan-specific-title">Jurusan tidak ditemukan</h1>
          <p className="jurusan-specific-desc">
            Halaman yang Anda cari tidak tersedia.
          </p>
        </div>
      </div>
    );
  }

  const Icon = jurusanIcon[jurusan.code];

  return (
    <div
      className="jurusan-specific"
      style={{ "--card-accent": jurusan.theme.accent, "--card-accent-bg": jurusan.theme.accentBg } as React.CSSProperties}
    >
      <div className="jurusan-specific-hero" style={{ background: `linear-gradient(135deg, ${jurusan.theme.gradientFrom}, ${jurusan.theme.gradientTo})` }}>
        <div className="jurusan-specific-hero-orb jurusan-specific-hero-orb--1" />
        <div className="jurusan-specific-hero-orb jurusan-specific-hero-orb--2" />
        <div className="jurusan-specific-hero-pattern" />

        <div className="jurusan-specific-hero-inner">
          <div className="jurusan-specific-hero-content reveal">
            <Link to="/jurusan" className="jurusan-back">
              <ArrowLeft className="h-4 w-4" />
              <span>Kembali ke Program Keahlian</span>
            </Link>
            <Breadcrumb
              items={[
                { label: "Program" },
                { label: "Jurusan", to: "/jurusan" },
                { label: jurusan.name },
              ]}
            />
            <div className="jurusan-specific-hero-badge" style={{ background: `${jurusan.theme.accent}20`, color: jurusan.theme.accent }}>
              <GraduationCap className="h-3.5 w-3.5" />
              Program Keahlian
            </div>
            <h1 className="jurusan-specific-hero-title">{jurusan.code}: {jurusan.name}</h1>
            <p className="jurusan-specific-hero-desc">{jurusan.detailDescription}</p>

            <div className="jurusan-specific-hero-stats">
              {jurusan.stats.map((stat, i) => (
                <div key={i} className="jurusan-specific-hero-stat">
                  <span className="jurusan-specific-hero-stat-number">{stat.number}</span>
                  <span className="jurusan-specific-hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="jurusan-specific-hero-visual reveal reveal-delay-2">
            <div className="jurusan-specific-hero-icon-wrap">
              {Icon && <Icon size={64} />}
            </div>
          </div>
        </div>

        <div className="wave-scroll-container">
          <svg className="wave-scroll" viewBox="0 0 2880 120" fill="none" preserveAspectRatio="none" style={{ width: '200%', height: '96px' }}>
            <path d="M0,60 C360,110 450,20 720,60 C990,100 1080,30 1440,60 C1800,90 1890,20 2160,60 C2430,100 2520,30 2880,60 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.3" />
            <path d="M0,75 C300,40 500,100 720,75 C940,50 1140,110 1440,75 C1740,40 1940,100 2160,75 C2380,50 2580,110 2880,75 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.6" />
            <path d="M0,90 C320,120 420,50 720,90 C1020,130 1120,60 1440,90 C1760,120 1860,50 2160,90 C2460,130 2560,60 2880,90 L2880,120 L0,120 Z" fill="#F5F5F5" />
          </svg>
        </div>
      </div>

      <div className="jurusan-specific-body">
        <div className="jurusan-specific-body-inner">
          <div className="jurusan-specific-about reveal">
            <h2 className="jurusan-specific-section-title">Tentang {jurusan.code}</h2>
            <span className="jurusan-specific-section-accent" />
            <p className="jurusan-specific-about-text">{jurusan.about}</p>
          </div>

          <div className="jurusan-specific-grid-2col">
            <div className="jurusan-specific-content-card reveal">
              <div className="jurusan-specific-content-header">
                <BookOpen className="h-5 w-5" style={{ color: jurusan.theme.accent }} />
                <h2>Yang Dipelajari</h2>
              </div>
              <ul className="jurusan-specific-list">
                {jurusan.subjects.map((subject, i) => (
                  <li key={i}>
                    <CheckCircle className="h-4 w-4" style={{ color: jurusan.theme.accent }} />
                    {subject}
                  </li>
                ))}
              </ul>
            </div>

            <div className="jurusan-specific-content-card reveal reveal-delay-2">
              <div className="jurusan-specific-content-header">
                <Award className="h-5 w-5" style={{ color: jurusan.theme.accent }} />
                <h2>Sertifikasi</h2>
              </div>
              <ul className="jurusan-specific-list">
                {jurusan.certifications.map((cert, i) => (
                  <li key={i}>
                    <CheckCircle className="h-4 w-4" style={{ color: jurusan.theme.accent }} />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="jurusan-specific-career-section reveal">
            <h2 className="jurusan-specific-section-title">Peluang Karir</h2>
            <span className="jurusan-specific-section-accent" />
            <p className="jurusan-specific-career-desc">{jurusan.career}</p>
            <div className="jurusan-specific-career-grid">
              {jurusan.careerPaths.map((path, i) => (
                <div key={i} className={`jurusan-specific-career-card reveal reveal-delay-${(i % 3) + 1}`}>
                  <div className="jurusan-specific-career-card-icon" style={{ background: `${jurusan.theme.accent}15`, color: jurusan.theme.accent }}>
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <h3 className="jurusan-specific-career-card-title">{path.title}</h3>
                  <p className="jurusan-specific-career-card-desc">{path.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="jurusan-specific-teacher-section reveal">
            <h2 className="jurusan-specific-section-title">Guru Pengajar</h2>
            <span className="jurusan-specific-section-accent" />
            <div className="jurusan-specific-teacher-grid">
              {jurusan.teachers.map((teacher, i) => (
                <div key={i} className="jurusan-specific-teacher-card">
                  <div className="jurusan-specific-teacher-avatar" style={{ background: `${jurusan.theme.accent}15`, color: jurusan.theme.accent }}>
                    {teacher.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="jurusan-specific-teacher-name">{teacher.name}</h3>
                    <p className="jurusan-specific-teacher-subject">{teacher.subject}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="jurusan-specific-cta reveal">
            <p className="jurusan-specific-cta-text">
              Tertarik bergabung? Daftar sekarang dan menjadi bagian dari program keahlian {jurusan.code} di SMK Yadika Soreang.
            </p>
            <Link to="/ppdb" className="jurusan-specific-cta-btn">
              Daftar PPDB
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageJurusanDetail;
