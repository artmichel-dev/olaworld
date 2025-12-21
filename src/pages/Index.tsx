import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import VisionMisionSection from "@/components/VisionMisionSection";
import TresPulsosSection from "@/components/TresPulsosSection";
import ViajesMisionerosSection from "@/components/ViajesMisionerosSection";
import KenyaTripSection from "@/components/KenyaTripSection";
import DonateSection from "@/components/DonateSection";

const Index = () => {
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
};

export default Index;
