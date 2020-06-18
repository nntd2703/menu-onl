const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [ {
            test: /\.(sass|css)$/,
            loaders: ['style-loader', 'css-loader']
        }, {
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            exclude: /node_modules/,
            loader: 'file-loader',
            options: {
                limit: 1024,
                name: '[name].[ext]',
                publicPath: 'public/assets/',
                outputPath: 'public/assets/'
            }
        },{
            test: /\.(jpg|png|svg)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 25000
                }
            }
        }]
    },
    plugins: [
        // nó sẽ clean thư mục`dist/js & dist/css` trước khi build
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['public/js', 'public/css'],
        }),
        // nó sẽ minify file css
        new MiniCssExtractPlugin({
            filename: "styles/bundle.css"
        }),
        new HtmlWebpackPlugin({
            title: 'Webpack React Example',
            inject: false,
            template: require('html-webpack-template'),
            meta: [{
                name: 'description',
                content: 'A better default template for html-webpack-plugin.'
            }],
            mobile: true,
            lang: 'en-US',
            bodyHtmlSnippet: '<div id="root"></div>',
            filename: 'index.html'
        })
    ]
});
