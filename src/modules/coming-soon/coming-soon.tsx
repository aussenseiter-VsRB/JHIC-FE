import { ArrowLeft, Clock } from "lucide-react";
import { Link } from "react-router";
import "./css/coming-soon.css";

function ComingSoon() {
  return (
    <div className="coming-soon bg-pearl pt-32 pb-20">
      <div className="coming-soon-container">
        <div className="coming-soon-card">
          <div className="coming-soon-icon">
            <Clock className="h-10 w-10" />
          </div>
          <h1 className="coming-soon-title font-heading">Coming Soon</h1>
          <p className="coming-soon-text">
            Halaman ini sedang dipersiapkan. Silakan kembali lagi nanti.
          </p>
          <Link to="/" className="coming-soon-btn">
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
