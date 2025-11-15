import { Link } from 'react-router-dom'

// Componente ProductCard para mostrar productos en grid
// Recibe: product (objeto con id, sku, title, brand, images, price)

function ProductCard({ product }) {
  const imageUrl = product.images && product.images.length > 0 
    ? product.images[0] 
    : '/assets/placeholder-product.jpg'

  return (
    <div className="bg-dark-50 border-2 border-gray-800 rounded-lg overflow-hidden hover:border-primary transition-all duration-300 transform hover:scale-105">
      <Link to={`/producto/${product.id}`}>
        <div className="aspect-square bg-gray-900 relative overflow-hidden">
          <img
            src={imageUrl}
            alt={product.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect width="400" height="400" fill="%231a1a1a"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="20" fill="%23666" text-anchor="middle" dominant-baseline="middle"%3EImagen no disponible%3C/text%3E%3C/svg%3E'
            }}
          />
        </div>
        <div className="p-4">
          <p className="text-primary text-xs uppercase tracking-wider mb-1">{product.brand}</p>
          <h3 className="font-display text-white text-lg mb-2 line-clamp-2">{product.title}</h3>
          <p className="text-gray-400 text-xs mb-2">SKU: {product.sku}</p>
          <div className="flex items-center justify-between">
            <p className="font-display text-primary text-xl font-bold">
              {/* TODO: Formatear precio con moneda */}
              ${product.price || 'Consultar'}
            </p>
            <span className="text-primary text-sm hover:underline">Ver producto →</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard

