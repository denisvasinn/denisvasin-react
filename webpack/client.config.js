const path = require('path');

const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = (params) => ({
    entry: 'src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        publicPath: '/'
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.styl$/,
                use: ExtractTextWebpackPlugin.extract([
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: Boolean(params.production)
                        }
                    },
                    'autoprefixer-loader',
                    'stylus-loader'
                ])
            }
        ]
    },
    plugins: [new ExtractTextWebpackPlugin('build/style.css')]
});
