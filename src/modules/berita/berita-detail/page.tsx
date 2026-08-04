import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, User } from "lucide-react";
import { useState, useEffect } from "react";
import Breadcrumb from "../../../components/breadcrumb/breadcrumb";
import SafeImage from "../../../components/image/safe-image";
import "./css/berita-detail.css";
import { getBerita, getBeritaById, extractBeritaImage, type Berita } from "../service/beritaApi";
import SkeletonDetail from "./components/skeleton/skeletonDetail";

const dateFormatter = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const timeFormatter = new Intl.DateTimeFormat("id-ID", {
  hour: "2-digit",
  minute: "2-digit",
});

function formatDateTime(iso: string): string {
  const date = new Date(iso);
  return `${dateFormatter.format(date)}, ${timeFormatter.format(date)}`;
}

function BeritaDetail() {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Berita | null>(null);
  const [relatedList, setRelatedList] = useState<Berita[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    Promise.all([id ? getBeritaById(id) : Promise.resolve(undefined), getBerita().catch(() => [])])
      .then(([detail, list]) => {
        if (!cancelled) {
          if (detail) {
            setItem(detail);
            setRelatedList(list.filter((i) => i.id !== detail.id).slice(0, 3));
          } else {
            setError("Berita tidak ditemukan");
          }
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          console.error("Failed to fetch berita detail:", err);
          setError(err instanceof Error ? err.message : "Unknown error");
          setLoading(false);
        }
      });

    return () => { cancelled = true; };
  }, [id]);

  useEffect(() => {
    if (loading) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [loading]);

  if (loading) {
    return <SkeletonDetail />;
  }

  if (error || !item) {
    return (
      <div className="berita-detail">
        <div className="berita-detail-notfound">
          <Link to="/berita" className="berita-detail-back">
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Berita
          </Link>
          <h1>{error === "Invalid berita ID" ? "ID Tidak Valid" : "Berita tidak ditemukan"}</h1>
          <p>{error === "Invalid berita ID" ? "Parameter ID berita tidak valid." : "Artikel yang Anda cari tidak tersedia."}</p>
        </div>
      </div>
    );
  }

  const paragraphs = item.content.split(/\n\s*\n/).filter((p) => p.trim() !== "");

  return (
    <div className="berita-detail">
      <header className="berita-detail-hero">
        <div className="berita-detail-hero-orb berita-detail-hero-orb--1" />
        <div className="berita-detail-hero-orb berita-detail-hero-orb--2" />
        <div className="berita-detail-hero-pattern" />

        <div className="berita-detail-hero-inner">
          <Link to="/berita" className="berita-detail-back">
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali ke Berita</span>
          </Link>
          <Breadcrumb
            items={[
              { label: "Beranda", to: "/" },
              { label: "Berita", to: "/berita" },
              { label: "Detail Berita" },
            ]}
          />
          <h1 className="berita-detail-title">{item.title}</h1>

          <div className="berita-detail-byline">
            <span className="berita-detail-byline-item">
              <User className="h-4 w-4" />
              Penulis ID {item.author_id}
            </span>
            <span className="berita-detail-byline-sep">•</span>
            <span className="berita-detail-byline-item">
              <CalendarDays className="h-4 w-4" />
              {formatDateTime(item.created_at)}
            </span>
            <span className="berita-detail-byline-sep">•</span>
            <span className="berita-detail-byline-item">
              <Clock className="h-4 w-4" />
              Diperbarui {formatDateTime(item.updated_at)}
            </span>
          </div>
        </div>

        <div className="wave-scroll-container">
          <svg className="wave-scroll" viewBox="0 0 2880 120" fill="none" preserveAspectRatio="none">
            <path d="M0,60 C360,110 450,20 720,60 C990,100 1080,30 1440,60 C1800,110 1890,20 2160,60 C2430,100 2520,30 2880,60 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.3" />
            <path d="M0,75 C300,40 500,100 720,75 C940,50 1140,110 1440,75 C1740,40 1940,100 2160,75 C2380,50 2580,110 2880,75 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.6" />
            <path d="M0,90 C320,120 420,50 720,90 C1020,130 1120,60 1440,90 C1760,120 1860,50 2160,90 C2460,130 2560,60 2880,90 L2880,120 L0,120 Z" fill="#F5F5F5" />
          </svg>
        </div>
      </header>

      <div className="berita-detail-body">
        <article className="berita-detail-article">
          <div className="berita-detail-article-image">
            <SafeImage src={extractBeritaImage(item)} alt={item.title} />
          </div>

          <div className="berita-detail-content">
            {paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </article>

        <section className="berita-detail-related">
          <div className="berita-detail-related-header">
            <h2>Berita Lainnya</h2>
            <span className="berita-detail-related-accent" />
          </div>

          <div className="berita-detail-related-grid">
            {relatedList.map((berita, i) => (
              <Link
                key={berita.id}
                to={`/berita/${berita.id}`}
                className={`berita-detail-related-card reveal reveal-delay-${(i % 3) + 1}`}
              >
                <div className="berita-detail-related-image">
                  <SafeImage src={extractBeritaImage(berita)} alt={berita.title} />
                </div>
                <div className="berita-detail-related-content">
                  <div className="berita-detail-related-date">
                    <CalendarDays className="h-4 w-4" />
                    {formatDateTime(berita.created_at)}
                  </div>
                  <h3 className="berita-detail-related-title">{berita.title}</h3>
                  <span className="berita-detail-related-link">
                    Baca Selengkapnya <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default BeritaDetail;
