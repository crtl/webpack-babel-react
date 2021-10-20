const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack')

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
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "build"),
    },
    resolve: {
        extensions: ['.js', '.jsx', ".ts", ".tsx"],
    },
    module: {
        rules: [
            // SASS config
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
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
    plugins: [
        new HtmlWebpackPlugin({
            inject: "body",
            hash: isProd,
            template: "public/index.html",
        }),
    ],
    devServer: {
        allowedHosts: 'auto',
    },
}
