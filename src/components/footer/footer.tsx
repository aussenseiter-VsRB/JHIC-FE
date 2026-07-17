import "./footer.css";
import Map from "./components/mapComponents";
import LogoYadika from "../../assets/Logo-yadika.webp";

const MAP_URL = "https://maps.app.goo.gl/wmPubZc1ZCd1dBfC9";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* ---- Brand ---- */}
        <div className="footer-area footer-brand">
          <img src={LogoYadika} alt="Logo SMK Yadika" className="footer-logo" />
          <div className="footer-brand-text">
            <span>SMK YADIKA</span>
            <span>SOREANG</span>
          </div>
        </div>

        {/* ---- Description ---- */}
        <div className="footer-area footer-desc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* ---- Sponsors ---- */}
        <div className="footer-area footer-sponsors">
          <div className="footer-box">LOGO SEKDUS</div>
          <div className="footer-box">LOGO SPONSOR</div>
        </div>

        {/* ---- Partners ---- */}
        <div className="footer-area footer-partners">
          <div className="footer-box">LOGO SEKDUS</div>
          <div className="footer-box">LOGO SEKDUS</div>
          <div className="footer-box">LOGO SEKDUS</div>
          <div className="footer-box">LOGO SEKDUS</div>
        </div>

        {/* ---- Map ---- */}
        <div className="footer-area footer-map">
          <h3>Lokasi Sekolah</h3>
          <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="footer-map-link">
            <div className="footer-map-frame">
              <Map />
            </div>
          </a>
        </div>

        {/* ---- Contact ---- */}
        <div className="footer-area footer-contact">
          <p>SOSMED, EMAIL, DAN NOMER HP</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
