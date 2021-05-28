const server = require('pushstate-server')

server.start({
  port: 5020,
  directory: './dist'
})