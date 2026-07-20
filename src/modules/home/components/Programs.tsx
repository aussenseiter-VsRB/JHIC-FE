const programs = [
  { name: "Rekayasa Perangkat Lunak", code: "RPL" },
  { name: "Akuntansi", code: "AKL" },
  { name: "Perhotelan", code: "HTL" },
];

function Programs() {
  return (
    <section className="programs-section">
      <div className="section-container">
        <h2 className="section-title">Program Keahlian</h2>
        <div className="programs-grid">
          {programs.map((prog) => (
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
