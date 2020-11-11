const path = require('path');
require('webpack');
module.exports = {
    entry: './src/App.jsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: [ '.js', '.jsx']
    }
};