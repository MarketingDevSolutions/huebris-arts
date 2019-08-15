// server.js
const next = require('next')
const routes = require('./routes')
const { join } = require('path')
const url = require('url').URL
const app = next({ dev: false })
const handler = routes.getRequestHandler(app)

const port = process.env.PORT || 3000

// Without express
const { createServer } = require('http')
app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = url(req.url, true)
    const { pathname } = parsedUrl

    // handle GET request to /service-worker.js
    if (pathname === '/service-worker.js') {
      const filePath = join(__dirname, '.next', pathname)

      app.serveStatic(req, res, filePath)
    } else {
      handler(req, res, parsedUrl)
    }
  })
    .listen(port)
})
