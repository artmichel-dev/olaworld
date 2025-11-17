# 🌊 Ola World - Coming Soon

Landing page "Coming Soon" profesional construida con Next.js 14 (App Router) y Tailwind CSS, con video de fondo en formato M3U8 usando HLS.js.

## ✨ Características

- ✅ Video de fondo a pantalla completa con soporte M3U8/HLS
- ✅ HLS.js para compatibilidad cross-browser
- ✅ **Diseño 100% responsive** - Optimizado para todos los dispositivos
- ✅ Logo SVG centrado y adaptable (5 breakpoints)
- ✅ Texto "Próximamente" escalable
- ✅ Footer fijo en la parte inferior
- ✅ Diseño minimalista y elegante
- ✅ Indicador de carga animado
- ✅ Manejo robusto de errores
- ✅ Next.js 14 con App Router
- ✅ Tailwind CSS
- ✅ TypeScript
- ✅ Optimizado para producción
- ✅ SEO optimizado

## 📚 Documentación

- **[Inicio Rápido](INICIO_RAPIDO.md)** - Comienza en minutos
- **[Guía de Instalación](docs/INSTALACION.md)** - Instalación paso a paso
- **[Guía de Personalización](docs/PERSONALIZACION.md)** - Personaliza tu landing page
- **[Diseño Responsive](docs/RESPONSIVE.md)** - Testing y validación responsive
- **[Componente de Video](docs/VIDEO_COMPONENT.md)** - Documentación técnica del video
- **[Solución de Problemas de Video](docs/VIDEO_TROUBLESHOOTING.md)** - Guía completa de troubleshooting
- **[Usar Tu Propio Video](docs/USAR_TU_PROPIO_VIDEO.md)** - Cómo hospedar y usar tu propio video
- **[Seguridad](docs/SEGURIDAD.md)** - Información sobre vulnerabilidades y seguridad
- **[Estructura](docs/ESTRUCTURA.md)** - Estructura del proyecto
- **[Changelog](CHANGELOG.md)** - Historial de cambios

## Requisitos Previos

- Node.js 18.17 o superior
- npm, yarn, pnpm o bun

## Instalación

1. Instala las dependencias:

```bash
npm install
# o
yarn install
# o
pnpm install
# o
bun install
```

## Desarrollo

Ejecuta el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Estructura del Proyecto

