import { ArrowRight } from "lucide-react";

const stats = [
  { value: "1200+", label: "Siswa" },
  { value: "120+", label: "Guru & Staff" },
  { value: "16+", label: "Program Keahlian" },
];

function TentangSekolah() {
  return (
    <section className="bg-white px-4 py-10 md:px-8 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:gap-16">
        {/* Kolom Kiri */}
        <div className="flex flex-1 flex-col">
          <h1 className="font-inter text-3xl font-bold uppercase leading-tight tracking-wide text-gray-900 md:text-4xl">
            TENTANG SEKOLAH YADIKA SOREANG
          </h1>

          <p className="mt-6 font-inter text-base leading-relaxed text-gray-600 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="my-8 h-px w-full bg-gray-200" />

          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="font-inter text-3xl font-bold text-primary md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-inter text-sm text-gray-500 md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="mt-10 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary font-inter text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-primary/20 transition-all duration-200 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30 md:w-64"
          >
            LIHAT JURUSAN
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        {/* Kolom Kanan */}
        <div className="flex flex-1">
          <div className="flex w-full flex-col rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm md:min-h-[480px] md:p-10">
            <h2 className="font-inter text-xl font-bold uppercase tracking-wide text-primary md:text-2xl">
              VISI & MISI
            </h2>

            <div className="mt-6 flex flex-1 flex-col gap-5">
              <div>
                <h3 className="font-inter text-sm font-semibold uppercase text-gray-700">
                  Visi
                </h3>
                <p className="mt-2 font-inter text-sm leading-relaxed text-gray-600 md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>
              </div>

              <div className="h-px w-full bg-gray-200" />

              <div>
                <h3 className="font-inter text-sm font-semibold uppercase text-gray-700">
                  Misi
                </h3>
                <ul className="mt-2 space-y-2 font-inter text-sm leading-relaxed text-gray-600 md:text-base">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </li>
                  <li>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                  </li>
                  <li>
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </li>
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
