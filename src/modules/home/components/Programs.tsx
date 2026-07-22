import { ArrowRight } from "lucide-react";
import data from "./data/programs.json";

const programAccents: Record<string, { accent: string; bg: string }> = {
  PPLG: { accent: "#0EA5E9", bg: "#E0F2FE" },
  AKL: { accent: "#2563EB", bg: "#DBEAFE" },
  HTL: { accent: "#1E3A5F", bg: "#E8EDF4" },
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
          {data.items.map((prog, i) => {
            const colors = programAccents[prog.code] ?? { accent: "#2563EB", bg: "#DBEAFE" };
            return (
              <a
                key={prog.code}
                href={`/jurusan/${prog.code.toLowerCase()}`}
                className={`program-card reveal reveal-delay-${i + 1}`}
                style={{ "--card-accent": colors.accent, "--card-accent-bg": colors.bg } as React.CSSProperties}
              >
                <span className="program-code">{prog.code}</span>
                <h3 className="program-name">{prog.name}</h3>
                <p className="program-desc">
                  {prog.code === "PPLG" && "Pengembangan perangkat lunak, website, mobile apps, dan gim."}
                  {prog.code === "AKL" && "Pembukuan, laporan keuangan, perpajakan, dan administrasi."}
                  {prog.code === "HTL" && "Tata graha, tata boga, front office, dan layanan profesional."}
                </p>
                <span className="program-link">
                  Selengkapnya <ArrowRight className="program-link-arrow h-4 w-4" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Programs;
