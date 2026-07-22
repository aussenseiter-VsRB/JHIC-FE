function SkeletonLoad() {
  return (
    <div className="berita">
      <div className="berita-container" style={{ paddingTop: 120 }}>
        <div className="berita-grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <article key={i} className="berita-card">
              <div className="berita-card-image">
                <div className="skeleton skeleton-image" />
                <div className="skeleton skeleton-category" />
              </div>
              <div className="berita-card-content">
                <div className="skeleton skeleton-date" />
                <div className="skeleton skeleton-card-title" />
                <div className="skeleton skeleton-excerpt" />
                <div className="skeleton skeleton-excerpt-short" />
                <div className="skeleton skeleton-link" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkeletonLoad;
