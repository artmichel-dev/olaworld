import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ola World - Coming Soon",
  description: "Ola World - Próximamente",
  icons: {
    icon: "/olaworld-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

