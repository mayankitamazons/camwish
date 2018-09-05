var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-3']
                }
            }
        ]
    },

    devServer: {
        historyApiFallback: true,
         headers: { "Access-Control-Allow-Origin": "*" }
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:5000/api/'
        })
    }
}
