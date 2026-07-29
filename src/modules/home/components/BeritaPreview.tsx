import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import beritaData from "../../berita/berita.json";

const categoryColors: Record<string, string> = beritaData.categoryColors;

function BeritaPreview() {
  const latestNews = beritaData.beritaTerkini.list.slice(0, 3);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-20 max-md:px-5 max-md:py-14">
        <div className="reveal">
          <h2 className="mb-4 text-center text-[2rem] font-extrabold -tracking-[0.02em] text-[#1E3A5F]">
            Berita Terkini
          </h2>
          <p className="mb-12 text-center text-[1.1rem] text-[#64748B]">
            Ikuti perkembangan terbaru dari SMK Yadika Soreang
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1 max-md:gap-4">
          {latestNews.map((item, i) => (
            <article
              key={item.id}
              className={`reveal reveal-delay-${i + 1} flex flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_4px_20px_rgba(30,58,95,0.05)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_16px_48px_rgba(37,99,235,0.12)]`}
            >
              <div className="h-[180px] overflow-hidden max-md:h-[160px]">
                <div className="flex h-full w-full items-start justify-start bg-gradient-to-br from-[#1E3A5F] to-[#2D4A6F] p-4">
                  <span
                    className="inline-block rounded-full px-3 py-1 font-poppins text-[0.65rem] font-semibold uppercase tracking-[0.06em] text-white"
                    style={{ background: categoryColors[item.category] ?? "#2563EB" }}
                  >
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                <div className="mb-2.5 flex items-center gap-1.5 text-[0.78rem] text-[#94A3B8]">
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>
                <h3 className="m-0 mb-2 line-clamp-2 text-[1rem] font-bold leading-[1.4] text-[#1E3A5F]">
                  {item.title}
                </h3>
                <p className="m-0 flex-1 line-clamp-3 text-[0.85rem] leading-[1.6] text-[#64748B]">
                  {item.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            to="/berita"
            className="group reveal inline-flex items-center gap-2 rounded-xl border-[1.5px] border-[#2563EB] px-8 py-3.5 font-poppins text-[0.88rem] font-semibold text-[#2563EB] no-underline transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#2563EB] hover:text-white hover:shadow-[0_8px_24px_rgba(37,99,235,0.25)] hover:-translate-y-0.5"
          >
            Lihat Semua Berita <ArrowRight size={16} className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BeritaPreview;
