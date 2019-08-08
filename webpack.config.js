const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const config = () => ({
    entry: { 
        main: path.resolve(__dirname, 'src/index.js'), 
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
    },
    module: {
        rules: [
            /*
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },*/
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader',
            },
            {
                test: /\.(css|scss|sass)$/,
                exclude: /\.module\.(css|scss|sass)$/,
                use: [
                    // env && env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                        },
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.module\.(css|scss|sass)$/,
                use: [
                    // env && env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            modules: true,
                        },
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: [ 
            '.js' 
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
    },
    plugins: () => {

        return [
            new CleanWebpackPlugin(), 
            new webpack.ProgressPlugin(), 
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src/index.html') }), 
        ];
    },
});

module.exports = config;