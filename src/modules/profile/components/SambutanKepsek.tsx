import data from "./data/sambutan-kepsek.json";

function SambutanKepsek() {
  return (
    <section className="bg-white px-4 py-10 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-inter text-3xl font-bold uppercase leading-tight tracking-wide text-gray-900 md:text-4xl">
          {data.heading}
        </h2>
        <span className="mt-4 block h-1 w-20 rounded-full bg-primary" />

        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:gap-16">
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
                className="mt-3 font-inter text-sm leading-relaxed text-gray-600 md:text-base"
              >
                {text}
              </p>
            ))}

            <div className="mt-3 h-px w-full bg-gray-200" />

            <p className="mt-8 font-inter text-[24px] font-bold text-gray-900 md:text-[28px]">
              {data.name}
            </p>
            <p className="mt-1 font-inter text-[14px] font-medium text-gray-500 md:text-[16px]">
              {data.title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SambutanKepsek;
