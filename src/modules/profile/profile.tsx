import { Outlet } from "react-router-dom";
import ProfileCard from "./components/ProfileCard";
import "./css/profile.css";

function Profile() {
  return (
    <div className="profile">
      
      <Outlet />
    </div>
  );
}

export default Profile;
