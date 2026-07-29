import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import beritaData from "../../berita/berita.json";

const categoryColors: Record<string, string> = beritaData.categoryColors;

function BeritaPreview() {
  const latestNews = beritaData.beritaTerkini.list.slice(0, 3);

  return (
    <section className="berita-preview-section">
      <div className="section-container">
        <div className="reveal">
          <h2 className="section-title">Berita Terkini</h2>
          <p className="section-subtitle">
            Ikuti perkembangan terbaru dari SMK Yadika Soreang
          </p>
        </div>
        <div className="berita-preview-grid">
          {latestNews.map((item, i) => (
            <article
              key={item.id}
              className={`berita-preview-card reveal reveal-delay-${i + 1}`}
            >
              <div className="berita-preview-card-image">
                <div className="berita-preview-placeholder">
                  <span
                    className="berita-preview-category"
                    style={{ background: categoryColors[item.category] ?? "#2563EB" }}
                  >
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="berita-preview-card-body">
                <div className="berita-preview-meta">
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>
                <h3 className="berita-preview-title">{item.title}</h3>
                <p className="berita-preview-excerpt">{item.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="berita-preview-cta reveal">
          <Link to="/berita" className="berita-preview-link">
            Lihat Semua Berita <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BeritaPreview;
