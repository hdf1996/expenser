const { createServer } = require('http');
const { parse } = require('url');
const path = require('path')
const next = require('next')
const route = require('path-match')()
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()
const PORT = process.env.PORT || 3000
app.prepare().then(_ => {
  const server = createServer((req, res) => {
    const { pathname, query } = parse(req.url, true)
    if (req.url === '/sw.js') {
      app.serveStatic(req, res, path.resolve('./static/sw.js'))
    } else if(match = route('/credit_card_movements/:id')(pathname)) {
      app.render(req, res, '/credit_card_movements/show', { id: match.id })
    } else {
      handle(req, res)
    }
  })

  server.listen(PORT, err => {
    if (err) throw err
    console.log(`> App running on port ${PORT}`)
  })
})
