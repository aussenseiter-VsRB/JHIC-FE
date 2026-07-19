import { Link } from "react-router-dom";
import "../../jurusan/css/jurusan.css";

function PageAkuntansi() {
  return (
    <div className="jurusan-specific">
      <div className="jurusan-specific-header">
        <Link to="/jurusan" className="jurusan-back">
          &larr; Kembali ke Program Keahlian
        </Link>
        <span className="jurusan-specific-code">AKL</span>
        <h1 className="jurusan-specific-title">
          Akuntansi dan Keuangan
        </h1>
        <p className="jurusan-specific-desc">
          Mempelajari pembukuan, laporan keuangan, perpajakan, dan
          administrasi keuangan secara profesional.
        </p>
      </div>

      <div className="jurusan-specific-content">
        <h2>Yang Dipelajari</h2>
        <ul>
          <li>Pembukuan dan akuntansi dasar</li>
          <li>Akuntansi keuangan dan manajemen</li>
          <li>Perpajakan (PPN, PPh)</li>
          <li>Software akuntansi (MYOB, Accurate)</li>
          <li>Administrasi keuangan dan bank</li>
        </ul>
      </div>

      <div className="jurusan-specific-content">
        <h2>Peluang Karir</h2>
        <p>
          Lulusan AKL dapat bekerja sebagai Staff Accounting, Kasir,
          Administrasi Keuangan, Tax Consultant, atau melanjutkan studi ke
          bidang akuntansi dan manajemen keuangan.
        </p>
      </div>
    </div>
  );
}

export default PageAkuntansi;
