const path = require('path');

module.exports = {
    // entry chinh de bundle
    entry: ['./src/index.js', './src/styles/bundle.css'],
    output: {
        filename: 'js/index.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [{
            // các file .js or .jsx được loader bởi 'babel-loader'
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: [/node_modules/] // nó sẽ không tìm trong folder /node_modules
        }]
    }
}