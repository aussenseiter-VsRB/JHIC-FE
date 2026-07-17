import { Outlet } from "react-router-dom";
import TentangSekolah from "./components/TentangSekolah";
import "./css/profile.css";

function Profile() {
  return (
    <div className="profile">
      <TentangSekolah />
      <Outlet />
    </div>
  );
}

export default Profile;
