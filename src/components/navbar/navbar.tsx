import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import logoSrc from '../../assets/Logo-yadika.webp'

interface NavItem {
  label: string
  to: string
}

const navLinks: NavItem[] = [
  { label: 'Beranda', to: '/' },
  { label: 'Profil', to: '/profile' },
  { label: 'Jurusan', to: '/jurusan' },
  { label: 'Fasilitas', to: '/fasilitas' },
  { label: 'Berita', to: '/berita' },
  { label: 'PPDB', to: '/ppdb' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobile = () => setMobileOpen((prev) => !prev)
  const closeMobile = () => setMobileOpen(false)

  return (
    <nav
      className="fixed top-4 left-4 right-4 z-50 flex justify-center md:left-8 md:right-8"
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className={`flex h-[70px] w-full max-w-5xl items-center justify-between rounded-full border px-6 transition-all duration-300 md:px-8 ${
          scrolled
            ? 'border-navy/10 bg-navy/95 shadow-lg shadow-navy/20'
            : 'border-white/20 bg-navy/80 backdrop-blur-md'
        }`}
      >
        {/* Logo */}
        <NavLink
          to="/"
          aria-label="SMK YADIKA SOREANG - Beranda"
          onClick={closeMobile}
          className="flex shrink-0 items-center justify-center"
        >
          <img
            src={logoSrc}
            alt="SMK YADIKA SOREANG"
            className="h-[42px] w-[42px] object-contain"
          />
        </NavLink>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-8 md:flex" role="menubar">
          {navLinks.map((link) => (
            <li key={link.to} role="none">
              <NavLink
                to={link.to}
                end={link.to === '/'}
                role="menuitem"
                className={({ isActive }) =>
                  `relative font-body text-[15px] font-medium transition-colors duration-200 ${
                    isActive
                      ? 'font-semibold text-blue'
                      : 'text-white/80 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-blue" />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Right Controls */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#brosur"
            className="rounded-full border border-white/30 px-5 py-2 font-poppins text-sm font-semibold text-white transition-all duration-200 hover:border-blue hover:text-blue"
          >
            BROSUR
          </a>
          <a
            href="#daftar"
            className="flex items-center gap-1.5 rounded-full bg-blue px-5 py-2 font-poppins text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-dark"
          >
            Daftar Sekarang
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={toggleMobile}
          className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors duration-200 hover:bg-white/10 md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="menu"
        aria-hidden={!mobileOpen}
        className={`absolute top-[86px] left-4 right-4 z-50 overflow-y-auto rounded-3xl border border-white/10 bg-navy shadow-lg shadow-navy/30 transition-all duration-300 md:hidden ${
          mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-1 p-4">
          {/* Mobile Nav Links */}
          <ul className="flex flex-col gap-1" role="menu">
            {navLinks.map((link) => (
              <li key={link.to} role="none">
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  role="menuitem"
                  onClick={closeMobile}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 font-body text-[16px] font-medium transition-colors duration-200 ${
                      isActive
                        ? 'bg-blue/10 font-semibold text-blue'
                        : 'text-white/80 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Divider */}
          <hr className="my-2 border-white/10" />

          {/* Mobile Buttons */}
          <div className="flex items-center gap-3 px-2">
            <a
              href="#brosur"
              role="menuitem"
              onClick={closeMobile}
              className="rounded-full border border-white/30 px-5 py-2 font-poppins text-sm font-semibold text-white transition-all duration-200 hover:border-blue hover:text-blue"
            >
              BROSUR
            </a>
            <a
              href="#daftar"
              role="menuitem"
              onClick={closeMobile}
              className="flex items-center gap-1.5 rounded-full bg-blue px-5 py-2 font-poppins text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-dark"
            >
              Daftar Sekarang
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
