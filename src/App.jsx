import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Product from './pages/Product'
import Contact from './pages/Contact'
import HowToBuy from './pages/HowToBuy'
import About from './pages/About'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/producto/:id" element={<Product />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/como-comprar" element={<HowToBuy />} />
          <Route path="/sobre-nosotros" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

