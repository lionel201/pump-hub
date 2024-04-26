// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')([])

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
})

const nextConfig = withTM(
  withBundleAnalyzer({
    experimental: {
      swcPlugins: [['@lingui/swc-plugin', {}]],
    },
    /**below is added to suppress initial fs module not found error*/
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback.fs = false
      }
      return config
    },
    reactStrictMode: true,
    swcMinify: false,
    compiler: {
      styledComponents: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'raw.githubusercontent.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
    i18n: {
      // These are all the locales you want to support in
      // your application
      locales: ['en-US', 'ja-JP'], // This is the default locale you want to be used when visiting
      // a non-locale prefixed path e.g. `/hello`
      defaultLocale: 'en-US', // This is a list of locale domains and the default locale they
      // should handle (these are only required when setting up domain routing)
      // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
      domains: [
        {
          domain: 'example.com',
          defaultLocale: 'en-US',
        },
        {
          domain: 'example.jp',
          defaultLocale: 'ja', // an optional http field can also be used to test
          // locale domains locally with http instead of https
          http: true,
        },
      ],
    },

    modularizeImports: {
      '@mui/material': {
        transform: '@mui/material/{{member}}',
      },
      '@mui/icons-material': {
        transform: '@mui/icons-material/{{member}}',
      },
      '@mui/styles': {
        transform: '@mui/styles/{{member}}',
      },
      '@mui/lab': {
        transform: '@mui/lab/{{member}}',
      },
    },
  }),
)

module.exports = nextConfig
