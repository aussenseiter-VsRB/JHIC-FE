import "./css/home.css";
import Hero from "./components/Hero";
import About from "./components/About";
import HomeDecor from "./components/HomeDecor";
import LogoLoop from "./components/LogoLoop";
import type { LogoItem } from "./components/LogoLoop";
import Programs from "./components/Programs";
import NexxaMatchBanner from "./components/NexxaMatchBanner";
import BeritaPreview from "./components/BeritaPreview";
import CtaSection from "./components/CtaSection";
import Testimonials from "./components/Testimonials";
import mitraData from "./data/mitra.json";
import placeholder from "../../assets/placeholder.svg";
import nextitLogo from "../../assets/mitra pplg/nextit.png";
import bankbjbLogo from "../../assets/mitra akl/bankbjb1.png";
import pegadaianLogo from "../../assets/mitra akl/pegadaian.png";
import astonpasteurLogo from "../../assets/mitra hotel/astonpasteur.jpeg";
import courtyardLogo from "../../assets/mitra hotel/courtyard.png";
import elroyaleLogo from "../../assets/mitra hotel/elroyale.png";
import forresthillLogo from "../../assets/mitra hotel/forresthill.jpeg";
import gaiaLogo from "../../assets/mitra hotel/gaia.webp";
import grandmercureLogo from "../../assets/mitra hotel/grandmercure.jpg";
import grandsunshineLogo from "../../assets/mitra hotel/grandsunshine.png";
import grandtjokroLogo from "../../assets/mitra hotel/grandtjokro.jpeg";
import horisonLogo from "../../assets/mitra hotel/horison.png";
import kimayaLogo from "../../assets/mitra hotel/kimaya.png";
import moxyLogo from "../../assets/mitra hotel/moxy.jpeg";
import padmaLogo from "../../assets/mitra hotel/padma.png";
import sutanrajaLogo from "../../assets/mitra hotel/sutanraja.jpg";
import waringinLogo from "../../assets/mitra hotel/waringinhospitality.jpg";
import zahirLogo from "../../assets/mitra akl/PTZahir.png";
import yogyaGroupLogo from "../../assets/mitra akl/Yogya_Group.svg";
import indonusaLogo from "../../assets/mitra pplg/indonusa.jpeg";
import kelolaBizLogo from "../../assets/mitra pplg/kelola_biz_logo.jpeg";
import diskominfoLogo from "../../assets/mitra pplg/logo_diskominfo.png";
import sampulkreativLogo from "../../assets/mitra pplg/sampulkreativ_technology_logo.jpeg";

const mitraLogoMap: Record<string, string> = {
  nextit: nextitLogo,
  bankbjb: bankbjbLogo,
  pegadaian: pegadaianLogo,
  astonpasteur: astonpasteurLogo,
  courtyard: courtyardLogo,
  elroyale: elroyaleLogo,
  forresthill: forresthillLogo,
  gaia: gaiaLogo,
  grandmercure: grandmercureLogo,
  grandsunshine: grandsunshineLogo,
  grandtjokro: grandtjokroLogo,
  horison: horisonLogo,
  kimaya: kimayaLogo,
  moxy: moxyLogo,
  padma: padmaLogo,
  sutanraja: sutanrajaLogo,
  waringin: waringinLogo,
  zahir: zahirLogo,
  yogyagroup: yogyaGroupLogo,
  indonusa: indonusaLogo,
  kelolabiz: kelolaBizLogo,
  diskominfo: diskominfoLogo,
  sampulkreativ: sampulkreativLogo,
};

const mitraLogos: LogoItem[] = mitraData
  .map((m) => ({ src: mitraLogoMap[m.logo], alt: m.title, title: m.title }))
  .filter((m) => m.src);

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
          logoHeight={110}
          gap={48}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          renderItem={(item) => {
            const logo = item as Extract<LogoItem, { src: string }>;
            return (
              <span className="home-mitra-logo-wrap">
                <img
                  className="home-mitra-card-logo"
                  src={logo.src}
                  alt={logo.alt ?? logo.title ?? ""}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.src = placeholder;
                  }}
                />
                <span className="home-mitra-logo-name">
                  {logo.title}
                </span>
              </span>
            );
          }}
        />
      </section>
      <Programs />
      <NexxaMatchBanner />
      <BeritaPreview />
      <CtaSection />
      <Testimonials />
    </div>
  );
}

export default Home;
