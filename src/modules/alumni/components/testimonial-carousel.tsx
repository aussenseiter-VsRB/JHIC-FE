import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Briefcase, Quote } from "lucide-react";

interface TestimonialItem {
  id: number;
  name: string;
  graduationYear: string;
  job: string;
  quote: string;
  initials: string;
}

const TRACK_GAP = 24;
const AUTOPLAY_INTERVAL = 5000;

function TestimonialCarousel({ items }: { items: TestimonialItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const getCardsPerView = useCallback(() => {
    const el = trackRef.current;
    if (!el || el.children.length === 0) return 1;
    const cardWidth = (el.children[0] as HTMLElement).offsetWidth;
    return Math.max(1, Math.round(el.clientWidth / (cardWidth + TRACK_GAP)));
  }, []);

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el || el.children.length === 0) return;
    const cardWidth = (el.children[0] as HTMLElement).offsetWidth;
    const perView = getCardsPerView();
    const pages = Math.max(1, Math.ceil(el.children.length / perView));
    const index = Math.round(el.scrollLeft / (cardWidth + TRACK_GAP));
    setPageCount(pages);
    setCurrentPage(Math.min(Math.floor(index / perView), pages - 1));
    setCanScrollPrev(el.scrollLeft > 10);
    setCanScrollNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, [getCardsPerView]);

  const scrollByCard = useCallback((dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el || el.children.length === 0) return;
    const cardWidth = (el.children[0] as HTMLElement).offsetWidth;
    el.scrollBy({ left: dir * (cardWidth + TRACK_GAP), behavior: "smooth" });
  }, []);

  const scrollToCard = useCallback((index: number) => {
    const el = trackRef.current;
    if (!el || el.children.length === 0) return;
    const cardWidth = (el.children[0] as HTMLElement).offsetWidth;
    el.scrollTo({ left: index * (cardWidth + TRACK_GAP), behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    el.addEventListener("scroll", measure, { passive: true });
    return () => {
      observer.disconnect();
      el.removeEventListener("scroll", measure);
    };
  }, [items.length, measure]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = trackRef.current;
    if (!el) return;

    const timer = setInterval(() => {
      if (el.matches(":hover") || el.matches(":focus-within")) return;
      const cardWidth = (el.children[0] as HTMLElement)?.offsetWidth ?? 0;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const next = el.scrollLeft + cardWidth + TRACK_GAP;
      el.scrollTo({ left: Math.min(next, maxScroll), behavior: "smooth" });
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="alumni-carousel">
      <button
        className={`alumni-carousel-btn alumni-carousel-btn--prev ${canScrollPrev ? "" : "alumni-carousel-btn--disabled"}`}
        onClick={() => scrollByCard(-1)}
        disabled={!canScrollPrev}
        aria-label="Testimoni sebelumnya"
      >
        <ChevronLeft className="alumni-carousel-btn-icon" />
      </button>

      <div className="alumni-carousel-track" ref={trackRef}>
        {items.map((story) => (
          <div key={story.id} className="alumni-carousel-slide">
            <div className="alumni-story-card">
              <div className="alumni-story-header">
                <div className="alumni-avatar">
                  <span className="alumni-avatar-initials font-heading">{story.initials}</span>
                </div>
                <div className="alumni-meta-info">
                  <h3 className="alumni-name font-heading">{story.name}</h3>
                  <span className="alumni-year font-body">{story.graduationYear}</span>
                </div>
              </div>
              <div className="alumni-story-body">
                <div className="alumni-job font-poppins">
                  <Briefcase className="alumni-job-icon" />
                  <span>{story.job}</span>
                </div>
                <div className="alumni-quote-wrapper">
                  <Quote className="alumni-quote-icon" />
                  <p className="alumni-quote font-body">{story.quote}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className={`alumni-carousel-btn alumni-carousel-btn--next ${canScrollNext ? "" : "alumni-carousel-btn--disabled"}`}
        onClick={() => scrollByCard(1)}
        disabled={!canScrollNext}
        aria-label="Testimoni berikutnya"
      >
        <ChevronRight className="alumni-carousel-btn-icon" />
      </button>

      <div className="alumni-carousel-dots">
        {Array.from({ length: pageCount }, (_, i) => (
          <button
            key={i}
            className={`alumni-carousel-dot ${i === currentPage ? "alumni-carousel-dot--active" : ""}`}
            onClick={() => scrollToCard(i * getCardsPerView())}
            aria-label={`Halaman ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonialCarousel;
