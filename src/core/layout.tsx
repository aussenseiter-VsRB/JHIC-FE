import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import ChatbotWidget from "../components/chatbot/chatbot";
import "./layout.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Layout() {
  return (
    <div className="min-h-screen bg-pearl">
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
        <Footer />
      </main>
      <ChatbotWidget
        onSendMessage={async (msg) => {
          console.log("Chatbot received:", msg);
          return "Terima kasih atas pesannya! Tim kami akan segera merespon.";
        }}
        whatsappNumber="6281234567890"
      />
    </div>
  );
}

export default Layout;
