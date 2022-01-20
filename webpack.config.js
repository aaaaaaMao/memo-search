const path = require('path')

const { VueLoaderPlugin } = require('vue-loader')
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    clean: true
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    historyApiFallback: true,
    overlay: true
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },  
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, "src/crx"),
        to: path.resolve(__dirname, "dist")
      }, {
        from: path.resolve(__dirname, "html"),
        to: path.resolve(__dirname, "dist"),
        globOptions: {
          ignore: ['**/index.html']
        }
      }, {
        from: path.resolve(__dirname, "images"),
        to: path.resolve(__dirname, "dist/images"),
        globOptions: {
          ignore: ['**/preview.png']
        }
      }]
    })
  ]
}