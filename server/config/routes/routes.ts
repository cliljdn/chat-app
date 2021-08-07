module.exports = (app: any) => {
     const server = require('http').createServer(app)
     const io = require('socket.io')(server)

     app.get('/', (req: object | any, res: object | any) => {
          io.on('message', (createApp: string) => {
               console.log(createApp)
          })

          res.json({
               message: 'Chat app',
          })
     })
}
