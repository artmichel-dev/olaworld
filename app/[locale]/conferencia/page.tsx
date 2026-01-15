import { getMessages } from "next-intl/server";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const conference = messages.conference as Record<string, unknown>;
  
  return {
    title: `${conference.title} - OLA World`,
    description: conference.description as string,
    keywords: ["conference", "Holy Spirit", "worship", "church", "revival"],
    openGraph: {
      title: `${conference.title} - OLA World`,
      description: conference.description as string,
    },
  };
}

export default async function ConferenciaPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const t = messages.conference as Record<string, unknown>;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          
          <div className="relative z-10 px-5 md:px-20 text-center max-w-5xl mx-auto">
            <p className="text-white/90 text-xl md:text-2xl mb-4 font-medium">{t.subtitle as string}</p>
            <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-serif italic mb-8 leading-tight">
              {t.title as string}
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-card-cream py-20 md:py-28">
          <div className="px-5 md:px-20 max-w-4xl mx-auto">
            <p className="text-foreground text-lg md:text-xl leading-relaxed mb-12 text-center">
              {t.description as string}
            </p>

            {/* Event Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-16">
              {/* Date */}
              <div className="bg-white rounded-2xl p-8 shadow-md text-center">
                <h3 className="text-primary font-serif italic text-2xl mb-4">{t.date as string}</h3>
                <p className="text-foreground text-xl font-semibold">{t.dateValue as string}</p>
              </div>

              {/* Location */}
              <div className="bg-white rounded-2xl p-8 shadow-md text-center">
                <h3 className="text-primary font-serif italic text-2xl mb-4">{t.location as string}</h3>
                <p className="text-foreground text-xl font-semibold">{t.locationValue as string}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Section */}
        <section className="bg-background py-20 md:py-28">
          <div className="px-5 md:px-20 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 md:p-12 flex items-center justify-center min-h-[200px]">
                <h3 className="text-primary font-serif italic text-3xl md:text-4xl text-center">
                  {locale === 'es' ? 'Unidad' : 'Unity'}
                </h3>
              </div>
              <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl p-8 md:p-12 flex items-center justify-center min-h-[200px]">
                <h3 className="text-primary font-serif italic text-3xl md:text-4xl text-center">
                  {locale === 'es' ? 'Poder' : 'Power'}
                </h3>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 md:p-12 flex items-center justify-center min-h-[200px]">
                <h3 className="text-primary font-serif italic text-3xl md:text-4xl text-center">
                  {locale === 'es' ? 'Avivamiento' : 'Revival'}
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary text-white py-20 md:py-28">
          <div className="px-5 md:px-20 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif italic mb-6">
              {locale === 'es' ? '¿Estás listo para la ola?' : 'Are you ready for the wave?'}
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8">
              {locale === 'es' 
                ? 'Únete a nosotros en este movimiento del Espíritu Santo.'
                : 'Join us in this movement of the Holy Spirit.'}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
