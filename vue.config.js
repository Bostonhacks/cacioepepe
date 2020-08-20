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
    },
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        chunks: "all",
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];
              return `npm.${packageName.replace("@", "")}`;
            }
          }
        }
      }
    }
  }
};
