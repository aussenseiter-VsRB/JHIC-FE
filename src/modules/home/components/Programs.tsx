import { ArrowRight } from "lucide-react";
import data from "./data/programs.json";
import iconPplg from "../../../assets/icon-pplg.svg";
import iconAkl from "../../../assets/icon-akl.svg";
import iconHotel from "../../../assets/icon-hotel.svg";

const programIcons: Record<string, string> = {
  PPLG: iconPplg,
  AKL: iconAkl,
  HOTEL: iconHotel,
};

const programDescs: Record<string, string> = {
  PPLG: "Pengembangan perangkat lunak, website, mobile apps, dan gim.",
  AKL: "Pembukuan, laporan keuangan, perpajakan, dan administrasi.",
  HOTEL: "Tata graha, tata boga, front office, dan layanan profesional.",
};

function Programs() {
  return (
    <section className="programs-section">
      <div className="section-container">
        <div className="reveal">
          <h2 className="section-title">{data.heading}</h2>
          <p className="section-subtitle">
            Pilih jurusan yang sesuai dengan minat dan bakatmu
          </p>
        </div>
        <div className="programs-grid">
          {data.items.map((prog, i) => (
            <a
              key={prog.code}
              href={`/jurusan/${prog.code.toLowerCase()}`}
              className={`program-card reveal reveal-delay-${i + 1}`}
            >
              <img
                src={programIcons[prog.code]}
                alt={`Logo ${prog.name}`}
                className="program-icon"
              />
              <h3 className="program-name">{prog.name}</h3>
              <p className="program-desc">{programDescs[prog.code]}</p>
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
