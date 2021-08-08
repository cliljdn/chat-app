import express from 'express'
const router = express.Router()

router.get('/users/accounts', (req: express.Request, res: express.Response) => {
     try {
          const io = req.app.get('socketio')

          setInterval(() => {
               io.emit('emi1', 'tangina mo')
          }, 1000)

          io.on('disconnect', () => {
               console.log('user disconnected')
          })

          res.json('haha')
     } catch (err) {
          console.log(err)
     }
})

module.exports = router
