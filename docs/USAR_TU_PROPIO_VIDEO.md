# 🎬 Cómo Usar Tu Propio Video

## 🔴 El Problema con Artlist

El video de Artlist que estabas usando **no permite CORS** desde dominios externos como Vercel. Por eso funciona en local pero no en producción.

```
❌ Artlist → CORS bloqueado → No funciona en Vercel
✅ Tu propio video → CORS configurado → Funciona en Vercel
```

---

## ✅ Soluciones Recomendadas

### Opción 1: Cloudinary (Recomendado - Gratis)

**Ventajas:**
- ✅ Gratis hasta 25 GB de almacenamiento
- ✅ CDN global incluido
- ✅ CORS habilitado automáticamente
- ✅ Optimización automática de video
- ✅ Transformaciones en tiempo real

**Pasos:**

1. **Crea cuenta gratis**: [cloudinary.com](https://cloudinary.com/)

2. **Sube tu video**:
   - Dashboard → Media Library → Upload
   - Sube tu archivo MP4

3. **Obtén la URL**:
   - Click en el video
   - Copia la URL (algo como):
   ```
   https://res.cloudinary.com/tu-cuenta/video/upload/v1234567890/tu-video.mp4
   ```

4. **Para HLS/M3U8** (streaming adaptativo):
   - En la URL, agrega `.m3u8` al final:
   ```
   https://res.cloudinary.com/tu-cuenta/video/upload/sp_full_hd/v1234567890/tu-video.m3u8
   ```

5. **Usa la URL en tu proyecto**:
   ```tsx
   // app/page.tsx
   const videoUrl = 'https://res.cloudinary.com/tu-cuenta/video/upload/sp_full_hd/v1234567890/tu-video.m3u8';
   ```

---

### Opción 2: AWS S3 + CloudFront (Profesional)

**Ventajas:**
- ✅ Control total
- ✅ Muy escalable
- ✅ CDN de AWS
- ✅ Pago por uso (muy barato)

**Pasos:**

1. **Crea bucket S3**:
   - AWS Console → S3 → Create Bucket
   - Nombre: `olaworld-videos`
   - Region: más cercana a tu audiencia

2. **Configura CORS en S3**:
   - Bucket → Permissions → CORS
   - Pega esto:

```json
[
    {
        "AllowedHeaders": ["*"],
        "AllowedMethods": ["GET", "HEAD"],
        "AllowedOrigins": ["*"],
        "ExposeHeaders": ["ETag", "Content-Type", "Content-Length"],
        "MaxAgeSeconds": 3000
    }
]
```

3. **Sube tu video**:
   - Upload → Select File
   - Permissions: Public Read

4. **Configura CloudFront** (CDN):
   - CloudFront → Create Distribution
   - Origin: Tu bucket S3
   - Cache Policy: CachingOptimized
   - Create

5. **Obtén URL de CloudFront**:
   ```
   https://d1234567890abc.cloudfront.net/tu-video.m3u8
   ```

---

### Opción 3: Vercel Blob Storage (Más Simple)

**Ventajas:**
- ✅ Integrado con Vercel
- ✅ Muy fácil de usar
- ✅ CORS automático

**Pasos:**

1. **Instala Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Sube tu video**:
   ```bash
   vercel blob upload tu-video.mp4
   ```

3. **Copia la URL**:
   ```
   https://blob.vercel-storage.com/abc123/tu-video.mp4
   ```

4. **Usa en tu proyecto**:
   ```tsx
   const videoUrl = 'https://blob.vercel-storage.com/abc123/tu-video.mp4';
   ```

**Nota**: Para M3U8, necesitas generar el archivo primero (ver sección de conversión).

---

### Opción 4: GitHub + jsDelivr CDN (Gratis)

**Ventajas:**
- ✅ 100% gratis
- ✅ CDN automático
- ✅ CORS habilitado

**Limitaciones:**
- ⚠️ Máximo 100 MB por archivo
- ⚠️ Solo para archivos estáticos (no streaming adaptativo)

**Pasos:**

1. **Crea repo público en GitHub**:
   ```
   https://github.com/tu-usuario/olaworld-assets
   ```

2. **Sube tu video**:
   - Drag & drop a GitHub
   - O usa Git:
   ```bash
   git add video.mp4
   git commit -m "Add video"
   git push
   ```

3. **Usa jsDelivr CDN**:
   ```
   https://cdn.jsdelivr.net/gh/tu-usuario/olaworld-assets@main/video.mp4
   ```

4. **En tu proyecto**:
   ```tsx
   const videoUrl = 'https://cdn.jsdelivr.net/gh/tu-usuario/olaworld-assets@main/video.mp4';
   ```

---

## 🎥 Convertir Video a M3U8 (HLS)

Para streaming adaptativo (mejor para web):

### Usando FFmpeg (Local)

1. **Instala FFmpeg**: [ffmpeg.org](https://ffmpeg.org/)

2. **Convierte tu video**:

```bash
# Generar HLS con múltiples calidades
ffmpeg -i input.mp4 \
  -filter_complex \
  "[0:v]split=3[v1][v2][v3]; \
   [v1]scale=w=1920:h=1080[v1out]; \
   [v2]scale=w=1280:h=720[v2out]; \
   [v3]scale=w=854:h=480[v3out]" \
  -map "[v1out]" -c:v:0 libx264 -b:v:0 5M \
  -map "[v2out]" -c:v:1 libx264 -b:v:1 3M \
  -map "[v3out]" -c:v:2 libx264 -b:v:2 1M \
  -map a:0 -c:a aac -b:a 128k -ac 2 \
  -f hls \
  -hls_time 10 \
  -hls_playlist_type vod \
  -hls_flags independent_segments \
  -hls_segment_type mpegts \
  -master_pl_name master.m3u8 \
  -var_stream_map "v:0,a:0 v:1,a:0 v:2,a:0" \
  stream_%v.m3u8
```

Esto genera:
- `master.m3u8` (usa este)
- `stream_0.m3u8` (1080p)
- `stream_1.m3u8` (720p)
- `stream_2.m3u8` (480p)
- Archivos `.ts` (segmentos)

3. **Sube todos los archivos** a tu servicio (Cloudinary, S3, etc.)

### Usando Cloudinary (Online)

Cloudinary convierte automáticamente:

```
https://res.cloudinary.com/tu-cuenta/video/upload/sp_full_hd/v1234567890/tu-video.m3u8
```

---

## 🎬 Optimizar Video para Web

### Recomendaciones:

- **Resolución**: 1080p (1920×1080)
- **Bitrate**: 3-5 Mbps
- **Codec**: H.264
- **Duración**: 10-30 segundos para loop
- **Audio**: Remover (no se usa en background)

### Comando FFmpeg para Optimizar:

```bash
ffmpeg -i input.mp4 \
  -c:v libx264 \
  -preset slow \
  -crf 22 \
  -vf scale=1920:1080 \
  -an \
  -movflags +faststart \
  -r 30 \
  output.mp4
```

**Parámetros explicados:**
- `-c:v libx264`: Codec H.264
- `-preset slow`: Mejor compresión
- `-crf 22`: Calidad (18-28, menor = mejor)
- `-vf scale=1920:1080`: Resize a 1080p
- `-an`: Sin audio
- `-movflags +faststart`: Optimizado para web
- `-r 30`: 30 fps

---

## 📝 Actualizar tu Proyecto

### 1. Con URL directa:

```tsx
// app/page.tsx
export default function Home() {
  const videoUrl = 'https://tu-cdn.com/tu-video.m3u8';
  
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <VideoBackground videoUrl={videoUrl} />
      {/* ... */}
    </main>
  );
}
```

### 2. Con variables de entorno:

**Archivo `.env.local`**:
```bash
NEXT_PUBLIC_VIDEO_URL=https://tu-cdn.com/tu-video.m3u8
```

**En Vercel**:
- Settings → Environment Variables
- Name: `NEXT_PUBLIC_VIDEO_URL`
- Value: `https://tu-cdn.com/tu-video.m3u8`
- Redeploy

**En tu código**:
```tsx
// app/page.tsx
export default function Home() {
  const videoUrl = process.env.NEXT_PUBLIC_VIDEO_URL || 'https://fallback-url.m3u8';
  
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <VideoBackground videoUrl={videoUrl} />
      {/* ... */}
    </main>
  );
}
```

---

## 💰 Comparación de Costos

| Servicio | Gratis | Costo Mensual | CORS | CDN | HLS |
|----------|--------|---------------|------|-----|-----|
| **Cloudinary** | 25 GB | $0-89 | ✅ | ✅ | ✅ |
| **AWS S3+CF** | 5 GB | $0.023/GB | ✅ | ✅ | Manual |
| **Vercel Blob** | 500 MB | $0.15/GB | ✅ | ✅ | Manual |
| **GitHub+jsD** | ∞ | Gratis | ✅ | ✅ | ❌ |
| **Artlist** | N/A | Premium | ❌ | ✅ | ✅ |

**Recomendación**: 
- Para empezar: **Cloudinary** (gratis, fácil)
- Para producción: **AWS S3 + CloudFront** (escalable, profesional)
- Para hobbyistas: **GitHub + jsDelivr** (gratis ilimitado)

---

## 🚀 Workflow Completo

### Paso a Paso:

1. **Descarga o graba tu video**
2. **Optimiza con FFmpeg** (opcional pero recomendado)
3. **Sube a Cloudinary/S3**
4. **Copia la URL**
5. **Actualiza `app/page.tsx`**
6. **Commit y push**:
   ```bash
   git add app/page.tsx
   git commit -m "feat: usar video propio con CORS habilitado"
   git push
   ```
7. **Vercel auto-deploys** (~1 min)
8. **✅ ¡Listo!**

---

## 🎨 Videos Gratis con CORS

Si solo quieres algo temporal que funcione:

### Abstractos/Loops:
- [Coverr.co](https://coverr.co/) - Videos gratis, CORS OK
- [Pexels Videos](https://www.pexels.com/videos/) - Miles de videos gratis
- [Pixabay Videos](https://pixabay.com/videos/) - Videos HD gratis

### Descarga el MP4, súbelo a Cloudinary, listo.

---

## ⚠️ Por Qué No Funciona Artlist

Artlist es un servicio **premium** que protege su contenido:

```
HTTP Headers de Artlist:
access-control-allow-origin: https://artlist.io
```

Solo permite acceso desde:
- ✅ `artlist.io` (su sitio)
- ❌ `vercel.app` (tu sitio)
- ❌ Cualquier otro dominio

**Soluciones**:
1. ❌ No puedes cambiar los headers de Artlist
2. ❌ Proxy no es legal (viola términos de servicio)
3. ✅ Descarga y hospeda en tu propio CDN
4. ✅ Usa videos con licencia que permitan CORS

---

## 📞 Resumen

**Video actual de Apple funciona**: Úsalo mientras preparas tu video definitivo.

**Para tu video propio**:
1. Sube a Cloudinary (más fácil)
2. O a AWS S3 (más control)
3. Actualiza la URL en `app/page.tsx`
4. Commit y push
5. ✅ Funcionará en Vercel

**No intentes usar Artlist directamente**: Siempre dará error CORS en producción.

---

¿Necesitas ayuda con alguno de estos pasos? ¡Pregúntame! 🚀

