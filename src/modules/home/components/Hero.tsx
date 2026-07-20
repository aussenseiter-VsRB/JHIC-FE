import { Play } from "lucide-react";
import data from "./data/hero.json";

function Hero() {
  return (
    <section className="hero-bg relative flex w-full justify-center">
      <img
        src="/headersection(2).png"
        alt="Header SMK YADIKA SOREANG"
        className="block w-full object-cover object-top"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-between px-6 pt-24 pb-10 md:px-8 md:pt-28 md:pb-16">
        <div className="mt-[100px] flex max-w-[800px] flex-col items-center text-center">
          <h1 className="font-inter text-[32px] font-bold leading-tight text-white md:text-[48px]">
            {data.title}
          </h1>

          <p className="mt-4 font-inter text-[18px] font-semibold uppercase tracking-[0.3em] text-gray-600 md:text-[20px]">
            {data.subtitle}
          </p>
        </div>

        <div className="mb-[300px] flex flex-col gap-4 sm:flex-row">
          <a
            href={data.ctaPrimary.href}
            className="flex h-[60px] w-full items-center justify-center rounded-xl bg-primary px-8 font-poppins text-[16px] font-semibold text-white transition-all duration-200 hover:bg-primary-dark sm:w-[250px]"
          >
            {data.ctaPrimary.label}
          </a>

          <a
            href={data.ctaSecondary.href}
            className="flex h-[60px] w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-8 font-poppins text-[16px] font-semibold text-gray-800 transition-all duration-200 hover:bg-gray-50 sm:w-[250px]"
          >
            <Play className="h-5 w-5" />
            {data.ctaSecondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
