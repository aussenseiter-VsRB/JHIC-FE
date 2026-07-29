import { ArrowRight, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#1A365D]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-[100px] max-md:px-5 max-md:py-[72px]">
        <div className="reveal mx-auto flex max-w-[640px] flex-col items-center text-center">
          <GraduationCap className="mb-6 text-[#60A5FA]" size={48} />
          <h2 className="font-heading m-0 mb-4 text-[clamp(1.6rem,3vw,2.5rem)] font-extrabold leading-[1.2] -tracking-[0.02em] text-white">
            Siap Bergabung dengan SMK Yadika Soreang?
          </h2>
          <p className="m-0 mb-9 text-[1.05rem] leading-[1.7] text-[rgba(241,245,249,0.65)]">
            Daftarkan dirimu sekarang dan wujudkan masa depan cerah bersama kami
          </p>
          <Link
            to="/ppdb"
            className="group inline-flex items-center gap-2.5 rounded-xl bg-[#2563EB] px-9 py-4 font-poppins text-[1rem] font-semibold text-white no-underline shadow-[0_4px_20px_rgba(37,99,235,0.3)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-[0_8px_32px_rgba(37,99,235,0.4)]"
          >
            Daftar PPDB Sekarang <ArrowRight size={18} className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
