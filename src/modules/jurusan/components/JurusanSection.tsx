import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import jurusanPplg from "../../../assets/jurusan-pplg.svg";
import jurusanHtl from "../../../assets/jurusan-htl.svg";
import jurusanAk from "../../../assets/jurusan-ak.svg";

interface JurusanItem {
  code: string;
  name: string;
  paragraphs: string[];
  image: string;
  slug: string;
}

const jurusanList: JurusanItem[] = [
  {
    code: "PPLG",
    name: "Pengembangan Perangkat Lunak dan Gim",
    slug: "pplg",
    image: jurusanPplg,
    paragraphs: [
      "Jurusan PPLG (Pengembangan Perangkat Lunak dan Gim) adalah program keahlian yang berfokus pada pengembangan teknologi digital. Siswa akan belajar menciptakan perangkat lunak, membangun aplikasi web dan mobile, serta merancang gim interaktif dari dasar hingga siap pakai.",
      "Kurikulum PPLG mencakup pemrograman web menggunakan HTML, CSS, JavaScript, dan PHP, pengelolaan basis data, pengembangan aplikasi mobile dengan Flutter, hingga desain dan pengembangan gim menggunakan Unity dan Godot. Setiap materi dirancang untuk membangun kompetensi teknis yang kuat.",
      "Lulusan PPLG memiliki peluang karier yang luas sebagai Web Developer, Mobile Developer, Game Developer, atau UI/UX Designer. Dengan pesatnya transformasi digital di berbagai sektor, kebutuhan akan lulusan PPLG terus meningkat setiap tahunnya.",
    ],
  },
  {
    code: "HTL",
    name: "Perhotelan dan Jasa Pariwisata",
    slug: "hotel",
    image: jurusanHtl,
    paragraphs: [
      "Jurusan HTL (Perhotelan dan Jasa Pariwisata) merupakan program keahlian yang mempersiapkan siswa untuk berkarier di industri perhotelan dan pariwisata. Siswa akan mempelajari tata graha, tata boga, layanan front office, serta manajemen operasional hotel secara profesional.",
      "Materi pembelajaran HTL meliputi front office dan reservasi, housekeeping, tata boga dan product knowledge, service excellence, serta manajemen operasional hotel. Pembelajaran dilakukan dengan praktik langsung di laboratorium perhotelan yang lengkap.",
      "Lulusan HTL dapat bekerja sebagai Front Office, Housekeeping Supervisor, Chef, Barista, atau melanjutkan studi ke program pariwisata dan hospitality. Industri perhotelan yang terus berkembang membuka banyak peluang bagi lulusan yang kompeten.",
    ],
  },
  {
    code: "AK",
    name: "Akuntansi dan Keuangan",
    slug: "akuntansi",
    image: jurusanAk,
    paragraphs: [
      "Jurusan AK (Akuntansi dan Keuangan) adalah program keahlian yang membekali siswa dengan kemampuan mengelola pembukuan, menyusun laporan keuangan, memahami perpajakan, dan menjalankan administrasi keuangan secara profesional dan akurat.",
      "Pembelajaran di jurusan AK mencakup akuntansi dasar dan keuangan, perpajakan (PPN, PPh), penggunaan software akuntansi seperti MYOB dan Accurate, serta administrasi keuangan dan perbankan. Siswa dilatih untuk teliti dan memiliki integritas tinggi.",
      "Lulusan AK memiliki prospek karier sebagai Staff Accounting, Kasir, Administrasi Keuangan, atau Tax Consultant. Hampir setiap perusahaan membutuhkan tenaga akuntansi, sehingga lulusan AK memiliki peluang kerja yang sangat luas.",
    ],
  },
];

function JurusanItemCard({
  item,
  index,
}: {
  item: JurusanItem;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-[100px] last:mb-0"
    >
      <div className={`order-1 ${isEven ? "md:order-2" : ""}`}>
        <motion.img
          src={item.image}
          alt={`Foto ${item.name}`}
          loading="lazy"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full aspect-[4/3] rounded-[20px] object-cover shadow-lg"
        />
      </div>

      <div
        className={`order-2 flex flex-col gap-4 text-center md:text-left ${isEven ? "md:order-1" : ""}`}
      >
        <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
          {item.code}
        </span>

        <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight">
          {item.name}
        </h3>

        {item.paragraphs.map((paragraph, i) => (
          <p key={i} className="text-base leading-relaxed text-[#6B7280]">
            {paragraph}
          </p>
        ))}

        <div className="mt-2">
          <Link
            to={`/jurusan/${item.slug}`}
            className="inline-flex items-center gap-2 bg-black text-white rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 hover:bg-gray-800"
          >
            Pelajari Lebih Lanjut
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function JurusanSection() {
  return (
    <section className="bg-white py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-20 leading-tight"
        >
          Belajar Apa Aja di Yadika
        </motion.h2>

        {jurusanList.map((item, index) => (
          <JurusanItemCard key={item.code} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

export default JurusanSection;
