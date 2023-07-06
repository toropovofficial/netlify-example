const path = require('path');
const PugPlugin = require('pug-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', 'scss']
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: '**/*',
    //       context: path.resolve(__dirname, 'src', 'assets'),
    //       to: './assets',
    //     },
    //   ],
    // }),
    new PugPlugin({
      pretty: true,
      js: {
        // output filename of extracted JS file from source script
        filename: 'assets/js/[name].[contenthash:8].js',
      },
      // ☝🏽 Format HTML (only in dev mode)
      css: {
        // output filename of extracted CSS file from source style
        filename: 'assets/css/[name].[contenthash:8].css',
      },
    }),
    new HtmlWebpackPlugin({
      template: './static/index.html',
      filename: 'index.html',
      minify: {
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/style-[hash].css',
    }),
  ],
    module: {
        rules: [
          {
            test: /\.ts$/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-typescript", "@babel/preset-env"],
              },
            },
          },
          {
            test: /\.pug$/,
            loader: PugPlugin.loader, // Pug loader
          },
        {
          // To use images on pug files:
          test: /\.(png|jpg|jpeg|ico)/,
          type: 'asset/resource',
          generator: {
            filename: 'assets/img/[name].[hash:8][ext]'
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
        ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 4000,
  },
};


// const path = require('path');
// const PugPlugin = require('pug-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: {
//     index: './src/index.ts',
//     //☝🏽 Insert your PUG HTML files here
//   },
//   mode: 'development',
//   output: {
//     path: path.join(__dirname, 'dist/'),
//     publicPath: '/',
//     // filename: 'assets/js/[name].[contenthash:8].js'
//     //☝🏽 Output filename of files with hash for unique id
//   },
//   resolve: {
//     extensions: ['.js', '.jsx', '.ts', '.scss'],
//   },
//   plugins: [
//     new PugPlugin({
//       pretty: true,
//       //☝🏽 Format HTML (only in dev mode)
//       // extractCss: {
//       //   filename: 'assets/css/[name].[contenthash:8].css'
//       // }
//     }),
//     new HtmlWebpackPlugin({ template: './static/index.html' })
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.pug$/,
//         use: [
//           'html-loader',
//           'pug-html-loader'
//         ]
//       },
      // {
      //   test: /\.ts$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: ["@babel/preset-typescript", "@babel/preset-env"],
      //     },
      //   },
      // },
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: [
      //     // Creates `style` nodes from JS strings
      //     "style-loader",
      //     // Translates CSS into CommonJS
      //     "css-loader",
      //     // Compiles Sass to CSS
      //     "sass-loader",
      //   ],
      // },
//       {
//         // To use images on pug files:
//         test: /\.(png|jpg|jpeg|ico)/,
//         type: 'asset/resource',
//         generator: {
//           filename: 'assets/img/[name].[hash:8][ext]'
//         }
//       },
//       {
//         // To use fonts on pug files:
//         test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
//         type: 'asset/resource',
//         generator: {
//           filename: 'assets/fonts/[name][ext][query]'
//         }
//       }
//     ]
//   },
//   devServer: {
//     static: {
//       directory: path.join(__dirname, 'dist')
//     },
//     port: 3000,
//     watchFiles: {
//       paths: ['src/**/*.*', 'assets/scss/**/*.*'],
//       //☝🏽 Enables HMR in these folders
//       options: {
//         usePolling: true
//       }
//     }
//   },
//   stats: 'errors-only'
//   //☝🏽 For a cleaner dev-server run
// };