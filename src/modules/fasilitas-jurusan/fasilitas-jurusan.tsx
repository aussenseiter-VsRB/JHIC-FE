import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Orbit, Cog, ArrowRight } from "lucide-react";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import "./css/fasilitas-jurusan.css";
import fasilitasJurusanData from "./fasilitas-jurusan.json";
import jurusanPplg from "../../assets/jurusan-pplg.svg";
import jurusanHtl from "../../assets/jurusan-htl.svg";
import jurusanAkl from "../../assets/jurusan-ak.svg";

interface FasilitasJurusanItem {
  id: number;
  name: string;
  description: string;
  jurusan: string;
  icon: string;
  color: string;
  photo: string;
  slug: string;
  panorama: string;
}

interface JurusanMeta {
  code: string;
  slug: string;
  name: string;
  description: string;
  color: string;
  image: string;
}

const jurusanMeta: JurusanMeta[] = [
  {
    code: "PPLG",
    slug: "pplg",
    name: "Pengembangan Perangkat Lunak dan Gim",
    description: "Fasilitas untuk mendukung pengembangan aplikasi, website, dan gim.",
    color: "#1E3A5F",
    image: jurusanPplg,
  },
  {
    code: "HOTEL",
    slug: "hotel",
    name: "Perhotelan dan Jasa Pariwisata",
    description: "Fasilitas praktik standar industri untuk layanan perhotelan dan pariwisata.",
    color: "#8B5CF6",
    image: jurusanHtl,
  },
  {
    code: "AKL",
    slug: "akl",
    name: "Akuntansi dan Keuangan",
    description: "Fasilitas untuk praktik pembukuan, keuangan, dan perpajakan.",
    color: "#EF4444",
    image: jurusanAkl,
  },
];

function FasilitasCard({ item, delay }: { item: FasilitasJurusanItem; delay: number }) {
  const [photoError, setPhotoError] = useState(false);
  const jurusanColor = jurusanMeta.find((j) => j.code === item.jurusan)?.color ?? item.color;
  const jurusanImage = jurusanMeta.find((j) => j.code === item.jurusan)?.image ?? jurusanMeta[0].image;

  return (
    <div className={`fasilitas-jurusan-card reveal reveal-delay-${delay}`}>
      <div className="fasilitas-jurusan-card-photo">
        <img
          src={photoError ? jurusanImage : item.photo}
          alt={`Foto ${item.name}`}
          loading="lazy"
          onError={() => setPhotoError(true)}
        />
      </div>
      <div className="fasilitas-jurusan-card-body">
        <h3 className="fasilitas-jurusan-card-name">{item.name}</h3>
        <p className="fasilitas-jurusan-card-desc">{item.description}</p>
        <Link
          to={`/panorama/${item.slug}`}
          className="fasilitas-jurusan-card-tour"
          style={{ "--tour-accent": jurusanColor } as React.CSSProperties}
        >
          <Orbit className="h-4 w-4" />
          Room Tour
        </Link>
      </div>
    </div>
  );
}

function JurusanSection({ meta }: { meta: JurusanMeta }) {
  const items = fasilitasJurusanData.filter((f) => f.jurusan === meta.code);

  if (items.length === 0) return null;

  return (
    <section className="fasilitas-jurusan-section">
      <div className="fasilitas-jurusan-section-header reveal">
        <div className="fasilitas-jurusan-section-heading">
          <h2 className="fasilitas-jurusan-section-name">{meta.name}</h2>
          <p className="fasilitas-jurusan-section-desc">{meta.description}</p>
        </div>
      </div>

      <div className="fasilitas-jurusan-grid">
        {items.map((item, i) => (
          <FasilitasCard key={item.id} item={item} delay={(i % 3) + 1} />
        ))}
      </div>
    </section>
  );
}

function FasilitasJurusan() {
  const { jurusan } = useParams<{ jurusan?: string }>();
  const specificMeta = jurusan ? jurusanMeta.find((meta) => meta.slug === jurusan) : undefined;
  const metas = specificMeta ? [specificMeta] : jurusanMeta;

  return (
    <div className="fasilitas-jurusan">
      <div className="fasilitas-jurusan-header-section">
        <div className="fasilitas-jurusan-header-inner">
          <div className="fasilitas-jurusan-header-text reveal">
            <Breadcrumb
              items={
                specificMeta
                  ? [
                      { label: "Fasilitas" },
                      { label: "Fasilitas Jurusan", to: "/fasilitas-jurusan" },
                      { label: specificMeta.code },
                    ]
                  : [
                      { label: "Fasilitas" },
                      { label: "Fasilitas Jurusan" },
                    ]
              }
            />
            <h1 className="fasilitas-jurusan-title">Fasilitas Jurusan</h1>
            <p className="fasilitas-jurusan-subtitle">
              Setiap program keahlian di SMK YADIKA SOREANG dilengkapi dengan perlengkapan dan
              fasilitas praktik yang menunjang proses belajar, mulai dari laboratorium komputer,
              ruang praktik perhotelan, hingga studio akuntansi semuanya standar industri untuk
              membekali siswa keterampilan yang siap digunakan di dunia kerja.
            </p>
            <button
              type="button"
              className="fasilitas-jurusan-explore-btn"
              onClick={() => document.getElementById("fasilitas-jurusan-konten")?.scrollIntoView({ behavior: "smooth" })}
            >
              Jelajahi Fasilitas Jurusan
              <ArrowRight className="fasilitas-jurusan-explore-icon" />
            </button>
          </div>

          <div className="fasilitas-jurusan-header-visual reveal reveal-delay-2">
            <div className="fasilitas-jurusan-photo-placeholder">
              <Cog className="fasilitas-jurusan-photo-icon" />
              <span className="fasilitas-jurusan-photo-label">Foto Fasilitas Jurusan</span>
            </div>
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

      <div id="fasilitas-jurusan-konten" className="fasilitas-jurusan-container">
        {metas.length === 0 ? (
          <p className="fasilitas-jurusan-section-desc">Fasilitas untuk jurusan ini belum tersedia.</p>
        ) : (
          metas.map((meta) => (
            <JurusanSection key={meta.code} meta={meta} />
          ))
        )}
      </div>
    </div>
  );
}

export default FasilitasJurusan;
