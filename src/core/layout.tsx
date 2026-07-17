import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";

function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
