module.exports = {
  module: {
    rules: [
      {
        test: /\.fbx$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[hash:8].[ext]', // Defina o diretório onde deseja salvar o arquivo gerado
            },
          },
        ],
      },
    ],
  },
};
