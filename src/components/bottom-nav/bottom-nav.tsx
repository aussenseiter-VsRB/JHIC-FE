import { useState, useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { ElementType } from "react";
import {
  House,
  LayoutGrid,
  MessageCircle,
  FileText,
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  GraduationCap,
  Users,
  Handshake,
  BookOpen,
  Sparkles,
} from "lucide-react";
import "./bottom-nav.css";

interface BottomNavProps {
  onChatbotToggle: () => void;
}

interface SubMenuItem {
  label: string;
  to: string;
  icon: ElementType;
}

interface NavItem {
  label: string;
  to?: string;
  children?: SubMenuItem[];
}

const drawerLinks: NavItem[] = [
  {
    label: "Tentang Kami",
    children: [
      { label: "Profil Sekolah", to: "/profile", icon: GraduationCap },
      { label: "Profil Guru", to: "/profilguru", icon: Users },
      { label: "Hubungan Industri", to: "/hubin", icon: Handshake },
    ],
  },
  {
    label: "Program",
    children: [
      { label: "Jurusan", to: "/jurusan", icon: BookOpen },
      { label: "Ekstrakurikuler", to: "/ekstrakurikuler", icon: Sparkles },
    ],
  },
  { label: "Fasilitas", to: "/fasilitas" },
  { label: "Berita", to: "/berita" },
];

export default function BottomNav({ onChatbotToggle }: BottomNavProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const { pathname } = useLocation();

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
    setOpenAccordion(null);
  }, []);

  const openDrawer = useCallback(() => setDrawerOpen(true), []);

  const toggleAccordion = useCallback((label: string) => {
    setOpenAccordion((prev) => (prev === label ? null : label));
  }, []);

  const isActive = (to: string) => {
    if (to === "/") return pathname === "/";
    return pathname.startsWith(to);
  };

  const isChildActive = (children: SubMenuItem[]) =>
    children.some((child) => isActive(child.to));

  return (
    <>
      <nav className="bottom-nav" aria-label="Navigasi mobile">
        <div className="bottom-nav-bar">
          <NavLink
            to="/"
            end
            className={`bottom-nav-item ${isActive("/") ? "active" : ""}`}
          >
            <House className="bottom-nav-icon" />
            <span className="bottom-nav-label">Beranda</span>
          </NavLink>

          <NavLink
            to="/jurusan"
            className={`bottom-nav-item ${isActive("/jurusan") ? "active" : ""}`}
          >
            <LayoutGrid className="bottom-nav-icon" />
            <span className="bottom-nav-label">Program</span>
          </NavLink>

          <div className="bottom-nav-spacer" />

          <NavLink
            to="/ppdb"
            className={`bottom-nav-item ${isActive("/ppdb") ? "active" : ""}`}
          >
            <FileText className="bottom-nav-icon" />
            <span className="bottom-nav-label">PPDB</span>
          </NavLink>

          <button
            type="button"
            className="bottom-nav-item"
            onClick={openDrawer}
          >
            <Menu className="bottom-nav-icon" />
            <span className="bottom-nav-label">Selengkapnya</span>
          </button>
        </div>

        <button
          type="button"
          className="bottom-nav-fab"
          data-chatbot-toggle
          onClick={onChatbotToggle}
          aria-label="Buka chatbot"
        >
          <MessageCircle className="bottom-nav-fab-icon" />
        </button>
      </nav>

      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              className="bottom-nav-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeDrawer}
            />
            <motion.aside
              className="bottom-nav-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
            >
              <div className="bottom-nav-drawer-header">
                <h2 className="bottom-nav-drawer-title">Menu</h2>
                <button
                  type="button"
                  className="bottom-nav-drawer-close"
                  onClick={closeDrawer}
                  aria-label="Tutup menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="bottom-nav-drawer-body">
                <ul className="bottom-nav-drawer-list">
                  {drawerLinks.map((link) =>
                    link.children ? (
                      <li key={link.label}>
                        <button
                          type="button"
                          className={`bottom-nav-drawer-accordion-btn ${isChildActive(link.children) ? "active" : ""}`}
                          onClick={() => toggleAccordion(link.label)}
                        >
                          <span>{link.label}</span>
                          <ChevronDown
                            className={`bottom-nav-drawer-chevron ${openAccordion === link.label ? "open" : ""}`}
                            size={16}
                          />
                        </button>
                        <div
                          className={`bottom-nav-drawer-submenu ${openAccordion === link.label ? "open" : ""}`}
                        >
                          <div className="bottom-nav-drawer-submenu-inner">
                            {link.children.map((child) => {
                              const Icon = child.icon;
                              const active = isActive(child.to);
                              return (
                                <NavLink
                                  key={child.to}
                                  to={child.to}
                                  end
                                  className={`bottom-nav-drawer-submenu-item ${active ? "active" : ""}`}
                                  onClick={closeDrawer}
                                >
                                  <Icon className="bottom-nav-drawer-submenu-icon" />
                                  <span>{child.label}</span>
                                </NavLink>
                              );
                            })}
                          </div>
                        </div>
                      </li>
                    ) : (
                      <li key={link.label}>
                        <NavLink
                          to={link.to!}
                          end={link.to === "/"}
                          onClick={closeDrawer}
                          className={({ isActive: active }) =>
                            `bottom-nav-drawer-leaf ${active ? "active" : ""}`
                          }
                        >
                          {link.label}
                        </NavLink>
                      </li>
                    ),
                  )}
                  <li className="bottom-nav-drawer-divider" role="separator" />
                  <li>
                    <NavLink
                      to="/nexxa-match"
                      onClick={closeDrawer}
                      className="bottom-nav-drawer-btn-outline"
                    >
                      Nexxa Match
                    </NavLink>
                  </li>
                  <li>
                    <a
                      href="#daftar"
                      onClick={closeDrawer}
                      className="bottom-nav-drawer-btn-solid"
                    >
                      Daftar Sekarang
                      <ArrowUpRight size={16} />
                    </a>
                  </li>
                </ul>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
