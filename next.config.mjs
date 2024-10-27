import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en', 'tr'],    // Desteklenen diller
        defaultLocale: 'tr',      // Varsayılan dil
    },
    sassOptions: {
        silenceDeprecations: ['legacy-js-api']
    }
};

export default withNextIntl(nextConfig);
