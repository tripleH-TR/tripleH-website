import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "../globals.scss";
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/footer/footer';


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
    <html lang={locale}>
      <body className=''>
        <NextIntlClientProvider messages={messages}>
          <Navbar locale={locale} />
          <main className='flex flex-col items-center'>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
