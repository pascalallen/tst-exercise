const path = require('path');

module.exports = {
    entry: './src/app.jsx',
    devtool: 'inline-source-map',
    devServer: {
        static: './public',
        historyApiFallback: true,
        hot: true,
        devMiddleware: { writeToDisk: true }
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public/assets'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};