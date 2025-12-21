import Button from "./Button";
import Link from "next/link";

const DonateSection = () => {
  return (
    <section id="donar" className="bg-primary scroll-mt-20">
      {/* Donate Header */}
      <div className="px-5 md:px-20 py-12 md:py-16 text-center mx-auto">
        <h2 className="heading-lg text-white font-serif italic mb-8">Dona aquí</h2>

        <Link href="https://thefellowshiptc.churchcenter.com/giving/to/missions" target="_blank">
          <Button variant="transparent" className="border-white text-white hover:bg-white hover:text-primary">
            DONAR AHORA
          </Button>
        </Link>
      </div>

      {/* Airplane Image */}
      <div className="px-5 md:px-20 pb-16">
        <div className="rounded-2xl overflow-hidden max-w-4xl mx-auto">
          <img src="/assets/airplane.webp" alt="Avión misionero en África" className="w-full h-[300px] md:h-[400px] object-cover" />
        </div>
      </div>

      {/* Contact */}
      <div id="contacto" className="px-5 md:px-20 pb-16 text-center mx-auto">
        <h3 className="text-white font-serif italic text-2xl md:text-3xl mb-4">Contactanos Aquí</h3>
        <Link href="https://www.instagram.com/thefellowship.tc/" target="_blank">
          <Button variant="transparent" className=" border-white text-white hover:bg-white hover:text-primary">
            CONTACTO
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default DonateSection;
