import { ArrowRight, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

function CtaSection() {
  return (
    <section className="home-cta">
      <div className="home-cta-dots" />
      <div className="home-cta-container">
        <div className="reveal home-cta-content">
          <GraduationCap className="home-cta-icon" size={48} />
          <h2 className="font-heading home-cta-title">
            Siap Bergabung dengan SMK Yadika Soreang?
          </h2>
          <p className="home-cta-text">
            Daftarkan dirimu sekarang dan wujudkan masa depan cerah bersama kami
          </p>
          <Link
            to="/ppdb"
            className="font-poppins home-cta-button"
          >
            Daftar PPDB Sekarang <ArrowRight className="home-cta-button-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
