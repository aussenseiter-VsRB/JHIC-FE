function About() {
  return (
    <section className="about-section">
      <div className="section-container">
        <h2 className="section-title">Tentang Kami</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              SMK Yadika Soreang adalah sekolah menengah kejuruan yang berkomitmen
              untuk menghasilkan lulusan yang kompeten, berkarakter, dan siap
              bersaing di dunia kerja. Dengan fasilitas modern dan tenaga pendidik
              profesional, kami terus berinovasi dalam pendidikan.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <span className="stat-number">500+</span>
              <span className="stat-label">Siswa Aktif</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">50+</span>
              <span className="stat-label">Guru & Staff</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">3 </span>
              <span className="stat-label">Program Keahlian</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
