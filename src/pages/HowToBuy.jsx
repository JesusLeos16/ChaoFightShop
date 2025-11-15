import Breadcrumbs from '../components/Breadcrumbs'
import Button from '../components/Button'

function HowToBuy() {
  const breadcrumbs = [
    { label: 'Cómo Comprar', path: '/como-comprar' },
  ]

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hola, tengo una pregunta sobre cómo realizar una compra.')
    window.open(`https://wa.me/526144956596?text=${message}`, '_blank')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />

      <div className="mb-12">
        <h1 className="font-display text-4xl md:text-5xl text-white mb-4 uppercase tracking-wider">
          Cómo Comprar
        </h1>
        <p className="text-gray-400 text-lg">
          Proceso simple y rápido para adquirir tu equipo
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Pasos para pedir por WhatsApp */}
        <section className="bg-dark-50 border-2 border-gray-800 rounded-lg p-8">
          <h2 className="font-display text-3xl text-primary mb-6 uppercase">Pasos para pedir por WhatsApp</h2>
          <ol className="space-y-6">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-display text-xl mr-4">
                1
              </span>
              <div>
                <h3 className="font-display text-white text-xl mb-2">Explora nuestro catálogo</h3>
                <p className="text-gray-300">
                  Navega por nuestro catálogo en línea y encuentra el producto que necesitas. Puedes ver imágenes, descripciones y precios.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-display text-xl mr-4">
                2
              </span>
              <div>
                <h3 className="font-display text-white text-xl mb-2">Haz clic en "Pedir por WhatsApp"</h3>
                <p className="text-gray-300">
                  En la página del producto, haz clic en el botón "Pedir por WhatsApp". Se abrirá una conversación con un mensaje prellenado incluyendo el SKU del producto.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-display text-xl mr-4">
                3
              </span>
              <div>
                <h3 className="font-display text-white text-xl mb-2">Confirma disponibilidad y detalles</h3>
                <p className="text-gray-300">
                  Nuestro equipo te responderá para confirmar disponibilidad, talla, color y cualquier detalle adicional que necesites.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-display text-xl mr-4">
                4
              </span>
              <div>
                <h3 className="font-display text-white text-xl mb-2">Realiza el pago</h3>
                <p className="text-gray-300">
                  Te proporcionaremos los métodos de pago disponibles y los detalles para realizar tu compra de forma segura.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-display text-xl mr-4">
                5
              </span>
              <div>
                <h3 className="font-display text-white text-xl mb-2">Recibe tu pedido</h3>
                <p className="text-gray-300">
                  Coordinaremos la entrega o envío de tu pedido según tu ubicación y preferencias.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* Métodos de pago */}
        <section className="bg-dark-50 border-2 border-gray-800 rounded-lg p-8">
          <h2 className="font-display text-3xl text-primary mb-6 uppercase">Métodos de pago</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-display text-white text-xl mb-2">Efectivo</h3>
              <p className="text-gray-300">Pago en efectivo al momento de la entrega o en tienda física.</p>
            </div>
            <div>
              <h3 className="font-display text-white text-xl mb-2">Transferencia bancaria</h3>
              <p className="text-gray-300">Transferencia electrónica a nuestras cuentas bancarias.</p>
            </div>
            <div>
              <h3 className="font-display text-white text-xl mb-2">Tarjeta de débito/crédito</h3>
              <p className="text-gray-300">Aceptamos todas las tarjetas principales en tienda física.</p>
            </div>
            <div>
              <h3 className="font-display text-white text-xl mb-2">Otros métodos</h3>
              <p className="text-gray-300">
                {/* TODO: Agregar otros métodos de pago disponibles */}
                Consulta con nuestro equipo otros métodos de pago disponibles.
              </p>
            </div>
          </div>
        </section>

        {/* Envíos y entregas */}
        <section className="bg-dark-50 border-2 border-gray-800 rounded-lg p-8">
          <h2 className="font-display text-3xl text-primary mb-6 uppercase">Envíos y entregas</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              {/* TODO: Agregar información detallada sobre envíos */}
              Ofrecemos envío a domicilio y entrega en tienda física. Los tiempos y costos de envío varían según tu ubicación.
            </p>
            <p>
              Para más información sobre envíos, contáctanos por WhatsApp y te proporcionaremos los detalles específicos para tu zona.
            </p>
          </div>
        </section>

        {/* Cambios y devoluciones */}
        <section className="bg-dark-50 border-2 border-gray-800 rounded-lg p-8">
          <h2 className="font-display text-3xl text-primary mb-6 uppercase">Cambios y devoluciones</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              {/* TODO: Agregar política de cambios y devoluciones */}
              Aceptamos cambios y devoluciones dentro de los primeros 7 días posteriores a la compra, siempre que el producto esté en su empaque original y sin uso.
            </p>
            <p>
              Para realizar un cambio o devolución, contáctanos por WhatsApp o visítanos en nuestra tienda física.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center py-8">
          <Button
            variant="primary"
            onClick={handleWhatsAppClick}
            className="text-lg px-8 py-4"
          >
            ¿Tienes preguntas? Contáctanos
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HowToBuy

