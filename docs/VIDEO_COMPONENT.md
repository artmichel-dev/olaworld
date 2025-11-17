# Componente VideoBackground

## Descripción

El componente `VideoBackground` maneja la reproducción de videos en formato M3U8 (HLS) con soporte cross-browser usando HLS.js.

## Características

- ✅ Soporte para formato M3U8/HLS
- ✅ Detección automática de compatibilidad del navegador
- ✅ Fallback a reproducción nativa para Safari
- ✅ Manejo de errores robusto
- ✅ Indicador de carga
- ✅ Autoplay, muted, loop
- ✅ Responsive (object-cover)

## Uso

```tsx
import VideoBackground from '@/app/components/VideoBackground';

export default function Page() {
  return (
    <div className="relative h-screen">
      <VideoBackground videoUrl="https://ejemplo.com/video.m3u8" />
      {/* Tu contenido aquí */}
    </div>
  );
}
```

## Props

| Prop | Tipo | Requerido | Descripción |
|------|------|-----------|-------------|
| `videoUrl` | `string` | Sí | URL del archivo M3U8 |

## Cómo funciona

### 1. Detección de compatibilidad

El componente detecta automáticamente si el navegador soporta:
- **HLS.js**: Para navegadores modernos (Chrome, Firefox, Edge, etc.)
- **Nativo**: Para Safari (iOS y macOS tienen soporte nativo M3U8)

### 2. Inicialización de HLS.js

Si HLS.js es soportado:

```typescript
const hls = new Hls({
  enableWorker: true,        // Usa Web Workers para mejor performance
  lowLatencyMode: false,     // Modo normal (no streaming en vivo)
  backBufferLength: 90,      // Buffer de 90 segundos
});
```

### 3. Manejo de errores

El componente maneja tres tipos de errores:

- **NETWORK_ERROR**: Intenta recargar automáticamente
- **MEDIA_ERROR**: Intenta recuperar el stream
- **Otros errores**: Oculta el indicador de carga y muestra error en consola

### 4. Estado de carga

Muestra un indicador animado mientras el video carga:

```tsx
{isLoading && (
  <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
    <div className="animate-pulse text-white text-lg">Cargando...</div>
  </div>
)}
```

## Personalización

### Cambiar el indicador de carga

Edita la sección del indicador en `VideoBackground.tsx`:

```tsx
{isLoading && (
  <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
    {/* Tu spinner personalizado aquí */}
    <YourCustomSpinner />
  </div>
)}
```

### Ajustar la configuración de HLS.js

Modifica las opciones en la inicialización:

```typescript
const hls = new Hls({
  enableWorker: true,
  lowLatencyMode: false,
  backBufferLength: 90,
  maxBufferLength: 30,      // Agregar más opciones
  maxMaxBufferLength: 600,
  // ... más opciones
});
```

Consulta la [documentación de HLS.js](https://github.com/video-dev/hls.js/blob/master/docs/API.md) para todas las opciones.

### Cambiar el estilo del video

El video usa clases de Tailwind:

```tsx
<video
  className="object-cover w-full h-full"  // Cambia estas clases
  // ...
/>
```

Opciones de `object-*`:
- `object-cover` - Cubre todo el contenedor (recomendado)
- `object-contain` - Contiene el video completo
- `object-fill` - Estira el video
- `object-none` - Tamaño original
- `object-scale-down` - Escala hacia abajo si es necesario

## Troubleshooting

### El video no se reproduce

1. **Verifica la URL**: Asegúrate de que la URL del M3U8 es accesible
2. **CORS**: El servidor debe tener headers CORS correctos
3. **Formato**: Verifica que sea un archivo M3U8 válido
4. **Consola**: Revisa la consola del navegador para errores específicos

### El video se ve cortado o distorsionado

- Usa `object-cover` para videos panorámicos
- Usa `object-contain` si quieres ver el video completo
- Ajusta el aspect ratio del contenedor

### El indicador de carga nunca desaparece

- Verifica que el evento `MANIFEST_PARSED` se dispare
- Revisa errores de red en la consola
- Asegúrate de que el video pueda reproducirse (no bloqueado por autoplay)

### Problemas de autoplay

Algunos navegadores bloquean autoplay. El video debe estar en `muted` para autoplay:

```tsx
<video
  autoPlay
  muted      // ← Requerido para autoplay
  loop
  playsInline
/>
```

## Optimización

### Performance

- El componente usa `useRef` para evitar re-renders innecesarios
- HLS.js se ejecuta en un Web Worker (`enableWorker: true`)
- El cleanup se ejecuta automáticamente al desmontar

### Memoria

El componente limpia recursos automáticamente:

```typescript
return () => {
  if (hlsRef.current) {
    hlsRef.current.destroy();  // Libera recursos
  }
};
```

## Compatibilidad

### Navegadores soportados

- ✅ Chrome/Edge (HLS.js)
- ✅ Firefox (HLS.js)
- ✅ Safari (Nativo)
- ✅ iOS Safari (Nativo)
- ✅ Opera (HLS.js)

### Versiones mínimas

- Chrome/Edge: 60+
- Firefox: 55+
- Safari: 11+
- iOS: 11+

## Recursos

- [HLS.js Documentation](https://github.com/video-dev/hls.js/)
- [HTTP Live Streaming (HLS) Spec](https://tools.ietf.org/html/rfc8216)
- [MDN Video Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)

## Ejemplo avanzado

```tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

export default function VideoBackground({ 
  videoUrl,
  onReady,
  onError,
}: {
  videoUrl: string;
  onReady?: () => void;
  onError?: (error: Error) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
        backBufferLength: 90,
      });
      
      hlsRef.current = hls;
      hls.loadSource(videoUrl);
      hls.attachMedia(video);
      
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play()
          .then(() => {
            setIsLoading(false);
            onReady?.();
          })
          .catch((err) => {
            const error = new Error(`Error al reproducir: ${err.message}`);
            setError(error.message);
            setIsLoading(false);
            onError?.(error);
          });
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          const errorMsg = `Error de HLS: ${data.type}`;
          setError(errorMsg);
          onError?.(new Error(errorMsg));
          
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              hls.recoverMediaError();
              break;
            default:
              setIsLoading(false);
              break;
          }
        }
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoUrl;
      video.addEventListener('loadedmetadata', () => {
        video.play()
          .then(() => {
            setIsLoading(false);
            onReady?.();
          })
          .catch((err) => {
            const error = new Error(`Error al reproducir: ${err.message}`);
            setError(error.message);
            onError?.(error);
          });
      });
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
    };
  }, [videoUrl, onReady, onError]);

  if (error) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-black">
        <div className="text-red-500 text-center p-4">
          <p className="text-xl mb-2">Error al cargar el video</p>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute w-full h-full top-0 left-0 overflow-hidden bg-black">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          <div className="animate-pulse text-white text-lg">Cargando...</div>
        </div>
      )}
      
      <video
        ref={videoRef}
        className="object-cover w-full h-full"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
}
```

