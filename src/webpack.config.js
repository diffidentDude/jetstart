const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path');

module.exports = {
    entry: './main/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};