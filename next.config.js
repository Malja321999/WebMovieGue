const withImages = require("next-images");
const optimizedImages = require("next-optimized-images");
const noPrefix = process.env.PREFIX === "NO_PREFIX";

module.exports = withImages({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          target: "serverless",
        },
      },
    });

    return config;
  },
  assetPrefix: noPrefix ? "" : "/portfolio/",
});
