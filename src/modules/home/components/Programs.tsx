import { ArrowRight } from "lucide-react";
import { jurusanData } from "../../jurusan/data";
import iconPplg from "../../../assets/icon-pplg.svg";
import iconAkl from "../../../assets/icon-akl.svg";
import iconHotel from "../../../assets/icon-hotel.svg";
import HomeDecor from "./HomeDecor";

const programIcons: Record<string, string> = {
  PPLG: iconPplg,
  AKL: iconAkl,
  HOTEL: iconHotel,
};

function Programs() {
  return (
    <section className="home-programs">
      <HomeDecor />
      <div className="home-programs-container">
        <div className="reveal">
          <h2 className="font-heading home-programs-title">
            Program Keahlian
          </h2>
          <p className="home-programs-subtitle">
            Pilih jurusan yang sesuai dengan minat dan bakatmu
          </p>
        </div>
        <div className="home-programs-grid">
          {jurusanData.map((prog, i) => (
            <a
              key={prog.code}
              href={`/jurusan/${prog.slug}`}
              className={`reveal reveal-delay-${i + 1} home-programs-card`}
            >
              <span className="home-programs-card-accent" />
              <img
                src={programIcons[prog.code]}
                alt={`Logo ${prog.name}`}
                className="home-programs-card-icon"
              />
              <h3 className="home-programs-card-title">
                {prog.name}
              </h3>
              <p className="home-programs-card-desc">
                {prog.description}
              </p>
              <span className="home-programs-card-link">
                Selengkapnya <ArrowRight className="home-programs-card-link-icon" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;
