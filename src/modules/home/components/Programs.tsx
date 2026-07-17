const programs = [
  { name: "Teknik Komputer & Jaringan", code: "TKJ" },
  { name: "Rekayasa Perangkat Lunak", code: "RPL" },
  { name: "Akuntansi", code: "AKL" },
  { name: "Bisnis Digital", code: "BD" },
  { name: "Teknik Elektronika", code: "TE" },
  { name: "Desain Komunikasi Visual", code: "DKV" },
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
