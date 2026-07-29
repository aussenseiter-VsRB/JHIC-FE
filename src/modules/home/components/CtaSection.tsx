import { ArrowRight, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

function CtaSection() {
  return (
    <section className="cta-section">
      <div className="cta-section-container">
        <div className="cta-content reveal">
          <GraduationCap className="cta-icon" size={48} />
          <h2 className="cta-heading">Siap Bergabung dengan SMK Yadika Soreang?</h2>
          <p className="cta-subtitle">
            Daftarkan dirimu sekarang dan wujudkan masa depan cerah bersama kami
          </p>
          <Link to="/ppdb" className="cta-button">
            Daftar PPDB Sekarang <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
