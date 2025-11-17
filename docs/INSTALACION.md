# 📦 Guía de Instalación Completa

## Requisitos del Sistema

### Software Necesario

- **Node.js**: 18.17 o superior
- **npm**: 9.0 o superior (viene con Node.js)
- **Git**: Para clonar el repositorio (opcional)

### Verificar versiones instaladas

```bash
node --version   # Debe ser v18.17 o superior
npm --version    # Debe ser 9.0 o superior
```

### Instalar Node.js (si no lo tienes)

1. Visita [nodejs.org](https://nodejs.org/)
2. Descarga la versión LTS (recomendado)
3. Ejecuta el instalador
4. Reinicia tu terminal

---

## 📥 Método 1: Instalación Estándar

### Paso 1: Navegar al directorio del proyecto

```bash
cd "C:\02_Projects\Ola World\olaworld_web"
```

### Paso 2: Instalar dependencias

```bash
npm install
```

Este comando instalará:
- `next@14.2.23` - Framework Next.js
- `react@18.3.1` - Librería React
- `react-dom@18.3.1` - React DOM
- `hls.js@1.5.15` - Reproductor HLS
- `tailwindcss@3.4.17` - Framework CSS
- `typescript@5` - Tipado estático
- Y todas las dependencias de desarrollo necesarias

### Paso 3: Iniciar el servidor de desarrollo

```bash
npm run dev
```

### Paso 4: Abrir en el navegador

Abre [http://localhost:3000](http://localhost:3000)

---

## 🚀 Método 2: Instalación con yarn

Si prefieres yarn:

```bash
yarn install
yarn dev
```

---

## 📦 Método 3: Instalación con pnpm

Si prefieres pnpm (más rápido):

```bash
pnpm install
pnpm dev
```

---

## 🔧 Configuración Inicial

### 1. Variables de Entorno (Opcional)

Crea un archivo `.env.local`:

```bash
# En Windows (PowerShell)
Copy-Item env.example.txt .env.local

# O crea manualmente el archivo .env.local
```

Contenido del `.env.local`:

```env
NEXT_PUBLIC_VIDEO_URL=https://cms-public-artifacts.artlist.io/content/artgrid/footage-hls/f338c3b8-1832-423e-b43a-108b27a4fef4_2160p_1737445310.m3u8
```

### 2. Verificar los Assets

Asegúrate de que existan estos archivos en `public/`:
- ✅ `olaworld-hero.svg` - Logo principal
- ✅ `olaworld-icon.svg` - Favicon

---

## 🏗️ Build para Producción

### Crear build optimizado

```bash
npm run build
```

Este comando:
1. Compila el proyecto
2. Optimiza los assets
3. Genera archivos estáticos
4. Prepara la aplicación para producción

### Iniciar servidor de producción

```bash
npm start
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

---

## 📊 Scripts Disponibles

| Script | Comando | Descripción |
|--------|---------|-------------|
| Desarrollo | `npm run dev` | Inicia servidor de desarrollo |
| Build | `npm run build` | Compila para producción |
| Inicio | `npm start` | Inicia servidor de producción |
| Lint | `npm run lint` | Verifica código con ESLint |

---

## 🌐 Despliegue

### Opción 1: Vercel (Recomendado)

Vercel es el creador de Next.js y ofrece el mejor soporte.

#### Despliegue automático

1. Crea una cuenta en [vercel.com](https://vercel.com)
2. Conecta tu repositorio de GitHub/GitLab/Bitbucket
3. Vercel detectará automáticamente Next.js
4. ¡Listo! Tu sitio estará en línea

#### Despliegue manual con CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Opción 2: Netlify

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Desplegar
netlify deploy --prod
```

### Opción 3: GitHub Pages (Estático)

```bash
# Instalar exportador
npm install -g next-export

# Exportar a estático
npm run build
npx next export

# Subir la carpeta 'out' a GitHub Pages
```

### Opción 4: Docker

Crea un `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build y ejecuta:

```bash
docker build -t olaworld-coming-soon .
docker run -p 3000:3000 olaworld-coming-soon
```

---

## 🐛 Solución de Problemas

### Error: "Cannot find module"

**Solución:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error: "Port 3000 already in use"

**Solución 1**: Usa otro puerto
```bash
PORT=3001 npm run dev
```

**Solución 2**: Mata el proceso en el puerto 3000
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:3000 | xargs kill -9
```

### Error: "Module not found: Can't resolve 'hls.js'"

**Solución:**
```bash
npm install hls.js@1.5.15
```

### Errores de TypeScript

**Solución:**
```bash
npm run lint
# Lee los errores y corrígelos
```

### El video no carga

**Verificaciones:**
1. ✅ La URL del video es accesible
2. ✅ El servidor permite CORS
3. ✅ El formato es M3U8 válido
4. ✅ Tienes conexión a internet

**Probar la URL del video:**
```bash
curl -I "URL_DEL_VIDEO"
```

---

## 🔄 Actualizar Dependencias

### Actualizar todas las dependencias

```bash
npm update
```

### Actualizar Next.js

```bash
npm install next@latest react@latest react-dom@latest
```

### Verificar actualizaciones disponibles

```bash
npm outdated
```

---

## 📁 Estructura después de la instalación

```
olaworld_web/
├── .next/                      # ← Generado después de npm run dev
│   └── ...
├── node_modules/               # ← Generado después de npm install
│   └── ...
├── app/
│   ├── components/
│   │   └── VideoBackground.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── docs/
│   ├── INSTALACION.md
│   ├── PERSONALIZACION.md
│   └── VIDEO_COMPONENT.md
├── public/
│   ├── olaworld-hero.svg
│   └── olaworld-icon.svg
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── package-lock.json           # ← Generado después de npm install
├── postcss.config.js
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🔐 Seguridad

### Variables de entorno sensibles

**NUNCA** subas al repositorio:
- `.env.local`
- `.env.production`
- Cualquier archivo con claves API

Ya están incluidos en `.gitignore`.

### Dependencias

Verifica vulnerabilidades:

```bash
npm audit
npm audit fix
```

---

## 🎓 Próximos Pasos

1. ✅ Instalación completada
2. 📖 Lee [INICIO_RAPIDO.md](../INICIO_RAPIDO.md)
3. 🎨 Revisa [PERSONALIZACION.md](./PERSONALIZACION.md)
4. 📹 Aprende sobre el [componente de video](./VIDEO_COMPONENT.md)
5. 🚀 ¡Personaliza y despliega!

---

## 📞 Soporte

- 📖 [Documentación de Next.js](https://nextjs.org/docs)
- 📖 [Documentación de Tailwind](https://tailwindcss.com/docs)
- 📖 [Documentación de HLS.js](https://github.com/video-dev/hls.js/)

---

¡Instalación completada! 🎉

Ahora ejecuta `npm run dev` y abre [http://localhost:3000](http://localhost:3000)

