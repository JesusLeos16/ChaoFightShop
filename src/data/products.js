// Archivo de datos de productos
// TODO: Reemplazar con datos reales o conectar a una API/backend

import productsData from './products.example.json'

// Función para obtener todos los productos
export function getProducts() {
  return productsData.products || []
}

// Función para obtener un producto por ID
export function getProductById(id) {
  const products = getProducts()
  return products.find(product => product.id === id || product.id === parseInt(id))
}

// Función para obtener productos por categoría
export function getProductsByCategory(category) {
  const products = getProducts()
  return products.filter(product => 
    product.category?.toLowerCase() === category.toLowerCase()
  )
}

// Función para obtener productos por marca
export function getProductsByBrand(brand) {
  const products = getProducts()
  return products.filter(product => 
    product.brand?.toLowerCase() === brand.toLowerCase()
  )
}

// Función para obtener productos por deporte
export function getProductsBySport(sport) {
  const products = getProducts()
  return products.filter(product => 
    product.sport?.toLowerCase() === sport.toLowerCase()
  )
}

