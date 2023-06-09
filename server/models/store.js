const mongoose = require('mongoose')

const storeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

const Store = new mongoose.model('Store', storeSchema)

module.exports = Store