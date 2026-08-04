import { useEffect, useMemo, useState, useRef } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../components/navbar/navbar";
import MobileLogoBar from "../components/navbar/mobile-logo-bar";
import Footer from "../components/footer/footer";
import ChatbotWidget, { type ChatbotHandle } from "../components/chatbot/chatbot";
import { sendToChatbot, resetSession } from "../services/chatbot";
import BottomNav from "../components/bottom-nav/bottom-nav";
import { getJurusanBySlug } from "../modules/jurusan/data";
import "./layout.css";

export interface LayoutOutletContext {
  setJurusanListingAccent: (accentColor?: string) => void;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function useRevealOnScroll(pathname: string) {
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
  }, [pathname]);
}

function Layout() {
  const { pathname } = useLocation();
  useRevealOnScroll(pathname);
  const chatbotRef = useRef<ChatbotHandle>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [jurusanListingAccent, setJurusanListingAccent] = useState<string>();

  const jurusanMatch = pathname.match(/^\/jurusan\/([^/]+)/);
  const jurusanData = useMemo(() => jurusanMatch ? getJurusanBySlug(jurusanMatch[1]) : undefined, [jurusanMatch]);
  const detailAccentColor = jurusanData?.theme.accent;
  const navbarAccentColor = detailAccentColor ?? (pathname === "/jurusan" ? jurusanListingAccent : undefined);
  const useLightNavbarActive = pathname === "/jurusan" && Boolean(jurusanListingAccent) && jurusanListingAccent !== "#1E3A5F";
  const navbarActiveColor = pathname === "/jurusan" && jurusanListingAccent === "#1E3A5F" ? "#2563EB" : undefined;

  return (
    <div className="min-h-screen bg-pearl">
      <ScrollToTop />
      {!isMobile && <Navbar accentColor={navbarAccentColor} lightActive={useLightNavbarActive} activeColor={navbarActiveColor} />}
      {isMobile && <MobileLogoBar />}
      <main>
        <Outlet context={{ setJurusanListingAccent } satisfies LayoutOutletContext} />
        <Footer accentColor={detailAccentColor} bgColor={jurusanData?.theme.gradientFrom} />
      </main>
      <ChatbotWidget
        ref={chatbotRef}
        hideFab={isMobile}
        onSendMessage={sendToChatbot}
        onClear={resetSession}
        whatsappNumber={import.meta.env.VITE_WHATSAPP_NUMBER ?? ""}
      />
      <BottomNav
        onChatbotToggle={() => chatbotRef.current?.toggle()}
      />
    </div>
  );
}

export default Layout;
