const path = require("path");

module.exports = {
    devtool: "inline-source-maps",
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
};