import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "../globals.scss";
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/footer/Footer';
import GoTopButton from '../components/GoTopButton';
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  // display: 'swap',
  // variable: '--font-roboto-mono',
  weight: ['100', '300', '400', '500', '700', '900']
})

export const generateMetadata = () => {
  return {
    title: "Triple H"
  }
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // params tipini Promise olarak değiştiriyoruz
}) {
  // params'ı bekleyerek locale'i alıyoruz
  const { locale } = await params;

  // Mesajları almak için locale bilgisini nesne olarak geçin
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className={roboto.className}>
      <body className=''>
        <NextIntlClientProvider messages={messages}>
          <Navbar locale={locale} />
          <main className='min-h-screen'>{children}</main>
          <GoTopButton />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
