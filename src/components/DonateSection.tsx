import airplaneImage from "@/assets/airplane.jpg";
import Button from "./Button";

const DonateSection = () => {
  return (
    <section className="bg-primary">
      {/* Donate Header */}
      <div className="px-5 md:px-20 py-12 md:py-16">
        <h2 className="heading-lg text-white font-serif italic mb-8">
          Dona aquí
        </h2>
        <Button 
          variant="transparent" 
          className="border-white text-white hover:bg-white hover:text-primary"
        >
          DONAR AHORA
        </Button>
      </div>

      {/* Airplane Image */}
      <div className="px-5 md:px-20 pb-16">
        <div className="rounded-2xl overflow-hidden max-w-4xl mx-auto">
          <img
            src={airplaneImage}
            alt="Avión misionero en África"
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
        </div>
      </div>

      {/* Contact */}
      <div className="px-5 md:px-20 pb-16">
        <h3 className="text-white font-serif italic text-2xl md:text-3xl mb-4">
          Contactanos Aquí
        </h3>
        <Button 
          variant="transparent" 
          className="border-white text-white hover:bg-white hover:text-primary"
        >
          CONTACTO
        </Button>
      </div>
    </section>
  );
};

export default DonateSection;
