const path = require('path');
const DevServer = require('webpack-dev-server');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                //SCSS LOADER
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            //publicPath: '../dist',
                            //hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                //IMAGE LOADER
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img',
                            useRelativePath: false
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 80
                            }
                        }
                    }

                ]
            },
            {
                // HTML LOADER
                test: /\.html$/,
                use: ['html-loader']
                // ,loader: 'html-loader',
                // options: {
                //     //attrs: [':data-src'],
                //     removeComments: true,
                //     collapseWhitespace: true,
                //     minimize: false,
                // }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};