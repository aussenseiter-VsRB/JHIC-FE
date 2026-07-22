import { Play } from "lucide-react";
import data from "./data/hero.json";

function Hero() {
  return (
    <section className="relative flex w-full flex-col items-center overflow-hidden bg-navy px-6 pt-32 pb-24 md:px-8 md:pt-40 md:pb-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, currentColor 40px, currentColor 41px)`,
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 40px, currentColor 40px, currentColor 41px)`,
          }}
        />
      </div>

      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/[0.08] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-sky/[0.06] blur-[100px]" />

      <div className="relative z-10 mt-[40px] flex max-w-[800px] flex-col items-center text-center">
        <span className="mb-6 inline-block animate-fade-in-up rounded-full border border-blue/30 bg-blue/10 px-4 py-1.5 font-poppins text-xs font-semibold uppercase tracking-widest text-blue">
          Sekolah Menengah Kejuruan Unggulan
        </span>

        <h1 className="font-heading text-[40px] font-extrabold leading-[1.08] tracking-tight text-white animate-fade-in-up animate-delay-100 md:text-[64px]">
          {data.title}
        </h1>

        <p className="mt-6 max-w-[600px] font-body text-lg leading-relaxed text-white/55 animate-fade-in-up animate-delay-200 md:text-xl">
          Mencetak lulusan kompeten, berkarakter, dan siap bersaing di dunia industri melalui pendidikan berkualitas.
        </p>
      </div>

      <div className="relative z-10 mt-12 flex flex-col gap-4 animate-fade-in-up animate-delay-300 sm:flex-row">
        <a
          href={data.ctaPrimary.href}
          className="flex h-[60px] w-full items-center justify-center rounded-xl bg-blue px-8 font-poppins text-[16px] font-semibold text-white shadow-lg shadow-blue/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-dark hover:shadow-xl hover:shadow-blue/30 sm:w-[250px]"
        >
          {data.ctaPrimary.label}
        </a>

        <a
          href={data.ctaSecondary.href}
          className="flex h-[60px] w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-8 font-poppins text-[16px] font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.08] sm:w-[250px]"
        >
          <Play className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
          {data.ctaSecondary.label}
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-pearl" style={{ clipPath: 'polygon(0 60%, 100% 0, 100% 100%, 0 100%)' }} />
    </section>
  );
}

export default Hero;
