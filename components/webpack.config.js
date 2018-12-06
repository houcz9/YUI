const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var config = {
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }],
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss/,
        loader: ['style', 'css', 'scss']
      },
      {
        //将css文件匹配到先解析css 再将css插入到style中，写法从右往左写
        test:/\.less$/,
        //包依赖
        use:['style-loader','css-loader','less-loader'],
        exclude:/node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!less!css'
      }

    ]
  },
  // externals: {
  //   moment: 'moment'
  // },
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    } )
  ]
};

module.exports = [
  // merge(config, {
  //   entry: path.resolve(__dirname + '/index.js'),
  //   output: {
  //     filename: 'lc-components.min.js',
  //     libraryTarget: 'window',
  //     library: 'lc-components',
  //   }
  // }),
  merge(config, {
    entry: path.resolve(__dirname + '/index.js'),
    output: {
      filename: 'ydjy-ui.min.js',
      libraryTarget: 'umd',
      library: 'YDJYUI',
      umdNamedDefine: true
    }
  })
];
