import { Play } from "lucide-react";

function Hero() {
  return (
    <section className="flex w-full items-center justify-center bg-white px-6 py-20 md:px-8 md:py-28">
      <div className="flex max-w-[800px] flex-col items-center text-center">
        <h1 className="font-poppins text-[32px] font-bold leading-tight text-gray-900 md:text-[48px]">
          SMK Yadika Soreang
        </h1>

        <p className="mt-6 max-w-[700px] font-poppins text-[16px] font-medium leading-relaxed text-gray-600 md:text-[18px]">
          Sekolah vokasi yang berkomitmen mencetak lulusan yang kompeten,
          berkarakter, inovatif, dan siap bersaing di dunia kerja maupun
          melanjutkan pendidikan ke jenjang yang lebih tinggi.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#daftar"
            className="flex h-[60px] w-full items-center justify-center rounded-xl bg-primary px-8 font-poppins text-[16px] font-semibold text-white transition-all duration-200 hover:bg-primary-dark sm:w-[250px]"
          >
            Daftar PPDB
          </a>

          <a
            href="#video"
            className="flex h-[60px] w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-8 font-poppins text-[16px] font-semibold text-gray-800 transition-all duration-200 hover:bg-gray-50 sm:w-[250px]"
          >
            <Play className="h-5 w-5" />
            Lihat Video Profil
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
