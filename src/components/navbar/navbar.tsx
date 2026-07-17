import { NavLink } from 'react-router-dom'
import logoSrc from '../../assets/Logo-yadika.webp'
import './navbar.css'

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  )
}

const navLinks = [
  { label: 'Beranda', to: '/' },
  { label: 'Profil', to: '/profile' },
]

export default function Navbar() {
  return (
    <nav className="fixed top-4 z-50 flex w-full items-center justify-between px-6 lg:px-12">
      <NavLink
        to="/"
        className="glass-nav flex items-center justify-center rounded px-2 py-1"
        aria-label="SMK YADIKA SOREANG"
      >
        <img src={logoSrc} alt="SMK YADIKA SOREANG" className="h-8 w-auto" />
      </NavLink>

      <div className="glass-nav hidden items-center px-0.5 md:flex">
        {navLinks.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              `relative px-3 py-2 font-body text-sm font-medium transition-colors ${
                isActive ? 'text-accent' : 'text-copy/80'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-px bg-accent" />
                )}
                {link.label}
              </>
            )}
          </NavLink>
        ))}
        <a
          href="#daftar"
          className="mr-0.5 flex items-center gap-1.5 bg-accent px-4 py-2 font-body text-sm font-semibold text-base"
        >
          Daftar Sekarang
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="hidden h-10 w-10 md:block" aria-hidden="true" />
    </nav>
  )
}
