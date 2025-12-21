import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-foreground/10">
      <div className="px-5 md:px-20 py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/assets/ola-logo-color.svg" alt="OLA World" className="h-10 md:h-12" />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#vision" className="nav-text text-foreground hover:text-primary transition-colors">
              Visión
            </a>
            <a href="#viajes" className="nav-text text-foreground hover:text-primary transition-colors">
              Viajes
            </a>
            <a href="#donar" className="nav-text text-foreground hover:text-primary transition-colors">
              Donar
            </a>
            <a href="#contacto" className="nav-text text-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
