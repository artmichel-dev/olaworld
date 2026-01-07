import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { locales } from "../../i18n";
import "../globals.css";
import { Providers } from "../providers";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#A8736D",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;

  const messages = await getMessages({ locale });
  const metadata = messages.metadata as any;

  return {
    metadataBase: new URL("https://olaworld.org"),
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    authors: [{ name: "The Fellowship Global Missions" }],
    creator: "The Fellowship of Texas City",
    publisher: "OLA World",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/olaworld-icon.svg",
      shortcut: "/olaworld-icon.svg",
      apple: "/olaworld-icon.svg",
    },
    openGraph: {
      type: "website",
      locale: locale === 'es' ? "es_ES" : "en_US",
      url: `https://olaworld.org${locale === 'us' ? '/us' : ''}`,
      siteName: "OLA World",
      title: metadata.ogTitle,
      description: metadata.ogDescription,
      images: [
        {
          url: "/assets/hero-child.jpg",
          width: 1200,
          height: 630,
          alt: metadata.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.twitterTitle,
      description: metadata.twitterDescription,
      images: ["/assets/hero-child.jpg"],
      creator: "@thefellowship.tc",
    },
    alternates: {
      canonical: locale === 'es' ? "https://olaworld.org" : "https://olaworld.org/us",
      languages: {
        'es': 'https://olaworld.org',
        'us': 'https://olaworld.org/us',
      },
    },
    category: "Religious Organization",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OLA World",
    alternateName: "Outreach Leadership Activation",
    url: "https://olaworld.org",
    logo: "https://olaworld.org/assets/ola-logo-color.svg",
    description:
      locale === 'es'
        ? "Movimiento global que toca vidas, desarrolla líderes y los envía para impactar comunidades y naciones a través de viajes misioneros y formación pastoral."
        : "Global movement that touches lives, develops leaders, and sends them to impact communities and nations through mission trips and pastoral formation.",
    foundingDate: "2020",
    founder: {
      "@type": "Organization",
      name: "The Fellowship of Texas City",
    },
    sameAs: [
      "https://www.instagram.com/thefellowship.tc/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "General Inquiries",
      url: "https://www.instagram.com/thefellowship.tc/",
    },
    areaServed: ["Kenya", "Mexico", "United States"],
    knowsAbout:
      locale === 'es'
        ? ["Viajes Misioneros", "Evangelismo", "Formación de Líderes", "Misiones Médicas", "Desarrollo Pastoral"]
        : ["Mission Trips", "Evangelism", "Leadership Development", "Medical Missions", "Pastoral Development"],
  };

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
