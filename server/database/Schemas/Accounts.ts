const mongoose = require('mongoose')
const schemaNames = require('../../config/Constants/SchemaNames')

const stringRequired: object = {
     type: String,
     require: true,
}

const AccountsSchema: object = new mongoose.Schema(
     {
          username: stringRequired,
          password: stringRequired,
          contacts: [this],
     },
     { timestamps: true }
)

module.exports = mongoose.model(schemaNames.accounts, AccountsSchema)
