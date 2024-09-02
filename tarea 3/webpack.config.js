const path = require('path');

module.exports = {
  mode: 'development', // Puedes cambiar a 'production' si estás construyendo para producción
  entry: {
    main: './app.js',
    secondary: './app2.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
    compress: true,
    port: 9000, // o el puerto que decidas usar
    open: true,
  },
};
