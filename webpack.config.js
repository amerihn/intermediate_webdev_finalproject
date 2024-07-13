// STEP 3: Webpack (phan nay bi loi chua thuc hien xong, chuyen sang IMPROVE SEO)
// npm install webpack webpack-cli html-webpack-plugin --save-dev
// Create folders src and dist, move file html-css-js-favicon to src
// Create webpack.config.js

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/script.js",
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            favicon: "./src/favicon.ico",
        })
    ],
    output: {
        clean: true,
        libraryTarget: 'window'
    },
    module: {
        rules: [
            {
                test: /\.(css)$/i,
                type: "asset/resource",
                generator: {
                    filename: "[name][ext]",
                },
            },
        ],
    },
};

//run cm: 
// npx webpack
// compiled successfully


// STEP 4
//change /src/index.html use require
