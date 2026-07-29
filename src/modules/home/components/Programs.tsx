import { ArrowRight } from "lucide-react";
import { jurusanData } from "../../jurusan/data";
import iconPplg from "../../../assets/icon-pplg.svg";
import iconAkl from "../../../assets/icon-akl.svg";
import iconHotel from "../../../assets/icon-hotel.svg";

const programIcons: Record<string, string> = {
  PPLG: iconPplg,
  AKL: iconAkl,
  HOTEL: iconHotel,
};

function Programs() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-20 max-md:px-5 max-md:py-14">
        <div className="reveal">
          <h2 className="mb-4 text-center text-[2rem] font-extrabold -tracking-[0.02em] text-[#1E3A5F]">
            Program Keahlian
          </h2>
          <p className="mb-12 text-center text-[1.1rem] text-[#64748B]">
            Pilih jurusan yang sesuai dengan minat dan bakatmu
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1 max-md:gap-4">
          {jurusanData.map((prog, i) => (
            <a
              key={prog.code}
              href={`/jurusan/${prog.slug}`}
              className={`reveal reveal-delay-${i + 1} group relative flex flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white px-6 py-8 text-inherit no-underline transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_16px_48px_rgba(37,99,235,0.15)]`}
            >
              <span className="absolute left-0 top-0 h-0 w-1 bg-[#2563EB] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:h-full" />
              <img
                src={programIcons[prog.code]}
                alt={`Logo ${prog.name}`}
                className="mb-4 h-12 w-12 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
              />
              <h3 className="m-0 mb-2 text-[1.1rem] font-semibold leading-[1.4] text-[#1E3A5F]">
                {prog.name}
              </h3>
              <p className="m-0 mb-4 flex-1 text-[0.9rem] leading-[1.6] text-[#64748B]">
                {prog.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-[#2563EB] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:gap-2.5">
                Selengkapnya <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;
