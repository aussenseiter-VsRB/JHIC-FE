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

function useRevealOnScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [useLocation().pathname]);
}

function Layout() {
  useRevealOnScroll();

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
