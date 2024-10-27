import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';


// Can be imported from a shared config
export const locales = ['en', 'tr'];

export default getRequestConfig(async ({ requestLocale }) => {
    // requestLocale'i çözümleyin
    const locale = await requestLocale;

    // locale'i kontrol edin
    if (!locale || !locales.includes(locale)) {
        notFound();
    }

    return {
        messages: (await import(`../locales/${locale}.json`)).default
    };
});

