interface WaveItem {
  wave: string;
  registration: string;
  selection: string;
  announcement: string;
}

const waves: WaveItem[] = [
  {
    wave: "Gelombang 1",
    registration: "1 Januari - 31 Januari",
    selection: "5 Februari",
    announcement: "10 Februari",
  },
  {
    wave: "Gelombang 2",
    registration: "1 Februari - 28 Februari",
    selection: "5 Maret",
    announcement: "10 Maret",
  },
  {
    wave: "Gelombang 3",
    registration: "1 Maret - 31 Maret",
    selection: "5 April",
    announcement: "10 April",
  },
];

function RegistrationWave() {
  return (
    <div className="ppdb-section" id="gelombang">
      <h2 className="ppdb-section-title">Gelombang Pendaftaran</h2>
      <span className="ppdb-section-accent" />
      <p className="ppdb-section-subtitle">
        Jadwal pelaksanaan PPDB setiap gelombang.
      </p>

      <div className="ppdb-wave-container">
        <table className="ppdb-wave-table">
          <thead>
            <tr className="ppdb-wave-head">
              <th>Gelombang</th>
              <th>Pendaftaran</th>
              <th>Tes Seleksi</th>
              <th>Pengumuman</th>
            </tr>
          </thead>
          <tbody>
            {waves.map((row, index) => (
              <tr
                key={row.wave}
                className="ppdb-wave-row"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <td className="ppdb-wave-cell-bold">{row.wave}</td>
                <td>{row.registration}</td>
                <td>{row.selection}</td>
                <td>{row.announcement}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="ppdb-wave-cards">
          {waves.map((row, index) => (
            <div
              key={row.wave}
              className="ppdb-wave-card"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <h3 className="ppdb-wave-card-title">{row.wave}</h3>
              <div className="ppdb-wave-card-row">
                <span className="ppdb-wave-card-label">Pendaftaran</span>
                <span className="ppdb-wave-card-value">{row.registration}</span>
              </div>
              <div className="ppdb-wave-card-row">
                <span className="ppdb-wave-card-label">Tes Seleksi</span>
                <span className="ppdb-wave-card-value">{row.selection}</span>
              </div>
              <div className="ppdb-wave-card-row ppdb-wave-card-row--last">
                <span className="ppdb-wave-card-label">Pengumuman</span>
                <span className="ppdb-wave-card-value">{row.announcement}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RegistrationWave;
