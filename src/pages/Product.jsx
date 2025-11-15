import { useParams, Link } from 'react-router-dom'
import ProductGallery from '../components/ProductGallery'
import Breadcrumbs from '../components/Breadcrumbs'
import Button from '../components/Button'
import { getProductById } from '../data/products'

function Product() {
  const { id } = useParams()
  const product = getProductById(id)

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="font-display text-4xl text-white mb-4">Producto no encontrado</h1>
        <Link to="/catalogo" className="text-primary hover:underline">
          Volver al catálogo
        </Link>
      </div>
    )
  }

  const breadcrumbs = [
    { label: 'Catálogo', path: '/catalogo' },
    { label: product.title, path: `/producto/${id}` },
  ]

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(`Hola, quiero más información sobre el producto ${product.sku}.`)
    window.open(`https://wa.me/526144956596?text=${message}`, '_blank')
  }

  const handleWhatsAppAvailability = () => {
    const message = encodeURIComponent(`Hola, quiero consultar la disponibilidad del producto ${product.sku}.`)
    window.open(`https://wa.me/526144956596?text=${message}`, '_blank')
  }

  const handleCall = () => {
    window.location.href = 'tel:6144956596'
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Galería */}
        <div>
          <ProductGallery images={product.images || []} />
        </div>

        {/* Información del producto */}
        <div>
          <p className="text-primary text-sm uppercase tracking-wider mb-2">{product.brand}</p>
          <h1 className="font-display text-4xl md:text-5xl text-white mb-4 uppercase tracking-wider">
            {product.title}
          </h1>
          
          <div className="mb-6">
            <p className="text-gray-400 text-sm mb-2">SKU: <span className="text-white">{product.sku}</span></p>
            {product.category && (
              <p className="text-gray-400 text-sm mb-2">
                Categoría: <span className="text-white capitalize">{product.category}</span>
              </p>
            )}
            {product.sport && (
              <p className="text-gray-400 text-sm mb-2">
                Deporte: <span className="text-white capitalize">{product.sport}</span>
              </p>
            )}
          </div>

          <div className="mb-6">
            <p className="font-display text-primary text-4xl font-bold mb-2">
              {/* TODO: Formatear precio con moneda */}
              ${product.price || 'Consultar precio'}
            </p>
          </div>

          {/* Descripción */}
          <div className="mb-8">
            <h2 className="font-display text-xl text-white mb-3 uppercase">Descripción</h2>
            <p className="text-gray-300 leading-relaxed">
              {/* TODO: Agregar descripción completa del producto */}
              {product.description || 'Descripción del producto no disponible. Contáctanos para más información.'}
            </p>
          </div>

          {/* Materiales */}
          {product.materials && (
            <div className="mb-8">
              <h2 className="font-display text-xl text-white mb-3 uppercase">Materiales</h2>
              <p className="text-gray-300">{product.materials}</p>
            </div>
          )}

          {/* Botones de acción */}
          <div className="space-y-4">
            <Button
              variant="primary"
              onClick={handleWhatsAppOrder}
              className="w-full text-lg py-4"
            >
              Pedir por WhatsApp
            </Button>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Button
                variant="secondary"
                onClick={handleWhatsAppAvailability}
                className="w-full"
              >
                Consultar disponibilidad
              </Button>
              <Button
                variant="secondary"
                onClick={handleCall}
                className="w-full"
              >
                Llámanos
              </Button>
              <Link to="/contacto">
                <Button
                  variant="secondary"
                  className="w-full"
                >
                  Visítanos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product

