import { ArrowRight } from "lucide-react";
import data from "./data/tentang-sekolah.json";

function TentangSekolah() {
  return (
    <section className="profile-section bg-pearl">
      <div className="profile-section-inner">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Kolom Kiri */}
          <div className="flex flex-1 flex-col">
            <h2 className="profile-section-title">{data.heading}</h2>
            <span className="profile-section-accent" />

            <p className="font-body text-base leading-relaxed text-slate md:text-lg">
              {data.description}
            </p>

            <div className="my-8 h-px w-full bg-slate/20" />

            <div className="grid grid-cols-3 gap-6">
              {data.stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <p className="font-heading text-3xl font-bold text-blue md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-body text-sm text-slate md:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={data.ctaLink}
              className="mt-10 inline-flex h-14 w-full items-center justify-center rounded-xl bg-blue font-poppins text-sm font-semibold uppercase tracking-wider text-white shadow-md shadow-blue/20 transition-all duration-200 hover:bg-blue-dark hover:shadow-lg hover:shadow-blue/30 md:w-64"
            >
              {data.ctaText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* Kolom Kanan */}
          <div className="flex flex-1">
            <div className="flex w-full flex-col rounded-2xl border border-slate/10 bg-white p-8 shadow-sm md:min-h-[480px] md:p-10">
              <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-blue md:text-2xl">
                {data.visiMisi.heading}
              </h3>

              <div className="mt-8 flex flex-1 flex-col gap-6">
                <div>
                  <h4 className="font-body text-sm font-semibold uppercase text-navy">
                    Visi
                  </h4>
                  <p className="mt-3 font-body text-sm leading-relaxed text-slate md:text-base">
                    {data.visiMisi.visi}
                  </p>
                </div>

                <div className="h-px w-full bg-slate/20" />

                <div>
                  <h4 className="font-body text-sm font-semibold uppercase text-navy">
                    Misi
                  </h4>
                  <ul className="mt-3 space-y-3 font-body text-sm leading-relaxed text-slate md:text-base">
                    {data.visiMisi.misi.map((item) => (
                      <li key={item.slice(0, 20)} className="flex gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TentangSekolah;
