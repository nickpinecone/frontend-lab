import path from "path";
import HtmlWebpack from "html-webpack-plugin";

const __dirname = import.meta.dirname;

export default {
    entry: "./src/script.js",
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
        new HtmlWebpack({
            title: "Weather App",
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
}