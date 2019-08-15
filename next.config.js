const withCSS = require('@zeit/next-css')
const withOffline = require('next-offline')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins(
  [
    withOffline,
    withCSS
  ],
  { distDir: 'build' }
)
