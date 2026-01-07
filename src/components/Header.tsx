"use client";

import { Link } from "@/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const t = useTranslations("navigation");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { href: "#vision", label: t("vision") },
    { href: "#viajes", label: t("trips") },
    { href: "#donar", label: t("donate") },
    { href: "#contacto", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-foreground/10">
      <div className="px-5 md:px-20 py-3 md:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/assets/ola-logo-color.svg" alt="OLA World" className="h-8 md:h-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-text text-foreground hover:text-primary transition-colors">
                {item.label}
              </a>
            ))}
            {/* Language Switcher - Desktop */}
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden p-2 text-foreground hover:text-primary transition-colors" aria-label="Toggle menu" aria-expanded={isMenuOpen}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="px-5 py-4 bg-background border-t border-foreground/10">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu} className="block nav-text text-foreground hover:text-primary transition-colors py-2">
                  {item.label}
                </a>
              </li>
            ))}
            {/* Language Switcher - Mobile */}
            <li className="pt-2 border-t border-foreground/10">
              <LanguageSwitcher />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
