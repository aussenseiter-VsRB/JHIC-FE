import JurusanCard from "../components/JurusanCard";
import JurusanHeroSlider from "../components/JurusanHeroSlider";
import { jurusanData } from "../data";
import "../css/jurusan.css";

function PageJurusan() {
  return (
    <div className="jurusan-page">
      <JurusanHeroSlider />
      <div className="jurusan-container">
        <div className="jurusan-grid">
          {jurusanData.map((jurusan, index) => (
            <JurusanCard
              key={jurusan.slug}
              name={jurusan.name}
              code={jurusan.code}
              slug={jurusan.slug}
              description={jurusan.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PageJurusan;
