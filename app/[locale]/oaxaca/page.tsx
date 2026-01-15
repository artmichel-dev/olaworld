import { getMessages } from "next-intl/server";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Link from "next/link";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const oaxaca = messages.oaxaca as Record<string, unknown>;
  
  return {
    title: `${oaxaca.title} - OLA World`,
    description: oaxaca.heroText as string,
    keywords: ["Oaxaca", "Mexico", "medical mission", "evangelism", "Teopoxco", "Huautla"],
    openGraph: {
      title: `${oaxaca.title} - OLA World`,
      description: oaxaca.heroText as string,
      images: ["/assets/oaxaca.jpg"],
    },
  };
}

export default async function OaxacaPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const t = messages.oaxaca as Record<string, unknown>;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img 
            src="/assets/oaxaca.jpg" 
            alt={t.imageAlt as string}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-5">
            <div className="text-center max-w-4xl">
              <p className="text-white/90 text-lg md:text-xl mb-2 font-medium">{t.subtitle as string}</p>
              <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-serif italic mb-6">
                {t.title as string}
              </h1>
              <p className="text-white text-2xl md:text-3xl font-serif italic mb-4">{t.dates as string}</p>
              <p className="text-white/95 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                {t.heroText as string}
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="bg-background py-16 md:py-20">
          <div className="px-5 md:px-20 max-w-4xl mx-auto">
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
              {t.intro as string}
            </p>
          </div>
        </section>

        {/* Communities Section */}
        <section className="bg-card-cream py-16 md:py-20">
          <div className="px-5 md:px-20 max-w-5xl mx-auto">
            <h2 className="heading-md text-primary font-serif italic text-center mb-8">
              {(t.communities as Record<string, string>).title}
            </h2>
            <p className="text-foreground/80 text-center mb-8 text-base md:text-lg">
              {(t.communities as Record<string, string>).intro}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <h3 className="text-primary font-semibold text-lg">
                  {(t.communities as Record<string, string>).list1}
                </h3>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <h3 className="text-primary font-semibold text-lg">
                  {(t.communities as Record<string, string>).list2}
                </h3>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <h3 className="text-primary font-semibold text-lg">
                  {(t.communities as Record<string, string>).list3}
                </h3>
              </div>
            </div>
            <p className="text-foreground/80 text-center mt-8 text-base md:text-lg italic">
              {t.approach as string}
            </p>
          </div>
        </section>

        {/* Ministry Areas Section */}
        <section className="bg-background py-16 md:py-20">
          <div className="px-5 md:px-20 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Medical Ministry */}
              <div className="bg-card-cream rounded-2xl p-8 md:p-10">
                <h3 className="text-primary font-serif italic text-2xl md:text-3xl mb-4">
                  {(t.medical as Record<string, string>).title}
                </h3>
                <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
                  {(t.medical as Record<string, string>).content}
                </p>
              </div>

              {/* Evangelism Ministry */}
              <div className="bg-card-cream rounded-2xl p-8 md:p-10">
                <h3 className="text-primary font-serif italic text-2xl md:text-3xl mb-4">
                  {(t.evangelism as Record<string, string>).title}
                </h3>
                <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
                  {(t.evangelism as Record<string, string>).content}
                </p>
              </div>

              {/* Pastors Ministry */}
              <div className="bg-card-cream rounded-2xl p-8 md:p-10">
                <h3 className="text-primary font-serif italic text-2xl md:text-3xl mb-4">
                  {(t.pastors as Record<string, string>).title}
                </h3>
                <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
                  {(t.pastors as Record<string, string>).content}
                </p>
              </div>

              {/* Cultural Experience */}
              <div className="bg-card-cream rounded-2xl p-8 md:p-10">
                <h3 className="text-primary font-serif italic text-2xl md:text-3xl mb-4">
                  {(t.cultural as Record<string, string>).title}
                </h3>
                <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
                  {(t.cultural as Record<string, string>).content}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Can Apply Section */}
        <section className="bg-primary text-white py-16 md:py-20">
          <div className="px-5 md:px-20 max-w-4xl mx-auto">
            <h2 className="heading-md font-serif italic text-center mb-12">
              {(t.whoCanApply as Record<string, string>).title}
            </h2>
            <p className="text-white/90 text-base md:text-lg mb-8">
              {(t.whoCanApply as Record<string, string>).intro}
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-accent text-xl">•</span>
                <p className="text-white/90 text-sm md:text-base flex-1">
                  {(t.whoCanApply as Record<string, string>).requirement1}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent text-xl">•</span>
                <p className="text-white/90 text-sm md:text-base flex-1">
                  {(t.whoCanApply as Record<string, string>).requirement2}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent text-xl">•</span>
                <p className="text-white/90 text-sm md:text-base flex-1">
                  {(t.whoCanApply as Record<string, string>).requirement3}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent text-xl">•</span>
                <p className="text-white/90 text-sm md:text-base flex-1">
                  {(t.whoCanApply as Record<string, string>).requirement4}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent text-xl">•</span>
                <p className="text-white/90 text-sm md:text-base flex-1">
                  {(t.whoCanApply as Record<string, string>).requirement5}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent text-xl">•</span>
                <p className="text-white/90 text-sm md:text-base flex-1">
                  {(t.whoCanApply as Record<string, string>).requirement6}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent text-xl">•</span>
                <p className="text-white/90 text-sm md:text-base flex-1">
                  {(t.whoCanApply as Record<string, string>).requirement7}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-card-cream py-20 md:py-24">
          <div className="px-5 md:px-20 text-center">
            <h2 className="heading-lg text-primary font-serif italic mb-12">
              {t.ctaTitle as string}
            </h2>
            <Link 
              href="https://thefellowshiptc.churchcenter.com/people/forms/1124535" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="filled" className="text-lg px-12 py-5 mx-auto">
                {t.ctaButton as string}
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
