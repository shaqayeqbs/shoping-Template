// const nextTranslate = require("next-translate");

// module.exports = nextTranslate({
//   module: {
//     rules: [
//       {
//         test: /\.(svg|png|jpe?g|gif)$/i,
//         use: [
//           {
//             loader: "file-loader",
//           },
//         ],
//       },
//     ],
//   },
// });
const nextTranslate = require("next-translate");

const nextConfig = {
  ...nextTranslate(),
  images: {
    domains: ["core.behzi.net"],
  },
};

module.exports = nextConfig;
