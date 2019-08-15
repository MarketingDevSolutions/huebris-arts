const withCSS = require('@zeit/next-css')
const withOffline = require('next-offline')
const withPlugins = require('next-compose-plugins')
const path = require('path')

const config = {
  // Service Worker
  generateSw: false,
  devSwSrc: path.join(__dirname, './utils/serviceWorker/sw.js'),
  workboxOpts: {
    swDest: './service-worker.js',
    swSrc: path.join(__dirname, './utils/serviceWorker/sw.js'),
    globPatterns: ['**/*.{ico,html,js,json}'],
    globDirectory: './_next/static'
  }
}

module.exports = withPlugins(
  [
    withOffline(config),
    withCSS
  ],
  { distDir: 'build' }
)
