module.exports = {
  mode: "production",
  entry: {
    "card-editor": "./card-editor.jsx",
    "card-container-editor": "./card-container-editor.jsx",
    "container-editor": "./container-editor.jsx"
  },
  output: {
    path: __dirname,
    filename: "[name].build.js"
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  }
}