// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

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
  reactStrictMode: true,
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

const pwaConfig = {
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
};

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
const withPWA = require("next-pwa")(pwaConfig);
// const withMDX = require("@next/mdx")(mdxConfig);

module.exports = nextTranslate(withPWA(nextConfig));
