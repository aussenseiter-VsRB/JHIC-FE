import { useEffect, useState } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import beritaData from "../../berita/berita.json";
import { getBerita, beritaToItem, type BeritaItem } from "../../berita/service/beritaApi";
import SafeImage from "../../../components/image/safe-image";
import HomeDecor from "./HomeDecor";

const categoryColors: Record<string, string> = beritaData.categoryColors;

type LoadStatus = "loading" | "ready" | "error";

function BeritaPreview() {
  const [status, setStatus] = useState<LoadStatus>("loading");
  const [latestNews, setLatestNews] = useState<BeritaItem[]>([]);

  useEffect(() => {
    let cancelled = false;
    getBerita()
      .then((data) => {
        if (cancelled) return;
        const sorted = [...data].sort(
          (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
        setLatestNews(sorted.slice(0, 3).map(beritaToItem));
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => { cancelled = true; };
  }, []);

  return (
    <section className="home-berita">
      <HomeDecor />
      <div className="home-berita-container">
        <div className="reveal">
          <h2 className="font-heading home-berita-title">
            Berita Terkini
          </h2>
          <p className="home-berita-subtitle">
            Ikuti perkembangan terbaru dari SMK Yadika Soreang
          </p>
        </div>
        {status === "error" ? (
          <div className="home-berita-error" role="alert">
            <p>Berita gagal dimuat. Silakan coba lagi nanti.</p>
          </div>
        ) : (
          <div className="home-berita-grid">
            {status === "loading"
              ? Array.from({ length: 3 }, (_, i) => (
                  <div
                    key={`skeleton-${i}`}
                    className="home-berita-card home-berita-card--skeleton"
                    aria-hidden="true"
                  />
                ))
              : latestNews.map((item) => (
                  <article
                    key={item.id}
                    className="home-berita-card"
                  >
                    <div className="home-berita-card-image">
                      <SafeImage src={item.image} alt={item.title} />
                      <span
                        className="font-poppins home-berita-card-category"
                        style={{ background: categoryColors[item.category] ?? "#2563EB" }}
                      >
                        {item.category}
                      </span>
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
        )}
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
