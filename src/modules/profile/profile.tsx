import { Outlet } from "react-router-dom";
import "./css/profile.css";

function Profile() {
  return (
    <div className="profile">
      
      <Outlet />
    </div>
  );
}

export default Profile;
