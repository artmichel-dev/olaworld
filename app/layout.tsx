import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#A8736D",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://olaworld.org"),
  title: "OLA World - Outreach, Leadership & Activation | Viajes Misioneros",
  description: "OLA World es un movimiento global de The Fellowship que toca vidas, desarrolla líderes y los envía para impactar comunidades. Únete a nuestros viajes misioneros a Kenya, Oaxaca y más. Outreach, Leadership, Activation.",
  keywords: [
    "OLA World",
    "viajes misioneros",
    "misiones",
    "Kenya",
    "Oaxaca",
    "evangelismo",
    "The Fellowship",
    "liderazgo cristiano",
    "activación misionera",
    "outreach",
    "viajes misioneros 2026",
    "viaje misionero médico",
    "formación pastoral",
    "centros de entrenamiento",
  ],
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
    locale: "es_ES",
    url: "https://olaworld.org",
    siteName: "OLA World",
    title: "OLA World - Outreach, Leadership & Activation | Viajes Misioneros",
    description: "Movimiento global que toca vidas, desarrolla líderes y los envía para impactar comunidades. Únete a nuestros viajes misioneros a Kenya, Oaxaca y más.",
    images: [
      {
        url: "/assets/hero-child.jpg",
        width: 1200,
        height: 630,
        alt: "OLA World - Viajes Misioneros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OLA World - Outreach, Leadership & Activation",
    description: "Movimiento global que toca vidas, desarrolla líderes y los envía para impactar comunidades.",
    images: ["/assets/hero-child.jpg"],
    creator: "@thefellowship.tc",
  },
  alternates: {
    canonical: "https://olaworld.org",
  },
  category: "Religious Organization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OLA World",
    alternateName: "Outreach Leadership Activation",
    url: "https://olaworld.org",
    logo: "https://olaworld.org/assets/ola-logo-color.svg",
    description:
      "Movimiento global que toca vidas, desarrolla líderes y los envía para impactar comunidades y naciones a través de viajes misioneros y formación pastoral.",
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
    knowsAbout: [
      "Viajes Misioneros",
      "Evangelismo",
      "Formación de Líderes",
      "Misiones Médicas",
      "Desarrollo Pastoral",
    ],
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
