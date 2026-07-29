import { ArrowRight } from "lucide-react";
import data from "../data/tentang-sekolah.json";

function TentangSekolah() {
  return (
    <section className="profile-section profile-section--pearl">
      <div className="profile-section-inner">
        <div className="tentang-grid">
          <div className="tentang-content reveal">
            <h2 className="profile-section-title">{data.heading}</h2>
            <span className="profile-section-accent" />

            <p className="font-body tentang-text">
              {data.description}
            </p>

            <div className="tentang-divider" />

            <div className="tentang-stats">
              {data.stats.map((stat) => (
                <div key={stat.label} className="tentang-stat">
                  <p className="font-heading tentang-stat-value">
                    {stat.value}
                  </p>
                  <p className="font-body tentang-stat-label">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={data.ctaLink}
              className="font-poppins tentang-cta"
            >
              {data.ctaText}
              <ArrowRight className="tentang-cta-icon" />
            </a>
          </div>

          <div className="flex-1 reveal reveal-delay-2">
            <div className="tentang-visi-panel">
              <h3 className="font-heading tentang-visi-title">
                {data.visiMisi.heading}
              </h3>

              <div className="tentang-visi-body">
                <div>
                  <h4 className="font-body tentang-visi-label">
                    Visi
                  </h4>
                  <p className="font-body tentang-visi-text">
                    {data.visiMisi.visi}
                  </p>
                </div>

                <div className="tentang-divider" />

                <div>
                  <h4 className="font-body tentang-visi-label">
                    Misi
                  </h4>
                  <ul className="font-body tentang-misi-list">
                    {data.visiMisi.misi.map((item) => (
                      <li key={item.slice(0, 20)} className="tentang-misi-item">
                        <span className="tentang-misi-bullet" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TentangSekolah;
