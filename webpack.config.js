const path = require("path");
const TerserWebpackPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"),
        clean: true
    },
    // 빌드 파일과 원본 파일 연결
    devtool: "source-map",
    // production, development 두 개가 있음
    mode: "development",
    devServer: {
        host: "localhost",
        port: 8080,
        open: true,
        watchFiles: 'index.html'
    },
    plugins: [
        new HtmlWebpackPlugin({
             title: "keyboard",
             template: "./index.html",
             inject: "body",
             favicon: "./favicon.ico"
        }),
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]

    },
    optimization: {
        minimizer: [
            new TerserWebpackPlugin(),
            new CssMinimizerWebpackPlugin()
        ]
    }
 } 