const withSass = require('@zeit/next-sass')
const path = require('path')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const webpack = require('webpack');
// const merge = require('webpack-merge');
// const webpack = require('webpack');
//
// const WorkboxPlugin = require('workbox-webpack-plugin');
// const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = withSass({
  webpack: (config, {dev}) => {
    if(!dev){
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': process.env.NODE_ENV,
      })
      config.plugins.push(new SWPrecacheWebpackPlugin({
        cacheId: 'test-lighthouse',
        filepath: path.resolve('./static/sw.js'),
        staticFileGlobs: [
          'static/**/*'
        ],
        minify: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [{
          handler: 'fastest',
          urlPattern: /[.](png|jpg|css)/
        },{
          handler: 'networkFirst',
          urlPattern: /^http.*/
        }]
      }))
    }
    return config
  },
  publicRuntimeConfig: { // Will be available on both server and client
    API_URL: process.env.API_URL // Pass through env variables
  }
})
