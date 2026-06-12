import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Accueil', path: '/' },
  { label: 'Nos Métiers', path: '/nos-metiers' },
  { label: 'Réalisations', path: '/nos-realisations' },
  { label: 'Expertises', path: '/nos-expertises' },
  { label: 'Carrières', path: '/carrieres' },
  { label: 'À Propos', path: '/a-propos' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isActive = (path: string) => location.pathname === path

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-asphalt-grey/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/logo-terrestructure-alt.svg"
              alt="Terre & Structure"
              className="h-10 md:h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-open-sans text-body-rg uppercase tracking-wide transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-pure-white'
                    : 'text-concrete-grey hover:text-safety-orange'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-pure-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-midnight-black/98 z-40">
          <div className="flex flex-col items-center justify-center gap-8 pt-20">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-archivo text-heading-md uppercase tracking-tight transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-safety-orange'
                    : 'text-pure-white hover:text-safety-orange'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
