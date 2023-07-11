const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    clean: true,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
};
