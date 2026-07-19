import { Link } from "react-router-dom";
import "../../jurusan/css/jurusan.css";

function PagePplg() {
  return (
    <div className="jurusan-specific">
      <div className="jurusan-specific-header">
        <Link to="/jurusan" className="jurusan-back">
          &larr; Kembali ke Program Keahlian
        </Link>
        <span className="jurusan-specific-code">PPLG</span>
        <h1 className="jurusan-specific-title">
          Pemrograman Perangkat Lunak dan Gim
        </h1>
        <p className="jurusan-specific-desc">
          Mempelajari pengembangan perangkat lunak, website, mobile apps, dan
          pembuatan gim interaktif dari nol hingga siap kerja.
        </p>
      </div>

      <div className="jurusan-specific-content">
        <h2>Yang Dipelajari</h2>
        <ul>
          <li>Pemrograman web (HTML, CSS, JavaScript, PHP)</li>
          <li>Basis data dan server-side programming</li>
          <li>Pengembangan mobile (Android / Flutter)</li>
          <li>Desain dan pengembangan gim (Unity, Godot)</li>
          <li>UI/UX Design</li>
        </ul>
      </div>

      <div className="jurusan-specific-content">
        <h2>Peluang Karir</h2>
        <p>
          Lulusan PPLG dapat bekerja sebagai Web Developer, Mobile Developer,
          Game Developer, UI/UX Designer, atau melanjutkan studi ke perguruan
          tinggi di bidang teknologi informasi.
        </p>
      </div>
    </div>
  );
}

export default PagePplg;
