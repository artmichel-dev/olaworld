import heroImage from "@/assets/hero-child.jpg";
import olaLogo from "@/assets/ola-logo.png";
import Button from "./Button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Niño africano - OLA World"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-5 py-20">
        <img
          src={olaLogo}
          alt="OLA - Outreach Leadership Activation"
          className="w-48 md:w-64 lg:w-80 mx-auto mb-6"
        />
        <p className="text-lg md:text-xl font-medium tracking-wide mb-8">
          Outreach - Leadership - Activation
        </p>
        <Button 
          variant="transparent" 
          className="border-white text-white hover:bg-white hover:text-foreground"
        >
          SHOP NOW
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
