import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['en', 'tr'];

export default getRequestConfig(async ({ requestLocale }) => {
    // Validate that the incoming `requestLocale` parameter is valid
    if (!locales.includes(requestLocale as any)) notFound();

    return {
        messages: (await import(`./locales/${requestLocale}.json`)).default
    };
});
