import { Play } from "lucide-react";
import data from "./data/hero.json";

function Hero() {
  return (
    <section className="relative flex w-full flex-col items-center overflow-hidden bg-navy px-6 pt-32 pb-24 md:px-8 md:pt-40 md:pb-32">
      {/* Geometric background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, currentColor 40px, currentColor 41px)`,
          }}
        />
      </div>

      {/* Accent glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/10 blur-[120px]" />

      <div className="relative z-10 mt-[40px] flex max-w-[800px] flex-col items-center text-center">
        <span className="mb-6 inline-block rounded-full border border-blue/30 bg-blue/10 px-4 py-1.5 font-poppins text-xs font-semibold uppercase tracking-widest text-blue">
          Sekolah Menengah Kejuruan Unggulan
        </span>

        <h1 className="font-heading text-[40px] font-extrabold leading-[1.1] tracking-tight text-white md:text-[64px]">
          {data.title}
        </h1>

        <p className="mt-6 max-w-[600px] font-body text-lg leading-relaxed text-white/60 md:text-xl">
          Mencetak lulusan kompeten, berkarakter, dan siap bersaing di dunia industri melalui pendidikan berkualitas.
        </p>
      </div>

      <div className="relative z-10 mt-12 flex flex-col gap-4 sm:flex-row">
        <a
          href={data.ctaPrimary.href}
          className="flex h-[60px] w-full items-center justify-center rounded-xl bg-blue px-8 font-poppins text-[16px] font-semibold text-white transition-all duration-200 hover:bg-blue-dark hover:shadow-lg hover:shadow-blue/20 sm:w-[250px]"
        >
          {data.ctaPrimary.label}
        </a>

        <a
          href={data.ctaSecondary.href}
          className="flex h-[60px] w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-transparent px-8 font-poppins text-[16px] font-semibold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/5 sm:w-[250px]"
        >
          <Play className="h-5 w-5" />
          {data.ctaSecondary.label}
        </a>
      </div>

      {/* Diagonal bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-pearl" style={{ clipPath: 'polygon(0 60%, 100% 0, 100% 100%, 0 100%)' }} />
    </section>
  );
}

export default Hero;
