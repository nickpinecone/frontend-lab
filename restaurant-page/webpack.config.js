const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/index.js",
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },

    devtool: "inline-source-map",
    mode: "development",
    devServer: {
        watchFiles: ["./src/**"],
        port: 8080,
        open: true,
        hot: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "Restaurant Page",
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
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
};