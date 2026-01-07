import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

const DonateSection = () => {
  return (
    <section
      id="donar"
      className="bg-primary scroll-mt-20"
      aria-labelledby="donate-heading"
    >
      {/* Donate Header */}
      <div className="px-5 md:px-20 py-12 md:py-16 text-center max-w-screen-xl mx-auto">
        <h2
          id="donate-heading"
          className="heading-lg text-white font-serif italic mb-8"
        >
          Dona aquí
        </h2>

        <Link
          href="https://donorbox.org/olaworld"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ir a la página de donaciones en Donorbox"
        >
          <Button
            variant="transparent"
            className="border-white text-white hover:bg-white hover:text-primary transition-all duration-200"
          >
            DONAR AHORA
          </Button>
        </Link>
      </div>

      {/* Airplane Image */}
      <div className="px-5 md:px-20 pb-16">
        <div className="rounded-2xl overflow-hidden max-w-4xl mx-auto shadow-lg">
          <Image
            src="/assets/airplane.webp"
            alt="Avión misionero en África"
            width={1024}
            height={400}
            className="w-full h-[300px] md:h-[400px] object-cover"
            priority
          />
        </div>
      </div>

      {/* Contact */}
      <div
        id="contacto"
        className="px-5 md:px-20 pb-16 text-center max-w-screen-xl mx-auto"
        aria-labelledby="contact-heading"
      >
        <h3
          id="contact-heading"
          className="heading-md text-white font-serif italic mb-4"
        >
          Contáctanos Aquí
        </h3>
        <Link
          href="mailto:contacto@olaworld.org"
          aria-label="Enviar correo electrónico a contacto@olaworld.org"
        >
          <Button
            variant="transparent"
            className="border-white text-white hover:bg-white hover:text-primary transition-all duration-200"
          >
            CONTACTO
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default DonateSection;
