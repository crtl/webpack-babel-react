const nodeExternals = require("webpack-node-externals");
const path = require("path");
const webpack = require("webpack");
const isProd = process.env.WEBPACK_MODE === "production";

module.exports = {
    mode: "development",
    target: "node",
    entry: "./server/server.jsx",
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, "build/server"),
        filename: "server.js",
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.s?[a|c]ss$/,
                loader: "ignore-loader",
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-react",
                            '@babel/preset-env',
                        ]
                    }
                }
            }
        ]
    },
}
