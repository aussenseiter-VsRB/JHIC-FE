import { useEffect, useMemo, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import ChatbotWidget from "../components/chatbot/chatbot";
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
  const { pathname } = useLocation();
  const [jurusanListingAccent, setJurusanListingAccent] = useState<string>();
  const jurusanMatch = pathname.match(/^\/jurusan\/([^/]+)/);
  const jurusanData = useMemo(() => jurusanMatch ? getJurusanBySlug(jurusanMatch[1]) : undefined, [jurusanMatch]);
  const detailAccentColor = jurusanData?.theme.accent;
  const navbarAccentColor = detailAccentColor ?? (pathname === "/jurusan" ? jurusanListingAccent : undefined);
  const useLightNavbarActive = pathname === "/jurusan" && Boolean(jurusanListingAccent) && jurusanListingAccent !== "#1E3A5F";
  const navbarActiveColor = pathname === "/jurusan" && jurusanListingAccent === "#1E3A5F" ? "#2563EB" : undefined;

  useEffect(() => {
    if (pathname !== "/jurusan") {
      setJurusanListingAccent(undefined);
    }
  }, [pathname]);

  return (
    <div className="min-h-screen bg-pearl">
      <ScrollToTop />
      <Navbar accentColor={navbarAccentColor} lightActive={useLightNavbarActive} activeColor={navbarActiveColor} />
      <main>
        <Outlet context={{ setJurusanListingAccent } satisfies LayoutOutletContext} />
        <Footer accentColor={detailAccentColor} bgColor={jurusanData?.theme.gradientFrom} />
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
