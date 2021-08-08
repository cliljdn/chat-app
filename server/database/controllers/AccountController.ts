import { Request, Response, NextFunction } from 'express'
import { Model, Schema } from 'mongoose'
const AccountsModel = require('../Schemas/Accounts')
const bcrypt = require('bcrypt')
interface AccountInterface {
     username: string
     password: string
}

class AccountContoller {
     private _model: Model<Schema>
     constructor(model: Model<Schema>) {
          this._model = model
     }
     private register = async (
          req: Request,
          res: Response,
          next: NextFunction
     ) => {
          try {
               let { username, password }: AccountInterface = req.body
               console.log(req.body)

               const ifExist = await this._model.findOne({ username: username })

               if (ifExist) throw new Error(`${username} already exists`)

               password = await bcrypt.hashSync(password, 10)

               const isCreated = await this._model.create({
                    username,
                    password,
               })

               res.status(200).json('created')
          } catch (err) {
               next(err)
          }
     }

     private login = async (
          req: Request,
          res: Response,
          next: NextFunction
     ) => {
          try {
               let { username, password }: AccountInterface = req.body

               const ifExist = await this._model.findOne({ username: username })

               if (ifExist) throw new Error(`${username} already exists`)

               password = await bcrypt.hashSync(password, 10)

               const isCreated = await this._model.create({
                    username,
                    password,
               })

               console.log(isCreated)

               res.status(200).json('created')
          } catch (err) {
               next(err)
          }
     }
}

module.exports = new AccountContoller(AccountsModel)
