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
            <p className="text-white/90 text-lg md:text-xl mb-12">
              {locale === 'es' 
                ? 'Únete a nosotros en este movimiento del Espíritu Santo.'
                : 'Join us in this movement of the Holy Spirit.'}
            </p>

            {/* Instagram Section */}
            <div className="flex flex-col items-center gap-4 mt-12">
              <p className="text-white/90 text-base md:text-lg">
                {locale === 'es' ? 'Síguenos en Instagram' : 'Follow us on Instagram'}
              </p>
              <a 
                href="https://www.instagram.com/olaworld_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative block w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Image */}
                <img 
                  src="/assets/instagram_box.jpg" 
                  alt="OLA World Instagram"
                  className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75"
                />
                
                {/* Instagram Logo Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300">
                  <svg 
                    className="w-12 h-12 md:w-16 md:h-16 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100"
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>

                {/* Username Badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-2 px-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs md:text-sm font-semibold text-center">@olaworld_</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
