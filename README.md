# CHAO FIGHT SHOP

Proyecto web de e-commerce para CHAO FIGHT SHOP - Equipamiento profesional para artes marciales y deportes de contacto.

## 🚀 Tecnologías

- **React 18** - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite** - Herramienta de construcción rápida
- **React Router** - Enrutamiento para aplicaciones React
- **TailwindCSS** - Framework de CSS utility-first
- **PostCSS** - Procesador de CSS

## 📋 Requisitos Previos

- Node.js (versión 16 o superior)
- npm o yarn

## 🛠️ Instalación

1. Clona el repositorio o navega al directorio del proyecto:
```bash
cd ChaoFightShop
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 📁 Estructura del Proyecto

```
ChaoFightShop/
├── public/
│   └── assets/
│       ├── logo/
│       │   └── chao-logo.png (coloca tu logo aquí)
│       └── cage-pattern.svg (patrón de malla)
├── src/
│   ├── components/        # Componentes reutilizables
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   ├── ProductCard.jsx
│   │   ├── CategoryCard.jsx
│   │   ├── ProductGallery.jsx
│   │   ├── Breadcrumbs.jsx
│   │   └── WhatsAppButton.jsx
│   ├── pages/            # Páginas de la aplicación
│   │   ├── Home.jsx
│   │   ├── Catalog.jsx
│   │   ├── Product.jsx
│   │   ├── Contact.jsx
│   │   ├── HowToBuy.jsx
│   │   └── About.jsx
│   ├── data/             # Datos y archivos JSON
│   │   ├── products.js
│   │   └── products.example.json
│   ├── styles/           # Estilos globales
│   │   ├── index.css
│   │   └── theme.css
│   ├── App.jsx           # Componente principal
│   └── main.jsx          # Punto de entrada
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Personalización

### Agregar tu Logo

1. Coloca tu logo en formato PNG en la siguiente ruta:
   ```
   public/assets/logo/chao-logo.png
   ```

2. El logo se usará automáticamente en:
   - Navbar (barra de navegación superior)
   - Footer (pie de página)
   - Hero de la página principal

### Cambiar Número de WhatsApp

El número de WhatsApp está configurado en dos lugares:

1. **Componente WhatsAppButton** (`src/components/WhatsAppButton.jsx`):
   - Busca la constante `WHATSAPP_NUMBER` en la línea 4
   - Cambia el valor: `const WHATSAPP_NUMBER = '6144956596'` (sin guiones ni espacios)

2. **Otros componentes** que usan WhatsApp:
   - Busca `526144956596` en los archivos (formato internacional con código de país 52 para México)
   - Reemplaza con tu número en formato: `52` + número sin guiones

**Nota:** El número actual (614-495-6596) es temporal. Asegúrate de cambiarlo antes de producción.

### Agregar Productos

1. Edita el archivo `src/data/products.example.json`
2. Agrega nuevos productos siguiendo esta estructura:

```json
{
  "id": 4,
  "sku": "CHAO-XXX-001",
  "title": "Nombre del Producto",
  "brand": "Marca",
  "category": "categoria",
  "sport": "deporte",
  "price": 999,
  "description": "Descripción detallada del producto",
  "materials": "Materiales utilizados",
  "images": [
    "/assets/products/imagen-1.jpg",
    "/assets/products/imagen-2.jpg"
  ]   
}
```

3. Coloca las imágenes de los productos en `public/assets/products/`

### Personalizar Colores y Estilos

Los colores principales están configurados en `tailwind.config.js`:

- **Primary (Rojo CHAO):** `#e10600`
- **Dark (Negro):** `#0a0a0a`

Puedes modificar estos valores en la sección `theme.extend.colors` del archivo de configuración.

### Agregar Descripciones y Contenido

Busca los comentarios `TODO:` en los archivos para saber dónde agregar:
- Descripciones de productos
- Precios formateados
- Información de contacto (email, dirección, horarios)
- Políticas de envío y devoluciones
- Historia, misión y valores de la empresa

## 📱 Páginas Disponibles

- **/** - Página principal (Home)
- **/catalogo** - Catálogo de productos con filtros
- **/producto/:id** - Página individual de producto
- **/contacto** - Información de contacto y ubicación
- **/como-comprar** - Guía de compra y políticas
- **/sobre-nosotros** - Historia, misión y valores

## 🏗️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción

## 🎯 Características

- ✅ Diseño responsive (mobile-first)
- ✅ Navegación con React Router
- ✅ Filtros de búsqueda en catálogo
- ✅ Integración con WhatsApp
- ✅ Estilos personalizados con TailwindCSS
- ✅ Componentes reutilizables
- ✅ Diseño inspirado en VENUM.COM con identidad CHAO

## 📝 Notas Importantes

- Los precios están en formato numérico. Puedes formatearlos con moneda en los componentes.
- Las imágenes de productos son placeholders. Reemplázalas con imágenes reales.
- El patrón de malla (`cage-pattern.svg`) es un placeholder. Puedes reemplazarlo con tu diseño.
- El número de WhatsApp es temporal. **Recuerda cambiarlo antes de producción.**

## 🚀 Deploy en Vercel

El proyecto está configurado y listo para deploy en Vercel.

### Opción 1: Deploy desde GitHub (Recomendado)

1. **Sube tu código a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin [URL_DE_TU_REPOSITORIO]
   git push -u origin main
   ```

2. **Conecta con Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub
   - Haz clic en "Add New Project"
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente que es un proyecto Vite
   - Haz clic en "Deploy"

3. **Configuración automática:**
   - Framework Preset: Vite (detectado automáticamente)
   - Build Command: `npm run build` (automático)
   - Output Directory: `dist` (automático)
   - Install Command: `npm install` (automático)

### Opción 2: Deploy con Vercel CLI

1. **Instala Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Inicia sesión:**
   ```bash
   vercel login
   ```

3. **Haz deploy:**
   ```bash
   vercel
   ```

4. **Para producción:**
   ```bash
   vercel --prod
   ```

### Configuración en Vercel

El archivo `vercel.json` ya está configurado con:
- ✅ Rewrites para React Router (todas las rutas apuntan a `index.html`)
- ✅ Headers de caché para assets estáticos
- ✅ Configuración optimizada para SPA

### Variables de Entorno (si las necesitas)

Si en el futuro necesitas variables de entorno:
1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega las variables necesarias

### Verificar el Deploy

Después del deploy, verifica que:
- ✅ La página principal carga correctamente
- ✅ Las rutas funcionan (ej: `/catalogo`, `/contacto`)
- ✅ El logo se muestra correctamente
- ✅ Los estilos de TailwindCSS se aplican
- ✅ El botón de WhatsApp funciona

### Dominio Personalizado

Para agregar un dominio personalizado:
1. Ve a tu proyecto en Vercel
2. Settings → Domains
3. Agrega tu dominio y sigue las instrucciones

## 🤝 Soporte

Para preguntas o soporte, contacta al equipo de desarrollo.

---

**CHAO FIGHT SHOP** - Equipamos a guerreros 🥊

