"use client";

import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

interface ConferenceVideoProps {
  videoUrl: string;
  className?: string;
}

const ConferenceVideo = ({ videoUrl, className = "" }: ConferenceVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Verificar si el navegador soporta HLS nativamente (Safari)
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoUrl;
    }
    // Si no, usar HLS.js
    else if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
        backBufferLength: 90,
      });

      hlsRef.current = hls;
      hls.loadSource(videoUrl);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((error) => {
          console.log("Autoplay prevented:", error);
        });
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              console.error("Network error encountered, trying to recover...");
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.error("Media error encountered, trying to recover...");
              hls.recoverMediaError();
              break;
            default:
              console.error("Fatal error, cannot recover");
              hls.destroy();
              break;
          }
        }
      });
    }

    // Cleanup
    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
    };
  }, [videoUrl]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div className="relative w-full group">
      <video
        ref={videoRef}
        className={className}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        style={{
          objectFit: "cover",
        }}
      >
        Tu navegador no soporta el elemento de video.
      </video>

      {/* Video Controls */}
      <div className="absolute bottom-4 right-4 flex gap-2 z-10">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="bg-white/90 hover:bg-white text-primary rounded-full p-3 transition-all duration-300 shadow-lg hover:scale-110"
          aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" fill="currentColor" />
          ) : (
            <Play className="w-5 h-5" fill="currentColor" />
          )}
        </button>

        {/* Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          className="bg-white/90 hover:bg-white text-primary rounded-full p-3 transition-all duration-300 shadow-lg hover:scale-110"
          aria-label={isMuted ? "Activar audio" : "Desactivar audio"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ConferenceVideo;
