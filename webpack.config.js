const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = () => {
    const env = dotenv.config().parsed;
    // reduce it to a nice object, the same as before
    console.log('env', env);
    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {});
    
    // env helpers
    const isProduction = env && env.production !== undefined;
    console.log('isProduction', isProduction);

    return {
        entry: {
            app:'./src/index.js',
            vendor: ["jquery",],
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].bundle.js',
            chunkFilename: '[name].bundle.js',// format name của bundle
            publicPath: ''
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        optimization: {
            minimize: false,
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        name: 'vendor',
                        chunks: chunk => chunk.name == 'main',
                        reuseExistingChunk: true,
                        priority: 1,
                        test: module =>
                            /[\\/]node_modules[\\/]/.test(module.context),
                        minChunks: 1,
                        minSize: 0,
                    },
                },
            },
            runtimeChunk: true,
        },
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: [/node_modules/]
            }, {
                test: /\.(scss|css)$/,
                loaders: ['style-loader', 'css-loader']
            }, {
                test: /\.(woff|woff2|eot|ttf)$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                    limit: 1024,
                    name: '[name].[ext]',
                    publicPath: '/assets/fonts',
                    outputPath: '/assets/fonts'
                }
            },{
                test: /\.(jpg|png|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: '/assets/images',
                        outputPath: '/assets/images'
                    }
                }
            }
            ]
        },
        performance: {
            hints: false
        },
        node: {
            fs: 'empty'
        },
        mode: isProduction ? 'production' : 'development',
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            publicPath: 'http://localhost:3000/',
            compress: true,
            port: 3000,
            hot: true,
            historyApiFallback: true,
          },
        plugins: [
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: ['dist/fonts', 'dist/images'],
            }),
            new webpack.DefinePlugin(envKeys),
            new HtmlWebpackPlugin({
                template: 'public/index.html',
                filename: 'index.html',
                inject: 'body'
            })
        ]
    }
};