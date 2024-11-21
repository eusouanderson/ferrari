const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('fbx')
      .test(/\.fbx$/)  // Expressão regular para detectar arquivos .fbx
      .use('file-loader')  // Usar o file-loader
      .loader('file-loader')
      .options({
        name: '[name].[hash:8].[ext]', // Nome do arquivo final com hash
      });
  },
});
