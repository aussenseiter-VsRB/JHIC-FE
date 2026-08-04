import {
  Building2, Factory, Briefcase, GraduationCap,
  Handshake, Landmark, ShieldCheck, Cpu,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import "./css/home.css";
import Hero from "./components/Hero";
import About from "./components/About";
import HomeDecor from "./components/HomeDecor";
import LogoLoop from "./components/LogoLoop";
import Programs from "./components/Programs";
import BeritaPreview from "./components/BeritaPreview";
import CtaSection from "./components/CtaSection";
import Testimonials from "./components/Testimonials";
import mitraData from "./data/mitra.json";

const mitraIconMap: Record<string, LucideIcon> = {
  Building2, Factory, Briefcase, GraduationCap, Handshake, Landmark, ShieldCheck, Cpu,
};

const mitraLogos: { node: ReactNode; title: string }[] = mitraData.map((m) => {
  const Icon = mitraIconMap[m.icon];
  return { node: <Icon size={32} />, title: m.title };
});

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <section className="home-mitra">
        <HomeDecor />
        <div className="reveal home-mitra-header">
          <h2 className="font-heading home-mitra-title">
            Mitra Industri
          </h2>
          <p className="home-mitra-subtitle">
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
              <div className="home-mitra-card">
                <span className="home-mitra-card-icon">
                  {logo.node}
                </span>
                <span className="home-mitra-card-label">
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
