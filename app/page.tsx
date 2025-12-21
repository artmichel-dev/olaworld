import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import VisionMisionSection from "@/components/VisionMisionSection";
import TresPulsosSection from "@/components/TresPulsosSection";
import ViajesMisionerosSection from "@/components/ViajesMisionerosSection";
import KenyaTripSection from "@/components/KenyaTripSection";
import DonateSection from "@/components/DonateSection";

export const metadata = {
  title: "OLA World - Inicio | Viajes Misioneros 2026",
  description: "Descubre OLA World: Outreach, Leadership, Activation. Únete a nuestros viajes misioneros a Kenya y Oaxaca 2026. Toca vidas, desarrolla liderazgo e impacta comunidades.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <HeroSection />
        <VisionMisionSection />
        <TresPulsosSection />
        <ViajesMisionerosSection />
        <KenyaTripSection />
        <DonateSection />
      </main>

      <Footer />
    </div>
  );
}
