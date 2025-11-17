import VideoBackground from './components/VideoBackground';
import Image from 'next/image';

export default function Home() {
  // Video de prueba de Apple (CORS habilitado, siempre funciona)
  // TODO: Reemplazar con tu propio video cuando esté listo
  const videoUrl = 'https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8';
  
  // Alternativas que también funcionan:
  // Mux 4K: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'
  // Sintel HD: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'
  
  // URL original (problema CORS en Vercel):
  // 'https://cms-public-artifacts.artlist.io/content/artgrid/footage-hls/f338c3b8-1832-423e-b43a-108b27a4fef4_2160p_1737445310.m3u8';

  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Video de fondo */}
      <VideoBackground videoUrl={videoUrl} />
      
      {/* Overlay para mejorar la legibilidad */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      
      {/* Contenedor principal con flex layout */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full pb-20">
        {/* Logo Hero - Responsive */}
        <div className="w-64 sm:w-80 md:w-96 lg:w-[32rem] xl:w-[40rem] max-w-[90vw] px-4 sm:px-6 md:px-8">
          <Image
            src="/olaworld-hero.svg"
            alt="Ola World"
            width={1920}
            height={1080}
            priority
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>
        
        {/* Texto "Próximamente | Coming soon" */}
        <h1 className="font-bold text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 md:mt-6 text-center px-4">
          Próximamente | Coming soon
        </h1>
      </div>
      
      {/* Footer */}
      <footer className="absolute bottom-0 w-full bg-transparent z-20">
        <p className="text-xs sm:text-sm text-white/70 text-center py-4 md:py-6 w-full">
          ©2025 Ola World, some rights reserved.
        </p>
      </footer>
    </main>
  );
}

