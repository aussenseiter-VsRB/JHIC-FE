import data from "../data/terakreditasi.json";

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
            <img
              src={data.photo}
              alt={data.photoAlt}
              className="terakreditasi-photo"
            />
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Terakreditasi;
