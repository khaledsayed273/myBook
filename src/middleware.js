import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = ["en", "ar", "de", "es", "fr", "it", "ja", "pt", "ru", "zh-CN"]
const defaultLocale = 'en';

// Helper function to determine the user's preferred locale
function getLocale(request) {
  const acceptLanguage = request.headers.get('accept-language') || '';
  const negotiator = new Negotiator({ headers: { 'accept-language': acceptLanguage } });
  const languages = negotiator.languages();
  return match(languages, locales, defaultLocale);
}

export function middleware(request) {
  const { pathname } = request.nextUrl;
  // Check if the current path already includes a locale

  const pathnameHasLocale = locales?.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If a locale is already present, do nothing
  if (pathnameHasLocale) {
    return;
  }

  // Determine the locale and redirect
  const locale = getLocale(request);
  const redirectUrl = new URL(`/${locale}${pathname}`, request.url);

  return Response.redirect(redirectUrl, 308); // Use 308 for permanent redirect
}

export const config = {
  matcher: [
    '/((?!_next|api|static|favicon.ico).*)',
  ],
};
