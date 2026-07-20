import JurusanCard from "../components/JurusanCard";
import { jurusanData } from "../data";
import "../css/jurusan.css";

function PageJurusan() {
  return (
    <div className="jurusan-page">
      <div className="jurusan-container">
        <div className="jurusan-header">
          <h1 className="jurusan-title">Program Keahlian</h1>
          <p className="jurusan-subtitle">
            Pilih jurusan yang sesuai dengan minat dan bakatmu
          </p>
        </div>
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
