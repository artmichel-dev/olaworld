"use client";

import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold font-sans">{t("title")}</h1>
        <p className="mb-4 text-xl text-foreground/60 font-serif">{t("message")}</p>
        <Link href="/" className="text-foreground underline hover:opacity-70 transition-opacity duration-200 font-sans uppercase text-sm tracking-wide">
          {t("backHome")}
        </Link>
      </div>
    </div>
  );
}
