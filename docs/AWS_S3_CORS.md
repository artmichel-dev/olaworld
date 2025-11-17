# 🪣 Configuración CORS para AWS S3

## ✅ Tu Bucket

**URL**: `https://olaworld.s3.us-east-2.amazonaws.com/`  
**Region**: `us-east-2` (Ohio)  
**Video**: `m3u8/f338c3b8-1832-423e-b43a-108b27a4fef4_2160p_1737445310.m3u8`

---

## 🔧 Verificar Configuración CORS

### Paso 1: Ir a AWS Console

1. Abre [AWS S3 Console](https://s3.console.aws.amazon.com/s3/buckets/olaworld?region=us-east-2)
2. Click en tu bucket `olaworld`

### Paso 2: Verificar CORS

1. Ve a la pestaña **Permissions**
2. Scroll hasta **Cross-origin resource sharing (CORS)**
3. Click en **Edit**

### Paso 3: Configuración Recomendada

Copia y pega esta configuración:

```json
[
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "GET",
            "HEAD"
        ],
        "AllowedOrigins": [
            "*"
        ],
        "ExposeHeaders": [
            "ETag",
            "Content-Type",
            "Content-Length",
            "Date"
        ],
        "MaxAgeSeconds": 3000
    }
]
```

**Explicación**:
- `AllowedOrigins: ["*"]` → Permite acceso desde cualquier dominio (incluyendo Vercel)
- `AllowedMethods: ["GET", "HEAD"]` → Solo lectura (seguro)
- `AllowedHeaders: ["*"]` → Acepta cualquier header
- `ExposeHeaders` → Headers que el navegador puede ver
- `MaxAgeSeconds: 3000` → Cachea la respuesta CORS por 50 minutos

### Paso 4: Guardar

Click en **Save changes**

---

## 🔒 Hacer el Bucket Público (Solo para video)

### Opción 1: A nivel de archivo (Recomendado)

1. Ve a la carpeta `m3u8/`
2. Selecciona todos los archivos (.m3u8 y .ts)
3. Actions → Make public using ACL
4. Confirm

### Opción 2: Bucket Policy (Todo el bucket)

1. Permissions → Bucket Policy
2. Pega esto:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::olaworld/m3u8/*"
        }
    ]
}
```

**Nota**: Solo hace pública la carpeta `m3u8/`, no todo el bucket.

---

## ✅ Verificar que Funciona

### Test 1: Curl (Terminal)

```bash
curl -I https://olaworld.s3.us-east-2.amazonaws.com/m3u8/f338c3b8-1832-423e-b43a-108b27a4fef4_2160p_1737445310.m3u8
```

**Deberías ver**:
```
HTTP/1.1 200 OK
Content-Type: application/vnd.apple.mpegurl
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, HEAD
```

Si ves `Access-Control-Allow-Origin: *` → ✅ CORS configurado correctamente

### Test 2: Navegador

Abre esta URL directamente:
```
https://olaworld.s3.us-east-2.amazonaws.com/m3u8/f338c3b8-1832-423e-b43a-108b27a4fef4_2160p_1737445310.m3u8
```

Deberías ver el contenido del M3U8:
```
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-TARGETDURATION:6
...
```

### Test 3: DevTools

1. Abre tu sitio en Vercel
2. F12 → Network tab
3. Busca el archivo `.m3u8`
4. Click en él → Headers tab
5. Busca: `Access-Control-Allow-Origin: *`

---

## 🚨 Problemas Comunes

### Error: "Access Denied"

**Causa**: Archivo no es público

**Solución**:
1. S3 → Bucket → m3u8/
2. Selecciona archivos
3. Actions → Make public

### Error: "CORS policy"

**Causa**: CORS no configurado

**Solución**:
1. S3 → Bucket → Permissions → CORS
2. Pega la configuración de arriba
3. Save

### Error: "403 Forbidden"

**Causa**: Bucket Policy bloqueando

**Solución**:
1. Permissions → Bucket Policy
2. Agrega la policy de arriba
3. Save

---

## 🎯 Checklist

Asegúrate de tener:

- [ ] CORS configurado en el bucket
- [ ] Archivos `.m3u8` públicos
- [ ] Archivos `.ts` (segmentos) públicos
- [ ] Bucket Policy permite lectura
- [ ] Test con curl funciona
- [ ] Test con navegador funciona
- [ ] Headers CORS visibles en DevTools

---

## 🚀 Optimizaciones Adicionales

### CloudFront (CDN - Recomendado)

**Por qué:**
- 🚀 Más rápido (CDN global)
- 💰 Más barato (cuesta menos que S3)
- 🌍 Mejor para usuarios internacionales

**Cómo:**
1. CloudFront → Create Distribution
2. Origin: `olaworld.s3.us-east-2.amazonaws.com`
3. Origin Path: `/m3u8`
4. Cache Policy: CachingOptimized
5. Create

**URL resultante**:
```
https://d1234567890.cloudfront.net/f338c3b8-1832-423e-b43a-108b27a4fef4_2160p_1737445310.m3u8
```

**Ventajas**:
- ✅ Más rápido (edge locations)
- ✅ HTTPS incluido
- ✅ CORS automático
- ✅ Menor latencia
- ✅ Ahorro de costos

### Lifecycle Policy (Opcional)

Si subes muchos videos, configura limpieza automática:

1. Management → Lifecycle rules
2. Create rule
3. Actions: Delete expired object delete markers
4. Days: 30 (o lo que prefieras)

---

## 💰 Costos Aproximados

### Solo S3:
- Almacenamiento: $0.023/GB/mes
- Transfer OUT: $0.09/GB
- Requests: $0.0004/1000 requests

**Ejemplo**: Video de 100 MB con 1000 vistas/mes
- Storage: $0.002/mes
- Transfer: $9/mes
- Total: ~$9/mes

### S3 + CloudFront:
- Storage: $0.023/GB/mes
- CloudFront Transfer: $0.085/GB (primer 10 TB)
- Total: ~$8.5/mes + más rápido

**Recomendación**: Usa CloudFront, es más rápido y más barato.

---

## 📝 Resumen

Tu configuración actual:
```
Bucket: olaworld
Region: us-east-2
Path: m3u8/
Video: f338c3b8-1832-423e-b43a-108b27a4fef4_2160p_1737445310.m3u8
```

Asegúrate de:
1. ✅ CORS configurado
2. ✅ Archivos públicos
3. ✅ Bucket Policy permite lectura

**Próximo paso recomendado**:
- Configura CloudFront para mejor performance

---

¿Necesitas ayuda configurando CloudFront? ¡Pregúntame! 🚀

