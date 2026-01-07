import Button from "./Button";
import Link from "next/link";

const KenyaTripSection = () => {
  return (
    <section className="bg-card-cream">
      {/* Header */}
      <div className="px-5 md:px-20 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-primary font-serif italic text-xl md:text-2xl mb-2">Viaje Misionero Médico Evangelístico</h2>
          <h3 className="heading-md text-primary font-serif italic mb-4">Kenia, Africa</h3>
          <p className="text-foreground font-medium">
            <span className="font-semibold">Fechas:</span> 10 al 22 de Octubre de 2026
          </p>
          <p className="text-foreground font-medium">
            <span className="font-semibold">Lugares:</span> Turkana County Lokichogio y Nymira Kenia
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="px-5 md:px-20 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden">
            <img src="/assets/kenya-group.jpg" alt="Equipo misionero en Kenia" className="w-full h-[300px] md:h-[350px] object-cover" />
          </div>

          {/* Description */}
          <div className="space-y-4 text-foreground/80 text-sm md:text-base leading-relaxed">
            <p>En Octubre de 2026 regresaremos a Kenia para vivir un viaje misionero médico evangelístico sirviendo en dos regiones distintas del país. Durante este tiempo estaremos ministrando tanto en Turkana County, específicamente en Lokichogio, como también en Nymira Kenia.</p>
            <p>Este viaje une evangelismo, atención médica, ayuda práctica y formación pastoral con un solo propósito: llevar esperanza, el mensaje de Jesús y apoyo real a comunidades que lo necesitan profundamente.</p>
          </div>
        </div>
      </div>

      {/* Details Sections */}
      <div className="px-5 md:px-20 pb-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Con quién serviremos */}
          <div>
            <h4 className="text-primary font-semibold mb-3 underline">Con quién serviremos</h4>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed">El equipo de The Fellowship Global Missions servirá junto a misioneros y líderes locales de Deliverance Church Super Highway y a pastores de las iglesias en Nymira que caminan bajo la cobertura de The Fellowship. Será un trabajo en unidad, hombro a hombro, aprendiendo unos de otros y sirviendo juntos.</p>
          </div>

          {/* Lo que estaremos haciendo */}
          <div>
            <h4 className="text-primary font-semibold mb-3 underline">Lo que estaremos haciendo durante el viaje</h4>
            <ul className="text-foreground/80 text-sm md:text-base space-y-2">
              <li>• Evangelismo de casa en casa y cruzadas evangelísticas.</li>
              <li>• Brindar atención médica y apoyo alimentario.</li>
              <li>• Fortalecer la Iglesia local y el liderazgo pastoral en Kenia.</li>
              <li>• Ordenar y afirmar a pastores que servirán en la región de Nymira.</li>
              <li>• Realizar programas para niños en orfanatos con actividades de enseñanza bíblica y cuidado integral.</li>
              <li>• Preparar y formar equipos misioneros para servir en diferentes contextos alrededor del mundo.</li>
            </ul>
          </div>

          {/* Preparación del equipo */}
          <div>
            <h4 className="text-primary font-semibold mb-3 underline">Preparación del equipo</h4>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed">Todos los participantes pasarán por un proceso de aplicación y entrevistas. Antes del viaje tendremos tiempos de preparación y entrenamiento, para llegar alineados espiritualmente, culturalmente y como equipo. Al llegar a Kenia conectaremos con los líderes locales y caminaremos juntos durante todo el desarrollo del ministerio tanto en Turkana como en Nymira.</p>
          </div>

          {/* Cierre del viaje */}
          <div>
            <h4 className="text-primary font-semibold mb-3 underline">Cierre del viaje</h4>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed">En el último día del viaje tendremos la oportunidad de visitar uno de los safaris en Kenia como parte del cierre y celebración de todo lo que Dios hizo durante esos días.</p>
          </div>

          {/* Quién puede aplicar */}
          <div>
            <h4 className="text-primary font-semibold mb-3 underline">Quién puede aplicar</h4>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed">Pueden aplicar personas mayores de 18 años con un corazón para las misiones, el evangelismo y el servicio. También son bienvenidos profesionales del área médica, como doctores, enfermeros, dentistas y personal de salud. Es necesario tener un pasaporte válido, pero no es necesario tener una visa de los Estados Unidos.</p>
          </div>

          {/* Costo del viaje */}
          <div>
            <h4 className="text-primary font-semibold mb-3 underline">Costo del viaje</h4>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-4">Este viaje no solo cubre la participación del equipo sino que sostiene directamente la obra misionera local y los dos proyectos médico evangelísticos que estaremos realizando en Turkana y Nymira Kenia.</p>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-4">
              <strong>Si viajas desde Estados Unidos,</strong> el costo total del viaje es de
              <strong> 3,500 dólares</strong>. Este costo incluye vuelos internacionales, transporte aéreo interno y terrestre dentro de Kenia, alimentos, hospedaje, safari y los gastos necesarios para llevar a cabo las actividades del viaje.
            </p>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-4">
              <strong>Si viajas desde Latinoamérica,</strong> el costo del viaje es de
              <strong> 2,000 dólares</strong>. Este monto no incluye el vuelo internacional hacia Kenia. El vuelo internacional se comprará por separado a través de una agencia de viajes que trabajará con nosotros en Latinoamérica. Este costo sí incluye el transporte aéreo y terrestre dentro de Kenia, los alimentos, el hospedaje, el safari y los gastos operativos del viaje.
            </p>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed">En ambos casos, el costo también contribuye a patrocinar a un misionero local en Nairobi y a cubrir los costos de logística, materiales y actividades de los dos proyectos médico-evangelísticos que se desarrollarán en Turkana y Nymira.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 md:px-20 pb-20 text-center">
        <h3 className="heading-lg text-primary font-serif italic mb-8">Aplica aquí</h3>
        <Link href="https://thefellowshiptc.churchcenter.com/people/forms/1116260" target="_blank">
          <Button variant="filled" className="text-base px-10 py-4 mx-auto">
            APLICAR AHORA
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default KenyaTripSection;
