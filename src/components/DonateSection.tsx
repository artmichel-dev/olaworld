"use client";

import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const DonateSection = () => {
  const tDonate = useTranslations("donate");
  const tContact = useTranslations("contact");

  return (
    <section
      id="donar"
      className="bg-primary scroll-mt-20"
      aria-labelledby="donate-heading"
    >
      {/* Donate Header */}
      <div className="px-5 md:px-20 py-12 md:py-16 text-center max-w-screen-xl mx-auto">
        <h2
          id="donate-heading"
          className="heading-lg text-white font-serif italic mb-8"
        >
          {tDonate("title")}
        </h2>

        <Link
          href="https://donorbox.org/olaworld"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={tDonate("buttonAria")}
        >
          <Button
            variant="transparent"
            className="border-white text-white hover:bg-white hover:text-primary transition-all duration-200"
          >
            {tDonate("button")}
          </Button>
        </Link>
      </div>

      {/* Airplane Image */}
      <div className="px-5 md:px-20 pb-16">
        <div className="rounded-2xl overflow-hidden max-w-4xl mx-auto shadow-lg">
          <Image
            src="/assets/airplane.webp"
            alt={tDonate("imageAlt")}
            width={1024}
            height={400}
            className="w-full h-[300px] md:h-[400px] object-cover"
            priority
          />
        </div>
      </div>

      {/* Contact */}
      <div
        id="contacto"
        className="px-5 md:px-20 pb-16 text-center max-w-screen-xl mx-auto"
        aria-labelledby="contact-heading"
      >
        <h3
          id="contact-heading"
          className="heading-md text-white font-serif italic mb-4"
        >
          {tContact("title")}
        </h3>
        <Link
          href="mailto:contacto@olaworld.org"
          aria-label={tContact("buttonAria")}
        >
          <Button
            variant="transparent"
            className="border-white text-white hover:bg-white hover:text-primary transition-all duration-200"
          >
            {tContact("button")}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default DonateSection;
