import { Check } from "lucide-react";
import data from "../data/terakreditasi.json";
import ProfilePhoto from "./ProfilePhoto";

function Terakreditasi() {
  return (
    <section className="profile-section profile-section--pearl">
      <div className="profile-section-inner">
        <div className="reveal">
          <h2 className="profile-section-title">{data.heading}</h2>
          <span className="profile-section-accent" />
        </div>

        <div className="terakreditasi-grid">
          <div className="terakreditasi-photo-col reveal">
            <div className="profile-photo">
              <span className="profile-photo-ring" aria-hidden="true" />
              <ProfilePhoto
                src={data.photo}
                alt={data.photoAlt}
                initials="BAN-P"
                role="Sertifikat Akreditasi"
              />
            </div>
          </div>

          <div className="terakreditasi-text-col reveal reveal-delay-2">
            {data.paragraphs.map((text) => (
              <p
                key={text.slice(0, 20)}
                className="font-body terakreditasi-paragraph"
              >
                {text}
              </p>
            ))}

            <ul className="terakreditasi-highlights">
              {data.highlights.map((item) => (
                <li key={item} className="terakreditasi-highlight">
                  <Check className="terakreditasi-highlight-icon" />
                  <span className="font-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Terakreditasi;
