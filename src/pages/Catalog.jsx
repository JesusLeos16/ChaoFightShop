import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import Breadcrumbs from '../components/Breadcrumbs'
import { getProducts } from '../data/products'

function Catalog() {
  const [searchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('categoria') || 'all')
  const [selectedBrand, setSelectedBrand] = useState(searchParams.get('marca') || 'all')
  const [selectedSport, setSelectedSport] = useState(searchParams.get('deporte') || 'all')

  useEffect(() => {
    // Cargar productos
    const loadedProducts = getProducts()
    setProducts(loadedProducts)
    setFilteredProducts(loadedProducts)
  }, [])

  useEffect(() => {
    // Aplicar filtros
    let filtered = [...products]

    // Filtro de búsqueda
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filtro de categoría
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product =>
        product.category?.toLowerCase() === selectedCategory.toLowerCase()
      )
    }

    // Filtro de marca
    if (selectedBrand !== 'all') {
      filtered = filtered.filter(product =>
        product.brand?.toLowerCase() === selectedBrand.toLowerCase()
      )
    }

    // Filtro de deporte
    if (selectedSport !== 'all') {
      filtered = filtered.filter(product =>
        product.sport?.toLowerCase() === selectedSport.toLowerCase()
      )
    }

    setFilteredProducts(filtered)
  }, [searchTerm, selectedCategory, selectedBrand, selectedSport, products])

  // Obtener categorías y marcas únicas para los filtros
  const categories = [...new Set(products.map(p => p.category).filter(Boolean))]
  const brands = [...new Set(products.map(p => p.brand).filter(Boolean))]
  const sports = [...new Set(products.map(p => p.sport).filter(Boolean))]

  const breadcrumbs = [
    { label: 'Catálogo', path: '/catalogo' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />

      <div className="mb-8">
        <h1 className="font-display text-4xl md:text-5xl text-white mb-4 uppercase tracking-wider">
          Catálogo de Productos
        </h1>
        <p className="text-gray-400">
          Encuentra el equipo perfecto para tu disciplina
        </p>
      </div>

      {/* Filtros y búsqueda */}
      <div className="bg-dark-50 border-2 border-gray-800 rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Buscador */}
          <div className="lg:col-span-2">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-dark border-2 border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Filtro Categoría */}
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-dark border-2 border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
            >
              <option value="all">Todas las categorías</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Filtro Marca */}
          <div>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full bg-dark border-2 border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
            >
              <option value="all">Todas las marcas</option>
              {brands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Filtro Deporte */}
        <div className="mt-4">
          <select
            value={selectedSport}
            onChange={(e) => setSelectedSport(e.target.value)}
            className="w-full md:w-auto bg-dark border-2 border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
          >
            <option value="all">Todos los deportes</option>
            {sports.map(sport => (
              <option key={sport} value={sport}>{sport}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Resultados */}
      <div className="mb-4">
        <p className="text-gray-400">
          {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Grid de productos */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-400 text-xl mb-4">No se encontraron productos</p>
          <p className="text-gray-500">Intenta ajustar los filtros de búsqueda</p>
        </div>
      )}
    </div>
  )
}

export default Catalog

