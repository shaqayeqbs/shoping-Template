const nextTranslate = require("next-translate");

const nextConfig = {
  ...nextTranslate(),

  // images: {
  //   domains: ["core.behzi.net"],
  //   formats: ["image/avif", "image/webp"],
  //   NEXT_SHARP_PATH: "/tmp/node_modules/sharp"
  // },
};

module.exports = nextConfig;
