# 📁 Estructura del Proyecto

Guía visual de la estructura del proyecto y el propósito de cada archivo.

## 📂 Estructura Completa

```
olaworld_web/
│
├── 📁 app/                          # Directorio principal de Next.js 14 App Router
│   ├── 📁 components/               # Componentes React reutilizables
│   │   └── 📄 VideoBackground.tsx   # Componente de video con HLS.js
│   │
│   ├── 📄 globals.css              # Estilos globales con Tailwind
│   ├── 📄 layout.tsx               # Layout principal con metadata
│   └── 📄 page.tsx                 # Página principal (home)
│
├── 📁 docs/                        # Documentación del proyecto
│   ├── 📄 ESTRUCTURA.md            # Este archivo
│   ├── 📄 INSTALACION.md           # Guía de instalación completa
│   ├── 📄 PERSONALIZACION.md       # Guía de personalización
│   └── 📄 VIDEO_COMPONENT.md       # Documentación del componente de video
│
├── 📁 public/                      # Archivos estáticos públicos
│   ├── 🖼️ olaworld-hero.svg        # Logo principal
│   └── 🖼️ olaworld-icon.svg        # Favicon
│
├── 📁 .next/                       # Build de Next.js (generado automáticamente)
│   └── ...                         # NO editar manualmente
│
├── 📁 node_modules/                # Dependencias (generado por npm install)
│   └── ...                         # NO editar manualmente
│
├── ⚙️ .eslintrc.json               # Configuración de ESLint
├── 🚫 .gitignore                   # Archivos ignorados por Git
├── 📋 CHANGELOG.md                 # Historial de cambios del proyecto
├── 📝 env.example.txt              # Ejemplo de variables de entorno
├── 🚀 INICIO_RAPIDO.md             # Guía de inicio rápido
├── ⚙️ next.config.js               # Configuración de Next.js
├── 📦 package.json                 # Dependencias y scripts del proyecto
├── 📦 package-lock.json            # Versiones exactas de dependencias
├── ⚙️ postcss.config.js            # Configuración de PostCSS
├── 📖 README.md                    # Documentación principal
├── 🎨 tailwind.config.ts           # Configuración de Tailwind CSS
└── ⚙️ tsconfig.json                # Configuración de TypeScript
```

---

## 📄 Descripción de Archivos Clave

### 🎯 Archivos de Aplicación

#### `app/page.tsx`
**Propósito**: Página principal de la landing page

**Contenido**:
- Importa el componente `VideoBackground`
- Define la URL del video M3U8
- Estructura el layout con video de fondo y logo centrado
- Configura el overlay oscuro

**Cuándo editar**:
- Para cambiar la URL del video
- Para ajustar el diseño del logo
- Para modificar el overlay

```typescript
export default function Home() {
  const videoUrl = 'TU_URL_AQUI';
  return (
    <main>
      <VideoBackground videoUrl={videoUrl} />
      {/* Logo y contenido */}
    </main>
  );
}
```

---

#### `app/layout.tsx`
**Propósito**: Layout principal y configuración global

**Contenido**:
- Metadata del sitio (título, descripción, favicon)
- Importa estilos globales
- Estructura HTML base

**Cuándo editar**:
- Para cambiar el título del sitio
- Para actualizar la descripción
- Para modificar el favicon
- Para agregar meta tags (SEO, Open Graph, etc.)

```typescript
export const metadata: Metadata = {
  title: "Tu Título",
  description: "Tu Descripción",
  icons: { icon: "/tu-favicon.svg" },
};
```

---

#### `app/globals.css`
**Propósito**: Estilos globales

**Contenido**:
- Directivas de Tailwind (@tailwind)
- Estilos del body y html
- Reset de estilos base

**Cuándo editar**:
- Para agregar animaciones CSS personalizadas
- Para modificar estilos globales
- Para agregar fuentes personalizadas

---

#### `app/components/VideoBackground.tsx`
**Propósito**: Componente de reproducción de video M3U8

**Contenido**:
- Lógica de HLS.js
- Detección de compatibilidad del navegador
- Manejo de errores
- Estado de carga

**Cuándo editar**:
- Para modificar la configuración de HLS.js
- Para cambiar el indicador de carga
- Para agregar eventos personalizados
- Para ajustar el manejo de errores

**Props**:
- `videoUrl: string` - URL del archivo M3U8

---

### ⚙️ Archivos de Configuración

#### `package.json`
**Propósito**: Gestión de dependencias y scripts

**Contenido**:
- Lista de dependencias del proyecto
- Scripts de npm (dev, build, start, lint)
- Metadata del proyecto

**Scripts disponibles**:
```json
{
  "dev": "next dev",        // Servidor de desarrollo
  "build": "next build",    // Build para producción
  "start": "next start",    // Servidor de producción
  "lint": "next lint"       // Linter
}
```

**Cuándo editar**:
- Para agregar nuevas dependencias
- Para crear scripts personalizados
- Para actualizar versiones

---

#### `next.config.js`
**Propósito**: Configuración de Next.js

**Contenido**:
- Configuración del framework
- Opciones de optimización
- Configuración de rutas

**Cuándo editar**:
- Para agregar dominios de imágenes externos
- Para configurar redirects
- Para modificar opciones de build

---

#### `tailwind.config.ts`
**Propósito**: Configuración de Tailwind CSS

**Contenido**:
- Rutas de contenido a escanear
- Tema personalizado (colores, fuentes, etc.)
- Plugins de Tailwind

**Cuándo editar**:
- Para agregar colores personalizados
- Para extender el tema por defecto
- Para agregar plugins

