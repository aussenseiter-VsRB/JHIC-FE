import { Quote } from "lucide-react";
import data from "../data/sambutan-kepsek.json";
import ProfilePhoto from "./ProfilePhoto";

function SambutanKepsek() {
  return (
    <section className="profile-section">
      <div className="profile-section-inner">
        <div className="reveal">
          <h2 className="profile-section-title">{data.heading}</h2>
          <span className="profile-section-accent" />
        </div>

        <div className="sambutan-grid">
          <div className="sambutan-photo-col reveal">
            <div className="profile-photo">
              <span className="profile-photo-ring" aria-hidden="true" />
              <ProfilePhoto
                src={data.photo}
                alt={data.photoAlt}
                initials="YN"
                role={data.title}
              />
            </div>
          </div>

          <div className="sambutan-text-col reveal reveal-delay-2">
            {data.paragraphs.map((text) => (
              <p
                key={text.slice(0, 20)}
                className="font-body sambutan-paragraph"
              >
                {text}
              </p>
            ))}

            <blockquote className="sambutan-quote">
              <Quote className="sambutan-quote-icon" aria-hidden="true" />
              <p className="font-heading sambutan-quote-text">
                {data.highlight}
              </p>
            </blockquote>

            <div className="sambutan-divider" />

            <div>
              <p className="font-heading sambutan-name">
                {data.name}
              </p>
              <p className="font-body sambutan-title">
                {data.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SambutanKepsek;
