import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OLA World - Outreach Leadership Activation",
    short_name: "OLA World",
    description:
      "Movimiento global que toca vidas, desarrolla líderes y los envía para impactar comunidades. Viajes misioneros a Kenya, Oaxaca y más.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5EDE4",
    theme_color: "#A8736D",
    icons: [
      {
        src: "/olaworld-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any maskable",
      },
    ],
    categories: ["religious", "lifestyle", "education"],
    lang: "es",
    dir: "ltr",
  };
}

