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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Si HLS.js es soportado
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
          })
          .catch((error) => {
            console.error('Error al reproducir el video:', error);
            setIsLoading(false);
          });
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              console.error('Error de red, intentando recuperar...');
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.error('Error de medios, intentando recuperar...');
              hls.recoverMediaError();
              break;
            default:
              console.error('Error fatal no recuperable');
              setIsLoading(false);
              break;
          }
        }
      });
    }
    // Si el navegador tiene soporte nativo para M3U8 (Safari)
    else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoUrl;
      video.addEventListener('loadedmetadata', () => {
        video.play()
          .then(() => {
            setIsLoading(false);
          })
          .catch((error) => {
            console.error('Error al reproducir el video:', error);
            setIsLoading(false);
          });
      });
    }

    // Cleanup
    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
    };
  }, [videoUrl]);

  return (
    <div className="absolute w-full h-full top-0 left-0 overflow-hidden bg-black">
      {/* Indicador de carga */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          <div className="animate-pulse text-white text-lg">Cargando...</div>
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
      />
    </div>
  );
}

