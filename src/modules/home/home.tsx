import "./css/home.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";

function Home() {
  return (
    <div className="home">
      <Hero />
      <About />
      <Programs />
    </div>
  );
}

export default Home;
