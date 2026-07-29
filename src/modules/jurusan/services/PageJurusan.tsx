import JurusanHeroSlider from "../components/JurusanHeroSlider";
import JurusanSection from "../components/JurusanSection";
import "../css/jurusan.css";

function PageJurusan() {
  return (
    <div className="jurusan-page">
      <JurusanHeroSlider />
      <JurusanSection />
    </div>
  );
}

export default PageJurusan;
