/*eslint-disable no-var */
var fs = require('fs')
var path = require('path')
var webpack = require('webpack')
var bourbon = require('bourbon');


module.exports = {

    devtool: 'inline-source-map',

    entry: './app.js',

    output: {
        path: __dirname + '/__build__',
        filename: 'app.js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/ui/__build__/'
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['react-html-attrs'],
            },
        }, {
            test: /\.html$/,
            loader: 'file?name=[path][name].[ext]&context=./src/main',
        }, {
            test: /\.scss$/,
            loader: `style!css!sass?includePaths[]=${bourbon.includePaths}`,
        }, {
            test: /\.(png|jpg|woff|ttf|woff2)$/,
            loader: 'url?limit=100000',
        }, {
            test: /\.json$/,
            loader: 'json',
        }]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ],

    query: {
        presets: [
            'babel-preset-stage-0',
        ].map(require.resolve),
    }

}