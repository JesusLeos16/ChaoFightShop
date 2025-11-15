# 🚀 Guía Rápida de Deploy en Vercel

## Pasos Rápidos

### 1. Prepara tu código
```bash
# Asegúrate de que todo esté commiteado
git add .
git commit -m "Preparado para deploy"
```

### 2. Opción A: Deploy desde GitHub (Recomendado)

1. Sube tu código a GitHub:
   ```bash
   git push origin main
   ```

2. Ve a [vercel.com](https://vercel.com) e inicia sesión

3. Haz clic en "Add New Project"

4. Importa tu repositorio de GitHub

5. Vercel detectará automáticamente:
   - ✅ Framework: Vite
   - ✅ Build Command: `npm run build`
   - ✅ Output Directory: `dist`
   - ✅ Install Command: `npm install`

6. Haz clic en "Deploy"

7. ¡Listo! Tu sitio estará en línea en menos de 2 minutos

### 2. Opción B: Deploy con CLI

```bash
# Instala Vercel CLI (si no lo tienes)
npm i -g vercel

# Inicia sesión
vercel login

# Deploy a preview
vercel

# Deploy a producción
vercel --prod
```

## ✅ Verificaciones Post-Deploy

Después del deploy, verifica:

- [ ] La página principal carga: `https://tu-proyecto.vercel.app`
- [ ] Las rutas funcionan: `/catalogo`, `/contacto`, etc.
- [ ] El logo se muestra correctamente
- [ ] Los estilos de TailwindCSS se aplican
- [ ] El botón de WhatsApp funciona
- [ ] Las imágenes se cargan correctamente

## 🔧 Configuración

El archivo `vercel.json` ya está configurado con:
- ✅ Rewrites para React Router (SPA)
- ✅ Headers de caché para assets
- ✅ Configuración optimizada

## 📝 Notas Importantes

- **Número de WhatsApp**: Recuerda cambiarlo antes de producción
- **Logo**: Asegúrate de subir `chao-logo.png` a `/public/assets/logo/`
- **Productos**: Agrega tus productos en `src/data/products.example.json`
- **Dominio personalizado**: Configúralo en Settings → Domains

## 🆘 Problemas Comunes

### Las rutas no funcionan
- Verifica que `vercel.json` esté en la raíz del proyecto
- Asegúrate de que el build se complete sin errores

### Los estilos no se aplican
- Verifica que TailwindCSS esté configurado correctamente
- Revisa que `tailwind.config.js` esté presente

### El build falla
- Verifica que todas las dependencias estén en `package.json`
- Revisa los logs de build en Vercel

---

**¡Tu proyecto está listo para producción!** 🎉

