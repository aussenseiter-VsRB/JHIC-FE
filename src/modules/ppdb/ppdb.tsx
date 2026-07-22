import { FileText, CheckCircle, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import "./css/ppdb.css";
import RegistrationSteps from "./components/RegistrationSteps";
import RegistrationWave from "./components/RegistrationWave";

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
        <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
          <svg className="wave-scroll" viewBox="0 0 2880 120" fill="none" preserveAspectRatio="none" style={{ width: '200%', height: '80px' }}>
            <path d="M0,80 C320,120 420,40 720,80 C1020,120 1120,40 1440,80 C1760,120 1860,40 2160,80 C2460,120 2560,40 2880,80 L2880,120 L0,120 Z" fill="#F5F5F5" />
          </svg>
        </div>
      </div>

      <div className="ppdb-container">
        {/* Timeline Section */}
        <div className="ppdb-section reveal">
          <h2 className="ppdb-section-title">Tahap Pendaftaran</h2>
          <span className="ppdb-section-accent" />
          <div className="ppdb-steps">
            {steps.map((step, i) => (
              <div key={step.step} className={`ppdb-step reveal reveal-delay-${i + 1}`}>
                <span className="ppdb-step-number">{step.step}</span>
                <h3 className="ppdb-step-title">{step.title}</h3>
                <p className="ppdb-step-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Steps */}
        <RegistrationSteps />

        {/* Registration Wave */}
        <RegistrationWave />

        {/* Requirements Section */}
        <div className="ppdb-section ppdb-section-alt reveal">
          <h2 className="ppdb-section-title">Persyaratan</h2>
          <span className="ppdb-section-accent" />
          <div className="ppdb-requirements">
            {requirements.map((req, i) => (
              <div key={i} className="ppdb-requirement">
                <CheckCircle className="h-5 w-5 text-sky" />
                <span>{req}</span>
              </div>
            ))}
          </div>
        </div>
        {/* CTA Section */}
        <div className="ppdb-cta-section reveal">
          <div className="ppdb-cta-content">
            <FileText className="h-8 w-8 text-blue" />
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
        <div className="ppdb-section reveal">
          <h2 className="ppdb-section-title">Hubungi Kami</h2>
          <span className="ppdb-section-accent" />
          <div className="ppdb-contact">
            <div className="ppdb-contact-item">
              <Phone className="h-5 w-5 text-blue" />
              <div>
                <span className="ppdb-contact-label">Telepon</span>
                <span className="ppdb-contact-value">(022) 5880577</span>
              </div>
            </div>
            <div className="ppdb-contact-item">
              <Mail className="h-5 w-5 text-blue" />
              <div>
                <span className="ppdb-contact-label">Email</span>
                <span className="ppdb-contact-value">smkyadikasoreang@yahoo.com</span>
              </div>
            </div>
            <div className="ppdb-contact-item">
              <MapPin className="h-5 w-5 text-blue" />
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
