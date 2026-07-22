import { FileText, CheckCircle, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import "./css/ppdb.css";

const requirements = [
  "Fotokopi Ijazah SMA/SMP (2 lembar)",
  "Fotokopi SKHUN (2 lembar)",
  "Fotokopi Kartu Keluarga (2 lembar)",
  "Fotokopi Akta Kelahiran (2 lembar)",
  "Pas foto 3x4 (4 lembar)",
  "Surat Keterangan Sehat dari Dokter",
  "Surat Keterangan Tidak Buta Warna",
];

const steps = [
  { step: "01", title: "Daftar Online", description: "Isi formulir pendaftaran secara online melalui website resmi." },
  { step: "02", title: "Verifikasi Berkas", description: "Serahkan berkas fisik ke panitia PPDB untuk verifikasi." },
  { step: "03", title: "Tes Seleksi", description: "Ikuti tes seleksi sesuai jadwal yang telah ditentukan." },
  { step: "04", title: "Daftar Ulang", description: "Lakukan daftar ulang dan pembayaran biaya pendidikan." },
];

function Ppdb() {
  return (
    <div className="ppdb">
      <div className="ppdb-header-section">
        <div className="ppdb-header-content">
          <span className="ppdb-badge">PPDB 2026/2027</span>
          <h1 className="ppdb-title">Penerimaan Peserta Didik Baru</h1>
          <p className="ppdb-subtitle">
            Bergabunglah bersama kami dan wujudkan masa depanmu di SMK Yadika Soreang
          </p>
        </div>
      </div>

      <div className="ppdb-container">
        {/* Timeline Section */}
        <div className="ppdb-section">
          <h2 className="ppdb-section-title">Tahap Pendaftaran</h2>
          <span className="ppdb-section-accent" />
          <div className="ppdb-steps">
            {steps.map((step) => (
              <div key={step.step} className="ppdb-step">
                <span className="ppdb-step-number">{step.step}</span>
                <h3 className="ppdb-step-title">{step.title}</h3>
                <p className="ppdb-step-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements Section */}
        <div className="ppdb-section ppdb-section-alt">
          <h2 className="ppdb-section-title">Persyaratan</h2>
          <span className="ppdb-section-accent" />
          <div className="ppdb-requirements">
            {requirements.map((req, i) => (
              <div key={i} className="ppdb-requirement">
                <CheckCircle className="h-5 w-5 text-teal" />
                <span>{req}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="ppdb-cta-section">
          <div className="ppdb-cta-content">
            <FileText className="h-8 w-8 text-amber" />
            <h2 className="ppdb-cta-title">Siap untuk Mendaftar?</h2>
            <p className="ppdb-cta-desc">
              Jangan lewatkan kesempatan untuk menjadi bagian dari SMK Yadika Soreang.
            </p>
            <a href="#" className="ppdb-cta-button">
              Daftar Sekarang <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="ppdb-section">
          <h2 className="ppdb-section-title">Hubungi Kami</h2>
          <span className="ppdb-section-accent" />
          <div className="ppdb-contact">
            <div className="ppdb-contact-item">
              <Phone className="h-5 w-5 text-amber" />
              <div>
                <span className="ppdb-contact-label">Telepon</span>
                <span className="ppdb-contact-value">(022) 5880577</span>
              </div>
            </div>
            <div className="ppdb-contact-item">
              <Mail className="h-5 w-5 text-amber" />
              <div>
                <span className="ppdb-contact-label">Email</span>
                <span className="ppdb-contact-value">smkyadikasoreang@yahoo.com</span>
              </div>
            </div>
            <div className="ppdb-contact-item">
              <MapPin className="h-5 w-5 text-amber" />
              <div>
                <span className="ppdb-contact-label">Alamat</span>
                <span className="ppdb-contact-value">Jl. Raya Soreang, Bandung, Jawa Barat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ppdb;
