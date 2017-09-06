const path = require('path');

module.exports = (params) => ({
    entry: 'src/pages/index-page-server.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'server/index-page-server.js',
        publicPath: '/'
    },
    // externals: {
    //     react: 'React',
    //     'react-dom': 'ReactDOM'
    // },
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
                use: nulloader
            }
        ]
    }
});
