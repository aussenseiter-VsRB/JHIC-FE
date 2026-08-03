function SkeletonLoad() {
  return (
    <div className="berita">
      <header className="berita-header-section berita-skeleton-header">
        <div className="berita-header-inner">
          <div className="berita-header-left">
            <div className="sk sk-header-card" />
          </div>
          <div className="berita-header-right">
            <div className="sk sk-badge" />
            <div className="sk sk-title-lg" />
            <div className="sk sk-title-md" />
            <div className="sk sk-text" />
            <div className="sk sk-text-short" />
            <div className="sk sk-stats">
              <div className="sk sk-stat" />
              <div className="sk sk-stat" />
              <div className="sk sk-stat" />
            </div>
          </div>
        </div>
      </header>

      <div className="berita-container">
        <section className="berita-section">
          <div className="berita-section-header">
            <div className="sk sk-section-title" />
            <div className="sk sk-section-accent" />
          </div>

          <div className="berita-list">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className={`berita-row berita-skeleton-row ${i % 2 === 1 ? "berita-row-reverse" : ""}`}
              >
                <div className="berita-row-content">
                  <div className="sk sk-category" />
                  <div className="sk sk-row-title" />
                  <div className="sk sk-text" />
                  <div className="sk sk-text-short" />
                  <div className="sk sk-btn" />
                </div>
                <div className="berita-row-image">
                  <div className="sk sk-row-image" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="berita-section">
          <div className="berita-section-header-flex">
            <div>
              <div className="sk sk-section-title" />
              <div className="sk sk-section-accent" />
            </div>
          </div>

          <div className="berita-grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <article key={i} className="berita-card">
                <div className="berita-card-image">
                  <div className="sk sk-card-image" />
                </div>
                <div className="berita-card-content">
                  <div className="sk sk-card-date" />
                  <div className="sk sk-card-title" />
                  <div className="sk sk-text" />
                  <div className="sk sk-text-short" />
                  <div className="sk sk-link" />
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default SkeletonLoad;
