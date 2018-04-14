const withSass = require('@zeit/next-sass')

const merge = require('webpack-merge');
const webpack = require('webpack');

const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = withSass({
  webpack: (config) => {
    config.plugins.push(
      new WebpackPwaManifest({
        name: 'Money Converter',
        short_name: 'money-converter',
        description: 'A cool money converter!',
        background_color: '#00c6ff',
        theme_color: '#00c6ff',
        icons: [
          {
            src: 'https://hdf1986.github.io/money-converter/icon_128x128.ea4e09e0a110e8b409a87b9ec2ae8702.png',
            sizes: [96, 128, 192, 256, 384, 512]
          }
        ]
      })
    );
    config.plugins.push(
      new WorkboxPlugin({
        clientsClaim: true,
        skipWaiting: true
      })
    )
    // config.plugins.push(
    //   new webpack.optimize.CommonsChunkPlugin({
    //     name: 'manifest'
    //   })
    // )

    return config;
  }
})
