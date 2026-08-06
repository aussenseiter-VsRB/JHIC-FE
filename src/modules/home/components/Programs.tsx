import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { jurusanData } from "../../jurusan/data";
import placeholder from "../../../assets/placeholder.svg";
import pplgCardHome from "../../../assets/homepages-assets/pplg-card-home.png";
import htlCardHome from "../../../assets/homepages-assets/htl-card-home.png";
import aklCardHome from "../../../assets/homepages-assets/akl-card-home.png";
import HomeDecor from "./HomeDecor";

const cardPhotoMap: Record<string, string> = {
  PPLG: pplgCardHome,
  HOTEL: htlCardHome,
  AKL: aklCardHome,
};

const programShapeTints: Record<string, { fill: string; line: string }> = {
  PPLG: { fill: "rgba(147, 197, 253, 0.55)", line: "rgba(147, 197, 253, 0.4)" },
  HOTEL: { fill: "rgba(228, 228, 231, 0.55)", line: "rgba(228, 228, 231, 0.4)" },
  AKL: { fill: "rgba(252, 165, 165, 0.55)", line: "rgba(252, 165, 165, 0.4)" },
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
          {jurusanData.map((prog, i) => {
            const tints = programShapeTints[prog.code] ?? { fill: "rgba(255,255,255,0.5)", line: "rgba(255,255,255,0.35)" };
            return (
              <a
                key={prog.code}
                href={`/jurusan/${prog.slug}`}
                className={`reveal reveal-delay-${i + 1} home-programs-card home-programs-card--${prog.code.toLowerCase()}`}
                style={
                  {
                    "--prog-from": prog.theme.gradientFrom,
                    "--prog-to": prog.theme.gradientTo,
                    "--prog-accent": prog.theme.accent,
                    "--prog-shape-fill": tints.fill,
                    "--prog-shape-line": tints.line,
                  } as CSSProperties
                }
              >
                <div className="home-programs-card-visual">
                  <span className="home-programs-shape home-programs-shape--ring" aria-hidden="true" />
                  <span className="home-programs-shape home-programs-shape--square" aria-hidden="true" />
                  <span className="home-programs-shape home-programs-shape--triangle" aria-hidden="true" />
                  <span className="home-programs-shape home-programs-shape--plus" aria-hidden="true" />
                  <span className="home-programs-shape home-programs-shape--dot home-programs-shape--dot-2" aria-hidden="true" />
                  <span className="home-programs-shape home-programs-shape--dot home-programs-shape--dot-3" aria-hidden="true" />
                  <img
                    src={cardPhotoMap[prog.code]}
                    alt={`Foto ${prog.name}`}
                    className="home-programs-card-photo"
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.src = placeholder;
                    }}
                  />
                  <span className="home-programs-card-code">{prog.code}</span>
                </div>
                <div className="home-programs-card-body">
                  <h3 className="home-programs-card-title">
                    {prog.name}
                  </h3>
                  <p className="home-programs-card-desc">
                    {prog.description}
                  </p>
                  <span className="home-programs-card-link">
                    Selengkapnya <ArrowRight className="home-programs-card-link-icon" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Programs;
