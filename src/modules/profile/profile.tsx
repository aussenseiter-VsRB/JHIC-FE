import { Link, Outlet } from "react-router-dom";
import "./css/profile.css";

function Profile() {
  return (
    <div className="profile">
      <h1>Profile</h1>
      <nav>
        <Link to="/profile/edit">Edit</Link>
        <Link to="/profile/settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Profile;
