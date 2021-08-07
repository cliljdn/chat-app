import express from 'express'

module.exports = (app: express.Application) => {
     app.use('/api/v1', require('./users/users.routes'))
}
