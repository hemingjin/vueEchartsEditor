const path = require("path");

module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/casb/'
    : '/',
  devServer: {
    port: 9527,
    proxy: {
      '/api': {
        // target: 'http://192.168.0.183:8103',
        target: 'http://192.168.0.173:8103',
        secure: true,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  productionSourceMap: false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, "src/assets/theme-variable.less")//需要自行添加
      ]
    }
  }
}

module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/casb/'
    : '/',
  devServer: {
    port: 8886,
    proxy: {
      '/api': {
        // target: 'http://192.168.0.183:8103',
        target: 'http://192.168.0.173:8103',
        secure: true,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  productionSourceMap: false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, "src/assets/style/theme-variable.less")//需要自行添加
      ]
    }
  }
}