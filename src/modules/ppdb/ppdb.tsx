import { FileText, CheckCircle, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router";
import "./css/ppdb.css";
import PpdbHero from "./components/PpdbHero";
import RegistrationSteps from "./components/RegistrationSteps";
import RegistrationWave from "./components/RegistrationWave";
import VerticalTimeline from "./components/VerticalTimeline";
import ppdbData from "./ppdb.json";

function Ppdb() {
  return (
    <div className="ppdb">
      <PpdbHero />

      <div className="ppdb-container">
        <VerticalTimeline />
        <RegistrationSteps />
        <RegistrationWave />
        <div className="ppdb-section ppdb-section-alt reveal">
          <h2 className="ppdb-section-title">Persyaratan</h2>
          <span className="ppdb-section-accent" />
          <div className="ppdb-requirements">
            {ppdbData.requirements.map((req, i) => (
              <div key={i} className="ppdb-requirement">
                <CheckCircle className="h-5 w-5 text-sky" />
                <span>{req}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="ppdb-cta-section reveal" id="daftar">
          <div className="ppdb-cta-content">
            <FileText className="h-8 w-8 text-blue" />
            <h2 className="ppdb-cta-title">Siap untuk Mendaftar?</h2>
            <p className="ppdb-cta-desc">
              Jangan lewatkan kesempatan untuk menjadi bagian dari SMK Yadika Soreang.
            </p>
            <Link to="/daftar" className="ppdb-cta-button">
              Daftar Sekarang <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

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
