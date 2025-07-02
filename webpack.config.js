const path = require('path');

module.exports = {
  entry: './src/main.ts',  // ← point directly at your TypeScript “main.ts”
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    // so you can do `import './foo'` and have Webpack pick up .ts
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.bmd$/,
        use: 'raw-loader',    // or file-loader if you want binary files
      },
    ],
  },
};
