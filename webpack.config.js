const webpack = require("webpack");
const path = require("path");

const config = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "build/js/"),
        publicPath: "/public/assets/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "public"
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react", "stage-2"]
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    watch: true
};

module.exports = config;
