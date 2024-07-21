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

    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        watchFiles: ["./src/**"],
        port: 8080,
        open: true,
        hot: true,
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
