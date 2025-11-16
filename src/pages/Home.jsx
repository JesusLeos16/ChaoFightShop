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
                loading="eager"
                style={{ display: 'block', maxWidth: '100%' }}
                onError={(e) => {
                  console.error('Error cargando logo:', e.target.src)
                  console.error('Intentando ruta alternativa...')
                  e.target.style.display = 'none'
                  const parent = e.target.parentElement
                  if (!parent.querySelector('.logo-fallback')) {
                    const fallback = document.createElement('span')
                    fallback.className = 'logo-fallback logo-text text-3xl md:text-5xl lg:text-6xl text-white'
                    fallback.textContent = 'CHAO FIGHT SHOP'
                    parent.appendChild(fallback)
                  }
                }}
                onLoad={(e) => {
                  console.log('Logo cargado correctamente:', e.target.src)
                  e.target.style.display = 'block'
                  const fallback = e.target.parentElement.querySelector('.logo-fallback')
                  if (fallback) {
                    fallback.remove()
                  }
                }}
              />
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
      <section className="bg-white container mx-auto px-4 py-4 md:py-6 lg:py-8">
        <h2 className="font-display text-xl md:text-2xl lg:text-3xl text-center text-primary mb-4 md:mb-6 lg:mb-8 uppercase tracking-wider" style={{ color: '#e10600' }}>
          Explora Nuestras Categorías
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
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
          <button
            onClick={handleWhatsAppClick}
            className="bg-primary hover:bg-[#25D366] text-white font-display text-lg px-8 py-4 rounded-lg tracking-wider transition-all shadow-md hover:shadow-xl transform hover:scale-105"
          >
            Contactar por WhatsApp
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home

