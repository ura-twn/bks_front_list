// webpack.config.js
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/main.jsx',
    output: { path: path.join(__dirname, 'dist'), filename: 'bundle.js' },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}