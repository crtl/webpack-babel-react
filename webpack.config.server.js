const nodeExternals = require("webpack-node-externals");
const path = require("path");
const webpack = require("webpack");
const isProd = process.env.WEBPACK_MODE === "production";

const BabelLoader = {
    loader: "babel-loader",
    options: {
        presets: [
            ['@babel/preset-env', {
                "targets": "defaults"
            }],
            "@babel/preset-react",
        ]
    }
};

module.exports = {
    mode: "development",
    target: "node",
    entry: "./server/server.tsx",
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, "build/server"),
        filename: "server.js",
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.s?[a|c]ss$/,
                loader: "ignore-loader",
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'url-loader'],
            },
            // TSX config
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    BabelLoader,
                    {loader: "ts-loader"}
                ]
            },
            // JSX config
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    BabelLoader,
                ]
            },
        ]
    },
}
