const path = require('path');
const LicenseInfoWebpackPlugin = require('license-info-webpack-plugin').default;
const TerserPlugin = require('terser-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const plugins = [new VueLoaderPlugin()];
  if (isProduction) {
    plugins.push(
      new LicenseInfoWebpackPlugin({
        glob: '{LICENSE,license,License}*',
      })
    );
  }
  return {
    context: path.resolve(__dirname, 'src'),
    entry: {
      bundle: './index.js',
    },
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: '[name].[contentHash].js',
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          include: path.resolve(__dirname, 'src'),
          use: 'vue-loader',
        },
        {
          test: /\.css$/,
          include: path.resolve(__dirname, 'src'),
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.js$/,
          include: path.resolve(__dirname, 'src'),
          use: 'babel-loader',
        },
      ],
    },
    plugins,
    optimization: isProduction
      ? {
          minimizer: [
            new TerserPlugin({
              terserOptions: {
                output: {
                  comments: /^\**!|@preserve|@license|@cc_on/,
                },
              },
            }),
          ],
        }
      : {},
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      historyApiFallback: true,
    },
  };
};
