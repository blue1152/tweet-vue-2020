module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
           @import "@/assets/scss/constant.scss";
        `
      }
    }
  },
  publicPath: "./",
};