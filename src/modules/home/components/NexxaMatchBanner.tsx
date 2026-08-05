import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import nexxaCardImg from "../../../assets/homepages-assets/nexxa-card-img.png";
import placeholder from "../../../assets/placeholder.svg";

function NexxaMatchBanner() {
  return (
    <section className="home-nexxa">
      <div className="home-nexxa-container">
        <div className="home-nexxa-card">
          <span className="home-nexxa-card-bg" aria-hidden="true" />
          <span className="home-nexxa-dots" aria-hidden="true" />
          <div className="home-nexxa-card-layout">
            <div className="home-nexxa-card-body">
          
              <h2 className="font-heading home-nexxa-title">
                Bingung Pilih Jurusan? Coba Nexxa Match
              </h2>
              <p className="home-nexxa-desc">
                Temukan jurusan yang paling cocok dengan minat dan
                kemampuanmu lewat Nexxa Match.
              </p>
              <Link to="/nexxa-match" className="home-nexxa-cta">
                Coba Nexxa Match <ArrowRight className="home-nexxa-cta-icon" />
              </Link>
            </div>
            <div className="home-nexxa-nested">
              <div
                className="home-nexxa-nested-frame"
                role="img"
                aria-label="Contoh hasil rekomendasi Nexxa Match"
              >
                <img
                  className="home-nexxa-nested-img"
                  src={nexxaCardImg}
                  alt="Contoh hasil rekomendasi Nexxa Match"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.src = placeholder;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NexxaMatchBanner;