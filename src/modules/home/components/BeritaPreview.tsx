import { useEffect, useState } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import beritaData from "../../berita/berita.json";
import { getBerita, beritaToItem, type BeritaItem } from "../../berita/service/beritaApi";
import SafeImage from "../../../components/image/safe-image";
import HomeDecor from "./HomeDecor";

const categoryColors: Record<string, string> = beritaData.categoryColors;

const staticLatest: BeritaItem[] = beritaData.beritaTerkini.list
  .slice(0, 3)
  .map((item) => ({ ...item, id: String(item.id) }));

function BeritaPreview() {
  const [latestNews, setLatestNews] = useState<BeritaItem[]>(staticLatest);

  useEffect(() => {
    let cancelled = false;
    getBerita()
      .then((data) => {
        if (!cancelled) {
          const sorted = [...data].sort(
            (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
          setLatestNews(sorted.slice(0, 3).map(beritaToItem));
        }
      })
      .catch((err) => console.error("Failed to fetch berita:", err));
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
        <div className="home-berita-grid">
          {latestNews.map((item) => (
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
