# 🚀 Inicio Rápido - Ola World Coming Soon

## Pasos para ejecutar el proyecto:

### 1. Instalar dependencias

```bash
npm install
```

### 2. Ejecutar en modo desarrollo

```bash
npm run dev
```

### 3. Abrir en el navegador

Abre [http://localhost:3000](http://localhost:3000)

---

## ⚡ Comandos disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build para producción
npm run start    # Iniciar servidor de producción
npm run lint     # Verificar código
```

---

## 📁 Archivos importantes

- **`app/page.tsx`** - Página principal con el video y logo
- **`app/components/VideoBackground.tsx`** - Componente de video con HLS.js
- **`app/layout.tsx`** - Layout con metadata y favicon
- **`public/`** - Archivos estáticos (SVGs)

---

## 🎨 Personalización rápida

### Cambiar video:
Edita la URL en `app/page.tsx` línea 5

### Cambiar logo:
Reemplaza `public/olaworld-hero.svg`

### Cambiar favicon:
Reemplaza `public/olaworld-icon.svg`

### Ajustar tamaño del logo:
Modifica `max-w-2xl` en `app/page.tsx` línea 14

### Cambiar overlay oscuro:
Modifica `bg-black/20` en `app/page.tsx` línea 10

---

## 🔧 Tecnologías

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- HLS.js

---

## 📱 Características

✅ Video M3U8 con HLS.js  
✅ Responsive design  
✅ Autoplay, muted, loop  
✅ Soporte cross-browser  
✅ Logo centrado  
✅ Favicon personalizado  

---

## ❓ Problemas comunes

**El video no se reproduce:**
- Verifica que la URL del video M3U8 sea accesible
- Revisa la consola del navegador para errores
- Asegúrate de tener conexión a internet

**Error al instalar:**
- Verifica que tienes Node.js 18.17 o superior
- Intenta borrar `node_modules` y `package-lock.json` y reinstalar

**Errores de TypeScript:**
- Ejecuta `npm run lint` para ver los errores específicos
- Verifica que todos los archivos `.tsx` tengan la sintaxis correcta

---

¡Listo para comenzar! 🎉

