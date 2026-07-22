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
