import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold font-sans">404</h1>
        <p className="mb-4 text-xl text-foreground/60 font-serif">Oops! Page not found</p>
        <Link href="/" className="text-foreground underline hover:opacity-70 transition-opacity duration-200 font-sans uppercase text-sm tracking-wide">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
