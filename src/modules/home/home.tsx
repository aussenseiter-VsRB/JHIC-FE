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
    <div className="home">
      <Hero />
      <About />
      <section className="mitra-section">
        <div className="section-container">
          <h2 className="section-title">Mitra Industri</h2>
          <p className="section-subtitle">
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
              <div className="mitra-logo-container">
                <span className="mitra-logo-icon">{logo.node}</span>
                <span className="mitra-logo-title">{logo.title}</span>
              </div>
            );
          }}
        />
      </section>
      <Programs />
    </div>
  );
}

export default Home;
