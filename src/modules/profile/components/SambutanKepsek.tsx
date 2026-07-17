const paragraphs = [
  "Assalamualaikum Warahmatullahi Wabarakatuh. Salam sejahtera bagi kita semua. Puji syukur kami panjatkan ke hadirat Tuhan Yang Maha Esa atas segala rahmat dan karunia-Nya, sehingga kita dapat menjalani kegiatan belajar mengajar dengan baik dan lancar di SMK YADIKA SOREANG.",
  "Sebagai lembaga pendidikan yang berkomitmen menghasilkan lulusan berkualitas, kami terus berupaya meningkatkan mutu pendidikan melalui peningkatan kompetensi tenaga pengajar, pembaruan kurikulum, serta pengembangan sarana dan prasarana yang mendukung proses belajar mengajar. Dengan semangat gotong royong dan kolaborasi seluruh civitas akademika, kami yakin mampu mencetak generasi muda yang kompeten, berkarakter, dan siap bersaing di dunia kerja maupun melanjutkan pendidikan ke jenjang yang lebih tinggi.",
  "Melalui sambutan ini, saya mengajak seluruh siswa, guru, staf, dan orang tua untuk bersama-sama membangun budaya belajar yang positif, inovatif, dan disiplin. Semoga kerja sama yang baik ini terus berlanjut dan membawa kemajuan bagi sekolah tercinta kita. Terima kasih.",
];

function SambutanKepsek() {
  return (
    <section className="bg-white px-4 py-10 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-inter text-3xl font-bold uppercase leading-tight tracking-wide text-gray-900 md:text-4xl">
          Sambutan Kepala Sekolah
        </h2>
        <span className="mt-4 block h-1 w-20 rounded-full bg-primary" />

        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Kolom Kiri — Foto Kepsek */}
          <div className="flex w-full lg:w-[35%]">
            <img
              src="/images/kepsek.jpg"
              alt="Yetti Nuraini, S.Pd., Gr. — Kepala Sekolah SMK YADIKA SOREANG"
              className="h-[400px] w-full rounded-2xl object-cover shadow-lg"
            />
          </div>

          {/* Kolom Kanan — Sambutan */}
          <div className="flex w-full flex-col lg:w-[65%]">
            {paragraphs.map((text) => (
              <p
                key={text.slice(0, 20)}
                className="mt-3 font-inter text-sm leading-relaxed text-gray-600 md:text-base"
              >
                {text}
              </p>
            ))}

            <div className="mt-3 h-px w-full bg-gray-200" />

            <p className="mt-8 font-inter text-[24px] font-bold text-gray-900 md:text-[28px]">
              Yetti Nuraini, S.Pd., Gr.
            </p>
            <p className="mt-1 font-inter text-[14px] font-medium text-gray-500 md:text-[16px]">
              Kepala Sekolah
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SambutanKepsek;
