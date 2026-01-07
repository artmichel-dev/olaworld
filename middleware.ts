import { NextRequest, NextResponse } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

// Cookie name for storing user's language preference
const LOCALE_COOKIE = 'NEXT_LOCALE';

// Create the next-intl middleware
const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale,
  localeDetection: false, // We handle detection manually
  localePrefix: 'as-needed',
  alternateLinks: true,
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore internal Next.js routes, API routes, and static files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_vercel') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // If already on /us or any /us/* route, don't redirect
  if (pathname.startsWith('/us')) {
    return intlMiddleware(request);
  }

  // Only apply auto-detection logic when user is at the root "/"
  if (pathname === '/') {
    // 1. Check if user has a saved preference (cookie)
    const savedLocale = request.cookies.get(LOCALE_COOKIE)?.value;

    if (savedLocale && locales.includes(savedLocale as any)) {
      // User has a saved preference - respect it
      if (savedLocale === 'us') {
        // Redirect to /us
        const url = request.nextUrl.clone();
        url.pathname = '/us';
        return NextResponse.redirect(url);
      }
      // If preference is 'es', stay at root
      return intlMiddleware(request);
    }

    // 2. No saved preference - detect from browser's Accept-Language
    const acceptLanguage = request.headers.get('Accept-Language') || '';
    const preferredLanguage = acceptLanguage.toLowerCase();

    // Check if user prefers English
    const isEnglish = 
      preferredLanguage.includes('en-us') ||
      preferredLanguage.includes('en-gb') ||
      preferredLanguage.startsWith('en') ||
      preferredLanguage.startsWith('en,') ||
      preferredLanguage.includes(',en');

    if (isEnglish) {
      // Redirect to /us
      const url = request.nextUrl.clone();
      url.pathname = '/us';
      return NextResponse.redirect(url);
    }

    // Default: stay at root (Spanish)
    return intlMiddleware(request);
  }

  // For any other route, just apply intl middleware
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
