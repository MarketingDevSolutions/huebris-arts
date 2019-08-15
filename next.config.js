const css = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

module.exports = withPlugins(
  [css],
  {
    webpack: (config) => {
      config.plugins.push(
        new SWPrecacheWebpackPlugin({
          verbose: true,
          staticFileGlobsIgnorePatterns: [/\.next\//],
          runtimeCaching: [
            {
              handler: 'networkFirst',
              urlPattern: /^https?.*/
            }
          ]
        })
      )

      return config
    }
  }
)
