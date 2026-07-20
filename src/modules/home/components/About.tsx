import data from "./data/about.json";

function About() {
  return (
    <section className="about-section">
      <div className="section-container">
        <h2 className="section-title">{data.heading}</h2>
        <div className="about-grid">
          <div className="about-text">
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
