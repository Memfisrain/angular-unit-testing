const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {

  },
  output: {

  },

  resolveLoader: {
    modulesDirectories: ["node_modules"],
    moduleTemplates: ["*", "*-loader"],
    extensions: [".js", ".loader.js"]
  },

  module: {
    loaders: [
      {test: /\.js$/, include: path.resolve(__dirname, "spec"), loader: "babel"}
    ],
    plugins: [

    ]
  }
};