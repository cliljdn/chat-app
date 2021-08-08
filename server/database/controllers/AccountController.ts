import { Request, Response, NextFunction } from 'express'
import { Model, Schema, Types } from 'mongoose'

const Authenticate = require('./JwtController')

const AccountsModel = require('../Schemas/Accounts')
const bcrypt = require('bcrypt')
interface RequestBodyInterface {
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
               let { username, password }: RequestBodyInterface = req.body
               console.log(req.body)

               const ifExist = await this._model.findOne({ username: username })

               if (ifExist) throw new Error(`${username} already exists`)

               password = await bcrypt.hashSync(password, 10)

               await this._model.create({
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
               let { username, password }: RequestBodyInterface = req.body

               const account: any = await this._model.findOne({
                    username: username,
               })!
               if (!account) throw new Error(` ${username} Does not Exist`)

               let isPasswordCorrect = await bcrypt.compareSync(
                    password,
                    account?.password
               )
               if (!isPasswordCorrect) throw new Error('Wrong Password')

               let token = await Authenticate.sign({ id: account._id })
               account._doc.token = token

               res.status(200).json(account)
          } catch (err) {
               next(err)
          }
     }

     private registeredAccounts = async (
          req: Request,
          res: Response,
          next: NextFunction
     ) => {
          try {
               const { id }: { id: string } =
                    await Authenticate.isAuthenticated(req)

               const allAccounts = await this._model.find({
                    _id: { $ne: Types.ObjectId(id) },
               })

               res.status(200).json(allAccounts)
          } catch (err) {
               next(err)
          }
     }
}

module.exports = new AccountContoller(AccountsModel)
