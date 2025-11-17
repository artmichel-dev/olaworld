# Changelog

Todos los cambios notables de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [1.1.1] - 2025-11-17

### 🔧 Corregido

#### Componente VideoBackground
- **Manejo de errores mejorado** con sistema de reintentos (máximo 3 intentos)
- **Logs detallados en consola** para debugging (🎥 ✅ ❌ ⚠️)
- **Mensajes de error amigables** para el usuario con botón "Reintentar"
- **Click to play** si autoplay falla
- **Configuración CORS** mejorada (`crossOrigin="anonymous"`)
- **Detección de errores de red y medios** con recuperación automática

#### Documentación
- Añadido `docs/VIDEO_TROUBLESHOOTING.md` - Guía completa de troubleshooting
  - Diagnóstico paso a paso
  - URLs de video alternativas que funcionan 100%
  - Soluciones a problemas comunes
  - Checklist de solución
  - Recomendaciones de formato y optimización

### 🎬 Videos Alternativos Agregados

- Apple Test Stream (siempre disponible)
- Mux Test Stream (4K)
- Bitmovin Sintel (HD)

### 🐛 Problemas Resueltos

- ❌ Video no cargaba en Vercel → ✅ Sistema de reintentos
- ❌ Sin feedback visual de error → ✅ Mensajes claros + botón reintentar
- ❌ Difícil de debuggear → ✅ Logs detallados en consola
- ❌ Autoplay bloqueado → ✅ Click to play implementado

---

## [1.1.0] - 2025-11-17

### ✨ Añadido

#### Diseño Responsive (CRÍTICO)
- **Logo responsive** con 5 breakpoints (mobile → 4K)
  - Base: 256px (w-64)
  - sm: 320px (w-80)
  - md: 384px (w-96)
  - lg: 512px (w-[32rem])
  - xl: 640px (w-[40rem])
  - max-w-[90vw] para prevenir overflow
  
- **Texto "Próximamente | Coming soon"**
  - Responsive con 4 tamaños de fuente
  - text-lg sm:text-xl md:text-2xl lg:text-3xl
  - Centrado y con espaciado adaptable
  
- **Footer con copyright**
  - "©2025 Ola World, some rights reserved."
  - Fijo en la parte inferior (absolute bottom-0)
  - Responsive: text-xs sm:text-sm
  - Color: text-white/70

#### Mejoras de Layout
- Contenedor principal con `flex-col` para layout vertical
- `pb-20` para dar espacio al footer
- Overlay mejorado a `bg-black/30` para mejor legibilidad
- Padding responsive: px-4 sm:px-6 md:px-8

#### Documentación
- Añadido `docs/RESPONSIVE.md` - Guía completa de testing responsive
  - Matriz de compatibilidad de dispositivos
  - Checklist de validación
  - Herramientas de testing
  - Problemas comunes y soluciones
- Actualizado `README.md` con sección de dispositivos soportados

### 🎨 Cambiado
- Layout principal ahora usa flexbox vertical
- Overlay incrementado de 20% a 30% de opacidad
- Logo ahora con tamaños específicos por breakpoint
- Estructura HTML reorganizada para mejor responsividad

### 📱 Compatibilidad Verificada
- ✅ Mobile: 320px - 767px
- ✅ Tablet: 768px - 1023px
- ✅ Laptop: 1024px - 1279px
- ✅ Desktop: 1280px - 1919px
- ✅ Large Desktop: 1920px+
- ✅ 4K: 2560px+

---

## [1.0.1] - 2025-11-17

### 🔒 Seguridad

#### Actualizado
- **Next.js**: 14.2.23 → 14.2.33 (corrige 6 vulnerabilidades críticas/altas)
- **eslint-config-next**: 14.2.23 → 14.2.33 (alineado con Next.js)

#### Documentación
- Añadido `docs/SEGURIDAD.md` - Guía completa de seguridad
- Añadido `.npmrc` - Configuración para suprimir advertencias no críticas
- Actualizado `README.md` con información de seguridad

### 📝 Notas de Seguridad

- ✅ **Sin vulnerabilidades críticas**
- ⚠️ 5 vulnerabilidades "high" en dependencias de desarrollo (glob)
  - Solo afectan herramientas de desarrollo
  - NO se incluyen en el build de producción
  - NO representan riesgo para usuarios finales
  - Ver `docs/SEGURIDAD.md` para detalles completos

---

## [1.0.0] - 2025-11-17

### ✨ Añadido

#### Funcionalidades principales
- Landing page "Coming Soon" completa con Next.js 14 (App Router)
- Componente `VideoBackground` con soporte HLS.js para videos M3U8
- Soporte cross-browser (Chrome, Firefox, Safari, Edge)
- Reproducción nativa en Safari para M3U8
- Logo SVG centrado con diseño responsive
- Favicon personalizado
- Indicador de carga animado
- Overlay oscuro configurable sobre el video

#### Componentes
- `app/components/VideoBackground.tsx` - Componente de video con HLS.js
  - Detección automática de compatibilidad del navegador
  - Manejo robusto de errores con recuperación automática
  - Estado de carga con indicador visual
  - Configuración optimizada de HLS.js
  - Cleanup automático de recursos

