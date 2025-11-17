'use client';

import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

interface VideoBackgroundProps {
  videoUrl: string;
}

export default function VideoBackground({ videoUrl }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    console.log('🎥 Iniciando carga de video:', videoUrl);

    // Si HLS.js es soportado
    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
        backBufferLength: 90,
        maxBufferLength: 30,
        maxMaxBufferLength: 600,
        debug: false,
        xhrSetup: (xhr) => {
          // Configurar headers CORS si es necesario
          xhr.withCredentials = false;
        },
      });
      hlsRef.current = hls;
      
      hls.loadSource(videoUrl);
      hls.attachMedia(video);
      
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        console.log('✅ Manifest parseado correctamente');
        video.play()
          .then(() => {
            console.log('✅ Video reproduciendo');
            setIsLoading(false);
            setError(null);
          })
          .catch((error) => {
            console.error('❌ Error al reproducir el video:', error);
            setError('No se pudo reproducir el video. Intenta hacer click en la pantalla.');
            setIsLoading(false);
          });
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        console.error('⚠️ Error de HLS:', data.type, data.details);
        
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              console.error('❌ Error de red');
              if (retryCount < maxRetries) {
                console.log(`🔄 Reintentando... (${retryCount + 1}/${maxRetries})`);
                setRetryCount(prev => prev + 1);
                setTimeout(() => hls.startLoad(), 1000);
              } else {
                setError('Error al cargar el video. Verifica tu conexión a internet.');
                setIsLoading(false);
              }
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.error('❌ Error de medios');
              if (retryCount < maxRetries) {
                console.log(`🔄 Recuperando error de medios... (${retryCount + 1}/${maxRetries})`);
                setRetryCount(prev => prev + 1);
                hls.recoverMediaError();
              } else {
                setError('Error en el formato del video.');
                setIsLoading(false);
              }
              break;
            default:
              console.error('❌ Error fatal no recuperable:', data.details);
              setError('El video no está disponible en este momento.');
              setIsLoading(false);
              break;
          }
        }
      });
    }
    // Si el navegador tiene soporte nativo para M3U8 (Safari)
    else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      console.log('🍎 Usando reproducción nativa de Safari');
      video.src = videoUrl;
      
      video.addEventListener('error', (e) => {
        console.error('❌ Error de video nativo:', e);
        setError('Error al cargar el video.');
        setIsLoading(false);
      });
      
      video.addEventListener('loadedmetadata', () => {
        console.log('✅ Metadata cargada');
        video.play()
          .then(() => {
            console.log('✅ Video reproduciendo (nativo)');
            setIsLoading(false);
            setError(null);
          })
          .catch((error) => {
            console.error('❌ Error al reproducir (nativo):', error);
            setError('No se pudo reproducir el video. Intenta hacer click en la pantalla.');
            setIsLoading(false);
          });
      });
    } else {
      console.error('❌ HLS no soportado en este navegador');
      setError('Tu navegador no soporta la reproducción de este video.');
      setIsLoading(false);
    }

    // Cleanup
    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
    };
  }, [videoUrl, retryCount]);

  // Click handler para intentar reproducir si autoplay falló
  const handleClick = () => {
    const video = videoRef.current;
    if (video && video.paused) {
      video.play()
        .then(() => {
          console.log('✅ Video reproduciendo después de click');
          setError(null);
        })
        .catch((err) => {
          console.error('❌ Error al reproducir después de click:', err);
        });
    }
  };

  return (
    <div 
      className="absolute w-full h-full top-0 left-0 overflow-hidden bg-black cursor-pointer"
      onClick={handleClick}
    >
      {/* Indicador de carga */}
      {isLoading && !error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black z-10">
          <div className="animate-pulse text-white text-lg mb-2">Cargando video...</div>
          <div className="text-white/50 text-sm">Esto puede tomar unos segundos</div>
        </div>
      )}

      {/* Mensaje de error */}
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black z-10 p-4">
          <div className="text-red-400 text-lg mb-4 text-center">{error}</div>
          <button
            onClick={() => {
              setError(null);
              setIsLoading(true);
              setRetryCount(0);
              window.location.reload();
            }}
            className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-white/90 transition-colors"
          >
            Reintentar
          </button>
          <div className="text-white/50 text-sm mt-4 text-center">
            Si el problema persiste, verifica tu conexión a internet
          </div>
        </div>
      )}
      
      {/* Video */}
      <video
        ref={videoRef}
        className="object-cover w-full h-full"
        autoPlay
        muted
        loop
        playsInline
        crossOrigin="anonymous"
      />
    </div>
  );
}

