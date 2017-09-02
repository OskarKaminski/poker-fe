const webpack = require('webpack');
const path = require('path');

const config = {
    entry: [
        path.resolve('./src/index.js'),
    ],
    output: {
        filename: 'bundle.js',
        publicPath: '/dist/',
        path: path.resolve('./dist'),
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            Component: path.resolve(__dirname, 'src/components'),
            Atom: path.resolve(__dirname, 'src/components/Atoms'),
            Molecule: path.resolve(__dirname, 'src/components/Molecules'),
            Organism: path.resolve(__dirname, 'src/components/Organisms'),
            Page: path.resolve(__dirname, 'src/pages'),
            DL: path.resolve(__dirname, 'src/domain-logic'),
            Helper: path.resolve(__dirname, 'src/helpers'),
            Adapter: path.resolve(__dirname, 'src/adapters'),
            State: path.resolve(__dirname, 'src/state'),
            History: path.resolve(__dirname, 'src/state/history')
        },
    },
    module: {
        rules: [
            {
                test: /(\.js|\.jsx)$/,
                exclude: /node_modules/,
                use: [{loader: 'babel-loader'}],
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            includePaths: ['./src/styles'],
                        }},
                ],
            },
            {
                test: /\.html/,
                use: [{loader: 'html-loader'}],
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                    {
                        loader: 'img-loader',
                        options: {
                            progressive: true,
                        },
                    },
                ],
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: [{loader: 'file-loader'}],
            },
            {
                test: /\.json$/,
                use: [{loader: 'json-loader'}],
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'application/font-woff',
                        },
                    },
                ],
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'application/octet-stream',
                        },
                    },
                ],
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'image/svg+xml',
                        },
                    },
                ],
            },
            {
                test: /\.mp3$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ],
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        compress: true,
        port: 8080,
        quiet: true,
        historyApiFallback: true,
        inline: true,
        disableHostCheck: true,
        host: '0.0.0.0'
    }
};

module.exports = config;