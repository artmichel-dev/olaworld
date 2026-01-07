import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export default getRequestConfig(async ({ requestLocale }) => {
  // Ensure requestLocale is awaited in case it's a promise
  let locale = await requestLocale;

  // Validate that the incoming locale is valid, fallback to default if not
  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
    timeZone: 'America/Chicago',
    now: new Date(),
  };
});
