import { useState } from 'react'
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

  const toggleMobile = () => setMobileOpen((prev) => !prev)
  const closeMobile = () => setMobileOpen(false)

  return (
    <nav
      className="sticky top-0 z-50 flex w-full justify-center px-4 pt-4 md:px-8"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex h-[70px] w-full max-w-5xl items-center justify-between rounded-full border-2 border-gray-200 bg-white px-6 md:px-8">
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
                  `relative font-inter text-[16px] font-medium transition-colors duration-200 ${
                    isActive
                      ? 'font-semibold text-primary'
                      : 'text-gray-800 hover:text-primary'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-primary" />
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
            className="rounded-full border border-gray-300 px-5 py-2 font-inter text-sm font-medium text-gray-800 transition-all duration-200 hover:bg-primary hover:text-white"
          >
            BROSUR
          </a>
          <a
            href="#daftar"
            className="flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 font-inter text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-dark"
          >
            Daftar Sekarang
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={toggleMobile}
          className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition-colors duration-200 hover:bg-gray-100 md:hidden"
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
        className={`absolute top-[84px] left-4 right-4 z-50 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-200 md:hidden ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
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
                    `block rounded-xl px-4 py-3 font-inter text-[16px] font-medium transition-colors duration-200 ${
                      isActive
                        ? 'bg-primary/10 font-semibold text-primary'
                        : 'text-gray-800 hover:bg-gray-50 hover:text-primary'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Divider */}
          <hr className="my-2 border-gray-100" />

          {/* Mobile Buttons */}
          <div className="flex items-center gap-3 px-2">
            <a
              href="#brosur"
              role="menuitem"
              onClick={closeMobile}
              className="rounded-full border border-gray-300 px-5 py-2 font-inter text-sm font-medium text-gray-800 transition-all duration-200 hover:bg-primary hover:text-white"
            >
              BROSUR
            </a>
            <a
              href="#daftar"
              role="menuitem"
              onClick={closeMobile}
              className="flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 font-inter text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-dark"
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
