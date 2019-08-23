const routes = require('next-routes')

module.exports = routes()
  .add('index')
  .add('painting', '/painting/:slug.:id', 'painting')
  .add('canvas', '/canvas/:slug.:id', 'canvas')
  .add('combo', '/combo/:slug.:id', 'combo')
  .add('store')
  .add('contact')
  .add('about')
// Here you can new routes
// Read more in next-routes DOCS