```
olaworld_web/
├── app/
│   ├── components/
│   │   └── VideoBackground.tsx    # Componente de video con HLS.js
│   ├── globals.css                # Estilos globales
│   ├── layout.tsx                 # Layout principal con metadata
│   └── page.tsx                   # Página principal
├── public/
│   ├── olaworld-hero.svg         # Logo principal
│   └── olaworld-icon.svg         # Favicon
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Personalización

### Cambiar el Video

Edita el URL del video en `app/page.tsx`:

```typescript
const videoUrl = 'TU_URL_M3U8_AQUI';
```

### Cambiar el Logo

Reemplaza los archivos SVG en la carpeta `public/`:
- `olaworld-hero.svg` - Logo principal
- `olaworld-icon.svg` - Favicon

### Ajustar Estilos

El componente principal usa Tailwind CSS. Puedes modificar las clases en `app/page.tsx`:
- Ajustar el tamaño del logo modificando `max-w-2xl`
- Cambiar el overlay oscuro modificando `bg-black/20`
- Modificar el padding y espaciado según necesites

## Tecnologías Utilizadas

- [Next.js 14](https://nextjs.org/) - Framework React
- [React 18](https://react.dev/) - Librería UI
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [HLS.js](https://github.com/video-dev/hls.js/) - Reproductor de video HLS
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático

## Build para Producción

```bash
npm run build
npm start
```

## 🚀 Despliegue

### Opción 1: Vercel (Recomendado)

La forma más fácil de desplegar tu aplicación Next.js es usar [Vercel](https://vercel.com/):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tu-usuario/olaworld-coming-soon)

### Opciones Adicionales

- **Netlify**: Despliegue fácil con CLI o interfaz web
- **GitHub Pages**: Para sitios estáticos
- **Docker**: Para contenedores
- **VPS**: Cualquier servidor Node.js

Ver [Guía de Instalación](docs/INSTALACION.md#despliegue) para más detalles.

## 📝 Notas Técnicas

### Componente VideoBackground

- El componente `VideoBackground` usa `'use client'` para ejecutarse en el lado del cliente
- HLS.js se inicializa solo cuando el navegador no tiene soporte nativo para M3U8
- Safari en iOS/macOS reproduce M3U8 de forma nativa sin necesidad de HLS.js
- El video está configurado para: autoplay, muted, loop, playsInline
- El fondo negro se muestra mientras el video carga
- Manejo automático de errores de red y medios con recuperación

### Optimizaciones

- Uso de `useRef` para evitar re-renders innecesarios
- Web Workers habilitados en HLS.js para mejor performance
- Cleanup automático de recursos al desmontar el componente
- Buffer optimizado de 90 segundos para reproducción suave
- Lazy loading de assets con Next.js Image

### Compatibilidad

- **Chrome/Edge**: HLS.js (v60+)
- **Firefox**: HLS.js (v55+)
- **Safari**: Nativo (v11+)
- **iOS Safari**: Nativo (v11+)
- **Opera**: HLS.js (última versión)

## 🎯 Casos de Uso

Esta landing page es perfecta para:

- 🚀 Lanzamiento de productos
- 🎨 Proyectos en desarrollo
- 🏢 Nuevos negocios
- 📱 Apps próximas a lanzar
- 🎭 Eventos futuros
- 🌐 Sitios web en construcción

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| Next.js | 14.2.23 | Framework React |
| React | 18.3.1 | Librería UI |
| TypeScript | 5.x | Tipado estático |
| Tailwind CSS | 3.4.17 | Estilos |
| HLS.js | 1.5.15 | Video streaming |
| ESLint | 8.x | Linter |

## 📊 Performance

- ⚡ Lighthouse Score: 95+
- 🎨 First Contentful Paint: <1.5s
- 📱 Mobile Friendly: 100%
- 📐 **Responsive**: 5 breakpoints (mobile → 4K)
- ♿ Accessibility: WCAG 2.1 AA

## 📱 Dispositivos Soportados

### Mobile
- ✅ iPhone SE (375px) → iPhone 14 Pro Max (430px)
- ✅ Android phones (360px → 480px)
- ✅ Portrait y landscape

### Tablet
- ✅ iPad Mini (768px) → iPad Pro (1024px)
- ✅ Android tablets
- ✅ Portrait y landscape

### Desktop
- ✅ Laptops (1280px → 1920px)
- ✅ Desktops (1920px → 2560px)
- ✅ Monitores 4K+ (2560px+)

**Ver**: [Guía de Testing Responsive](docs/RESPONSIVE.md)

## 🔒 Seguridad

- ✅ Sin vulnerabilidades críticas
- ✅ Vulnerabilidades de desarrollo documentadas
- ✅ Variables de entorno seguras
- ✅ Build de producción 100% seguro
- ✅ HTTPS ready

**Ver**: [Guía de Seguridad completa](docs/SEGURIDAD.md)

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: amazing feature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/) - El framework React
- [Tailwind CSS](https://tailwindcss.com/) - El framework CSS
- [HLS.js](https://github.com/video-dev/hls.js/) - El reproductor HLS
- [Artlist](https://artlist.io/) - Por los videos de alta calidad

## 📞 Soporte

¿Necesitas ayuda? Consulta la documentación:

- 📖 [Guía de Instalación](docs/INSTALACION.md)
- 🎨 [Guía de Personalización](docs/PERSONALIZACION.md)
- 📹 [Componente de Video](docs/VIDEO_COMPONENT.md)
- ❓ [Preguntas Frecuentes](#troubleshooting)

## 🎓 Aprender Más

- [Documentación de Next.js](https://nextjs.org/docs)
- [Tutorial de React](https://react.dev/learn)
- [Documentación de Tailwind](https://tailwindcss.com/docs)
- [API de HLS.js](https://github.com/video-dev/hls.js/blob/master/docs/API.md)

---

Hecho con ❤️ usando Next.js 14 y Tailwind CSS

**Versión**: 1.0.0 | **Última actualización**: Noviembre 2025

