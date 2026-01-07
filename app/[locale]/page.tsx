import { getMessages } from "next-intl/server";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import VisionMisionSection from "@/components/VisionMisionSection";
import TresPulsosSection from "@/components/TresPulsosSection";
import ViajesMisionerosSection from "@/components/ViajesMisionerosSection";
import KenyaTripSection from "@/components/KenyaTripSection";
import DonateSection from "@/components/DonateSection";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const metadata = messages.metadata as Record<string, string>;

  return {
    title: metadata.homeTitle,
    description: metadata.homeDescription,
  };
}

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  await params; // Just await params to satisfy Next.js

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
