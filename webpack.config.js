let htmlPlugin = require("html-webpack-plugin");
let ExtractText = require('extract-text-webpack-plugin');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin')

let HTML = new htmlPlugin({
  template: __dirname + "/views/index.ejs",
  filename: "index.ejs"
})


module.exports = {

    entry: './public/js/index.js',
    output: {
      path: __dirname + "/build",
      filename: './main_build.js'
    },
    module: {
      // loaders: [
      //     {
      //       test: /\.js$/,
      //       include: __dirname + '/public/js',
      //       loader: 'babel-loader'
      //     }
      // ]

      loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            include: __dirname + '/public/js',
            exclude: /node-modules/,
            options:{
              presets: ['es2015', "stage-2"]
            }
          },
          {
            test: /\.css$/,
            loader: ExtractText.extract("css-loader")

          }
      ]
    },
    plugins: [
     HTML,
     new ExtractText('myStyle.css'),
     new UglifyJsPlugin({
      sourceMap: false,
      mangle: false
    })
    ]


}


/// https://medium.com/@kimberleycook/intro-to-webpack-1d035a47028d
//https://www.smashingmagazine.com/2017/02/a-detailed-introduction-to-webpack/
