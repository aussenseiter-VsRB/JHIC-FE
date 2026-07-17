import { Outlet } from "react-router-dom";
import TentangSekolah from "./components/TentangSekolah";
import SambutanKepsek from "./components/SambutanKepsek";
import ProfileCard from "./components/ProfileCard";
import "./css/profile.css";

function Profile() {
  return (
    <div className="profile">
      <ProfileCard />
      <TentangSekolah />
      <SambutanKepsek />
      <Outlet />
    </div>
  );
}

export default Profile;
