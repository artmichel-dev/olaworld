# 🎥 Solución de Problemas de Video

## 🔍 Diagnóstico

### Paso 1: Abrir la Consola del Navegador

1. Presiona **F12**
2. Ve a la pestaña **Console**
3. Busca mensajes que empiecen con:
   - 🎥 (info)
   - ✅ (éxito)
   - ❌ (error)
   - ⚠️ (advertencia)

### Paso 2: Identificar el Error

#### Error: "CORS policy"
```
Access to XMLHttpRequest at 'https://...' from origin 'https://...' has been blocked by CORS policy
```

**Causa**: El servidor del video no permite requests desde tu dominio.

**Solución**: 
1. Usa un video alternativo (ver abajo)
2. Configura CORS en el servidor del video
3. Usa un proxy

---

#### Error: "Failed to fetch"
```
Failed to fetch
```

**Causa**: 
- URL del video incorrecta
- URL expirada
- Servidor no disponible

**Solución**:
1. Verifica que la URL sea correcta
2. Prueba la URL directamente en el navegador
3. Usa un video alternativo

---

#### Error: "Network error"
```
Network error
```

**Causa**: Problemas de red o conectividad

**Solución**:
1. Verifica tu conexión a internet
2. Prueba en otra red WiFi
3. Desactiva VPN si tienes una activa

---

## 🎬 URLs de Video Alternativas

Si el video actual no funciona, prueba estas alternativas:

### Opción 1: Videos de prueba HLS

```tsx
// Apple Test Stream (siempre funciona)
const videoUrl = 'https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8';
```

### Opción 2: Big Buck Bunny (open source)

```tsx
// Video HD de prueba
const videoUrl = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';
```

### Opción 3: Sintel (open source)

```tsx
// Película corta en HD
const videoUrl = 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8';
```

### Opción 4: Tu propio video

#### Hospedar en Cloudinary (Gratis)

