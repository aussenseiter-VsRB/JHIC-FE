import JurusanCard from "../components/JurusanCard";
import "../css/jurusan.css";

const jurusanList = [
  {
    name: "Pemrograman Perangkat Lunak dan Gim",
    code: "PPLG",
    slug: "pplg",
    description:
      "Mempelajari pengembangan perangkat lunak, website, mobile apps, dan pembuatan gim interaktif.",
  },
  {
    name: "Akuntansi dan Keuangan",
    code: "AKL",
    slug: "akuntansi",
    description:
      "Mempelajari pembukuan, laporan keuangan, perpajakan, dan administrasi keuangan.",
  },
  {
    name: "Perhotelan dan Jasa Pariwisata",
    code: "HOTEL",
    slug: "hotel",
    description:
      "Mempelajari tata graha, tata boga, front office, dan layanan perhotelan profesional.",
  },
];

function PageJurusan() {
  return (
    <div className="jurusan-page">
      <div className="jurusan-container">
        <div className="jurusan-header">
          <h1 className="jurusan-title">Program Keahlian</h1>
          <p className="jurusan-subtitle">
            Pilih jurusan yang sesuai dengan minat dan bakatmu
          </p>
        </div>
        <div className="jurusan-grid">
          {jurusanList.map((jurusan) => (
            <JurusanCard key={jurusan.slug} {...jurusan} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PageJurusan;
