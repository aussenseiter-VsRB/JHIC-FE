import { Outlet } from "react-router-dom";
import "./css/profile.css";

function Profile() {
  return (
    <div className="profile">
      <h1>Profile</h1>
      <Outlet />
    </div>
  );
}

export default Profile;
