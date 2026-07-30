import data from "../data/sambutan-kepsek.json";

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
            <img
              src={data.photo}
              alt={data.photoAlt}
              className="sambutan-photo"
            />
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
