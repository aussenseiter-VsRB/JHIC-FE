import data from "./data/terakreditasi.json";

function Terakreditasi() {
  return (
    <section className="profile-section bg-pearl">
      <div className="profile-section-inner">
        <div className="reveal">
          <h2 className="profile-section-title">{data.heading}</h2>
          <span className="profile-section-accent" />
        </div>

        <div className="mt-12 flex flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="flex w-full lg:w-[35%] reveal">
            <img
              src={data.photo}
              alt={data.photoAlt}
              className="h-[400px] w-full rounded-2xl border-4 border-slate/10 object-cover shadow-lg"
            />
          </div>

          <div className="flex w-full flex-col lg:w-[65%] reveal reveal-delay-2">
            {data.paragraphs.map((text) => (
              <p
                key={text.slice(0, 20)}
                className="font-body text-base leading-relaxed text-slate md:text-lg"
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
