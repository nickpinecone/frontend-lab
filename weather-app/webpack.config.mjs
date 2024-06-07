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
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
        client: {
            logging: "warn",
        },
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