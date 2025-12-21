import Button from "./Button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden" aria-label="Sección principal de OLA World">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="/assets/hero-child.jpg" alt="Niño africano sonriendo - Impacto de OLA World en comunidades" className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-5 py-20">
        <img src="/assets/ola-logo-white.svg" alt="Logo OLA World - Outreach Leadership Activation" className="w-48 md:w-64 lg:w-80 mx-auto mb-6" width="320" height="120" />
        <h1 className="text-lg md:text-xl font-medium tracking-wide mb-8">Outreach - Leadership - Activation</h1>
        <Link href="https://thefellowshiptc.churchcenter.com/people/forms/1116260" target="_blank" rel="noopener noreferrer" aria-label="Aplicar para viaje misionero">
          <Button variant="filled" className="text-base px-10 py-4 mx-auto">
            APLICAR AHORA
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
