import { Link } from "react-router-dom";
import "../../jurusan/css/jurusan.css";

function PageHotel() {
  return (
    <div className="jurusan-specific">
      <div className="jurusan-specific-header">
        <Link to="/jurusan" className="jurusan-back">
          &larr; Kembali ke Program Keahlian
        </Link>
        <span className="jurusan-specific-code">HOTEL</span>
        <h1 className="jurusan-specific-title">
          Perhotelan dan Jasa Pariwisata
        </h1>
        <p className="jurusan-specific-desc">
          Mempelajari tata graha, tata boga, front office, dan layanan
          perhotelan profesional berskala internasional.
        </p>
      </div>

      <div className="jurusan-specific-content">
        <h2>Yang Dipelajari</h2>
        <ul>
          <li>Front Office dan reservasi</li>
          <li>Tata graha (housekeeping)</li>
          <li>Tata boga dan product knowledge</li>
          <li>Service excellence dan komunikasi</li>
          <li>Manajemen operasional hotel</li>
        </ul>
      </div>

      <div className="jurusan-specific-content">
        <h2>Peluang Karir</h2>
        <p>
          Lulusan Perhotelan dapat bekerja sebagai Front Office, Housekeeping
          Supervisor, Chef, Barista, atau melanjutkan studi ke program
          pariwisata dan hospitality di perguruan tinggi.
        </p>
      </div>
    </div>
  );
}

export default PageHotel;
