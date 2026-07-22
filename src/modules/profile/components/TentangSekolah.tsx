import { ArrowRight } from "lucide-react";
import data from "./data/tentang-sekolah.json";

function TentangSekolah() {
  return (
    <section className="bg-white px-4 py-10 md:px-8 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:gap-16">
        {/* Kolom Kiri */}
        <div className="flex flex-1 flex-col">
          <h1 className="font-heading text-3xl font-bold uppercase leading-tight tracking-wide text-gray-900 md:text-4xl">
            {data.heading}
          </h1>

          <p className="mt-6 font-body text-base leading-relaxed text-gray-600 md:text-lg">
            {data.description}
          </p>

          <div className="my-8 h-px w-full bg-gray-200" />

          <div className="grid grid-cols-3 gap-6">
            {data.stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="font-body text-3xl font-bold text-primary md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-body text-sm text-gray-500 md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <a
            href={data.ctaLink}
            className="mt-10 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary font-body text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-primary/20 transition-all duration-200 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30 md:w-64"
          >
            {data.ctaText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        {/* Kolom Kanan */}
        <div className="flex flex-1">
          <div className="flex w-full flex-col rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm md:min-h-[480px] md:p-10">
            <h2 className="font-heading text-xl font-bold uppercase tracking-wide text-primary md:text-2xl">
              {data.visiMisi.heading}
            </h2>

            <div className="mt-6 flex flex-1 flex-col gap-5">
              <div>
                <h3 className="font-body text-sm font-semibold uppercase text-gray-700">
                  Visi
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-gray-600 md:text-base">
                  {data.visiMisi.visi}
                </p>
              </div>

              <div className="h-px w-full bg-gray-200" />

              <div>
                <h3 className="font-body text-sm font-semibold uppercase text-gray-700">
                  Misi
                </h3>
                <ul className="mt-2 space-y-2 font-body text-sm leading-relaxed text-gray-600 md:text-base">
                  {data.visiMisi.misi.map((item) => (
                    <li key={item.slice(0, 20)}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TentangSekolah;
