import data from "./data/terakreditasi.json";

function Terakreditasi() {
  return (
    <section className="bg-white px-4 py-10 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-heading text-3xl font-bold uppercase leading-tight tracking-wide text-gray-900 md:text-4xl">
          {data.heading}
        </h2>
        <span className="mt-4 block h-1 w-20 rounded-full bg-primary" />

        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:gap-16">
          <div className="flex w-full lg:w-[35%]">
            <img
              src={data.photo}
              alt={data.photoAlt}
              className="h-[400px] w-full rounded-2xl border-4 border-gray-200 object-cover shadow-lg"
            />
          </div>

          <div className="flex w-full flex-col lg:w-[65%]">
            {data.paragraphs.map((text) => (
              <p
                key={text.slice(0, 20)}
                className="mt-3 font-body text-sm leading-relaxed text-gray-600 md:text-base"
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
