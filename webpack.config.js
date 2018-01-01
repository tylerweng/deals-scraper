var path = require('path')
var webpack = require('webpack')
var HTMLWebPackPlugin = require("html-webpack-plugin")

var BUILD_DIR = path.resolve('dist')
var APP_DIR = path.resolve('./react-ui')
module.exports = {
    entry: APP_DIR + '/index_react.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
        proxy: {
            "/api": {
                target: "http://localhost:8081",
                secure: false
            }
        }
    },
    resolve:{
        extensions: [".js", ".jsx"]
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.html$/, loader: "html-loader"}
        ]
    },
    plugins: [new HTMLWebPackPlugin({
        template: "./static/index.html",
        filename: "./index.html"
    })]
}