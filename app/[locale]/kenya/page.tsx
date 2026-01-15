import { getMessages } from "next-intl/server";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Link from "next/link";

interface MetadataMessages {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImageAlt: string;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const kenya = messages.kenya as Record<string, unknown>;
  
  return {
    title: `${kenya.title} - OLA World`,
    description: kenya.description1 as string,
    keywords: ["Kenya", "mission trip", "medical mission", "evangelism", "Turkana", "Nymira"],
    openGraph: {
      title: `${kenya.title} - OLA World`,
      description: kenya.description1 as string,
      images: ["/assets/kenya-group.jpg"],
    },
  };
}

export default async function KenyaPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const t = messages.kenya as Record<string, unknown>;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          <img 
            src="/assets/kenya.jpg" 
            alt={t.imageAlt as string}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-5">
              <p className="text-white text-xl md:text-2xl mb-2">{t.subtitle as string}</p>
              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif italic">
                {t.title as string}
              </h1>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-card-cream">
          {/* Header */}
          <div className="px-5 md:px-20 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <p className="text-foreground font-medium">
                <span className="font-semibold">{t.dates as string}</span> {t.datesValue as string}
              </p>
              <p className="text-foreground font-medium">
                <span className="font-semibold">{t.locations as string}</span> {t.locationsValue as string}
              </p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="px-5 md:px-20 pb-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Image */}
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="/assets/kenya-group.jpg" 
                  alt={t.imageAlt as string}
                  className="w-full h-[300px] md:h-[350px] object-cover" 
                />
              </div>

              {/* Description */}
              <div className="space-y-4 text-foreground/80 text-sm md:text-base leading-relaxed">
                <p>{t.description1 as string}</p>
                <p>{t.description2 as string}</p>
              </div>
            </div>
          </div>

          {/* Details Sections */}
          <div className="px-5 md:px-20 pb-16">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Con quién serviremos */}
              <div>
                <h4 className="text-primary font-semibold mb-3 underline">
                  {(t.withWhom as Record<string, string>).title}
                </h4>
                <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
                  {(t.withWhom as Record<string, string>).content}
                </p>
              </div>

              {/* Lo que estaremos haciendo */}
              <div>
                <h4 className="text-primary font-semibold mb-3 underline">
                  {(t.activities as Record<string, string>).title}
                </h4>
                <ul className="text-foreground/80 text-sm md:text-base space-y-2">
                  <li>{(t.activities as Record<string, string>).item1}</li>
                  <li>{(t.activities as Record<string, string>).item2}</li>
                  <li>{(t.activities as Record<string, string>).item3}</li>
                  <li>{(t.activities as Record<string, string>).item4}</li>
                  <li>{(t.activities as Record<string, string>).item5}</li>
                  <li>{(t.activities as Record<string, string>).item6}</li>
                </ul>
              </div>

              {/* Preparación del equipo */}
              <div>
                <h4 className="text-primary font-semibold mb-3 underline">
                  {(t.preparation as Record<string, string>).title}
                </h4>
                <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
                  {(t.preparation as Record<string, string>).content}
                </p>
              </div>

              {/* Cierre del viaje */}
              <div>
                <h4 className="text-primary font-semibold mb-3 underline">
                  {(t.closing as Record<string, string>).title}
                </h4>
                <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
                  {(t.closing as Record<string, string>).content}
                </p>
              </div>

              {/* Quién puede aplicar */}
              <div>
                <h4 className="text-primary font-semibold mb-3 underline">
                  {(t.whoCanApply as Record<string, string>).title}
                </h4>
                <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
                  {(t.whoCanApply as Record<string, string>).content}
                </p>
              </div>

              {/* Costo del viaje */}
              <div>
                <h4 className="text-primary font-semibold mb-3 underline">
                  {(t.cost as Record<string, unknown>).title as string}
                </h4>
                <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-4">
                  {(t.cost as Record<string, unknown>).intro as string}
                </p>
                <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-4">
                  <strong>{((t.cost as Record<string, unknown>).fromUS as Record<string, string>).text}</strong>{" "}
                  {((t.cost as Record<string, unknown>).fromUS as Record<string, string>).amount}.{" "}
                  {((t.cost as Record<string, unknown>).fromUS as Record<string, string>).details}
                </p>
                <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-4">
                  <strong>{((t.cost as Record<string, unknown>).fromLatinAmerica as Record<string, string>).text}</strong>{" "}
                  {((t.cost as Record<string, unknown>).fromLatinAmerica as Record<string, string>).amount}.{" "}
                  {((t.cost as Record<string, unknown>).fromLatinAmerica as Record<string, string>).details}
                </p>
                <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
                  {(t.cost as Record<string, unknown>).contribution as string}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="bg-background py-16 md:py-20">
          <div className="px-5 md:px-20 max-w-5xl mx-auto">
            <div className="mb-8 text-center">
              <h2 className="heading-md text-primary font-serif italic mb-4">
                {locale === 'es' ? 'Conoce Más Sobre Nuestro Ministerio en Kenya' : 'Learn More About Our Ministry in Kenya'}
              </h2>
              <p className="text-foreground/80 text-base md:text-lg">
                {locale === 'es' 
                  ? 'Mira este video para ver el impacto de nuestros viajes misioneros anteriores en Kenya'
                  : 'Watch this video to see the impact of our previous mission trips in Kenya'}
              </p>
            </div>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-lg"
                src="https://www.youtube.com/embed/rZRcY2Zv7Ak"
                title="Kenya Mission Trip Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-card-cream">
          <div className="px-5 md:px-20 py-20 text-center">
            <h3 className="heading-lg text-primary font-serif italic mb-8">{t.ctaTitle as string}</h3>
            <Link 
              href="https://thefellowshiptc.churchcenter.com/people/forms/1116260" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="filled" className="text-base px-10 py-4 mx-auto">
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
