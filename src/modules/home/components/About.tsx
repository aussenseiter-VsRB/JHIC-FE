import AnimatedNumber from "../../../components/animated-number/AnimatedNumber";
import data from "../data/about.json";

function About() {
  return (
    <section className="home-about">
      <div className="home-about-container">
        <div className="reveal">
          <h2 className="font-heading home-about-heading">
            {data.heading}
          </h2>
          <span className="home-about-accent" />
          <p className="home-about-text">
            {data.paragraph}
          </p>
        </div>
        <div className="home-about-stats-grid">
          {data.stats.map((stat, i) => (
            <div
              className={`reveal reveal-delay-${i + 1} home-about-stat-card`}
              key={stat.label}
            >
              <span className="font-heading home-about-stat-number">
                <AnimatedNumber value={stat.number} />
              </span>
              <span className="home-about-stat-label">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
