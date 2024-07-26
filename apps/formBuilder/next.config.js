//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const withPWA = require('@ducanh2912/next-pwa').default;

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions & import('next').NextConfig}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  reactStrictMode: true,
  swcMinify: true, // Add swcMinify directly to the Next.js configuration
  env: {
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
      CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
      NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
      NEXT_PUBLIC_CLERK_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
      NEXT_PUBLIC_CLERK_SIGN_AFTER_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_AFTER_IN_URL,
      NEXT_PUBLIC_CLERK_SIGN_AFTER_UP_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_AFTER_UP_URL,
      POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL,
      POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  ...(process.env.NODE_ENV === 'production' ? [withPWA({
    dest: 'public',
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    disable: false,
    workboxOptions: {
      disableDevLogs: true,
    },
  })] : []),
];

module.exports = composePlugins(...plugins)(nextConfig);
