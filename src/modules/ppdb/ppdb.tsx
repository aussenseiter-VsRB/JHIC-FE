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

function Ppdb() {
  return (
    <div className="ppdb">
      <PpdbHero />

      <div className="ppdb-container">
        {/* Timeline Section */}
        <VerticalTimeline />

        {/* Registration Steps */}
        <RegistrationSteps />

        {/* Registration Wave */}
        <RegistrationWave />

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
        <div className="ppdb-cta-section reveal" id="daftar">
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
