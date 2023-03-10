const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname,dir)
}

module.exports = defineConfig({
  chainWebpack(config) {
    config.plugins.delete('prefetch')
    config.module
    .rule('svg')
    .exclude.add(resolve('src/icons'))
    .end()
    config.module
    .rule('icons')
    .test(/\.svg$/)
    .include.add(resolve('src/icons'))
    .end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
      symbolTd:'[name]'
    })
    .end()
  }
})