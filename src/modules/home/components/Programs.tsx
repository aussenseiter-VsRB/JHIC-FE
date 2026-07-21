import data from "./data/programs.json";

function Programs() {
  return (
    <section className="programs-section">
      <div className="section-container">
        <h2 className="section-title">{data.heading}</h2>
        <div className="programs-grid">
          {data.items.map((prog) => (
            <div key={prog.code} className="program-card">
              <span className="program-code">{prog.code}</span>
              <span className="program-name">{prog.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;
