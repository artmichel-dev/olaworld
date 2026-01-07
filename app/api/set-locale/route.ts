import { NextRequest, NextResponse } from 'next/server';
import { locales } from '@/../../i18n';

const LOCALE_COOKIE = 'NEXT_LOCALE';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { locale } = body;

    // Validate locale
    if (!locale || !locales.includes(locale as typeof locales[number])) {
      return NextResponse.json(
        { error: 'Invalid locale' },
        { status: 400 }
      );
    }

    // Create response
    const response = NextResponse.json({ success: true, locale });

    // Set cookie with the user's preference
    response.cookies.set(LOCALE_COOKIE, locale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: 'lax',
      httpOnly: false, // Allow client-side access if needed
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}

