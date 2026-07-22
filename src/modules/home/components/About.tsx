import data from "./data/about.json";

function About() {
  return (
    <section className="about-section">
      <div className="section-container">
        <div className="about-grid">
          <div className="about-text reveal">
            <h2>{data.heading}</h2>
            <span className="about-accent-bar" />
            <p>{data.paragraph}</p>
          </div>
          <div className="about-stats">
            {data.stats.map((stat, i) => (
              <div className={`stat-card reveal reveal-delay-${i + 1}`} key={stat.label}>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
