import { NavLink } from "react-router-dom";
import "./footer.css";
import Map from "./components/mapComponents";
import LogoYadika from "../../assets/Logo-yadika.webp";

const MAP_URL = "https://maps.app.goo.gl/wmPubZc1ZCd1dBfC9";

const footerLinks = [
  { label: "Beranda", to: "/" },
  { label: "Profil", to: "/profile" },
  { label: "Program Keahlian", to: "/profile" },
  { label: "PPDB", to: "/profile" },
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

          {/* ---- Map ---- */}
          <div className="footer-col footer-col-map">
            <h4>Lokasi Sekolah</h4>
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
          </div>
        </div>

        {/* ---- Sponsors + Contact (bottom row) ---- */}
        <div className="footer-bottom-row">
          <div className="footer-col footer-col-sponsors">
            <h4>Sponsor</h4>
            <div className="footer-sponsor-list">
              <div className="footer-box">LOGO SEKDUS</div>
              <div className="footer-box">LOGO SPONSOR</div>
            </div>
          </div>

          <div className="footer-col footer-col-contact">
            <h4>Hubungi Kami</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="footer-contact-label">Telp</span>
                (022) 5880577
              </li>
              <li>
                <span className="footer-contact-label">Fax</span>
                (022) 588 0780
              </li>
              <li>
                <span className="footer-contact-label">Email</span>
                smkyadikasoreang@yahoo.com
              </li>
              <li>
                <span className="footer-contact-label">Alamat</span>
                Jl. Raya Soreang, Bandung, Jawa Barat
              </li>
            </ul>
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
