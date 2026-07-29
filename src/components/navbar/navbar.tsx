import { useState, useEffect, useRef } from 'react'
import type { CSSProperties, ElementType } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight, ChevronDown, GraduationCap, Users, Handshake, BookOpen, Sparkles } from 'lucide-react'
import logoSrc from '../../assets/Logo-yadika.webp'

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
}

export default function Navbar({ accentColor }: NavbarProps) {
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
      className="fixed top-4 left-4 right-4 z-50 flex justify-center md:left-8 md:right-8"
      style={{
        ...navbarStyle,
        transform: hidden ? 'translateY(calc(-100% + -5px))' : 'translateY(0)',
        transition: 'transform 300ms ease-in-out',
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className={`flex h-[70px] w-full max-w-5xl items-center justify-between rounded-full border px-6 transition-all duration-300 md:px-8 ${
          scrolled
            ? 'border-[var(--nb-border-10,#1E3A5F1A)] bg-[var(--nb-bg-95,#1E3A5FF2)] shadow-lg shadow-[var(--nb-shadow-20,#1E3A5F33)]'
            : 'border-white/20 bg-[var(--nb-bg-80,#1E3A5FCC)] backdrop-blur-md'
        }`}
      >
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

        <ul className="hidden items-center gap-8 md:flex" role="menubar">
          {navLinks.map((link) => (
            <li key={link.label} role="none" className="relative">
              {link.children ? (
                <div className="group relative">
                  <button
                    className={`relative flex items-center gap-1.5 font-body text-[15px] font-medium transition-colors duration-200 ${
                      isChildActive(link.children)
                        ? 'font-semibold text-[var(--nb-accent,#2563EB)]'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                    <div className="absolute -left-[1px] top-full min-w-[280px] pt-1.5 opacity-0 translate-y-[-8px] pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                     <div className="relative rounded-xl border border-[#e5e7eb] bg-white p-1.5 shadow-lg">
                      <div className="flex flex-col">
                        {link.children!.map((child) => (
                          <NavLink
                            key={child.to}
                            to={child.to}
                            end
                             className={({ isActive }) =>
                                `rounded-lg px-4 py-3 font-body transition-all duration-200 border-l-2 ${
                                  isActive
                                    ? 'bg-[var(--nb-accent-10,#2563EB1A)] border-[var(--nb-accent,#2563EB)] text-[var(--nb-accent,#2563EB)]'
                                    : 'hover:bg-black/5 border-transparent text-gray-700'
                                }`
                             }
                           >
                             {({ isActive }) => (
                               <div className="flex items-start gap-3">
                                 {child.icon && (
                                   <child.icon className="h-5 w-5 mt-0.5 shrink-0 text-blue" />
                                 )}
                                 <div className="min-w-0">
                                   <div className={`text-[15px] leading-tight ${isActive ? 'text-[var(--nb-accent,#2563EB)]' : 'text-gray-700'}`}>
                                     {child.label}
                                   </div>
                                  {child.description && (
                                    <div className="text-[13px] text-gray-400 leading-tight mt-0.5">
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
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[var(--nb-accent,#2563EB)]" />
                  )}
                </div>
              ) : (
                <NavLink
                  to={link.to!}
                  end={link.to === '/'}
                  role="menuitem"
                  className={({ isActive }) =>
                    `relative font-body text-[15px] font-medium transition-colors duration-200 ${
                      isActive
                        ? 'font-semibold text-[var(--nb-accent,#2563EB)]'
                        : 'text-white/80 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[var(--nb-accent,#2563EB)]" />
                      )}
                    </>
                  )}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

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

      <div
        id="mobile-menu"
        role="menu"
        aria-hidden={!mobileOpen}
        className={`absolute top-[86px] left-4 right-4 z-50 overflow-y-auto rounded-3xl border border-white/10 bg-[var(--nb-bg,#1E3A5F)] shadow-lg shadow-[var(--nb-shadow-30,#1E3A5F4D)] transition-all duration-300 md:hidden ${
          mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-1 p-4">
          <ul className="flex flex-col gap-1" role="menu">
            {navLinks.map((link) => (
              link.children ? (
                <li key={link.label} role="none">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 font-body text-[16px] font-medium transition-colors duration-200 ${
                      isChildActive(link.children)
                        ? 'bg-[var(--nb-accent-10,#2563EB1A)] font-semibold text-[var(--nb-accent,#2563EB)]'
                        : 'text-white/80 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                      openDropdown === link.label ? 'rotate-180' : ''
                    }`} />
                  </button>
                  <div
                    ref={dropdownRef}
                    className={`overflow-hidden transition-all duration-200 ${
                      openDropdown === link.label ? 'max-h-40 opacity-100 mt-1' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="ml-4 flex flex-col gap-1 border-l border-white/10 pl-3 pb-1">
                      {link.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          end
                          onClick={closeMobile}
                          className={({ isActive }) =>
                            `rounded-xl px-4 py-2.5 font-body text-[15px] font-medium transition-colors duration-200 ${
                              isActive
                                ? 'bg-[var(--nb-accent-10,#2563EB1A)] font-semibold text-[var(--nb-accent,#2563EB)]'
                                : 'text-white/70 hover:bg-white/5 hover:text-white'
                            }`
                          }
                        >
                          {({ isActive }) => (
                            <div className="flex items-center gap-3">
                              {child.icon && (
                                <child.icon className={`h-4 w-4 shrink-0 ${isActive ? 'text-[var(--nb-accent,#2563EB)]' : 'text-white/50'}`} />
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
                      `block rounded-xl px-4 py-3 font-body text-[16px] font-medium transition-colors duration-200 ${
                        isActive
                          ? 'bg-[var(--nb-accent-10,#2563EB1A)] font-semibold text-[var(--nb-accent,#2563EB)]'
                          : 'text-white/80 hover:bg-white/5 hover:text-white'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              )
            ))}
          </ul>

          <hr className="my-2 border-white/10" />

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
