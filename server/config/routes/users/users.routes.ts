import express from 'express'
const router = express.Router()

router.get('/users/accounts', (req: express.Request, res: express.Response) => {
     try {
          const io = req.app.get('socketio')

          io.on('connection', (socket: any) => {
               setInterval(() => {
                    socket.emit('message', 'tangina mo')
               }, 1000)

               // socket.on('disconnect', () => {
               //      console.log('user disconnected')
               // })
          })

          res.json('haha')
     } catch (err) {
          console.log(err)
     }
})

module.exports = router
