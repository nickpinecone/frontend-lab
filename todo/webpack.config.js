const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: "inline-source-map",
    mode: "development",

    entry: {
        main: "./src/index.js",
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "Todo",
            template: "./src/template.html",
            filename: "index.html",
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};
