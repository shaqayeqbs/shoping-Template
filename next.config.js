// const withPWA = require("next-pwa");

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//   },
// });

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "core.behzi.net",
        domains: ["core.behzi.net"],
        port: "",
        pathname: "/**/**",
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};
