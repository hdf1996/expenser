const withSass = require('@zeit/next-sass')
const path = require('path')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
// const merge = require('webpack-merge');
// const webpack = require('webpack');
//
// const WorkboxPlugin = require('workbox-webpack-plugin');
// const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = withSass({
  webpack: (config, {dev}) => {
    if(!dev){
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
  }
})
