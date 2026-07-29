import { Star } from "lucide-react";
import data from "./data/testimonials.json";

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="testimonial-stars">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "star-filled" : "star-empty"}
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
    <section className="testimonials-section">
      <div className="section-container">
        <div className="reveal">
          <h2 className="section-title">Kata Mereka</h2>
          <p className="section-subtitle">
            Dengarkan pengalaman langsung dari siswa dan alumni SMK Yadika
            Soreang
          </p>
        </div>
        <div className="testimonials-grid">
          {data.map((item, i) => {
            const delay = (i % 3) + 1;
            return (
              <div
                key={i}
                className={`testimonial-card reveal reveal-delay-${delay}`}
              >
                <div className="testimonial-avatar">
                  <span className="testimonial-initials">
                    {getInitials(item.name)}
                  </span>
                </div>
                <div className="testimonial-body">
                  <StarRating rating={item.rating} />
                  <p className="testimonial-content">"{item.content}"</p>
                  <div className="testimonial-author">
                    <span className="testimonial-name">{item.name}</span>
                    <span className="testimonial-role">{item.role}</span>
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
