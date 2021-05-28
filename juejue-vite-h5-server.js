const server = require('pushstate-server')

server.start({
  port: 5021,
  directory: './dist'
})
