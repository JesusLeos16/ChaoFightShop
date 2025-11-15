import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark border-t-2 border-primary mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción - Mejorado */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src={`${import.meta.env.BASE_URL}assets/logo/chao-logo.png`}
                alt="CHAO FIGHT SHOP" 
                className="h-12 mr-3 object-contain px-2"
                loading="lazy"
                style={{ display: 'block', maxWidth: '100%' }}
                onError={(e) => {
                  console.error('Error cargando logo:', e.target.src)
                  e.target.style.display = 'none'
                  const parent = e.target.parentElement
                  if (!parent.querySelector('.logo-fallback')) {
                    const fallback = document.createElement('span')
                    fallback.className = 'logo-fallback logo-text text-lg text-white'
                    fallback.textContent = 'CHAO FIGHT SHOP'
                    parent.appendChild(fallback)
                  }
                }}
                onLoad={(e) => {
                  e.target.style.display = 'block'
                  const fallback = e.target.parentElement.querySelector('.logo-fallback')
                  if (fallback) {
                    fallback.remove()
                  }
                }}
              />
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Equipamos a guerreros – Todo el equipo profesional para artes marciales y deportes de contacto.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-display text-primary text-lg mb-4 uppercase">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalogo" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/como-comprar" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Cómo Comprar
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-display text-primary text-lg mb-4 uppercase">Contacto</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="tel:6144956596" className="hover:text-primary transition-colors">
                  📞 614-495-6596
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/526144956596" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  💬 WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} CHAO FIGHT SHOP. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

