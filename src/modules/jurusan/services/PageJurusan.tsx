import JurusanCard from "../components/JurusanCard";
import { jurusanData } from "../data";
import "../css/jurusan.css";

function PageJurusan() {
  return (
    <div className="jurusan-page">
      <div className="jurusan-header-section">
        <div className="jurusan-header-content">
          <span className="jurusan-badge">Program Keahlian</span>
          <h1 className="jurusan-title">Pilih Jurusanmu</h1>
          <p className="jurusan-subtitle">
            Pilih jurusan yang sesuai dengan minat dan bakatmu untuk masa depan yang lebih baik
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
          <svg className="wave-scroll" viewBox="0 0 2880 120" fill="none" preserveAspectRatio="none" style={{ width: '200%', height: '80px' }}>
            <path d="M0,80 C320,120 420,40 720,80 C1020,120 1120,40 1440,80 C1760,120 1860,40 2160,80 C2460,120 2560,40 2880,80 L2880,120 L0,120 Z" fill="#F5F5F5" />
          </svg>
        </div>
      </div>
      <div className="jurusan-container">
        <div className="jurusan-grid">
          {jurusanData.map((jurusan) => (
            <JurusanCard
              key={jurusan.slug}
              name={jurusan.name}
              code={jurusan.code}
              slug={jurusan.slug}
              description={jurusan.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PageJurusan;
