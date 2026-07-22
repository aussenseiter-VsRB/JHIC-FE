import data from "./data/sambutan-kepsek.json";

function SambutanKepsek() {
  return (
    <section className="profile-section bg-white">
      <div className="profile-section-inner">
        <h2 className="profile-section-title">{data.heading}</h2>
        <span className="profile-section-accent" />

        <div className="mt-12 flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Kolom Kiri — Foto Kepsek */}
          <div className="flex w-full lg:w-[35%]">
            <img
              src={data.photo}
              alt={data.photoAlt}
              className="h-[400px] w-full rounded-2xl object-cover shadow-lg"
            />
          </div>

          {/* Kolom Kanan — Sambutan */}
          <div className="flex w-full flex-col lg:w-[65%]">
            {data.paragraphs.map((text) => (
              <p
                key={text.slice(0, 20)}
                className="font-body text-base leading-relaxed text-slate md:text-lg"
              >
                {text}
              </p>
            ))}

            <div className="my-8 h-px w-full bg-slate/20" />

            <div>
              <p className="font-heading text-2xl font-bold text-navy md:text-3xl">
                {data.name}
              </p>
              <p className="mt-1 font-body text-sm font-medium text-blue md:text-base">
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