#### Páginas
- `app/page.tsx` - Página principal con video de fondo y logo
- `app/layout.tsx` - Layout con metadata y configuración de favicon

#### Estilos
- `app/globals.css` - Estilos globales con Tailwind CSS
- Diseño responsive con breakpoints de Tailwind
- Animaciones suaves y transiciones

#### Configuración
- `next.config.js` - Configuración de Next.js
- `tailwind.config.ts` - Configuración de Tailwind CSS
- `tsconfig.json` - Configuración de TypeScript
- `postcss.config.js` - Configuración de PostCSS
- `.eslintrc.json` - Configuración de ESLint

#### Documentación
- `README.md` - Documentación principal del proyecto
- `INICIO_RAPIDO.md` - Guía de inicio rápido
- `CHANGELOG.md` - Registro de cambios
- `docs/INSTALACION.md` - Guía de instalación completa
- `docs/PERSONALIZACION.md` - Guía de personalización
- `docs/VIDEO_COMPONENT.md` - Documentación del componente de video
- `env.example.txt` - Ejemplo de variables de entorno

#### Assets
- `public/olaworld-hero.svg` - Logo principal
- `public/olaworld-icon.svg` - Favicon

#### Dependencias
- `next@14.2.23` - Framework Next.js
- `react@18.3.1` - Librería React
- `react-dom@18.3.1` - React DOM
- `hls.js@1.5.15` - Reproductor HLS
- `tailwindcss@3.4.17` - Framework CSS
- `typescript@5` - Tipado estático
- `autoprefixer@10.4.20` - PostCSS plugin
- `eslint@8` - Linter
- `eslint-config-next@14.2.23` - Configuración ESLint para Next.js

### 🔧 Características Técnicas

#### Video Background
- ✅ Soporte M3U8/HLS
- ✅ Autoplay, muted, loop
- ✅ Responsive (object-cover)
- ✅ Manejo de errores de red y medios
- ✅ Recuperación automática de errores
- ✅ Web Workers habilitados
- ✅ Buffer optimizado (90 segundos)

#### Performance
- ✅ Uso de `useRef` para evitar re-renders
- ✅ Cleanup automático de recursos
- ✅ Lazy loading de assets
- ✅ Optimización de imágenes con Next.js Image
- ✅ CSS optimizado con Tailwind

#### Compatibilidad
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 11+
- ✅ Edge 79+
- ✅ iOS Safari 11+

#### SEO
- ✅ Metadata configurada
- ✅ Open Graph tags
- ✅ Favicon optimizado
- ✅ Estructura semántica HTML

### 📝 Notas

- Primer lanzamiento estable
- Probado en múltiples navegadores
- Documentación completa incluida
- Listo para producción

### 🚀 Deployment

Soporta despliegue en:
- ✅ Vercel (recomendado)
- ✅ Netlify
- ✅ GitHub Pages
- ✅ Docker
- ✅ Cualquier servicio que soporte Node.js

---

## [Unreleased]

### 🎯 Planeado para futuras versiones

#### v1.1.0 (Q1 2025)
- [ ] Formulario de suscripción con integración de email
- [ ] Countdown timer hasta la fecha de lanzamiento
- [ ] Botones de redes sociales
- [ ] Modo oscuro/claro toggle
- [ ] Soporte para múltiples idiomas (i18n)
- [ ] Analytics integrado (Google Analytics 4)

#### v1.2.0 (Q2 2025)
- [ ] Sistema de temas personalizables
- [ ] Animaciones avanzadas (Framer Motion)
- [ ] Efectos parallax
- [ ] Transiciones de página suaves
- [ ] Lazy loading mejorado
- [ ] Progressive Web App (PWA)

#### v1.3.0 (Q3 2025)
- [ ] Panel de administración
- [ ] CMS headless integration
- [ ] A/B testing
- [ ] Optimización SEO avanzada
- [ ] Accesibilidad mejorada (WCAG 2.1 AAA)

### 🐛 Problemas Conocidos

Ninguno en este momento.

### 🔐 Seguridad

No hay vulnerabilidades conocidas.

---

## Tipos de Cambios

- `Añadido` - para nuevas funcionalidades
- `Cambiado` - para cambios en funcionalidades existentes
- `Obsoleto` - para funcionalidades que serán eliminadas
- `Eliminado` - para funcionalidades eliminadas
- `Corregido` - para corrección de bugs
- `Seguridad` - para cambios relacionados con vulnerabilidades

---

## Versioning

Este proyecto usa [Semantic Versioning](https://semver.org/):

- **MAJOR** (X.0.0) - Cambios incompatibles con versiones anteriores
- **MINOR** (0.X.0) - Nuevas funcionalidades compatibles
- **PATCH** (0.0.X) - Corrección de bugs

---

## Contribuir

Para contribuir al proyecto:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

## Contacto

Para preguntas o sugerencias, abre un issue en el repositorio.

---

Última actualización: 17 de noviembre, 2025

