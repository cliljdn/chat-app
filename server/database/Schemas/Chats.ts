export {}
const mongoose = require('mongoose')
const schemaNames = require('../../config/Constants/SchemaNames')

const referenceToAccounts: object = {
     type: mongoose.Schema.Types.ObjectId,
     ref: schemaNames.accounts,
}

const ChatSchema: object = new mongoose.Schema(
     {
          message: stringRequired,
          sender: referenceToAccounts,
          receiver: referenceToAccounts,
          seen: { type: Boolean, default: false },
     },
     { timestamps: true }
)

module.exports = mongoose.model(schemaNames.chats, ChatSchema)
