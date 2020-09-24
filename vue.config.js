// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;
module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,
  lintOnSave: false,
  pwa: {
    workboxOptions: {
      skipWaiting: true
    },
    name: "BostonHacks",
    themeColor: "#0098ff",
    msTileColor: "#FFFFFF",
    appleMobileWebAppStatusBarStyle: "black-translucent",
    manifestOptions: {
      background_color: "#0098ff"
    }
  },
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    externals: {
      moment: "moment"
    }
    // uncomment this line to analyze build size
    // plugins: [new BundleAnalyzerPlugin()]
  }
};
