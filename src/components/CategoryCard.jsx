import { Link } from 'react-router-dom'

// Componente CategoryCard con formato octágono usando clip-path
// Recibe: category (objeto con name, icon, path, image)

function CategoryCard({ category }) {
  return (
    <Link to={category.path || '/catalogo'} className="block group">
      <div className="relative clip-octagon bg-white border-2 border-primary p-8 aspect-square flex flex-col items-center justify-center hover:bg-primary transition-all duration-300 transform hover:scale-105">
        {category.image && (
          <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        {category.icon && (
          <div className="text-4xl mb-4 text-primary group-hover:text-white transition-colors">
            {category.icon}
          </div>
        )}
        <h3 className="font-display text-primary text-center uppercase tracking-wider text-sm md:text-base group-hover:text-white transition-colors z-10">
          {category.name}
        </h3>
      </div>
    </Link>
  )
}

export default CategoryCard

