import Button from "./Button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="/assets/hero-child.jpg" alt="Niño africano - OLA World" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-5 py-20">
        <img src="/assets/ola-logo-white.svg" alt="OLA - Outreach Leadership Activation" className="w-48 md:w-64 lg:w-80 mx-auto mb-6" />
        <p className="text-lg md:text-xl font-medium tracking-wide mb-8">Outreach - Leadership - Activation</p>
        <Link href="https://thefellowshiptc.churchcenter.com/people/forms/1116260" target="_blank">
          <Button variant="filled" className="text-base px-10 py-4 mx-auto">
            APLICAR AHORA
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
