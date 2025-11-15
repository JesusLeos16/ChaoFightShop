import { Link } from 'react-router-dom'
import CategoryCard from '../components/CategoryCard'
import Button from '../components/Button'

function Home() {
  // Categorías principales con formato octágono
  const categories = [
    { name: 'Guantes', path: '/catalogo?categoria=guantes', icon: '🥊' },
    { name: 'Protectores', path: '/catalogo?categoria=protectores', icon: '🛡️' },
    { name: 'Ropa Deportiva', path: '/catalogo?categoria=ropa', icon: '👕' },
    { name: 'Vendas y Accesorios', path: '/catalogo?categoria=vendas', icon: '🎽' },
    { name: 'Equipo de Entrenamiento', path: '/catalogo?categoria=entrenamiento', icon: '⚙️' },
    { name: 'Marcas', path: '/catalogo?marca=all', icon: '🏷️' },
    { name: 'Ofertas', path: '/catalogo?ofertas=true', icon: '🔥' },
    { name: 'Boxeo', path: '/catalogo?deporte=boxeo', icon: '🥊' },
    { name: 'Muay Thai', path: '/catalogo?deporte=muay-thai', icon: '🥋' },
    { name: 'MMA', path: '/catalogo?deporte=mma', icon: '🥊' },
    { name: 'Kickboxing', path: '/catalogo?deporte=kickboxing', icon: '👊' },
    { name: 'Lima Lama', path: '/catalogo?deporte=lima-lama', icon: '🥋' },
  ]

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hola, me interesa conocer más sobre sus productos.')
    window.open(`https://wa.me/526144956596?text=${message}`, '_blank')
  }

  return (
    <div>
      {/* Hero Section - Mejorado con tipografía y padding */}
      <section className="relative min-h-[80vh] flex items-center justify-center cage-bg bg-dark bg-opacity-95">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-50 to-dark"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="mb-8 flex justify-center">
            <div className="flex flex-col items-center">
              <img 
                src="/assets/logo/chao-logo.png" 
                alt="CHAO FIGHT SHOP" 
                className="h-24 md:h-32 w-auto object-contain px-4 mb-4"
                onError={(e) => {
                  e.target.style.display = 'none'
                  const parent = e.target.parentElement
                  if (!parent.querySelector('.logo-fallback')) {
                    const fallback = document.createElement('span')
                    fallback.className = 'logo-fallback logo-text text-3xl md:text-5xl'
                    fallback.textContent = 'CHAO FIGHT SHOP'
                    parent.appendChild(fallback)
                  }
                }}
              />
              {/* Texto fallback mejorado */}
              <span className="logo-text text-3xl md:text-5xl lg:text-6xl block">
                CHAO FIGHT SHOP
              </span>
            </div>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-white mb-6 uppercase tracking-wider">
            Equipamos a guerreros
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Todo el equipo profesional para artes marciales y deportes de contacto que necesitas para entrenar y competir al máximo nivel.
          </p>
          <Link to="/catalogo">
            <Button variant="primary" className="text-lg px-8 py-4">
              Explorar catálogo
            </Button>
          </Link>
        </div>
      </section>

      {/* Categorías Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="font-display text-3xl md:text-4xl text-center text-white mb-12 uppercase tracking-wider">
          Explora nuestras categorías
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </section>

      {/* CTA Contacto WhatsApp */}
      <section className="bg-dark-50 border-y-2 border-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6 uppercase tracking-wider">
            ¿Necesitas ayuda?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Contáctanos por WhatsApp y te ayudamos a encontrar el equipo perfecto para ti.
          </p>
          <Button
            variant="primary"
            onClick={handleWhatsAppClick}
            className="text-lg px-8 py-4"
          >
            Contactar por WhatsApp
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home

