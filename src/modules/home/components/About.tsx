import data from "./data/about.json";

function About() {
  return (
    <section className="about-section">
      <div className="section-container">
        <div className="about-grid">
          <div className="about-text">
            <h2>{data.heading}</h2>
            <p>{data.paragraph}</p>
          </div>
          <div className="about-stats">
            {data.stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
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
