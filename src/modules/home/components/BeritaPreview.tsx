import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import beritaData from "../../berita/berita.json";

const categoryColors: Record<string, string> = beritaData.categoryColors;

function BeritaPreview() {
  const latestNews = beritaData.beritaTerkini.list.slice(0, 3);

  return (
    <section className="home-berita">
      <div className="home-berita-container">
        <div className="reveal">
          <h2 className="font-heading home-berita-title">
            Berita Terkini
          </h2>
          <p className="home-berita-subtitle">
            Ikuti perkembangan terbaru dari SMK Yadika Soreang
          </p>
        </div>
        <div className="home-berita-grid">
          {latestNews.map((item, i) => (
            <article
              key={item.id}
              className={`reveal reveal-delay-${i + 1} home-berita-card`}
            >
              <div className="home-berita-card-image">
                <div className="home-berita-card-gradient">
                  <span
                    className="font-poppins home-berita-card-category"
                    style={{ background: categoryColors[item.category] ?? "#2563EB" }}
                  >
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="home-berita-card-body">
                <div className="home-berita-card-date">
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>
                <h3 className="home-berita-card-title">
                  {item.title}
                </h3>
                <p className="home-berita-card-excerpt">
                  {item.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="home-berita-cta">
          <Link
            to="/berita"
            className="font-poppins home-berita-cta-link"
          >
            Lihat Semua Berita <ArrowRight className="home-berita-cta-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BeritaPreview;
