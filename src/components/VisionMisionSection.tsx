const VisionMisionSection = () => {
  return (
    <section className="bg-background">
      {/* Vision */}
      <div className="px-5 md:px-20 py-16 md:py-24">
        <h2 className="heading-lg text-center text-primary mb-12 font-serif italic">VISIÓN</h2>

        <p className="text-center text-foreground/70 text-sm md:text-base uppercase tracking-wide mb-6">TOCAR VIDAS · DESARROLLAR LÍDERES · Y ENVIARLOS PARA IMPACTAR COMUNIDADES Y NACIONES.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="section-card">
            <p className="text-sm text-foreground/60 mb-2">TOCAR VIDAS</p>
            <h3 className="text-primary font-semibold text-lg">OUTREACH</h3>
          </div>
          <div className="section-card">
            <p className="text-sm text-foreground/60 mb-2">DESARROLLAR LÍDERES</p>
            <h3 className="text-primary font-semibold text-lg">LEADERSHIP</h3>
          </div>
          <div className="section-card">
            <p className="text-sm text-foreground/60 mb-2">Y ENVIARLOS PARA IMPACTAR COMUNIDADES Y NACIONES.</p>
            <h3 className="text-primary font-semibold text-lg">ACTIVATION</h3>
          </div>
        </div>
      </div>

      {/* Mision */}
      <div className="px-5 md:px-20 pb-8">
        <h2 className="heading-lg text-center text-primary mb-12 font-serif italic">MISIÓN</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <div className="section-card bg-card-cream">
            <p className="text-sm text-foreground font-medium uppercase leading-relaxed">CREAR OPORTUNIDADES GLOBALES DE SERVICIO, EVANGELISMO Y COMPASIÓN</p>
          </div>
          <div className="section-card bg-card-cream">
            <p className="text-sm text-foreground font-medium uppercase leading-relaxed">ABRIR CENTROS DE ENTRENAMIENTO PARA PASTORES Y MISIONEROS</p>
          </div>
          <div className="section-card bg-card-cream">
            <p className="text-sm text-foreground font-medium uppercase leading-relaxed">Y ORDENARLOS MINISTERIALMENTE PARA ENVIARLOS CON PROPÓSITO</p>
          </div>
        </div>
      </div>

      {/* Mission Image with Quote */}
      <div className="relative">
        <img src="/assets/mission-image.jpg" alt="Misionero sirviendo en África" className="w-full h-[50vh] md:h-[60vh] object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl">
          <div className="bg-white/90 backdrop-blur-sm rounded-full py-4 px-8 text-center">
            <p className="text-foreground font-serif italic text-sm md:text-base">
              "La tierra se llenará del conocimiento del Señor como las aguas cubren el mar."
              <span className="font-semibold"> Isaías 11:9</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMisionSection;
