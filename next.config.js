const nextTranslate = require("next-translate");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  ...nextTranslate(),
  env: {
    PUBLIC_URL: "/",
  },

  images: {
    domains: ["core.behzi.net"],
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
};

module.exports = withBundleAnalyzer(nextConfig);
