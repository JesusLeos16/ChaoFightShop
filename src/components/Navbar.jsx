import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/catalogo', label: 'Catálogo' },
    { path: '/sobre-nosotros', label: 'Sobre Nosotros' },
    { path: '/como-comprar', label: 'Cómo Comprar' },
    { path: '/contacto', label: 'Contacto' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-dark border-b-2 border-primary shadow-cage">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Mejorado con padding y tipografía */}
          <Link to="/" className="flex items-center min-w-0 flex-shrink-0">
            <img 
              src="/assets/logo/chao-logo.png" 
              alt="CHAO FIGHT SHOP" 
              className="h-12 md:h-16 w-auto object-contain px-2"
              onError={(e) => {
                // Fallback con texto mejorado
                e.target.style.display = 'none'
                const parent = e.target.parentElement
                if (!parent.querySelector('.logo-fallback')) {
                  const fallback = document.createElement('span')
                  fallback.className = 'logo-fallback logo-text'
                  fallback.textContent = 'CHAO FIGHT SHOP'
                  parent.appendChild(fallback)
                }
              }}
            />
            {/* Texto fallback mejorado - visible solo si no hay logo */}
            <span className="logo-text hidden md:block ml-2 whitespace-nowrap">
              CHAO FIGHT SHOP
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-display text-sm uppercase tracking-wider transition-colors ${
                  isActive(link.path)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-300 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block font-display text-sm uppercase tracking-wider py-2 transition-colors ${
                  isActive(link.path)
                    ? 'text-primary border-l-4 border-primary pl-4'
                    : 'text-gray-300 hover:text-primary pl-4'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