```typescript
theme: {
  extend: {
    colors: {
      'custom-blue': '#1DA1F2',
    },
  },
}
```

---

#### `tsconfig.json`
**Propósito**: Configuración de TypeScript

**Contenido**:
- Opciones del compilador
- Paths de alias (@/* para imports)
- Archivos a incluir/excluir

**Cuándo editar**:
- Para agregar alias de paths
- Para modificar opciones del compilador
- Raramente necesita edición

---

### 📚 Archivos de Documentación

#### `README.md`
**Propósito**: Documentación principal del proyecto

**Secciones**:
- Características
- Instalación
- Uso
- Personalización
- Despliegue
- Licencia

---

#### `INICIO_RAPIDO.md`
**Propósito**: Guía rápida para empezar

**Contenido**:
- Comandos esenciales
- Pasos básicos
- Personalización rápida

---

#### `CHANGELOG.md`
**Propósito**: Historial de cambios

**Contenido**:
- Versiones del proyecto
- Cambios en cada versión
- Roadmap futuro

---

#### `docs/INSTALACION.md`
**Propósito**: Guía completa de instalación

**Secciones**:
- Requisitos del sistema
- Métodos de instalación
- Configuración inicial
- Despliegue
- Troubleshooting

---

#### `docs/PERSONALIZACION.md`
**Propósito**: Guía de personalización

**Secciones**:
- Cambiar video
- Cambiar logo
- Modificar colores
- Agregar elementos
- Efectos avanzados

---

#### `docs/VIDEO_COMPONENT.md`
**Propósito**: Documentación técnica del video

**Secciones**:
- Cómo funciona el componente
- Props y configuración
- Troubleshooting
- Ejemplos avanzados

---

## 🔄 Flujo de Trabajo

### Desarrollo Local

```
1. npm install          → Instala dependencias
2. npm run dev          → Inicia servidor de desarrollo
3. Editar archivos      → Realiza cambios
4. Ver en navegador     → http://localhost:3000
5. npm run lint         → Verifica código
6. npm run build        → Build para producción
```

### Estructura de Imports

```typescript
// Imports de Next.js
import Image from 'next/image';
import Link from 'next/link';

// Imports de React
import { useState, useEffect } from 'react';

// Imports de componentes locales
import VideoBackground from '@/app/components/VideoBackground';

// Imports de librerías externas
import Hls from 'hls.js';
```

---

## 🎨 Flujo de Estilos

```
1. Tailwind directives en globals.css
   ↓
2. Compilación de Tailwind
   ↓
3. PostCSS processing
   ↓
4. Estilos aplicados a componentes
```

---

## 🚀 Flujo de Build

```
1. TypeScript compilation
   ↓
2. Next.js optimization
   ↓
3. Static generation
   ↓
4. Asset optimization
   ↓
5. Output a .next/
```

---

## 📊 Mapa de Dependencias

### Producción (dependencies)

```
next ─────┬─── react ─── react-dom
          └─── hls.js
```

### Desarrollo (devDependencies)

```
typescript ─── @types/react ─── @types/node
            
tailwindcss ─── autoprefixer ─── postcss

eslint ─── eslint-config-next
```

---

## 🔍 Puntos de Entrada

### Para Desarrolladores

1. **Empezar aquí**: `README.md`
2. **Instalación**: `docs/INSTALACION.md`
3. **Código principal**: `app/page.tsx`
4. **Componente clave**: `app/components/VideoBackground.tsx`

### Para Usuarios

1. **Inicio rápido**: `INICIO_RAPIDO.md`
2. **Personalizar**: `docs/PERSONALIZACION.md`
3. **Cambios**: `CHANGELOG.md`

---

## 📝 Archivos que NO debes editar

- ❌ `node_modules/` - Generado por npm
- ❌ `.next/` - Generado por Next.js
- ❌ `package-lock.json` - Generado automáticamente
- ❌ `next-env.d.ts` - Generado por Next.js

---

## ✅ Archivos que SÍ debes editar

### Para personalización básica:
- ✅ `app/page.tsx` - Cambiar URL de video, ajustar diseño
- ✅ `app/layout.tsx` - Cambiar título y metadata
- ✅ `public/` - Reemplazar logos

### Para personalización avanzada:
- ✅ `app/components/VideoBackground.tsx` - Modificar comportamiento del video
- ✅ `app/globals.css` - Agregar estilos personalizados
- ✅ `tailwind.config.ts` - Extender tema de Tailwind
- ✅ `next.config.js` - Configuración avanzada

---

## 🎯 Archivos por Caso de Uso

### "Quiero cambiar el video"
→ Edita: `app/page.tsx` (línea 5)

### "Quiero cambiar el logo"
→ Reemplaza: `public/olaworld-hero.svg`

### "Quiero cambiar el título de la página"
→ Edita: `app/layout.tsx` (metadata)

### "Quiero agregar texto"
→ Edita: `app/page.tsx` (dentro del contenedor principal)

### "Quiero cambiar colores"
→ Edita: `tailwind.config.ts` o usa clases de Tailwind

### "Quiero modificar el comportamiento del video"
→ Edita: `app/components/VideoBackground.tsx`

---

## 📦 Archivos Generados Automáticamente

Después de `npm install`:
- ✅ `node_modules/`
- ✅ `package-lock.json`

Después de `npm run dev` o `npm run build`:
- ✅ `.next/`
- ✅ `next-env.d.ts`

---

¿Tienes dudas sobre algún archivo? Consulta la documentación específica en la carpeta `docs/`.

