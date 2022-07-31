const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const SitemapPlugin = require('sitemap-webpack-plugin').default;


const paths = [
    {
      path: '/',
      lastmod: '2022-07-31',
      priority: 1,
      changefreq: 'yearly'
    },
    {
      path: '/weather_forecast/',
      lastmod: '2022-07-31',
      priority: 0.8,
      changefreq: 'never'
    },
  ];

module.exports = {
    // mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/weather_forecast"),
        // path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use:["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|mp4|ico|jpe?g|gif)$/,
                include: /src/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'images/',
                      publicPath: 'images/'
                    }
                  }
                ]
              },
        ]
    },

    
    plugins: [
        new HtmlWebpackPlugin (
            {
                template: "./src/index.html",
                favicon: "./src/img/favicon.ico"
            }
        ),
        new SitemapPlugin({
            base: 'https://doszhan-m.github.io/weather_forecast/',
            paths,
            options: {
              filename: 'sitemap.xml'
            }
          })
    ]
}