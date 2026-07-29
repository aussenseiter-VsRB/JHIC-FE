import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import type { LayoutOutletContext } from "../../../core/layout";
import JurusanHeroSlider from "../components/JurusanHeroSlider";
import JurusanSection from "../components/JurusanSection";
import "../css/jurusan.css";

function PageJurusan() {
  const { setJurusanListingAccent } = useOutletContext<LayoutOutletContext>();

  useEffect(() => {
    return () => setJurusanListingAccent(undefined);
  }, [setJurusanListingAccent]);

  return (
    <div className="jurusan-page">
      <JurusanHeroSlider onAccentChange={setJurusanListingAccent} />
      <JurusanSection />
    </div>
  );
}

export default PageJurusan;
