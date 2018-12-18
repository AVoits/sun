const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');



function getBabelOptions() {
    return {
        babelrc: false,
        presets: [
            "@babel/react",
            "@babel/typescript",
            ["@babel/env", { "modules": false }]
        ],
        plugins: [
            "@babel/proposal-class-properties",
            "@babel/proposal-object-rest-spread",
            'react-hot-loader/babel',
            'babel-plugin-styled-components',
        ]
    };
}


function commonRules() {
    return [
        {
            test: /\.[tj]sx?$/,
            loader: 'babel-loader',
            options: getBabelOptions(),
            exclude: /node_modules/,
        },
        {
            test: /\.js$/,
            use: ["source-map-loader"],
        },
        {
            test: /\.css$/,
            loaders: ['css-loader'],
        },
    ]
}


module.exports = {
    entry: path.join(__dirname, "./src/index.ts"),
    output: {
        path: path.join(__dirname, "./build"),
        filename: 'bundle.js'
    },

    module: {
        rules: commonRules(),
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.jsx', ".json"]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(['dist'], {}),
    ]
};