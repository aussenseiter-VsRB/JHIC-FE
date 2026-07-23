import { ArrowRight } from "lucide-react";
import { jurusanData } from "../../jurusan/data";
import iconPplg from "../../../assets/icon-pplg.svg";
import iconAkl from "../../../assets/icon-akl.svg";
import iconHotel from "../../../assets/icon-hotel.svg";

const programIcons: Record<string, string> = {
  PPLG: iconPplg,
  AKL: iconAkl,
  HOTEL: iconHotel,
};

function Programs() {
  return (
    <section className="programs-section">
      <div className="section-container">
        <div className="reveal">
          <h2 className="section-title">Program Keahlian</h2>
          <p className="section-subtitle">
            Pilih jurusan yang sesuai dengan minat dan bakatmu
          </p>
        </div>
        <div className="programs-grid">
          {jurusanData.map((prog, i) => (
            <a
              key={prog.code}
              href={`/jurusan/${prog.slug}`}
              className={`program-card reveal reveal-delay-${i + 1}`}
            >
              <img
                src={programIcons[prog.code]}
                alt={`Logo ${prog.name}`}
                className="program-icon"
              />
              <h3 className="program-name">{prog.name}</h3>
              <p className="program-desc">{prog.description}</p>
              <span className="program-link">
                Selengkapnya <ArrowRight className="program-link-arrow h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;
