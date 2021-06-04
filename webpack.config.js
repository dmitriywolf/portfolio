const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = {}) => {

  const {mode = 'development'} = env;

  const isProd = mode === 'production';
  const isDev = mode === 'development';

  const getStyleLoaders = () => {
    return [
      isProd ? {loader: MiniCssExtractPlugin.loader, options: {publicPath: ''}} : 'style-loader',
      'css-loader'
    ]
  };

  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        title: 'Portfolio: Dmitriy.Dev',
        template: 'public/index.html'
      }),
    ];

    if (isProd) {
      plugins.push(new MiniCssExtractPlugin({
        filename: 'main-[hash:8].css'
      }))
    }
    return plugins;
  };

  return {
    mode: isProd ? 'production' : isDev && 'development',
    entry: './src/index.jsx',

    output: {
      filename: isProd ? 'main-[hash:8].js' : undefined
    },

    module: {
      rules: [
        // Babel
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },

        // Loading images
        {
          test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'img',
                name: '[name]-[sha1:hash:7].[ext]'
              }
            }
          ]
        },

        // Loading SVG
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'img',
                name: '[name].[ext]'
              }
            }
          ]
        },

        // Loading fonts
        {
          test: /\.(ttf|otf|eot|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'fonts',
                name: '[name].[ext]'
              }
            }
          ]
        },

        // Loading CSS
        {
          test: /\.css$/,
          use: getStyleLoaders()
        },

        // Loading SASS/SCSS
        {
          test: /\.(s[ac]ss)$/,
          use: [...getStyleLoaders(), 'sass-loader']
        }
      ]
    },

    plugins: getPlugins(),

    devServer: {
      open: true
    }
  }
};
