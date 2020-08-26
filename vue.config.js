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
  }
};
