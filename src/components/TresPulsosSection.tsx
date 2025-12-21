import { ClipboardList, Users, Waves } from "lucide-react";

const TresPulsosSection = () => {
  return (
    <section className="bg-background px-5 md:px-20 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          {/* Left - Title */}
          <div>
            <h2 className="heading-lg text-primary font-serif italic leading-tight">
              TRES PULSOS
              <br />
              DE LA OLA
            </h2>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed">Ola World es un movimiento vivo que avanza en tres pulsos.</p>
            <p className="text-primary font-semibold text-lg">Tocar. Crecer. Impactar.</p>

            <ul className="space-y-4 text-foreground/80">
              <li>
                <span className="font-semibold text-foreground">• Primer pulso: Outreach.</span>
                <br />
                <span className="text-sm md:text-base">Tocamos vidas llevando el conocimiento de Dios a la tierra.</span>
              </li>
              <li>
                <span className="font-semibold text-foreground">• Segundo pulso: Leadership.</span>
                <br />
                <span className="text-sm md:text-base">Crecemos personas, formando líderes que caminan con propósito.</span>
              </li>
              <li>
                <span className="font-semibold text-foreground">• Tercer pulso: Activation.</span>
                <br />
                <span className="text-sm md:text-base">Activamos a los llamados para impactar el mundo con fe en acción.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* El pulso comienza */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden">
            <img src="/assets/conference.jpg" alt="Conferencia OLA World" className="w-full h-[300px] md:h-[400px] object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-3xl md:text-4xl font-serif italic text-center px-4">
                El pulso comienza
                <br />
                contigo...
              </h3>
            </div>
          </div>

          {/* Icons */}
          <div className="space-y-8 py-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <ClipboardList className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-medium">Viajes misioneros</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-medium">Centros de entrenamiento</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <Waves className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-medium">Conferencias OLA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TresPulsosSection;
