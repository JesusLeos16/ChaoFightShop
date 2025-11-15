import Breadcrumbs from '../components/Breadcrumbs'
import Button from '../components/Button'

function Contact() {
  const breadcrumbs = [
    { label: 'Contacto', path: '/contacto' },
  ]

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hola, me interesa conocer más sobre sus productos.')
    window.open(`https://wa.me/526144956596?text=${message}`, '_blank')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />

      <div className="mb-12">
        <h1 className="font-display text-4xl md:text-5xl text-white mb-4 uppercase tracking-wider">
          Contacto
        </h1>
        <p className="text-gray-400 text-lg">
          Estamos aquí para ayudarte. Contáctanos por cualquier medio.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Información de contacto */}
        <div className="space-y-8">
          <div className="bg-dark-50 border-2 border-gray-800 rounded-lg p-6">
            <h2 className="font-display text-2xl text-primary mb-6 uppercase">Información de contacto</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-white mb-2 uppercase">Teléfono</h3>
                <a href="tel:6144956596" className="text-gray-300 hover:text-primary transition-colors text-lg">
                  📞 614-495-6596
                </a>
              </div>

              <div>
                <h3 className="font-display text-white mb-2 uppercase">Email</h3>
                <p className="text-gray-300">
                  {/* TODO: Agregar email de contacto */}
                  contacto@chaofightshop.com
                </p>
              </div>

              <div>
                <h3 className="font-display text-white mb-2 uppercase">Dirección</h3>
                <p className="text-gray-300">
                  {/* TODO: Agregar dirección completa de la tienda */}
                  Dirección de la tienda física
                  <br />
                  Ciudad, Estado, Código Postal
                </p>
              </div>

              <div>
                <h3 className="font-display text-white mb-2 uppercase">Horarios</h3>
                <p className="text-gray-300">
                  {/* TODO: Agregar horarios de atención */}
                  Lunes a Viernes: 10:00 AM - 8:00 PM
                  <br />
                  Sábados: 10:00 AM - 6:00 PM
                  <br />
                  Domingos: Cerrado
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Button
                variant="primary"
                onClick={handleWhatsAppClick}
                className="w-full"
              >
                Contactar por WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div className="bg-dark-50 border-2 border-gray-800 rounded-lg p-6">
          <h2 className="font-display text-2xl text-primary mb-6 uppercase">Ubicación</h2>
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
            {/* TODO: Reemplazar con iframe de Google Maps con la dirección real */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.1234567890!2d-106.1234567890!3d28.1234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA3JzI0LjQiTiAxMDbCsDA3JzI0LjQiVw!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de CHAO FIGHT SHOP"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

