import { Link, useParams } from "react-router-dom";
import { ArrowLeft, BookOpen, Briefcase } from "lucide-react";
import { getJurusanBySlug } from "../data";
import "../css/jurusan.css";

const programAccents: Record<string, { accent: string; bg: string }> = {
  PPLG: { accent: "#0EA5E9", bg: "#E0F2FE" },
  AKL: { accent: "#2563EB", bg: "#DBEAFE" },
  HOTEL: { accent: "#1E3A5F", bg: "#E8EDF4" },
};

function PageJurusanDetail() {
  const { slug } = useParams<{ slug: string }>();
  const jurusan = getJurusanBySlug(slug ?? "");
  const colors = jurusan ? programAccents[jurusan.code] ?? { accent: "#2563EB", bg: "#DBEAFE" } : null;

  if (!jurusan || !colors) {
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

  return (
    <div
      className="jurusan-specific"
      style={{ "--card-accent": colors.accent, "--card-accent-bg": colors.bg } as React.CSSProperties}
    >
      <div className="jurusan-specific-header">
        <Link to="/jurusan" className="jurusan-back">
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Program Keahlian
        </Link>
        <span className="jurusan-specific-code">{jurusan.code}</span>
        <h1 className="jurusan-specific-title">{jurusan.name}</h1>
        <p className="jurusan-specific-desc">{jurusan.detailDescription}</p>
      </div>

      <div className="jurusan-specific-content">
        <div className="jurusan-content-header">
          <BookOpen className="h-5 w-5" style={{ color: colors.accent }} />
          <h2>Yang Dipelajari</h2>
        </div>
        <ul>
          {jurusan.subjects.map((subject, i) => (
            <li key={i}>{subject}</li>
          ))}
        </ul>
      </div>

      <div className="jurusan-specific-content">
        <div className="jurusan-content-header">
          <Briefcase className="h-5 w-5" style={{ color: colors.accent }} />
          <h2>Peluang Karir</h2>
        </div>
        <p>{jurusan.career}</p>
      </div>
    </div>
  );
}

export default PageJurusanDetail;
