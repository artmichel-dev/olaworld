const ViajesMisionerosSection = () => {
  return (
    <section id="viajes" className="relative scroll-mt-20" aria-labelledby="viajes-heading">
      {/* Background Image */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <img src="/assets/kenya.jpg" alt="Grupo de misioneros orando juntos - Viajes Misioneros OLA World" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 id="viajes-heading" className="text-white text-4xl md:text-6xl lg:text-7xl font-serif italic text-center">
            Viajes Misioneros 2026
          </h2>
        </div>
      </div>

      {/* Destination Cards */}
      <div className="bg-background px-5 md:px-20 py-16">
        <h3 className="heading-lg text-primary font-serif italic text-center mb-12">Viajes Misioneros 2026</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Oaxaca Card */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer card-hover">
            <img src="/assets/oaxaca.jpg" alt="Paisaje montañoso de la sierra de Oaxaca, México - Destino de viaje misionero" className="w-full h-[300px] md:h-[350px] object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white/80 text-sm mb-1">La sierra de</p>
              <h4 className="text-white text-2xl md:text-3xl font-serif italic">Oaxaca, México</h4>
            </div>
          </div>

          {/* Kenya Card */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer card-hover">
            <img src="/assets/kenya.jpg" alt="Paisaje de Kenya, África - Destino de viaje misionero médico evangelístico" className="w-full h-[300px] md:h-[350px] object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="text-white text-2xl md:text-3xl font-serif italic">Kenya, Africa</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViajesMisionerosSection;
