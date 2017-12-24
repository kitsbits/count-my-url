const webpack = require("webpack");
const path = require("path");

const config = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "build/js/"),
        publicPath: "/public/assets/js/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "public"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    },
    watch: true
};

module.exports = config;
