import Breadcrumbs from '../components/Breadcrumbs'

function About() {
  const breadcrumbs = [
    { label: 'Sobre Nosotros', path: '/sobre-nosotros' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />

      <div className="mb-12">
        <h1 className="font-display text-4xl md:text-5xl text-white mb-4 uppercase tracking-wider">
          Sobre Nosotros
        </h1>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Historia */}
        <section className="bg-dark-50 border-2 border-gray-800 rounded-lg p-8">
          <h2 className="font-display text-3xl text-primary mb-6 uppercase">Nuestra Historia</h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              {/* TODO: Agregar la historia de CHAO FIGHT SHOP */}
              CHAO FIGHT SHOP nació de la pasión por las artes marciales y el compromiso de proporcionar 
              el mejor equipo profesional para atletas y entrenadores. Desde nuestros inicios, nos hemos 
              dedicado a ofrecer productos de la más alta calidad para todas las disciplinas de combate.
            </p>
            <p>
              Nuestra experiencia en el mundo de las artes marciales nos ha permitido entender las 
              necesidades reales de los practicantes, desde principiantes hasta competidores profesionales.
            </p>
          </div>
        </section>

        {/* Misión */}
        <section className="bg-dark-50 border-2 border-gray-800 rounded-lg p-8">
          <h2 className="font-display text-3xl text-primary mb-6 uppercase">Misión</h2>
          <div className="text-gray-300 leading-relaxed">
            <p>
              {/* TODO: Agregar la misión de CHAO FIGHT SHOP */}
              Nuestra misión es equipar a guerreros con el mejor equipo profesional para artes marciales 
              y deportes de contacto. Nos comprometemos a ofrecer productos de calidad superior, asesoría 
              especializada y un servicio al cliente excepcional que permita a nuestros clientes entrenar 
              y competir al máximo nivel.
            </p>
          </div>
        </section>

        {/* Valores */}
        <section className="bg-dark-50 border-2 border-gray-800 rounded-lg p-8">
          <h2 className="font-display text-3xl text-primary mb-6 uppercase">Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-display text-white text-xl mb-2">Calidad</h3>
              <p className="text-gray-300">
                Seleccionamos únicamente productos de las mejores marcas y fabricantes reconocidos en el mundo de las artes marciales.
              </p>
            </div>
            <div>
              <h3 className="font-display text-white text-xl mb-2">Compromiso</h3>
              <p className="text-gray-300">
                Estamos comprometidos con el éxito y la seguridad de nuestros clientes, ofreciendo productos que cumplen los más altos estándares.
              </p>
            </div>
            <div>
              <h3 className="font-display text-white text-xl mb-2">Pasión</h3>
              <p className="text-gray-300">
                Compartimos la pasión por las artes marciales y entendemos las necesidades de cada practicante.
              </p>
            </div>
            <div>
              <h3 className="font-display text-white text-xl mb-2">Servicio</h3>
              <p className="text-gray-300">
                Ofrecemos un servicio personalizado y atención al cliente que va más allá de la venta.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About

