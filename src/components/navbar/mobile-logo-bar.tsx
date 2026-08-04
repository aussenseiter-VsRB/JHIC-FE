import { NavLink } from "react-router";
import logoSrc from "../../assets/Logo-yadika.webp";
import "./navbar.css";

function MobileLogoBar() {
  return (
    <nav className="mobile-logo-bar" role="navigation" aria-label="Main navigation">
      <div className="mobile-logo-bar-inner">
        <NavLink to="/" aria-label="SMK YADIKA SOREANG - Beranda" className="navbar-logo-link">
          <img src={logoSrc} alt="SMK YADIKA SOREANG" className="navbar-logo" />
        </NavLink>
      </div>
    </nav>
  );
}

export default MobileLogoBar;
