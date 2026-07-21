import { Link, useParams } from "react-router-dom";
import { getJurusanBySlug } from "../data";
import "../css/jurusan.css";

function PageJurusanDetail() {
  const { slug } = useParams<{ slug: string }>();
  const jurusan = getJurusanBySlug(slug ?? "");

  if (!jurusan) {
    return (
      <div className="jurusan-specific">
        <div className="jurusan-specific-header">
          <Link to="/jurusan" className="jurusan-back">
            &larr; Kembali ke Program Keahlian
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
    <div className="jurusan-specific">
      <div className="jurusan-specific-header">
        <Link to="/jurusan" className="jurusan-back">
          &larr; Kembali ke Program Keahlian
        </Link>
        <span className="jurusan-specific-code">{jurusan.code}</span>
        <h1 className="jurusan-specific-title">{jurusan.name}</h1>
        <p className="jurusan-specific-desc">{jurusan.detailDescription}</p>
      </div>

      <div className="jurusan-specific-content">
        <h2>Yang Dipelajari</h2>
        <ul>
          {jurusan.subjects.map((subject, i) => (
            <li key={i}>{subject}</li>
          ))}
        </ul>
      </div>

      <div className="jurusan-specific-content">
        <h2>Peluang Karir</h2>
        <p>{jurusan.career}</p>
      </div>
    </div>
  );
}

export default PageJurusanDetail;
