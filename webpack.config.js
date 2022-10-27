/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = function (env, argv) {
  const isProd = argv.mode === "production";
  const isDev = argv.mode === "development";

  return {
    mode: isDev ? "development" : "production",
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "[hash:8].chunks.js",
      asyncChunks: true,
    },
    devtool: isDev ? "source-map" : false,
    devServer: {
      // https: true, // TODO
      static: {
        directory: path.resolve(__dirname, "./dist"),
      },
      compress: true,
      port: 8080,
      client: {
        overlay: true,
        progress: true,
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/, // add |ts
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.s[ac]ss$/i,
          exclude: /node_modules/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: isDev
                    ? "[name]-[local]-[hash:base64:5]"
                    : "[hash:base64:6]",
                },
              },
            },
            "sass-loader",
          ],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./assets/index.html",
        minify: {
          collapseWhitespace: true,
          keepClosingSlash: true,
          removeComments: true,
        },
      }),
      new MiniCssExtractPlugin(),
    ],
  };
};
