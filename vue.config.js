module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,
  lintOnSave: false,
  pwa: {
    workboxOptions: {
      skipWaiting: true
    },
    name: "BostonHacks",
    themeColor: "#282561"
  },
  transpileDependencies: ["vuetify"]
};
