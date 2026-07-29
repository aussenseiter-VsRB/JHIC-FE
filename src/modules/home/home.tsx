import {
  Building2,
  Factory,
  Briefcase,
  GraduationCap,
  Handshake,
  Landmark,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import type { ReactNode } from "react";
import "./css/home.css";
import Hero from "./components/Hero";
import About from "./components/About";
import LogoLoop from "./components/LogoLoop";
import Programs from "./components/Programs";
import BeritaPreview from "./components/BeritaPreview";
import CtaSection from "./components/CtaSection";
import Testimonials from "./components/Testimonials";

const mitraLogos: { node: ReactNode; title: string }[] = [
  { node: <Building2 size={32} />, title: "PT Teknologi Nusantara" },
  { node: <Factory size={32} />, title: "PT Manufaktur Jaya" },
  { node: <Briefcase size={32} />, title: "PT Digital Solusi" },
  { node: <GraduationCap size={32} />, title: "Yayasan Pendidikan Yadika" },
  { node: <Handshake size={32} />, title: "PT Karya Bersama" },
  { node: <Landmark size={32} />, title: "Bank Pembangunan Daerah" },
  { node: <ShieldCheck size={32} />, title: "PT Asuransi Utama" },
  { node: <Cpu size={32} />, title: "PT Sistem Mikro Elektronik" },
];

function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <section className="bg-white py-[45px]">
        <div className="reveal mx-auto max-w-[1200px] px-6 pb-10 max-md:px-5">
          <h2 className="mb-4 text-center text-[2rem] font-extrabold -tracking-[0.02em] text-[#1E3A5F]">
            Mitra Industri
          </h2>
          <p className="mb-12 text-center text-[1.1rem] text-[#64748B]">
            Bermitra dengan berbagai perusahaan terkemuka untuk mendukung
            pendidikan dan karier siswa
          </p>
        </div>
        <LogoLoop
          logos={mitraLogos}
          speed={60}
          logoHeight={56}
          gap={24}
          pauseOnHover
          fadeOut
          fadeOutColor="#ffffff"
          renderItem={(item) => {
            const logo = item as { node: ReactNode; title: string };
            return (
              <div className="flex min-w-[160px] min-h-[100px] flex-col items-center justify-center gap-2.5 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] px-8 py-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#cbd5e1] hover:shadow-[0_8px_24px_rgba(30,58,95,0.08)]">
                <span className="flex items-center justify-center text-[#2563eb]">
                  {logo.node}
                </span>
                <span className="whitespace-nowrap text-center text-[0.75rem] font-semibold leading-[1.3] text-[#64748b]">
                  {logo.title}
                </span>
              </div>
            );
          }}
        />
      </section>
      <Programs />
      <BeritaPreview />
      <CtaSection />
      <Testimonials />
    </div>
  );
}

export default Home;
