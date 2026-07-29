import { useState, useEffect, useRef } from 'react'
import type { CSSProperties, ElementType } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight, ChevronDown, GraduationCap, Users, Handshake, BookOpen, Sparkles } from 'lucide-react'
import logoSrc from '../../assets/Logo-yadika.webp'
import './navbar.css'

interface SubMenuItem {
  label: string
  to: string
  icon?: ElementType
  description?: string
}

interface NavItem {
  label: string
  to?: string
  children?: SubMenuItem[]
}

const navLinks: NavItem[] = [
  { label: 'Beranda', to: '/' },
  {
    label: 'Tentang Kami',
    children: [
      { label: 'Profil Sekolah', to: '/profile', icon: GraduationCap, description: 'Informasi dan profil sekolah' },
      { label: 'Profil Guru', to: '/profilguru', icon: Users, description: 'Data tenaga pendidik' },
      { label: 'Hubungan Industri', to: '/hubin', icon: Handshake, description: 'Kerja sama dengan industri' },
    ],
  },
  {
    label: 'Program',
    children: [
      { label: 'Jurusan', to: '/jurusan', icon: BookOpen, description: 'Program keahlian' },
      { label: 'Ekstrakurikuler', to: '/ekstrakurikuler', icon: Sparkles, description: 'Kegiatan pengembangan bakat' },
    ],
  },
  { label: 'Fasilitas', to: '/fasilitas' },
  { label: 'Berita', to: '/berita' },
  { label: 'PPDB', to: '/ppdb' },
]

interface NavbarProps {
  accentColor?: string;
  lightActive?: boolean;
  activeColor?: string;
}

