const express = require('express')
const app = express()

const server = require('http').createServer(app)
const io = require('socket.io')(server)

require('./config/express')(app)
require('./config/routes/routes')(app)

// setup server
const PORT = process.env.PORT || 4040

// Socket.io

io.on('connection', (client: any) => {
     console.log('Client connected...')

     client.on('createApp', (payload: any) => {
          console.log(payload)
     })
})

server.listen(PORT, () => console.log(`server is running on port:${PORT}`))
