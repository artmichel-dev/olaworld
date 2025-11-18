import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ola World - Próximamente | Coming Soon",
  description: "OLA Espíritu Santo - Una nueva ola está por llegar. Próximamente descubre una experiencia única que transformará tu forma de conectar con el mundo.",
  keywords: ["Ola World", "Ola", "Espíritu Santo", "Coming Soon", "Próximamente", "Nueva marca", "Lanzamiento"],
  authors: [{ name: "Ola World" }],
  creator: "Ola World",
  publisher: "Ola World",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Favicon
  icons: {
    icon: "/olaworld-icon.svg",
    shortcut: "/olaworld-icon.svg",
    apple: "/olaworld-icon.svg",
  },
  
  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://olaworld.vercel.app",
    siteName: "Ola World",
    title: "Ola World - Próximamente | Coming Soon",
    description: "OLA Espíritu Santo - Una nueva ola está por llegar. Descubre una experiencia única.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ola World - OLA Espíritu Santo",
        type: "image/jpeg",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Ola World - Próximamente | Coming Soon",
    description: "OLA Espíritu Santo - Una nueva ola está por llegar. Descubre una experiencia única.",
    images: ["/og-image.jpg"],
    creator: "@olaworld",
    site: "@olaworld",
  },
  
  // Verificación y otros metadatos
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Manifest y tema
  manifest: "/manifest.json",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFE650" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  
  // Viewport (Next.js 14 lo maneja automáticamente, pero podemos especificar)
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Meta tags adicionales para SEO */}
        <meta name="theme-color" content="#FFE650" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Ola World" />
        
        {/* Preconnect para mejor performance */}
        <link rel="preconnect" href="https://olaworld.s3.us-east-2.amazonaws.com" />
        <link rel="dns-prefetch" href="https://olaworld.s3.us-east-2.amazonaws.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}

