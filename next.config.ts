import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  i18n: {
    locales: ['en', 'es', 'pt'],
    defaultLocale: 'en',
  },
};

export default withNextIntl(nextConfig);
