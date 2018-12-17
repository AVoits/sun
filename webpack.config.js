const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');


function getBabelOptions() {
    return {
        cacheDirectory: true,
        babelrc: false,
        presets: [
            '@babel/env',
            '@babel/react',
            '@babel/typescript',
        ],
        plugins: [
            'react-hot-loader/babel',
            'babel-plugin-styled-components',
            'babel-plugin-styled-components',
        ]
    };
}


function commonLoaders() {
    return [
        {
            test: /\.[tj]sx?$/,
            loader: 'babel-loader',
            options: getBabelOptions(),
            exclude: /node_modules/,
        },
    ]
}


module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, "/dist"),
        publicPath: '/',
        filename: 'bundle.js'
    },

    module: {
        rules: commonLoaders(),
    },
    resolve: {
        extensions: [ '*', '.ts', '.tsx', '.js', '.jsx']
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(['dist'], {}),
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    },

};