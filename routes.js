const routes = require('next-routes')
                                               
module.exports = routes()                           
.add('index')                                       
.add('painting', '/painting/:slug.:id', 'painting')                         
.add('store')                                       
.add('contact')                                       
//Here you can new routes
//Read more in next-routes DOCS                     
