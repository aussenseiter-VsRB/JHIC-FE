import "./css/home.css";
import Hero from "./components/Hero";
import LogoLoop from "./components/LogoLoop";
import About from "./components/About";
import Programs from "./components/Programs";
import logos from "./components/data/logoLoop.json";

function Home() {
  return (
    <div className="home">
      <Hero />
      <section className="py-16">
        <h2 className="mb-10 text-center font-inter text-[28px] font-bold text-gray-800">
          Mitra Industri
        </h2>
        <LogoLoop
          logos={logos.logos}
          speed={70}
          direction="left"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#f9fafb"
          ariaLabel="Technology partners"
        />
      </section>
      <About />
      <Programs />
    </div>
  );
}

export default Home;
