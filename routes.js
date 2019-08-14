const routes = require('next-routes')

module.exports = routes()
  .add('index')
  .add('gallery')
  .add('painting', '/painting/:slug.:id', 'painting')
  .add('store')
  .add('contact')
  .add('about')
// Here you can new routes
// Read more in next-routes DOCS