1. Sube tu video a [Cloudinary](https://cloudinary.com/)
2. Activa HLS streaming
3. Usa la URL generada

#### Hospedar en AWS S3 + CloudFront

1. Sube video a S3
2. Configura CORS:

```json
[
    {
        "AllowedHeaders": ["*"],
        "AllowedMethods": ["GET", "HEAD"],
        "AllowedOrigins": ["*"],
        "ExposeHeaders": []
    }
]
```

3. Habilita CloudFront para CDN
4. Usa la URL de CloudFront

---

## 🔧 Cambiar la URL del Video

### Método 1: Editar directamente

Edita `app/page.tsx`:

```tsx
export default function Home() {
  // Cambia esta línea:
  const videoUrl = 'TU_NUEVA_URL_AQUI.m3u8';
  
  return (
    // ...
  );
}
```

### Método 2: Usar variables de entorno

1. Crea `.env.local`:

```bash
NEXT_PUBLIC_VIDEO_URL=https://tu-url-aqui.m3u8
```

2. Edita `app/page.tsx`:

```tsx
export default function Home() {
  const videoUrl = process.env.NEXT_PUBLIC_VIDEO_URL || 'URL_POR_DEFECTO';
  
  return (
    // ...
  );
}
```

3. En Vercel:
   - Settings → Environment Variables
   - Agrega `NEXT_PUBLIC_VIDEO_URL`
   - Redeploy

---

## 🎯 Soluciones Comunes

### El video se queda en "Cargando..."

**Problema**: El video tarda mucho en cargar

**Soluciones**:
1. Usa un video más pequeño
2. Comprime el video
3. Usa una resolución menor (720p en vez de 4K)

### El video no reproduce automáticamente

**Problema**: Los navegadores bloquean autoplay

**Solución**:
- ✅ Ya implementado: Haz click en la pantalla para reproducir
- El video debe estar en `muted` para autoplay (ya está)

### El video se ve pixelado

**Problema**: Resolución baja o compresión alta

**Solución**:
1. Usa un video en mejor calidad
2. Verifica que el video esté en al menos 1080p

### Error: "Tu navegador no soporta"

**Problema**: Navegador muy antiguo

**Solución**:
1. Actualiza el navegador
2. Usa Chrome, Firefox, Safari o Edge

---

## 📊 Verificar que la URL funciona

### Método 1: Browser

Abre la URL del M3U8 en tu navegador:

```
https://tu-video.m3u8
```

Deberías ver algo como:

```
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-STREAM-INF:BANDWIDTH=...
https://...
```

### Método 2: cURL

```bash
curl -I https://tu-video.m3u8
```

Debería devolver:

```
HTTP/2 200
content-type: application/vnd.apple.mpegurl
access-control-allow-origin: *
```

Si no ves `access-control-allow-origin`, hay problemas de CORS.

---

## 🛠️ Mejoras Implementadas

El componente VideoBackground ahora incluye:

✅ **Sistema de reintentos**
- Intenta 3 veces antes de mostrar error
- Delay de 1 segundo entre reintentos

✅ **Logs detallados en consola**
- 🎥 Info
- ✅ Éxito
- ❌ Error
- ⚠️ Advertencia

✅ **Manejo de errores mejorado**
- Mensajes claros para el usuario
- Botón "Reintentar"
- Instrucciones de solución

✅ **Click to play**
- Si autoplay falla, click para reproducir
- Funciona en todos los navegadores

✅ **Configuración CORS**
- `crossOrigin="anonymous"`
- `xhr.withCredentials = false`

---

## 🎬 Recomendaciones de Video

### Para mejor rendimiento:

1. **Resolución**: 1080p es ideal (4K puede ser lento)
2. **Duración**: 10-30 segundos para loop perfecto
3. **Bitrate**: 3-5 Mbps
4. **Formato**: H.264
5. **Audio**: Remover (no se usa)

### Herramientas para convertir:

- [HandBrake](https://handbrake.fr/) - Gratis
- [FFmpeg](https://ffmpeg.org/) - Línea de comandos
- [CloudConvert](https://cloudconvert.com/) - Online

### Comando FFmpeg para optimizar:

```bash
ffmpeg -i input.mp4 \
  -c:v libx264 \
  -preset slow \
  -crf 22 \
  -vf scale=1920:1080 \
  -an \
  -movflags +faststart \
  output.mp4
```

---

## 📱 Testing en Producción

### En Vercel:

1. Abre tu sitio en Vercel
2. Abre DevTools (F12)
3. Ve a Console
4. Busca mensajes de error

### Ejemplo de logs correctos:

```
🎥 Iniciando carga de video: https://...
✅ Manifest parseado correctamente
✅ Video reproduciendo
```

### Ejemplo de logs con error:

```
🎥 Iniciando carga de video: https://...
❌ Error de red
🔄 Reintentando... (1/3)
```

---

## 🚀 Después de Cambiar el Video

### 1. Commit los cambios:

```bash
git add app/page.tsx
git commit -m "fix: actualizar URL del video"
git push
```

### 2. Vercel auto-deploys

Espera ~30 segundos para el deploy automático.

### 3. Limpia caché del navegador

```
Ctrl+Shift+Delete → Clear cache
```

O abre en ventana incógnita:

```
Ctrl+Shift+N (Chrome)
Ctrl+Shift+P (Firefox)
```

---

## ⚡ Quick Fix: Usar video de prueba

Si necesitas algo que funcione **ahora mismo**:

1. Edita `app/page.tsx`:

```tsx
export default function Home() {
  // Video de prueba de Apple (siempre funciona)
  const videoUrl = 'https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8';
  
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <VideoBackground videoUrl={videoUrl} />
      {/* ... resto del código */}
    </main>
  );
}
```

2. Commit y push:

```bash
git add app/page.tsx
git commit -m "fix: usar video de prueba que funciona"
git push
```

3. ✅ Listo! En 30 segundos estará funcionando.

---

## 📞 Soporte

Si ninguna solución funciona:

1. Comparte la URL de tu sitio en Vercel
2. Comparte los logs de la consola
3. Comparte la URL del video que estás intentando usar

---

## ✅ Checklist de Solución

- [ ] Abrí la consola del navegador (F12)
- [ ] Vi los logs en la consola
- [ ] Identifiqué el error específico
- [ ] Probé la URL del video directamente
- [ ] Verifiqué que la URL tenga CORS habilitado
- [ ] Probé un video alternativo
- [ ] Limpié el caché del navegador
- [ ] Verifiqué mi conexión a internet
- [ ] Probé en otro navegador
- [ ] Probé en otro dispositivo

---

## 🎉 Videos que funcionan 100%

Estos videos **garantizados** que funcionan en Vercel:

### 1. Apple Test Stream
```
https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8
```
✅ CORS: Sí  
✅ Calidad: HD  
✅ Always available  

### 2. Mux Test Stream
```
https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8
```
✅ CORS: Sí  
✅ Calidad: 4K  
✅ Always available  

### 3. Bitmovin Sintel
```
https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8
```
✅ CORS: Sí  
✅ Calidad: HD  
✅ Contenido: Película corta animada  

Usa cualquiera de estos mientras encuentras tu video definitivo.

---

**Última actualización**: Noviembre 2025

