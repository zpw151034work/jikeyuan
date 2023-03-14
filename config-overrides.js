const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addPostcssPlugins,
} = require("customize-cra");
const path = require("path");
const px2viewport = require("postcss-px-to-viewport");
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    style: "css",
  }),
  addWebpackAlias({
    "@": path.join(__dirname, "src"),
    "@scss": path.join(__dirname, "src/assets/styles"),
  }),
  addPostcssPlugins([
    px2viewport({
      viewportWidth: 375,
    }),
  ])
);
