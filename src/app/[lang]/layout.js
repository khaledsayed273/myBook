import './globals.css'
import { Inter } from 'next/font/google'
import { getDictionary } from './dictionaries';
import Navbar from './components/navbar/Navbar';

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata({ params }) {
  const { lang } = await params

  const currentLang = lang || 'en'
  const locales = process.env.languages.split(',');
  const alternateLanguages = locales.reduce((acc, locale) => {
    acc[locale] = `/${locale}`;
    return acc;
  }, {});

  return {
    title: "our book",
    metadataBase: new URL(process.env.website_domain),
    alternates: {
      canonical: `/${currentLang}`,
      languages: alternateLanguages, 
    },
  }
}


export default async function RootLayout({ children, params }) {
  const { lang } = await params
  const translate = await getDictionary(lang)
  return (
    <html dir={lang === "ar" ? "rtl" : "ltr"} lang={lang}>
      <body className={`${inter.className}`}>
        <Navbar translate={translate} />
        {children}
      </body>
    </html>
  )
}
