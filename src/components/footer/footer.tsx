import { NavLink } from "react-router-dom";
import { Phone, Printer, Mail, MapPin, Navigation } from "lucide-react";
import "./footer.css";
import Map from "./components/mapComponents";
import LogoYadika from "../../assets/Logo-yadika.webp";

const MAP_URL = "https://maps.app.goo.gl/wmPubZc1ZCd1dBfC9";
const GOOGLE_MAPS_COORDS =
  "https://www.google.com/maps/search/?api=1&query=-7.0237,107.5365";

const footerLinks = [
  { label: "Beranda", to: "/" },
  { label: "Profil", to: "/profile" },
  { label: "Program Keahlian", to: "/profile" },
  { label: "PPDB", to: "/profile" },
];

const sponsorLogos: { src: string; alt: string }[] = [];

const ADDRESS =
  "Jl. Raya Soreang No.1, Soreang, Kec. Soreang, Kabupaten Bandung, Jawa Barat 40915";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-grid">
          {/* ---- Brand + Description ---- */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand">
              <img
                src={LogoYadika}
                alt="Logo SMK Yadika"
                className="footer-logo"
              />
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

          {/* ---- Map ---- */}
          <div className="footer-col footer-col-map">
            <h4>Lokasi Sekolah</h4>
            <div className="footer-map-wrapper">
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-map-link"
              >
                <div className="footer-map-frame">
                  <Map />
                </div>
              </a>
              <p className="footer-address">
                <MapPin size={14} className="footer-address-icon" />
                {ADDRESS}
              </p>
              <a
                href={GOOGLE_MAPS_COORDS}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-maps-btn"
              >
                <Navigation size={14} />
                Buka di Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* ---- Sponsors + Contact (bottom row) ---- */}
        <div
          className={
            sponsorLogos.length > 0
              ? "footer-bottom-row footer-bottom-row--split"
              : "footer-bottom-row"
          }
        >
          {/* Sponsors – hidden when no logos */}
          {sponsorLogos.length > 0 && (
            <div className="footer-col footer-col-sponsors">
              <h4>Sponsor</h4>
              <div className="footer-sponsor-list">
                {sponsorLogos.map((logo) => (
                  <div key={logo.alt} className="footer-sponsor-logo">
                    <img src={logo.src} alt={logo.alt} />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="footer-col footer-col-contact">
            <h4>Hubungi Kami</h4>
            <ul className="footer-contact-list">
              <li>
                <Phone size={15} className="footer-contact-icon" />
                <span className="footer-contact-label">Telp</span>
                <span>(022) 5880577</span>
              </li>
              <li>
                <Printer size={15} className="footer-contact-icon" />
                <span className="footer-contact-label">Fax</span>
                <span>(022) 588 0780</span>
              </li>
              <li>
                <Mail size={15} className="footer-contact-icon" />
                <span className="footer-contact-label">Email</span>
                <span>smkyadikasoreang@yahoo.com</span>
              </li>
              <li className="footer-contact-address">
                <MapPin size={15} className="footer-contact-icon" />
                <span className="footer-contact-label">Alamat</span>
                <span>{ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---- Copyright ---- */}
      <div className="footer-copyright">
        <span>
          &copy; {new Date().getFullYear()} SMK Yadika Soreang. All rights
          reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
