const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

const htmlWebpackPlugin = new HtmlWebpackPlugin({template: './src/App/index.html'})
const miniCssExtractPlugin = new MiniCssExtractPlugin({filename: "[name].css"})
const progressBarPlugin = new ProgressBarPlugin()

const babelLoader = {
    test: /\.(js|jsx)$/,
    use: 'babel-loader',
    exclude: /node_modules/
  }

const urlLoader = {
    test: /\.(png|jpg|gif)$/,
    use: [{
        loader :'url-loader',
        options : {
            mimetype : 'image/png',
            limit: 81920
        }
    }]
}

const fileLoader = {
    test: /\.(png|jpg|gif)$/,
    use: [{
        loader : 'file-loader',
        options : {
            // publicPath: 'assets',
            name: '[path][name].[ext]'
        }
    }]
}

const cssLoader = {
    test: /\.(s*)css$/,
    exclude : /node_modules/,
    use : [
        {
            loader : MiniCssExtractPlugin.loader
        },
        {
            loader : 'css-loader',
            options: {
                modules : false,
            }
        },
        {
            loader : 'postcss-loader'
        },
        {
            loader : 'sass-loader'
        },
    ]
}

const fontLoader =  { test: /\.(woff|woff2|eot|ttf)$/, loader: 'url-loader?limit=100000' }

module.exports = {
    name: 'web',
    target: 'web',
    mode: 'production',
    entry : {
        main: './src/App/App.js',
    },
    output: {
        // filename : 'bundle.js',
        filename: '[name]-bundle.[hash].js',
        chunkFilename: '[name].[hash].js',
        path : path.resolve(__dirname,'../build')
    },
    optimization: {
      },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
          src: path.resolve(__dirname, '../src/'),
        },
      },
    module : {
        rules: [ babelLoader, urlLoader, cssLoader, fontLoader ],
    },
    plugins : [ progressBarPlugin, htmlWebpackPlugin , miniCssExtractPlugin ]
}

