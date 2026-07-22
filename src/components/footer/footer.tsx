import { NavLink } from "react-router-dom";
import { Phone, Printer, Mail, MapPin, ExternalLink } from "lucide-react";
import "./footer.css";
import Map from "./components/mapComponents";
import LogoYadika from "../../assets/Logo-yadika.webp";

const SCHOOL_COORDS: [number, number] = [-7.0237, 107.5365];
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${SCHOOL_COORDS[0]},${SCHOOL_COORDS[1]}`;

const footerLinks = [
  { label: "Beranda", to: "/" },
  { label: "Profil", to: "/profile" },
  { label: "Program Keahlian", to: "/jurusan" },
  { label: "PPDB", to: "/ppdb" },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-grid">
          {/* ---- Brand + Description ---- */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand">
              <img src={LogoYadika} alt="Logo SMK Yadika" className="footer-logo" />
              <div className="footer-brand-text">
                <span>SMK YADIKA</span>
                <span>SOREANG</span>
              </div>
            </div>
            <p className="footer-desc">
              SMK Yadika Soreang merupakan lembaga pendidikan menengah kejuruan
              yang berkomitmen mencetak lulusan kompeten, berkarakter, dan siap
              bersaing di dunia industri maupun dunia usaha.
            </p>
          </div>

          {/* ---- Navigasi ---- */}
          <div className="footer-col footer-col-nav">
            <h4>Navigasi</h4>
            <ul className="footer-nav-list">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      isActive ? "footer-nav-link active" : "footer-nav-link"
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- Hubungi Kami ---- */}
          <div className="footer-col footer-col-contact">
            <h4>Hubungi Kami</h4>
            <ul className="footer-contact-list">
              <li>
                <Phone size={14} className="footer-contact-icon" />
                <div>
                  <span className="footer-contact-label">Telp</span>
                  <span className="footer-contact-value">(022) 5880577</span>
                </div>
              </li>
              <li>
                <Printer size={14} className="footer-contact-icon" />
                <div>
                  <span className="footer-contact-label">Fax</span>
                  <span className="footer-contact-value">(022) 588 0780</span>
                </div>
              </li>
              <li>
                <Mail size={14} className="footer-contact-icon" />
                <div>
                  <span className="footer-contact-label">Email</span>
                  <span className="footer-contact-value">smkyadikasoreang@yahoo.com</span>
                </div>
              </li>
              <li className="footer-contact-address">
                <MapPin size={14} className="footer-contact-icon" />
                <div>
                  <span className="footer-contact-label">Alamat</span>
                  <span className="footer-contact-value">
                    Jl. Raya Soreang, Bandung, Jawa Barat
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* ---- Map ---- */}
          <div className="footer-col footer-col-map">
            <h4>Lokasi Sekolah</h4>
            <div className="footer-map-wrapper">
              <div className="footer-map-frame">
                <Map />
              </div>
              <p className="footer-address">
                Jl. Raya Soreang, Bandung, Jawa Barat
              </p>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-maps-btn"
              >
                <ExternalLink size={13} />
                Buka di Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* ---- Sponsors ---- */}
        <div className="footer-sponsors-section">
          <h4>Sponsor</h4>
          <div className="footer-sponsor-list">
            <div className="footer-box">LOGO SEKDUS</div>
            <div className="footer-box">LOGO SPONSOR</div>
          </div>
        </div>
      </div>

      {/* ---- Copyright ---- */}
      <div className="footer-copyright">
        <span>&copy; {new Date().getFullYear()} SMK Yadika Soreang. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
