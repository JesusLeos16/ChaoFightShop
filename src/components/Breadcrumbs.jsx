import { Link } from 'react-router-dom'

// Componente Breadcrumbs para navegación
// Recibe: items (array de objetos con { label, path })

function Breadcrumbs({ items = [] }) {
  if (items.length === 0) return null

  return (
    <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link to="/" className="text-gray-400 hover:text-primary transition-colors">
            Inicio
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="text-gray-600 mx-2">/</span>
            {index === items.length - 1 ? (
              <span className="text-primary font-display">{item.label}</span>
            ) : (
              <Link
                to={item.path}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs

