import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

export const generateMetadata = ({ params }: { params: { locale: string } }) => {
  // Burada image leride open graph olarak eklenebilir 
  const { locale } = params;
  return {
    title: `Triple H - ${locale}`
  }
}
// buralar komple gpt
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'tr' }];
}

export const dynamicParams = false;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  // `params`'i asenkron olarak alın
  // paramsin onune await yazdim
  const { locale } = await params;
  let messages;
  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  // gpt bitti
  return (

    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>

  );
}