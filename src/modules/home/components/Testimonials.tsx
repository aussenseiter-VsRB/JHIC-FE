import { Briefcase, Quote } from "lucide-react";
import data from "../data/testimonials.json";
import HomeDecor from "./HomeDecor";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w.charAt(0))
    .join("")
    .toUpperCase();
}

function Testimonials() {
  return (
    <section className="home-testi">
      <HomeDecor />
      <div className="home-testi-container">
        <div className="reveal home-testi-header">
          <h2 className="font-heading home-testi-title">
            Kata Mereka
          </h2>
          <p className="home-testi-subtitle">
            Dengarkan pengalaman langsung dari siswa dan alumni SMK Yadika Soreang
          </p>
          <span className="home-testi-accent" />
        </div>
        <div className="home-testi-grid">
          {data.map((item, i) => {
            const delay = (i % 3) + 1;
            return (
              <div
                key={i}
                className={`reveal reveal-delay-${delay} home-testi-card`}
              >
                <div className="home-testi-card-header">
                  <div className="home-testi-card-avatar">
                    <span className="font-heading home-testi-card-initials">
                      {getInitials(item.name)}
                    </span>
                  </div>
                  <div className="home-testi-card-meta">
                    <h3 className="home-testi-card-name">{item.name}</h3>
                    <span className="home-testi-card-year">{item.graduationYear}</span>
                  </div>
                </div>
                <div className="home-testi-card-body">
                  <div className="home-testi-card-job">
                    <Briefcase className="home-testi-card-job-icon" />
                    <span>{item.job}</span>
                  </div>
                  <div className="home-testi-card-quote-wrapper">
                    <Quote className="home-testi-card-quote-icon" />
                    <p className="home-testi-card-quote">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
