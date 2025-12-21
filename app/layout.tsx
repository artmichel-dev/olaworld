import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "OLA World - Lifestyle, Wellness & Personal Growth Blog",
  description: "I'm a fashion curator sharing my passion for timeless style, sustainable design, and the stories behind what we wear. From building capsule wardrobes to discovering emerging designers, this is where we celebrate fashion as a form of self-expression and mindful creativity.",
  authors: [{ name: "OLA World" }],
  icons: {
    icon: "/olaworld-icon.svg",
    shortcut: "/olaworld-icon.svg",
    apple: "/olaworld-icon.svg",
  },
  openGraph: {
    type: "website",
    title: "OLA World - Lifestyle, Wellness & Personal Growth Blog",
    description: "I'm a fashion curator sharing my passion for timeless style, sustainable design, and the stories behind what we wear.",
    images: ["https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=630&fit=crop"],
  },
  twitter: {
    card: "summary_large_image",
    title: "OLA World - Lifestyle, Wellness & Personal Growth Blog",
    description: "I'm a fashion curator sharing my passion for timeless style, sustainable design, and the stories behind what we wear.",
    images: ["https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=630&fit=crop"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
