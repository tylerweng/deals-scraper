var path = require('path')
var webpack = require('webpack')

var BUILD_DIR = path.resolve('dist')
var APP_DIR = path.resolve('./react-ui')
module.exports = {
    entry: './react-ui/index_react.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    }
}