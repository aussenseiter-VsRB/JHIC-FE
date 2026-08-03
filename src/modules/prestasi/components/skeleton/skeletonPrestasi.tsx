function SkeletonPrestasi() {
  return (
    <div className="prestasi">
      <header className="prestasi-header-section">
        <div className="prestasi-header-inner">
          <div className="prestasi-header-left">
            <div className="prestasi-header-medal-wrap">
              <div className="sk sk-prestasi-card" />
            </div>
          </div>
          <div className="prestasi-header-right">
            <div className="sk sk-prestasi-breadcrumb" />
            <div className="sk sk-prestasi-title" />
            <div className="sk sk-prestasi-sub" />
            <div className="sk sk-prestasi-sub-short" />
            <div className="sk sk-prestasi-stats">
              <div className="sk sk-prestasi-stat" />
              <div className="sk sk-prestasi-stat" />
            </div>
          </div>
        </div>
      </header>

      <div className="prestasi-container">
        <div className="prestasi-grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="prestasi-card">
              <div className="sk sk-prestasi-banner" />
              <div className="prestasi-card-body">
                <div className="sk sk-prestasi-date" />
                <div className="sk sk-prestasi-heading" />
                <div className="sk sk-prestasi-heading-short" />
                <div className="sk sk-prestasi-link" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkeletonPrestasi;
