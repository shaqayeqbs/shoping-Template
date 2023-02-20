const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
// const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");

///////////////////////////////////////

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PUBLIC_URL: "/",
  },
  images: {
    domains: [
      "core.behzi.net",

      "https://core.behzi.net/storage/image",
      "core.behzi.net/storage/image",
    ],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "core.behzi.net",
        port: "3001",
        pathname: "/",
      },
    ],
  },
  compiler: {
    reactRemoveProperties: true,

    removeConsole: {
      exclude: ["error"],
    },
  },

  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   config.plugins.push(new DuplicatePackageCheckerPlugin());

  //   return config;
  // },

  i18n: {
    locales: ["fa"],
    defaultLocale: "fa",
  },
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  pageExtensions: ["ts", "tsx", "js", "jsx"],
};

// const pwaConfig = {
//   dest: "public",
//   disable: process.env.NODE_ENV === "development",
//   register: true,
// };

// const mdxConfig = {
//   extension: /.mdx?$/,
//   options: {
//     remarkPlugins: [],
//     rehypePlugins: [],
//     // If you use MDXProvider, uncomment the following line.
//     // providerImportSource: "@mdx-js/react",
//   },
// };

const nextTranslate = require("next-translate");
// const withPWA = require("next-pwa")(pwaConfig);
// const withMDX = require("@next/mdx")(mdxConfig);

module.exports = nextTranslate(withBundleAnalyzer(nextConfig));
