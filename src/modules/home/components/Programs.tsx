import { ArrowRight } from "lucide-react";
import data from "./data/programs.json";

const programAccents: Record<string, { accent: string; bg: string }> = {
  PPLG: { accent: "#0D9488", bg: "#CCFBF1" },
  AKL: { accent: "#F59E0B", bg: "#FEF3C7" },
  HTL: { accent: "#6366F1", bg: "#E0E7FF" },
};

function Programs() {
  return (
    <section className="programs-section">
      <div className="section-container">
        <h2 className="section-title">{data.heading}</h2>
        <p className="section-subtitle">
          Pilih jurusan yang sesuai dengan minat dan bakatmu
        </p>
        <div className="programs-grid">
          {data.items.map((prog) => {
            const colors = programAccents[prog.code] ?? { accent: "#F59E0B", bg: "#FEF3C7" };
            return (
              <a
                key={prog.code}
                href={`/jurusan/${prog.code.toLowerCase()}`}
                className="program-card"
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
                  Selengkapnya <ArrowRight className="h-4 w-4" />
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
