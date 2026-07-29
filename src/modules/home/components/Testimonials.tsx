import { Star } from "lucide-react";
import data from "./data/testimonials.json";

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="home-testi-stars">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "fill-[#F59E0B] text-[#F59E0B]" : "text-[#CBD5E1]"}
        />
      ))}
    </span>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w.charAt(0))
    .join("")
    .toUpperCase();
}

function Testimonials() {
  return (
    <section className="home-testi">
      <div className="home-testi-container">
        <div className="reveal">
          <h2 className="font-heading home-testi-title">
            Kata Mereka
          </h2>
          <p className="home-testi-subtitle">
            Dengarkan pengalaman langsung dari siswa dan alumni SMK Yadika Soreang
          </p>
        </div>
        <div className="home-testi-grid">
          {data.map((item, i) => {
            const delay = (i % 3) + 1;
            return (
              <div
                key={i}
                className={`reveal reveal-delay-${delay} home-testi-card`}
              >
                <div className="home-testi-card-avatar">
                  <span className="font-heading home-testi-card-initials">
                    {getInitials(item.name)}
                  </span>
                </div>
                <div className="home-testi-card-body">
                  <StarRating rating={item.rating} />
                  <p className="home-testi-card-text">
                    &ldquo;{item.content}&rdquo;
                  </p>
                  <div>
                    <span className="home-testi-card-name">
                      {item.name}
                    </span>
                    <br />
                    <span className="home-testi-card-role">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
