function SkeletonDetail() {
  return (
    <div className="berita-detail">
      <header className="berita-detail-hero berita-skeleton-detail-hero">
        <div className="berita-detail-hero-inner">
          <div className="sk sk-back" />
          <div className="sk sk-title-lg sk-detail-title" />
          <div className="sk sk-title-md sk-detail-title" />
          <div className="berita-detail-byline">
            <div className="sk sk-byline" />
            <div className="sk sk-byline" />
            <div className="sk sk-byline" />
          </div>
        </div>
      </header>

      <div className="berita-detail-body">
        <article className="berita-detail-article">
          <div className="berita-detail-article-image">
            <div className="sk sk-detail-image" />
          </div>
          <div className="berita-detail-content">
            <div className="sk sk-text" />
            <div className="sk sk-text" />
            <div className="sk sk-text" />
            <div className="sk sk-text-short" />
            <div className="sk sk-text" />
            <div className="sk sk-text" />
            <div className="sk sk-text-short" />
          </div>
        </article>

        <aside className="berita-detail-related">
          <div className="berita-detail-related-header">
            <div className="sk sk-related-title" />
            <span className="berita-detail-related-accent" />
          </div>
          <div className="berita-detail-related-grid">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="berita-detail-related-card">
                <div className="berita-detail-related-image">
                  <div className="sk sk-detail-image" />
                </div>
                <div className="berita-detail-related-content">
                  <div className="sk sk-related-date" />
                  <div className="sk sk-related-heading" />
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default SkeletonDetail;