export default function Navbar({ accentColor, lightActive = false, activeColor }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const lastScrollY = useRef<number>(typeof window !== 'undefined' ? window.scrollY : 0)
  const ticking = useRef(false)
  const nearFooter = useRef(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  const navbarStyle = accentColor
    ? {
        '--nb-bg': accentColor,
        '--nb-bg-80': `${accentColor}CC`,
        '--nb-bg-95': `${accentColor}F2`,
        '--nb-border-10': `${accentColor}1A`,
        '--nb-shadow-20': `${accentColor}33`,
        '--nb-shadow-30': `${accentColor}4D`,
        '--nb-accent': accentColor,
        '--nb-accent-10': `${accentColor}1A`,
        '--nb-active': lightActive ? '#FFFFFF' : activeColor ?? accentColor,
        '--nb-active-bg': lightActive ? '#FFFFFF1A' : `${activeColor ?? accentColor}1A`,
      } as CSSProperties
    : {}

  useEffect(() => {
    const footer = document.querySelector('footer')
    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        nearFooter.current = entry.isIntersecting
      },
      { rootMargin: '100px 0px 0px 0px' },
    )
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    lastScrollY.current = window.scrollY

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY
          setScrolled(currentY > 20)

          if (currentY > lastScrollY.current && currentY > 80 && nearFooter.current) {
            setHidden(true)
            setMobileOpen(false)
          } else if (lastScrollY.current - currentY > 10) {
            setHidden(false)
          }

          lastScrollY.current = currentY
          ticking.current = false
        })
        ticking.current = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isChildActive = (children: SubMenuItem[]) =>
    children.some(child => location.pathname === child.to)

  const toggleMobile = () => setMobileOpen((prev) => !prev)
  const closeMobile = () => setMobileOpen(false)

  return (
    <nav
      className="navbar"
      style={{
        ...navbarStyle,
        transform: hidden ? 'translateY(calc(-100% + -5px))' : 'translateY(0)',
        transition: 'transform 300ms ease-in-out',
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className={`navbar-inner ${scrolled ? 'navbar-inner--scrolled' : 'navbar-inner--default'}`}
      >
        <NavLink
          to="/"
          aria-label="SMK YADIKA SOREANG - Beranda"
          onClick={closeMobile}
          className="navbar-logo-link"
        >
          <img
            src={logoSrc}
            alt="SMK YADIKA SOREANG"
            className="navbar-logo"
          />
        </NavLink>

        <ul className="navbar-desktop-links" role="menubar">
          {navLinks.map((link) => (
            <li key={link.label} role="none" className="navbar-desktop-item">
              {link.children ? (
                <div className="navbar-dropdown-group">
                  <button
                    className={`navbar-link ${isChildActive(link.children) ? 'navbar-link--active' : 'navbar-link--inactive'}`}
                  >
                    {link.label}
                    <ChevronDown className="navbar-chevron" />
                  </button>
                  <div className="navbar-dropdown">
                    <div className="navbar-dropdown-inner">
                      <div className="navbar-dropdown-list">
                        {link.children!.map((child) => (
                          <NavLink
                            key={child.to}
                            to={child.to}
                            end
                            className={({ isActive }) =>
                              `navbar-dropdown-item ${isActive ? 'navbar-dropdown-item--active' : 'navbar-dropdown-item--inactive'}`
                            }
                          >
                            {({ isActive }) => (
                              <div className="navbar-dropdown-row">
                                {child.icon && (
                                  <child.icon className="navbar-dropdown-icon" />
                                )}
                                <div className="navbar-dropdown-text">
                                  <div className={`navbar-dropdown-label ${isActive ? 'navbar-dropdown-label--active' : 'navbar-dropdown-label--inactive'}`}>
                                    {child.label}
                                  </div>
                                  {child.description && (
                                    <div className="navbar-dropdown-desc">
                                      {child.description}
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                  {isChildActive(link.children) && (
                    <span className="navbar-active-indicator" />
                  )}
                </div>
              ) : (
                <NavLink
                  to={link.to!}
                  end={link.to === '/'}
                  role="menuitem"
                  className={({ isActive }) =>
                    `navbar-link ${isActive ? 'navbar-link--active' : 'navbar-link--inactive'}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <span className="navbar-active-indicator" />
                      )}
                    </>
                  )}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <div className="navbar-ctas">
          <a href="#brosur" className="navbar-btn-brosur">
            BROSUR
          </a>
          <a href="#daftar" className="navbar-btn-daftar">
            Daftar Sekarang
            <ArrowUpRight />
          </a>
        </div>

        <button
          type="button"
          onClick={toggleMobile}
          className="navbar-hamburger"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X className="navbar-hamburger-icon" /> : <Menu className="navbar-hamburger-icon" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        role="menu"
        aria-hidden={!mobileOpen}
        className={`navbar-mobile-menu ${mobileOpen ? 'navbar-mobile-menu--open' : 'navbar-mobile-menu--closed'}`}
      >
        <div className="navbar-mobile-inner">
          <ul className="flex flex-col gap-1" role="menu">
            {navLinks.map((link) => (
              link.children ? (
                <li key={link.label} role="none">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className={`navbar-mobile-link ${isChildActive(link.children) ? 'navbar-mobile-link--active' : 'navbar-mobile-link--inactive'}`}
                  >
                    {link.label}
                    <ChevronDown className={`navbar-mobile-chevron ${openDropdown === link.label ? 'navbar-mobile-chevron--open' : ''}`} />
                  </button>
                  <div
                    ref={dropdownRef}
                    className={`navbar-mobile-sub ${openDropdown === link.label ? 'navbar-mobile-sub--open' : 'navbar-mobile-sub--closed'}`}
                  >
                    <div className="navbar-mobile-sub-inner">
                      {link.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          end
                          onClick={closeMobile}
                          className={({ isActive }) =>
                            `navbar-mobile-sub-item ${isActive ? 'navbar-mobile-sub-item--active' : 'navbar-mobile-sub-item--inactive'}`
                          }
                        >
                          {({ isActive }) => (
                            <div className="navbar-mobile-sub-row">
                              {child.icon && (
                                <child.icon className={`navbar-mobile-sub-icon ${isActive ? 'navbar-mobile-sub-icon--active' : 'navbar-mobile-sub-icon--inactive'}`} />
                              )}
                              <span>{child.label}</span>
                            </div>
                          )}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={link.label} role="none">
                  <NavLink
                    to={link.to!}
                    end={link.to === '/'}
                    role="menuitem"
                    onClick={closeMobile}
                    className={({ isActive }) =>
                      `navbar-mobile-link ${isActive ? 'navbar-mobile-link--active' : 'navbar-mobile-link--inactive'}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              )
            ))}
          </ul>

          <hr className="navbar-mobile-divider" />

          <div className="navbar-mobile-ctas">
            <a
              href="#brosur"
              role="menuitem"
              onClick={closeMobile}
              className="navbar-btn-brosur"
            >
              myJurusan
            </NavLink>
            <a
              href="#daftar"
              role="menuitem"
              onClick={closeMobile}
              className="navbar-btn-daftar"
            >
              Daftar Sekarang
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
