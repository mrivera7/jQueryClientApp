const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const dotenv = require('dotenv');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const config = () => ({
    entry: [
        { main: path.join(__dirname, 'src/index.js') }
    ],
    output: {
        
    },
    module: {},
    resolve: {},
    devServer: {
        contentBase: './build',
    },
    plugins: () => {

        return [new CleanWebpackPlugin(), ];
    },
});