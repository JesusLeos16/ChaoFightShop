# 🖼️ Optimización del Logo para Web

## Problema Actual
El logo `chao-logo.png` tiene **1.66 MB**, lo cual es demasiado grande para:
- Favicon (icono del navegador)
- Manifest icons (iconos PWA)
- Carga rápida en la página

## Solución Recomendada

### Opción 1: Optimizar el Logo Original (Recomendado)
1. Abre `chao-logo.png` en un editor de imágenes
2. Exporta/Guarda como PNG con:
   - **Calidad**: 80-90%
   - **Compresión**: Máxima
   - **Tamaño objetivo**: Menos de 200 KB

**Herramientas recomendadas:**
- [TinyPNG](https://tinypng.com/) - Compresión online gratuita
- [Squoosh](https://squoosh.app/) - Optimizador de Google
- Photoshop: Exportar para Web → PNG-24 con optimización

### Opción 2: Crear Versiones Específicas
Crea versiones más pequeñas del logo:

1. **`chao-logo-favicon.png`** (32x32 o 64x64 px, < 10 KB)
   - Para el favicon del navegador
   
2. **`chao-logo-icon-192.png`** (192x192 px, < 50 KB)
   - Para el manifest icon pequeño
   
3. **`chao-logo-icon-512.png`** (512x512 px, < 150 KB)
   - Para el manifest icon grande

4. **`chao-logo.png`** (tamaño original optimizado, < 300 KB)
   - Para usar en Navbar, Footer, Hero

## Pasos Rápidos con TinyPNG

1. Ve a https://tinypng.com/
2. Sube tu `chao-logo.png`
3. Descarga la versión optimizada
4. Reemplaza el archivo original

**Resultado esperado:** Reducción del 70-90% del tamaño sin pérdida visible de calidad.

