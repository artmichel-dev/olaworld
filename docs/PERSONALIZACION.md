# 🎨 Guía de Personalización

Esta guía te ayudará a personalizar cada aspecto de la landing page "Coming Soon".

## 📹 Video de Fondo

### Método 1: Cambio directo en el código

Edita `app/page.tsx`:

```typescript
const videoUrl = 'TU_URL_AQUI.m3u8';
```

### Método 2: Usando variables de entorno

1. Crea un archivo `.env.local`:

```bash
NEXT_PUBLIC_VIDEO_URL=https://ejemplo.com/tu-video.m3u8
```

2. Actualiza `app/page.tsx`:

```typescript
const videoUrl = process.env.NEXT_PUBLIC_VIDEO_URL || 'URL_POR_DEFECTO';
```

### Fuentes de videos M3U8

- [Artlist](https://artlist.io/) - Videos premium
- [Pexels](https://www.pexels.com/) - Videos gratuitos
- [Coverr](https://coverr.co/) - Videos gratuitos

**Nota**: Asegúrate de que el video tenga formato M3U8/HLS.

---

## 🎭 Logo Principal

### Reemplazar el logo

1. Coloca tu archivo SVG en `public/`
2. Nómbralo `olaworld-hero.svg` o actualiza la referencia en `app/page.tsx`:

```tsx
<Image
  src="/tu-logo.svg"
  alt="Tu Marca"
  width={1920}
  height={1080}
  priority
  className="w-full h-auto drop-shadow-2xl"
/>
```

### Ajustar el tamaño del logo

Modifica las clases de Tailwind en `app/page.tsx`:

```tsx
{/* Tamaño pequeño */}
<div className="w-full max-w-md px-8">

{/* Tamaño mediano (por defecto) */}
<div className="w-full max-w-2xl px-8">

{/* Tamaño grande */}
<div className="w-full max-w-4xl px-8">

{/* Tamaño extra grande */}
<div className="w-full max-w-6xl px-8">
```

### Agregar efectos al logo

```tsx
{/* Efecto de sombra */}
<Image
  className="w-full h-auto drop-shadow-2xl"
  // ...
/>

{/* Efecto de brillo */}
<Image
  className="w-full h-auto filter brightness-110"
  // ...
/>

{/* Efecto de opacidad */}
<Image
  className="w-full h-auto opacity-90"
  // ...
/>

{/* Animación de entrada */}
<Image
  className="w-full h-auto animate-fade-in"
  // ...
/>
```

---

## 🎨 Colores y Overlay

### Cambiar el overlay del video

El overlay mejora la legibilidad del logo sobre el video.

Edita `app/page.tsx` línea 10:

```tsx
{/* Sin overlay */}
<div className="absolute inset-0 bg-transparent z-10" />

{/* Overlay oscuro ligero (por defecto) */}
<div className="absolute inset-0 bg-black/20 z-10" />

{/* Overlay oscuro medio */}
<div className="absolute inset-0 bg-black/40 z-10" />

{/* Overlay oscuro fuerte */}
<div className="absolute inset-0 bg-black/60 z-10" />

{/* Overlay con gradiente */}
<div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 z-10" />

{/* Overlay de color */}
<div className="absolute inset-0 bg-blue-900/30 z-10" />
```

### Cambiar el fondo de carga

Edita `app/globals.css`:

```css
body {
  background-color: #000;  /* Negro (por defecto) */
  /* background-color: #1a1a1a; */  /* Gris oscuro */
  /* background-color: #0f172a; */  /* Azul oscuro */
  /* background: linear-gradient(to bottom, #000, #1a1a1a); */  /* Gradiente */
}
```

---

## 🖼️ Favicon

### Reemplazar el favicon

1. Coloca tu archivo SVG en `public/`
2. Nómbralo `olaworld-icon.svg` o actualiza `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "Tu Título",
  description: "Tu Descripción",
  icons: {
    icon: "/tu-favicon.svg",
    // O para múltiples tamaños:
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
};
```

---

## 📱 Diseño Responsive

### Ajustar el diseño en móviles

```tsx
{/* Logo más pequeño en móvil */}
<div className="w-full max-w-xs sm:max-w-md md:max-w-2xl px-4 sm:px-8">
  <Image src="/olaworld-hero.svg" alt="Ola World" />
</div>

{/* Padding adaptativo */}
<div className="px-4 sm:px-6 md:px-8 lg:px-12">
  {/* Contenido */}
</div>
```

### Breakpoints de Tailwind

- `sm:` - 640px y más
- `md:` - 768px y más
- `lg:` - 1024px y más
- `xl:` - 1280px y más
- `2xl:` - 1536px y más

---

## ✨ Agregar Animaciones

### Animación de entrada para el logo

1. Agrega en `app/globals.css`:

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-fade-in-slow {
  animation: fadeIn 2s ease-out;
}
```

2. Aplica en `app/page.tsx`:

```tsx
<div className="w-full max-w-2xl px-8 animate-fade-in">
  <Image src="/olaworld-hero.svg" alt="Ola World" />
</div>
```

### Animación de pulsación

```css
@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

.animate-pulse-custom {
  animation: pulse 3s ease-in-out infinite;
}
```

---

## 📝 Agregar Texto

### Agregar título y descripción

Edita `app/page.tsx` dentro del contenedor del logo:

```tsx
<div className="relative z-20 flex items-center justify-center w-full h-full">
  <div className="w-full max-w-2xl px-8 text-center">
    {/* Logo */}
    <Image
      src="/olaworld-hero.svg"
      alt="Ola World"
      width={1920}
      height={1080}
      priority
      className="w-full h-auto drop-shadow-2xl mb-8"
    />
    
    {/* Título */}
    <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
      Próximamente
    </h1>
    
    {/* Descripción */}
    <p className="text-white text-lg md:text-xl mb-8 opacity-90">
      Algo increíble está por llegar
    </p>
    
    {/* Countdown o CTA */}
    <div className="text-white text-sm opacity-75">
      Lanzamiento: Primavera 2025
    </div>
  </div>
</div>
```

### Agregar formulario de suscripción

```tsx
<div className="mt-8">
  <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
    <input
      type="email"
      placeholder="Tu email"
      className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
    />
    <button
      type="submit"
      className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-white/90 transition-colors"
    >
      Notificarme
    </button>
  </form>
</div>
```

---

## 🔗 Agregar Redes Sociales

```tsx
<div className="flex gap-6 justify-center mt-8">
  <a 
    href="https://facebook.com/tupagina" 
    target="_blank"
    className="text-white hover:text-blue-400 transition-colors"
  >
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      {/* Icono de Facebook */}
    </svg>
  </a>
  
  <a 
    href="https://instagram.com/tupagina" 
    target="_blank"
    className="text-white hover:text-pink-400 transition-colors"
  >
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      {/* Icono de Instagram */}
    </svg>
  </a>
  
  <a 
    href="https://twitter.com/tupagina" 
    target="_blank"
    className="text-white hover:text-blue-400 transition-colors"
  >
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      {/* Icono de Twitter */}
    </svg>
  </a>
</div>
```

---

## 🎯 Tipografía

### Cambiar la fuente

1. Importa la fuente en `app/layout.tsx`:

```typescript
import { Inter, Montserrat, Roboto } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
});
```

2. Aplica en el layout:

```tsx
<body className={`${inter.variable} font-sans`}>
  {children}
</body>
```

3. Usa en tus componentes:

```tsx
<h1 className="font-montserrat">Tu Título</h1>
```

---

## 🌐 SEO y Metadata

### Actualizar metadata

Edita `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Tu Marca - Coming Soon",
  description: "Descripción de tu marca o proyecto",
  keywords: ["palabra1", "palabra2", "palabra3"],
  authors: [{ name: "Tu Nombre" }],
  openGraph: {
    title: "Tu Marca - Coming Soon",
    description: "Descripción para redes sociales",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tu Marca - Coming Soon",
    description: "Descripción para Twitter",
    images: ["/twitter-image.jpg"],
  },
};
```

---

## 🎬 Efectos Avanzados

### Parallax en el logo

```tsx
'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="w-full max-w-2xl px-8"
      style={{ transform: `translateY(${scrollY * 0.5}px)` }}
    >
      <Image src="/olaworld-hero.svg" alt="Ola World" />
    </div>
  );
}
```

### Efecto de desenfoque al cargar

```css
@keyframes blurIn {
  from {
    filter: blur(20px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
}

.animate-blur-in {
  animation: blurIn 1.5s ease-out;
}
```

---

## 📊 Analytics

### Agregar Google Analytics

1. Instala el paquete:

```bash
npm install @next/third-parties
```

2. Agrega en `app/layout.tsx`:

```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-TU_ID_AQUI" />
    </html>
  )
}
```

---

## 🎨 Temas

### Modo oscuro/claro

Aunque la página es oscura por defecto, puedes agregar un toggle:

```tsx
'use client';

import { useState } from 'react';

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  return (
    <main className={isDark ? 'dark' : 'light'}>
      {/* Tu contenido */}
      
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 z-30 p-2 bg-white/10 rounded-full"
      >
        {isDark ? '☀️' : '🌙'}
      </button>
    </main>
  );
}
```

---

¿Necesitas más ayuda? Consulta el [README.md](../README.md) o la [documentación del componente de video](./VIDEO_COMPONENT.md).

