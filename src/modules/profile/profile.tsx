import ProfileCard from "./components/ProfileCard";
import TentangSekolah from "./components/TentangSekolah";
import SambutanKepsek from "./components/SambutanKepsek";
import Terakreditasi from "./components/Terakreditasi";
import "./css/profile.css";

function Profile() {
  return (
    <div className="profile">
      <ProfileCard />
      <TentangSekolah />
      <SambutanKepsek />
      <Terakreditasi />
    </div>
  );
}

export default Profile;
