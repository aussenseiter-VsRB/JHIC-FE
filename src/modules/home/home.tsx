import "./css/home.css";
import Hero from "./components/Hero";
import LogoLoop from "./components/LogoLoop";
import About from "./components/About";
import Programs from "./components/Programs";

function Home() {
  return (
    <div className="home">
      <Hero />
      <LogoLoop />
      <About />
      <Programs />
    </div>
  );
}

export default Home;
